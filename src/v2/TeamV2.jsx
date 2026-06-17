import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../anim.js'

const TEAM = [
  { name: 'A. Rahman', role: 'Fire-Safety Engineer' },
  { name: 'L. Hofmann', role: 'Glass Systems Lead' },
  { name: 'S. Al-Kuwari', role: 'Certification Manager' },
  { name: 'M. Vogel', role: 'Head of Testing' },
  { name: 'N. Haddad', role: 'Project Director' },
]

function monogram(name) {
  return name.split(/[\s.]+/).filter(Boolean).map((p) => p[0]).join('').slice(0, 2).toUpperCase()
}

export default function TeamV2() {
  return (
    <section className="v2team v2-section">
      <div className="v2-container">
        <motion.h2 className="v2team__title v2-h2" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          Our team of specialists
        </motion.h2>
        <motion.div className="v2team__grid" variants={stagger(0, 0.1)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-6%' }}>
          {TEAM.map((m) => (
            <motion.div className="v2member" key={m.name} variants={fadeUp}>
              <div className="v2member__avatar">{monogram(m.name)}</div>
              <div className="v2member__info">
                <span className="v2member__name">{m.name}</span>
                <span className="v2member__role">{m.role}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
