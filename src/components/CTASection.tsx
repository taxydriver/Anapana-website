import { useState } from "react";

type State = "idle" | "loading" | "done" | "error";

export function CTASection() {
  const [state, setState] = useState<State>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, note }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setState("error");
      } else {
        setState("done");
      }
    } catch {
      setErrorMsg("Network error — please try again.");
      setState("error");
    }
  }

  return (
    <section className="close" id="invite">
      <div className="wrap">
        <div className="slug reveal">Beta · small and hand-picked</div>
        <h2 className="display reveal">Spend a session with it. Tell us the truth.</h2>
        <p className="reveal">
          We're inviting a handful of filmmakers to direct a scene with FilmForge and say, plainly,
          whether it understands cinema. If that's you, ask for a seat.
        </p>

        {state === "done" ? (
          <p className="reveal invite-thanks">
            Got it. We'll be in touch.
          </p>
        ) : (
          <form className="invite-form reveal" onSubmit={submit}>
            <div className="invite-row">
              <div className="invite-field">
                <label htmlFor="inv-name" className="slug">Name</label>
                <input
                  id="inv-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={state === "loading"}
                />
              </div>
              <div className="invite-field">
                <label htmlFor="inv-email" className="slug">Email</label>
                <input
                  id="inv-email"
                  type="email"
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={state === "loading"}
                />
              </div>
            </div>
            <div className="invite-field">
              <label htmlFor="inv-note" className="slug">What you make <span style={{ color: "var(--ink-faint)" }}>— optional</span></label>
              <textarea
                id="inv-note"
                placeholder="A line about your work — genre, project, what you'd bring to the test."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                disabled={state === "loading"}
              />
            </div>
            {state === "error" && (
              <p className="invite-error">{errorMsg}</p>
            )}
            <button type="submit" className="btn btn-primary" disabled={state === "loading"}>
              {state === "loading" ? "Sending…" : "Request a beta invite"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
