import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../anim.js'
import './Projects.css'

const PROJECTS = [
  {
    tag: 'Escape-Route Glazing',
    title: 'EI-90 Fire-Rated Façade for a Doha High-Rise Tower',
    img: '/images/fire-glass-panels.jpg',
  },
  {
    tag: 'Industrial Fire Doors',
    title: 'Compartmentation Glazing for a Jebel Ali Logistics Hub',
    img: '/images/glass-installation.png',
  },
  {
    tag: 'Certified Testing',
    title: 'Furnace-Validated Fire Glass for a Riyadh Transit Terminal',
    img: '/images/furnace-test.png',
  },
  {
    tag: 'Structural Fire Glass',
    title: 'EI-60 Atrium Screens for a Gulf Mixed-Use Development',
    img: '/images/fire-test-panel.png',
  },
]

export default function Projects() {
  return (
    <section className="projects dark-section rounded-top" id="projects">
      <div className="container">
        <div className="projects__head">
          <motion.span className="eyebrow" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            Selected Work
          </motion.span>
          <motion.h2 className="projects__title" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            Latest Projects
          </motion.h2>
        </div>

        <motion.div
          className="projects__grid"
          variants={stagger(0, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {PROJECTS.map((p) => (
            <motion.a className="project" href="#contact" key={p.title} variants={fadeUp}>
              <div className="project__media">
                <img src={p.img} alt={p.title} />
                <span className="project__tag">{p.tag}</span>
              </div>
              <div className="project__row">
                <h3 className="project__title">{p.title}</h3>
                <span className="project__cta">Discover More <span className="arrow">↗</span></span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
