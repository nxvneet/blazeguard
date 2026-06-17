import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce, easeOut } from '../anim.js'
import './About.css'

/* Word-by-word colour wipe to mimic the template's scroll-driven text reveal. */
const PARAGRAPH =
  'Blazeguard brings German-engineered fire protection excellence to the Gulf region through advanced fire-resistant glass technology — setting new safety standards for Qatar, the UAE and Saudi Arabia’s most critical infrastructure.'

export default function About() {
  const words = PARAGRAPH.split(' ')
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <motion.span
          className="eyebrow"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          Who We Are
        </motion.span>

        <motion.h2
          className="about__text"
          variants={stagger(0, 0.025)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0.16 },
                show: { opacity: 1, transition: { duration: 0.5, ease: easeOut } },
              }}
            >
              {w}{' '}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </section>
  )
}
