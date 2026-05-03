import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-backdrop">
        <div className="cta-glow" />
      </div>

      <div className="content-width cta-content">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to create your film?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Try FilmForge — no setup required.
        </motion.p>

        <motion.a
          href="/filmforge"
          className="btn primary"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          Open FilmForge
          <ArrowRight size={16} strokeWidth={1.5} />
        </motion.a>
      </div>
    </section>
  );
}
