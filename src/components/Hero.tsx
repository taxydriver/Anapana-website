import { motion } from "motion/react";
import { Film, ArrowRight, Clapperboard } from "lucide-react";

const heroTags = ["Scene analysis", "GPU rendering", "Prompt generation"];

export function Hero() {
  const handleScrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-backdrop">
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <motion.div
          className="hero-breath"
          animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="content-width hero-layout">
        <div className="hero-headline">
          <motion.div
            className="eyebrow pill"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Film size={16} strokeWidth={1.5} />
            <span>AI Filmmaking Studio</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Turn creative intent into cinematic frames.
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            FilmForge is an AI-powered pipeline that reads your script, generates cinematic prompts, and renders video — frame by deliberate frame.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.a
              href="/filmforge"
              className="btn primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Try FilmForge
              <ArrowRight size={16} strokeWidth={1.5} />
            </motion.a>
            <motion.button
              className="btn ghost"
              onClick={handleScrollToHowItWorks}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              See how it works
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-tags"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {heroTags.map((tag) => (
              <span key={tag} className="pill tag">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-card glass"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          <div className="hero-card-header">
            <div className="pill pulse">
              <Clapperboard size={16} strokeWidth={1.5} />
              <span>Render Preview</span>
            </div>
          </div>
          <div className="hero-card-body">
            <div>
              <p className="hero-card-label">Job Status</p>
              <h3>Scene → Prompts → Render</h3>
              <p>
                Your script is being analyzed. Creative intent is transformed into cinematic instructions. GPU workers are rendering frames.
              </p>
            </div>
            <div className="hero-meta">
              <div>
                <span className="meta-label">Progress</span>
                <strong>72%</strong>
              </div>
              <div>
                <span className="meta-label">Frames</span>
                <strong>240/240</strong>
              </div>
              <div>
                <span className="meta-label">Status</span>
                <strong>Rendering</strong>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
