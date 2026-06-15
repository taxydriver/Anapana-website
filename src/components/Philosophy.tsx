const tenets = [
  { mk: "i", title: "Intentional", body: "Every shot serves the scene. No vanity features, no noise — only what the work needs." },
  { mk: "ii", title: "Mindful", body: "The system tells the truth about where it failed. No fake-poetry, no hiding the seams." },
  { mk: "iii", title: "Compassionate", body: "The filmmaker is at the centre — never a funnel. We measure whether the work moves you, not your time on a page." },
  { mk: "iv", title: "Patient", body: "Everything changes; nothing is rushed. Built to last and to deepen, not to spike and fade." },
];

export function Philosophy() {
  return (
    <section className="dna" id="breath">
      <div className="wrap">
        <div className="dna-head">
          <h2 className="display reveal">Built with breath.</h2>
          <p className="breathline reveal">
            Anapana means the breath — the steadying of attention. We build a studio the way we'd want
            a film made: deliberate, honest, and patient enough to take the long view.
          </p>
        </div>
        <div className="tenets reveal">
          {tenets.map((t) => (
            <div className="tenet" key={t.mk}>
              <span className="mk">{t.mk}</span>
              <h4>{t.title}</h4>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
