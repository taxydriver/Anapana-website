import { motion } from "motion/react";
import { Heart, Eye, Compass, Leaf } from "lucide-react";

const principles = [
  {
    icon: Heart,
    title: "Intentional",
    description: "Every line serves a purpose. No noise, no vanity features.",
  },
  {
    icon: Eye,
    title: "Mindful",
    description: "Interfaces that respect attention and augment human connection.",
  },
  {
    icon: Compass,
    title: "Ethical",
    description: "Trustworthy data, transparent decisions, and fair outcomes.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Systems tuned for efficiency, longevity, and calm operations.",
  },
];

export function Philosophy() {
  return (
    <section className="section philosophy">
      <div className="content-width philosophy-grid">
        <motion.div
          className="philosophy-lead glass"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow pill">Our approach</span>
          <h2>Building with breath</h2>
          <p>
            FilmForge is built with awareness, not chaos. Every render pipeline, every prompt, every API call — deliberate. Guided by precision, empathy, and the discipline to keep things simple.
          </p>
          <div className="quote">
            <p>"Like breath, like code — conscious, deliberate, alive."</p>
            <span>— The Anapana.ai way</span>
          </div>
        </motion.div>

        <div className="principles">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              className="principle-card glass"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="principle-icon pill">
                <principle.icon size={18} strokeWidth={1.6} />
              </div>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
