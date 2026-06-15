const steps = [
  { n: "01", title: "Intend", body: "The scene's feeling, rhythm, and what stays hidden are recorded before a single frame exists." },
  { n: "02", title: "Render", body: "The imagery is generated — the motor, not the mind. Quality matters, but it's downstream of taste." },
  { n: "03", title: "Observe", body: "The system reads back what was really made, in cinematic terms — not pixels, but pressure and pace." },
  { n: "04", title: "Critique", body: "Intended versus observed, beat by beat. Did the feeling survive, weaken, or break?" },
  { n: "05", title: "Re-cut", body: "You act on the note. Reorder, retime, hold a silence — and the judgment updates with you." },
];

export function Products() {
  return (
    <section className="block" id="how">
      <div className="wrap">
        <div className="slug eyebrow reveal">What makes it different</div>
        <h2 className="display reveal">It has an opinion about its own work.</h2>
        <p className="intro reveal">
          Most tools generate, then stop. FilmForge plans a scene, renders it, and then{" "}
          <em>watches what actually came back</em> — measuring it against what it meant. Where the
          dread escalated. Where a cut landed flat. It says so, in a director's voice, and changes
          the smallest thing that matters.
        </p>
        <div className="loop reveal">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
