import { motion } from "motion/react";
import { Bot, Film, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    name: "Duku",
    description:
      "Context-aware AI agents that negotiate, coordinate, and improve with each interaction.",
    icon: Bot,
    accent: "linear-gradient(120deg, #69b7ff, #3f7ed6)",
    image:
      "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?auto=format&fit=crop&w=1000&q=80",
    meta: ["Autonomous", "Secure", "Realtime"],
  },
  {
    name: "FilmForge",
    description: "Generative video workflows that turn creative intent into cinematic frames.",
    icon: Film,
    accent: "linear-gradient(120deg, #75f0e1, #4c9de2)",
    image:
      "https://images.unsplash.com/photo-1591314222191-61fad06f4428?auto=format&fit=crop&w=1000&q=80",
    meta: ["Story-driven", "Pipelines", "GPU-ready"],
  },
  {
    name: "Goldminer",
    description:
      "Recommender systems that surface signal from noise and deliver precise suggestions.",
    icon: TrendingUp,
    accent: "linear-gradient(120deg, #7ea6ff, #9dd0ff)",
    image:
      "https://images.unsplash.com/photo-1762279388979-6a430989284c?auto=format&fit=crop&w=1000&q=80",
    meta: ["Predictive", "Adaptive", "Explainable"],
  },
];

export function Products() {
  return (
    <section className="section products">
      <div className="content-width">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow pill">Products</span>
          <h2>Purpose-built for quiet excellence</h2>
          <p>Three tools, one studio — engineered end-to-end with cinematic calm.</p>
        </motion.div>

        <div className="product-grid">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              className="product-card glass"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="product-top" style={{ backgroundImage: product.accent }}>
                <div className="product-top-line" />
              </div>

              <div className="product-body">
                <div className="product-icon pill">
                  <product.icon size={18} strokeWidth={1.6} />
                </div>
                <div className="product-text">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <div className="product-meta">
                  {product.meta.map((item) => (
                    <span key={item} className="pill tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="product-visual">
                <div className="product-glow" style={{ backgroundImage: product.accent }} />
                <ImageWithFallback src={product.image} alt={product.name} className="product-img" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
