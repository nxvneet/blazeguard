import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../anim.js'
import './Process.css'

const STEPS = [
  {
    n: '01',
    title: 'Consultation & Risk Assessment',
    body: 'Every project begins with a deep understanding of the building, its occupancy and its fire-safety obligations. We assess escape routes, compartmentation needs and the local code so every recommendation is grounded in real-world risk.',
  },
  {
    n: '02',
    title: 'Specification & Compliance',
    body: 'We translate the assessment into a precise specification — defining the required EI-30, EI-60 or EI-90 classification, frame systems and detailing that satisfy Qatar, UAE and Saudi regulatory standards.',
  },
  {
    n: '03',
    title: 'Glass Engineering',
    body: 'Our German-engineered fire-resistant glass is configured for each opening, balancing fire performance with sound insulation, weight and optical clarity — without compromising the architectural vision.',
  },
  {
    n: '04',
    title: 'Fire & Smoke Testing',
    body: 'Systems are validated against extreme temperatures in accredited furnace testing, proving their ability to hold back flame and smoke for the full rated duration and create a secure barrier for evacuation.',
  },
  {
    n: '05',
    title: 'Certification',
    body: 'We deliver comprehensive testing and certification that documents fire-resistance performance and regulatory compliance — giving authorities, insurers and owners verifiable proof of life-safety.',
  },
  {
    n: '06',
    title: 'Expert Installation',
    body: 'Specialist crews install fire doors, escape-route glazing and structural fire-glass with proper sealing against fire and smoke propagation, ensuring on-site performance matches the tested system.',
  },
  {
    n: '07',
    title: 'Handover & Support',
    body: 'We hand over a fully certified, fire-ready installation — complete with documentation and ongoing support, so the building is protected throughout its life and ready for inspection at any time.',
  },
]

export default function Process() {
  return (
    <section className="process dark-section rounded" id="process">
      <div className="container process__inner">
        <div className="process__head">
          <motion.span className="eyebrow" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            How We Work
          </motion.span>
          <motion.h2 className="process__title" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            Our Fully Engineered Fire-Protection Approach, From First Assessment to Certified Handover
          </motion.h2>
        </div>

        <div className="process__list">
          {STEPS.map((s) => (
            <motion.div
              className="step"
              key={s.n}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <div className="step__n">{s.n}</div>
              <div className="step__content">
                <h3 className="step__title">{s.title}</h3>
                <p className="step__body">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
