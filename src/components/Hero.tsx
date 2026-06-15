import { useEffect, useRef } from "react";

export function Hero() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len);
    requestAnimationFrame(() => {
      path.style.transition = "stroke-dashoffset 2.2s ease 0.4s";
      path.style.strokeDashoffset = "0";
    });
  }, []);

  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div className="reveal in">
          <div className="slug">Anapana · A mindful AI studio</div>
          <h1 className="display">
            Anyone can generate a frame.
            <span className="turn">Directing one is the hard part.</span>
          </h1>
          <p className="lede">
            FilmForge is a cinematic mind, not a render button. It takes a single scene and makes the
            judgments a director, DP, and editor would — why each shot exists, when to cut, what to
            withhold — then tells you, in plain language, where the feeling survived and where it broke.
          </p>
          <div className="hero-cta">
            <a href="#invite" className="btn btn-primary">Request a beta invite</a>
            <a href="#how" className="btn btn-ghost">See how it thinks</a>
          </div>
        </div>

        <aside className="note-card reveal in">
          <div className="slug"><span className="pulse" />Maya · editorial note</div>
          <p className="quote">
            I held the silence <span className="em">two beats</span> past the line. The realization
            should land in the quiet — not on the dialogue. If it feels slow, that slowness is the point.
          </p>
          <div className="curve-block">
            <svg className="curve-svg" viewBox="0 0 420 74" preserveAspectRatio="none" aria-hidden="true">
              <path
                ref={pathRef}
                d="M0,58 C60,56 80,40 130,38 C175,36 185,20 230,18 C262,17 270,46 300,52 C330,58 360,12 420,8"
                fill="none"
                stroke="#6E807B"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <circle cx="230" cy="18" r="2.6" fill="#C99A5B" />
              <circle cx="300" cy="52" r="2.6" fill="#C99A5B" />
            </svg>
            <div className="curve-labels">
              <span>Beat 3 · dread holds</span>
              <span>Beat 4 · the turn</span>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
