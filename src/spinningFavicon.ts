// Animates the tab favicon: draws the Anapana spiral onto a canvas each frame
// and swaps the favicon href. Browsers render favicons statically and ignore
// animation inside the SVG, so the motion has to be driven from JS. The spiral
// is drawn procedurally (not from the baked SVG) so we can do more than rotate —
// it can retract to its center, breathe, rock, and surge.

const SIZE = 64
const COLOR = '#E07A1F'

// Spiral geometry — kept in sync with public/anapana.svg (the static fallback).
const N = 200
const TURNS = 1.9
const R_INNER = 4.5
const R_OUTER = 24.5
const W_MAX = 4.6
const THETA_MAX = TURNS * 2 * Math.PI

// Precompute the two edges of the tapered ribbon, centered on the origin.
const outer: Array<[number, number]> = []
const inner: Array<[number, number]> = []
for (let i = 0; i <= N; i++) {
  const t = i / N
  const r = R_INNER + (R_OUTER - R_INNER) * t
  const hw = W_MAX * (0.22 + 0.78 * t) * Math.pow(Math.sin(Math.PI * t), 0.45)
  const ang = THETA_MAX * t
  const cos = Math.cos(ang)
  const sin = Math.sin(ang)
  outer.push([(r + hw) * cos, (r + hw) * sin])
  inner.push([(r - hw) * cos, (r - hw) * sin])
}

// Build the filled spiral, revealed from the center tip outward up to `reveal`.
function spiralPath(reveal: number): Path2D {
  const k = Math.max(2, Math.floor(reveal * N))
  const p = new Path2D()
  p.moveTo(outer[0][0], outer[0][1])
  for (let i = 1; i <= k; i++) p.lineTo(outer[i][0], outer[i][1])
  for (let i = k; i >= 0; i--) p.lineTo(inner[i][0], inner[i][1])
  p.closePath()
  return p
}

const TWO_PI = Math.PI * 2
const sin2 = (x: number) => Math.sin(x) ** 2

// Base turn applied in every pattern, so motion never fully stops.
const BASE_SPEED = TWO_PI / 14 // radians per second (~one slow turn / 14s)

// Each pattern modulates the base spin (speed), overall scale, and how much of
// the spiral is drawn (reveal). Every effect returns to neutral (factor 1 / 1 /
// full) at lt = 0 and lt = duration, so patterns hand off without a visible jump.
type Pattern = {
  name: string
  duration: number // seconds
  speed?: (lt: number, d: number) => number
  scale?: (lt: number, d: number) => number
  reveal?: (lt: number, d: number) => number
}

const PATTERNS: Pattern[] = [
  { name: 'drift', duration: 7 },
  {
    name: 'breathe',
    duration: 8,
    scale: (lt, d) => 1 - 0.2 * sin2((TWO_PI * lt) / d), // two soft breaths
  },
  {
    name: 'unfurl',
    duration: 9,
    reveal: (lt, d) => 1 - 0.85 * sin2((Math.PI * lt) / d), // retract to center & redraw
  },
  {
    name: 'rock',
    duration: 8,
    speed: (lt, d) => 1 + 2.2 * Math.sin((TWO_PI * 2 * lt) / d), // sways forward/back
  },
  {
    name: 'surge',
    duration: 7,
    speed: (lt, d) => 1 + 1.8 * sin2((TWO_PI * lt) / d), // rhythmic speed pulses
  },
]

export function startSpinningFavicon() {
  // Respect users who ask for reduced motion — leave the static icon in place.
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

  const canvas = document.createElement('canvas')
  canvas.width = SIZE
  canvas.height = SIZE
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }

  let angle = 0
  let patternIndex = 0
  let patternElapsed = 0
  let prev = 0
  let sinceDraw = 0

  const render = (scale: number, reveal: number) => {
    ctx.clearRect(0, 0, SIZE, SIZE)
    ctx.save()
    ctx.translate(SIZE / 2, SIZE / 2)
    ctx.rotate(angle)
    ctx.scale(scale, scale)
    ctx.fillStyle = COLOR
    ctx.fill(spiralPath(reveal))
    ctx.restore()
    link!.type = 'image/png'
    link!.href = canvas.toDataURL('image/png')
  }

  const frame = (now: number) => {
    const t = now / 1000
    if (!prev) prev = t
    let dt = t - prev
    prev = t
    if (dt > 0.1) dt = 0.1 // clamp after the tab was backgrounded

    const p = PATTERNS[patternIndex]
    const speedFactor = p.speed ? p.speed(patternElapsed, p.duration) : 1
    angle += BASE_SPEED * speedFactor * dt
    patternElapsed += dt
    if (patternElapsed >= p.duration) {
      patternElapsed = 0
      patternIndex = (patternIndex + 1) % PATTERNS.length
    }

    sinceDraw += dt
    if (sinceDraw >= 0.05) {
      // refresh the favicon ~20x/sec
      sinceDraw = 0
      const cur = PATTERNS[patternIndex]
      const scale = cur.scale ? cur.scale(patternElapsed, cur.duration) : 1
      const reveal = cur.reveal ? cur.reveal(patternElapsed, cur.duration) : 1
      render(scale, reveal)
    }
    requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}
