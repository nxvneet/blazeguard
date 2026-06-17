import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../anim.js'

const PROJECTS = [
  { title: 'Doha Landmark Tower', tag: 'EI-90 escape-route façade', img: '/images/v2-facade.jpg' },
  { title: 'Jebel Ali Logistics Hub', tag: 'Industrial fire doors', img: '/images/glass-installation.png' },
  { title: 'Riyadh Transit Terminal', tag: 'Certified furnace testing', img: '/images/v2-interior.jpg' },
  { title: 'Gulf Mixed-Use Atrium', tag: 'EI-60 structural screens', img: '/images/fire-test-panel.png' },
]

export default function ProjectsV2() {
  return (
    <section className="v2projects v2-section" id="v2-projects">
      <div className="v2-container">
        <div className="v2projects__head">
          <motion.h2 className="v2-h2" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            Our projects
          </motion.h2>
          <motion.a href="#v2-cta" className="v2-btn v2-btn-dark" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            Go to projects <span className="ico">↗</span>
          </motion.a>
        </div>

        <motion.div className="v2projects__grid" variants={stagger(0, 0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-6%' }}>
          {PROJECTS.map((p) => (
            <motion.a className="v2project" href="#v2-cta" key={p.title} variants={fadeUp}>
              <div className="v2project__media">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="v2project__meta">
                <h3 className="v2project__title">{p.title}</h3>
                <p className="v2project__tag">{p.tag}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
