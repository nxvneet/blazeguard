import { motion } from 'framer-motion'
import { wordReveal, stagger, easeOut } from '../anim.js'

const TITLE_1 = 'Engineering'
const TITLE_2 = 'fire-safe spaces'

function Words({ text, delay }) {
  return (
    <motion.span className="v2hero__line" variants={stagger(delay, 0.08)} initial="hidden" animate="show">
      {text.split(' ').map((w, i) => (
        <span className="v2word" key={i}>
          <motion.span className="v2word__in" variants={wordReveal}>{w}</motion.span>
        </span>
      ))}
    </motion.span>
  )
}

export default function HeroV2() {
  return (
    <section className="v2hero" id="v2-top">
      <div className="v2hero__bg">
        <motion.img
          src="/images/v2-hero.jpg"
          alt="Fire-resistant glass glowing in a concrete architectural hall"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: easeOut }}
        />
        <div className="v2hero__scrim" />
      </div>

      <div className="v2-container v2hero__inner">
        <h1 className="v2hero__title v2-display">
          <Words text={TITLE_1} delay={0.3} />
          <Words text={TITLE_2} delay={0.5} />
        </h1>

        <motion.div
          className="v2hero__bottom"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.95 }}
        >
          <p className="v2hero__sub">
            Every building deserves to be safe. Blazeguard brings German-engineered,
            EI-30 to EI-90 rated fire-resistant glass to the Gulf — protection and clarity,
            without compromise.
          </p>
          <a href="#v2-cta" className="v2-btn v2-btn-light">
            Get in touch <span className="ico">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
