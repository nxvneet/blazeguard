import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../anim.js'

const COLS = [
  { head: 'Pages', links: ['Home', 'About', 'Services', 'Projects', 'Insights', 'Contact'] },
  { head: 'Solutions', links: ['Fire-resistant glazing', 'Fire doors', 'Escape-route glazing', 'Testing & certification'] },
  { head: 'Standards', links: ['EI-30', 'EI-60', 'EI-90', 'German-engineered'] },
]

export default function FooterV2() {
  return (
    <footer className="v2footer">
      <div className="v2-container">
        <motion.div className="v2footer__top" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="v2footer__brand">
            <img src="/images/blazeguard-logo-dark.png" alt="Blazeguard®" />
            <p>German-engineered fire-protection glass for the Gulf — protection and clarity, without compromise.</p>
          </div>
          {COLS.map((c) => (
            <div className="v2footer__col" key={c.head}>
              <span className="v2footer__head">{c.head}</span>
              <ul>{c.links.map((l) => <li key={l}><a href="#v2-top">{l}</a></li>)}</ul>
            </div>
          ))}
          <div className="v2footer__col">
            <span className="v2footer__head">Contact</span>
            <address className="v2footer__address">
              Doha · Dubai · Riyadh<br />
              <a href="mailto:info@blazeguard.com">info@blazeguard.com</a><br />
              +974 4000 0000
            </address>
            <div className="v2footer__social">
              <a href="#v2-top" aria-label="LinkedIn">in</a>
              <a href="#v2-top" aria-label="X">X</a>
              <a href="#v2-top" aria-label="Instagram">ig</a>
            </div>
          </div>
        </motion.div>

        <div className="v2footer__wordmark">BLAZEGUARD</div>

        <div className="v2footer__bottom">
          <span>© Aria Holding 2025. All rights reserved.</span>
          <span>German-Engineered Fire Protection · Qatar · UAE · Saudi Arabia</span>
        </div>
      </div>
    </footer>
  )
}
