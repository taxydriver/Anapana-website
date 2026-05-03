import { motion } from "motion/react";
import { Brain, Wand2, Zap, Activity, Scissors, Camera } from "lucide-react";

const features = [
  {
    name: "Scene analysis",
    description: "Parses mood, pacing, and story beats from your input.",
    icon: Brain,
  },
  {
    name: "Prompt engineering",
    description: "Crafts camera, lighting, and motion descriptors automatically.",
    icon: Wand2,
  },
  {
    name: "GPU rendering",
    description: "Distributes render jobs across GPU workers via ComfyUI.",
    icon: Zap,
  },
  {
    name: "Progress tracking",
    description: "Real-time job status with live progress updates.",
    icon: Activity,
  },
  {
    name: "Rough cuts",
    description: "Assembles rendered frames into rough-cut sequences.",
    icon: Scissors,
  },
  {
    name: "Stills pipeline",
    description: "Generates high-res stills alongside video for review.",
    icon: Camera,
  },
];

export function Capabilities() {
  return (
    <section className="capabilities">
      <div className="capabilities-header">
        <motion.div
          className="eyebrow pill"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What it does
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
        >
          Built for cinematic precision.
        </motion.h2>
      </div>

      <div className="content-width">
        <motion.div
          className="capabilities-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.name}
                className="cap-card glass"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="pill" style={{ background: "rgba(31, 154, 216, 0.08)", borderColor: "var(--accent)", color: "var(--accent)" }}>
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h4>{feature.name}</h4>
                <p>{feature.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
