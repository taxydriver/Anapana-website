import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const portfolioItems = [
  {
    title: "E-commerce Recommender",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Conversational AI Agent",
    category: "Natural Language",
    image: "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Video Generation Pipeline",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1591314222191-61fad06f4428?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Content Discovery System",
    category: "Recommendation",
    image: "https://images.unsplash.com/photo-1762279388979-6a430989284c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Sentiment Analysis Engine",
    category: "Text Processing",
    image: "https://images.unsplash.com/photo-1747726776587-06e07379aa1b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Automated Video Editing",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1759914514194-b5883244e683?auto=format&fit=crop&w=1000&q=80",
  },
];

export function Portfolio() {
  return (
    <section className="section portfolio">
      <div className="content-width">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow pill">Portfolio</span>
          <h2>Cinematic systems in the wild</h2>
          <p>Snapshots from shipped work — precise, quiet, and production-ready.</p>
        </motion.div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.title}
              className="portfolio-card glass"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="portfolio-image">
                <ImageWithFallback src={item.image} alt={item.title} className="portfolio-img" />
                <div className="portfolio-overlay" />
                <div className="portfolio-caption">
                  <span className="pill tag">{item.category}</span>
                  <h4>{item.title}</h4>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
