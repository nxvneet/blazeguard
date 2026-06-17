import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../anim.js'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta__bg">
        <img src="/images/mesh-texture.png" alt="" aria-hidden="true" />
      </div>
      <motion.div
        className="container cta__inner"
        variants={stagger(0, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.span className="eyebrow" variants={fadeUp}>Let’s Talk Fire Safety</motion.span>
        <motion.h2 className="cta__title" variants={fadeUp}>
          Protect What Matters Most
        </motion.h2>
        <motion.p className="cta__copy" variants={fadeUp}>
          From escape-route glazing in high-rise towers to fire doors in industrial facilities,
          our fire-resistant glass systems create secure barriers against fire and smoke —
          enabling safer evacuations and facilitating firefighting operations. Let’s engineer
          the right protection for your next project.
        </motion.p>
        <motion.a className="btn btn-fire cta__btn" href="mailto:info@blazeguard.com" variants={fadeUp}>
          Book a Consultation <span className="arrow">↗</span>
        </motion.a>
      </motion.div>
    </section>
  )
}
