import { motion } from "motion/react";
import { Brain, Layers, Zap, Target, Workflow, Shield } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Machine learning",
    description: "Architecting models and evaluations that stay stable beyond the demo.",
  },
  {
    icon: Layers,
    title: "System design",
    description: "Resilient data pipelines, observability, and deployment without drama.",
  },
  {
    icon: Zap,
    title: "Real-time loops",
    description: "Streaming inference and closed feedback loops with mindful constraints.",
  },
  {
    icon: Target,
    title: "Personalization",
    description: "Tasteful recommenders that balance context, safety, and novelty.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "From ingestion to orchestration — shipping agents that just work.",
  },
  {
    icon: Shield,
    title: "Ethical guardrails",
    description: "Privacy, fairness, and transparency woven in from first commit.",
  },
];

export function Capabilities() {
  return (
    <section className="section capabilities">
      <div className="content-width">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow pill">Capabilities</span>
          <h2>Every layer, held gently</h2>
          <p>From research to rollout — precision systems with a calm heartbeat.</p>
        </motion.div>

        <div className="cap-grid">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              className="cap-card glass"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="cap-icon pill">
                <capability.icon size={16} strokeWidth={1.6} />
              </div>
              <div>
                <h4>{capability.title}</h4>
                <p>{capability.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
