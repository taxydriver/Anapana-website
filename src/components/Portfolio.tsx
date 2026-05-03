import { motion } from "motion/react";
import { Code2, Server, Boxes, Database, Cloud, Database as StorageIcon } from "lucide-react";

const techStack = [
  {
    name: "Next.js",
    category: "Frontend",
    description: "React framework for the UI",
    icon: Code2,
  },
  {
    name: "FastAPI",
    category: "Backend",
    description: "Python API for job orchestration",
    icon: Server,
  },
  {
    name: "ComfyUI",
    category: "Rendering",
    description: "GPU-powered image generation",
    icon: Boxes,
  },
  {
    name: "SQLite + WAL",
    category: "Database",
    description: "Persistent job state and metadata",
    icon: Database,
  },
  {
    name: "Vast.ai / RunPod",
    category: "GPU Fleet",
    description: "On-demand GPU workers",
    icon: Cloud,
  },
  {
    name: "Supabase",
    category: "Storage",
    description: "Media storage and CDN",
    icon: StorageIcon,
  },
];

export function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <motion.div
          className="eyebrow pill"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Under the hood
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
        >
          Production-grade architecture.
        </motion.h2>
      </div>

      <div className="content-width">
        <motion.div
          className="portfolio-grid"
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
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.article
                key={tech.name}
                className="portfolio-card glass"
                variants={{
                  hidden: { opacity: 0, scale: 0.96 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="tech-card-content">
                  <div className="pill" style={{ background: "rgba(107, 209, 198, 0.12)", borderColor: "var(--accent-2)", color: "var(--accent-2)" }}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h4>{tech.name}</h4>
                  <span className="tech-category">{tech.category}</span>
                  <p>{tech.description}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
