import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../anim.js'

const CARDS = [
  { n: '01', title: 'Certified performance', body: 'Every system is furnace-tested and documented to EI-30, EI-60 or EI-90 — verifiable proof of life-safety for authorities and insurers.' },
  { n: '02', title: 'German engineering', body: 'Precision-engineered fire-resistant glass with superior sound insulation and weight advantages over traditional protection materials.' },
  { n: '03', title: 'Clarity without compromise', body: 'Hold back flame and smoke while keeping daylight, sightlines and the architectural intent of the space fully intact.' },
  { n: '04', title: 'End-to-end delivery', body: 'From first risk assessment to certified handover, one accountable team manages specification, testing and installation.' },
]

export default function AdvantagesV2() {
  return (
    <section className="v2adv">
      <div className="v2-container v2adv__grid">
        <div className="v2adv__left">
          <div className="v2adv__sticky">
            <motion.h2 className="v2adv__title v2-h2" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
              Safety engineered into every pane
            </motion.h2>
            <motion.p className="v2adv__sub" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
              Why specifiers across Qatar, the UAE and Saudi Arabia trust Blazeguard to protect
              their most critical buildings.
            </motion.p>
            <motion.div className="v2adv__guidance" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
              <span className="v2adv__guidance-label">Expert guidance</span>
              <p>Benefit from a dedicated fire-safety team offering tailored specification advice to bring your design vision to life — safely.</p>
            </motion.div>
          </div>
        </div>

        <motion.div className="v2adv__cards" variants={stagger(0, 0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-8%' }}>
          {CARDS.map((c) => (
            <motion.article className="v2advcard" key={c.n} variants={fadeUp}>
              <span className="v2advcard__n">{c.n}</span>
              <h3 className="v2advcard__title">{c.title}</h3>
              <p className="v2advcard__body">{c.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
