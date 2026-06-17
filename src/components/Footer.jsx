import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../anim.js'
import './Footer.css'

const NAV = ['About', 'Solutions', 'Projects', 'Stories', 'Certification', 'Contact']
const SOCIAL = ['LinkedIn', 'Instagram', 'X (Twitter)', 'YouTube']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer__cta"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h2 className="footer__cta-title">Let’s Build Fire-Safe Spaces, Together</h2>
          <p className="footer__cta-copy">
            Whether you’re specifying glazing for a new tower or upgrading an existing facility,
            Blazeguard delivers German-engineered fire protection — tested, certified and built
            to keep people safe across the Gulf.
          </p>
        </motion.div>

        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" className="footer__logo" aria-label="Blazeguard — home">
              <img src="/images/blazeguard-logo-dark.png" alt="Blazeguard®" />
            </a>
            <address className="footer__address">
              An Aria Holding Company<br />
              Doha · Dubai · Riyadh<br />
              <a href="mailto:info@blazeguard.com">info@blazeguard.com</a><br />
              +974 4000 0000
            </address>
          </div>

          <div className="footer__col">
            <span className="footer__heading">Navigation</span>
            <ul>
              {NAV.map((n) => (
                <li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <span className="footer__heading">Socials</span>
            <ul>
              {SOCIAL.map((s) => (
                <li key={s}><a href="#top">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <span className="footer__heading">Certifications</span>
            <ul>
              <li>EI-30 Rated</li>
              <li>EI-60 Rated</li>
              <li>EI-90 Rated</li>
              <li>German-Engineered</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© Aria Holding {/* year */}2025. All rights reserved.</span>
          <span>German-Engineered Fire Protection · Qatar · UAE · Saudi Arabia</span>
        </div>
      </div>
    </footer>
  )
}
