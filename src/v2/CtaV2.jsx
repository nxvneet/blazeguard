import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../anim.js'

export default function CtaV2() {
  const [email, setEmail] = useState('')
  return (
    <section className="v2cta" id="v2-cta">
      <div className="v2cta__bg">
        <img src="/images/v2-hero.jpg" alt="" aria-hidden="true" />
        <div className="v2cta__scrim" />
      </div>
      <motion.div className="v2-container v2cta__inner" variants={stagger(0, 0.12)} initial="hidden" whileInView="show" viewport={viewportOnce}>
        <motion.h2 className="v2cta__title v2-display" variants={fadeUp}>Got a project? Let’s talk!</motion.h2>
        <motion.p className="v2cta__sub" variants={fadeUp}>
          Share a few details and our fire-safety team will get back to you with the right specification.
        </motion.p>
        <motion.form
          className="v2cta__form"
          variants={fadeUp}
          onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:info@blazeguard.com?subject=Project enquiry&body=${encodeURIComponent(email)}` }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="v2cta__send" aria-label="Send">↗</button>
        </motion.form>
      </motion.div>
    </section>
  )
}
