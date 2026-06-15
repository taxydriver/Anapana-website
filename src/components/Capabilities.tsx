const rows = [
  {
    slug: "Editorial mode",
    title: "Reshape the feeling, not the files.",
    body: "Reorder cuts, stretch a silence, push a reveal later — and watch the scene change. No re-rendering, no waiting, no cost. Pure cinematic reasoning.",
  },
  {
    slug: "Ask why",
    title: "Every cut has a reason.",
    body: "Point at any moment and Maya explains the choice in plain words — never a schema, never a debug panel. The thinking, made legible.",
  },
  {
    slug: "Honest",
    title: "Sometimes she's unsure — and says so.",
    body: "“I’m not fully convinced by this cut.” A collaborator that hides its doubt isn’t one you can trust. Maya tells the truth about where the work is still soft.",
  },
];

export function Capabilities() {
  return (
    <section className="block" id="maya">
      <div className="wrap">
        <div className="slug eyebrow reveal">The collaborator</div>
        <h2 className="display reveal">Maya — a director you can talk to.</h2>
        <p className="intro reveal">
          One cinematic intelligence across the whole scene. She doesn't show you the machinery. She
          tells you what she decided, and why — the way an editor sitting beside you would.
        </p>
        <div className="rows reveal">
          {rows.map((r) => (
            <div className="row" key={r.slug}>
              <div className="slug">{r.slug}</div>
              <div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
