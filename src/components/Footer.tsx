import { motion } from "motion/react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="content-width">
        <div className="footer-grid">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>Anapana.ai</h3>
            <p>AI filmmaking tools, built with deliberate precision.</p>
            <div className="footer-social">
              {[{ icon: Mail, label: "Email" }, { icon: Github, label: "GitHub" }, { icon: Linkedin, label: "LinkedIn" }, { icon: Twitter, label: "Twitter" }].map(
                (social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    className="social-pill pill"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    aria-label={social.label}
                  >
                    <social.icon size={16} strokeWidth={1.5} />
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <h4>Products</h4>
            <a href="/filmforge">FilmForge</a>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Philosophy</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span>© {currentYear} Anapana.ai. Breathe. Build. Ship.</span>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
