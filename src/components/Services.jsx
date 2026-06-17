import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../anim.js'
import './Services.css'

const SERVICES = [
  {
    title: 'Glazing',
    img: '/images/glass-cross-section.png',
    body: 'Fire-resistant glass systems with EI-30, EI-60 and EI-90 classifications that provide superior fire barriers while offering excellent sound insulation and weight advantages over traditional fire-protection materials.',
  },
  {
    title: 'Installation',
    img: '/images/glass-installation.png',
    body: 'Expert installation services for fire doors, escape-route glazing and specialized fire-resistant glazing systems that ensure proper sealing against fire and smoke propagation in critical applications.',
  },
  {
    title: 'Certification',
    img: '/images/furnace-test.png',
    body: 'Comprehensive testing and certification services that validate fire-resistance performance, regulatory compliance and safety standards to ensure optimal protection for commercial, residential and industrial facilities.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__head">
          <motion.span className="eyebrow" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            Services Portfolio
          </motion.span>
          <motion.h2 className="services__title" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            Services
          </motion.h2>
          <motion.p className="services__lead" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            Blazeguard delivers German-engineered fire protection excellence through advanced
            fire-resistant glass technologies and comprehensive safety solutions that set new
            standards for life-safety across Qatar, the UAE and Saudi Arabia’s critical infrastructure.
          </motion.p>
        </div>

        <motion.div
          className="services__grid"
          variants={stagger(0, 0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {SERVICES.map((s) => (
            <motion.article className="service-card" key={s.title} variants={fadeUp}>
              <div className="service-card__media">
                <img src={s.img} alt={s.title} />
              </div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__body">{s.body}</p>
              <span className="service-card__link">
                Learn more <span className="arrow">↗</span>
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
