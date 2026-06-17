import { motion } from 'framer-motion'
import { wordReveal, stagger, easeOut } from '../anim.js'
import './Hero.css'

const HEADING = 'Delivering German-Engineered Fire Protection Across the Gulf'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <img src="/images/fire-glass-panels.jpg" alt="Fire-resistant glass panels against flames" />
        <div className="hero__overlay" />
      </div>

      <div className="hero__inner container">
        <motion.span
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.3 }}
        >
          Blazeguard® · Fire-Resistant Glass Systems
        </motion.span>

        <motion.h1
          className="hero__title"
          variants={stagger(0.45, 0.08)}
          initial="hidden"
          animate="show"
        >
          {HEADING.split(' ').map((w, i) => (
            <span className="word" key={i}>
              <motion.span className="word__inner" variants={wordReveal}>
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          className="hero__row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 1.1 }}
        >
          <p className="hero__sub">
            Advanced EI-30, EI-60 and EI-90 rated fire-safety glass setting new life-safety
            standards for Qatar, the UAE and Saudi Arabia’s most critical infrastructure.
          </p>
          <a href="#contact" className="btn btn-fire">
            Book a Consultation <span className="arrow">↗</span>
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span>Scroll</span>
        <span className="hero__scroll-line" />
      </motion.a>
    </section>
  )
}
