import { motion } from "motion/react";
import { PenLine, Sparkles, Clapperboard } from "lucide-react";

const steps = [
  {
    number: 1,
    name: "Write",
    icon: PenLine,
    description: "Describe your scene. FilmForge reads creative intent, mood, pacing, and character.",
  },
  {
    number: 2,
    name: "Generate",
    icon: Sparkles,
    description: "The AI engine crafts cinematic prompts — camera movement, lighting, composition, motion.",
  },
  {
    number: 3,
    name: "Render",
    icon: Clapperboard,
    description: "GPU workers execute the pipeline. Frames are rendered, stitched, and delivered.",
  },
];

export function Products() {
  return (
    <section className="products" id="how-it-works">
      <div className="products-header">
        <motion.div
          className="eyebrow pill"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          The pipeline
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
        >
          From intent to image, in three steps.
        </motion.h2>
      </div>

      <div className="content-width">
        <motion.div
          className="products-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {steps.map((step) => {
            
            return (
              <motion.article
                key={step.name}
                className="product-card glass"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
              >
                <div className="product-top" style={{ background: "linear-gradient(135deg, #1f9ad8 0%, #0d7ab3 100%)" }} />
                <div className="product-body">
                  <div className="step-number">{step.number}</div>
                  <h3>{step.name}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
