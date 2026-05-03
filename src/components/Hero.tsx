import { motion } from "motion/react";
import { Sparkles, Wind, Play } from "lucide-react";

const heroTags = ["AI agents", "Recommenders", "Generative video"];

export function Hero() {
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
          <Sparkles size={16} strokeWidth={1.5} />
          <span>Mindful AI studio</span>
        </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Breathe. Build. Ship.
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Anapana.ai is a mindful, cinematic AI studio crafting agents, recommender systems,
            and generative video tools with deliberate precision.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.button
              className="btn primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore work
              <Play size={16} strokeWidth={1.5} />
            </motion.button>
            <motion.button
              className="btn ghost"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Mindful AI philosophy
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
              <Wind size={16} strokeWidth={1.5} />
              <span>Calm Systems</span>
            </div>
            <div className="hero-spectrum" />
          </div>
          <div className="hero-card-body">
            <div>
              <p className="hero-card-label">Cinematic engineering</p>
              <h3>Agents that listen. Pipelines that flow.</h3>
              <p>
                Built end-to-end: research, prototyping, deployment. Every release breathes with
                clarity and intent.
              </p>
            </div>
            <div className="hero-meta">
              <div>
                <span className="meta-label">Latency</span>
                <strong>Real-time</strong>
              </div>
              <div>
                <span className="meta-label">Craft</span>
                <strong>Precision</strong>
              </div>
              <div>
                <span className="meta-label">Mood</span>
                <strong>Zen</strong>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
