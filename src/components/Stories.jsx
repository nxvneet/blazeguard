import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../anim.js'
import './Stories.css'

const STORIES = [
  {
    title: 'Containing the Blaze: EI-90 Glazing for a Qatari Landmark Tower',
    body: 'Specifying fire-resistant glass that held back flame and smoke for a full 90 minutes — protecting escape routes across 40 storeys while preserving the tower’s signature transparency.',
  },
  {
    title: 'Engineered for Extremes: Fire Doors for a Gulf Industrial Complex',
    body: 'Purpose-built fire-door glazing sealed against smoke propagation across a high-risk facility, validated under extreme furnace temperatures and certified to the strictest regional codes.',
  },
  {
    title: 'From Specification to Certification: A Saudi Transit Terminal',
    body: 'A full-process engagement — risk assessment, German-engineered glass, accredited testing and certified installation — delivering verifiable life-safety for thousands of daily passengers.',
  },
]

export default function Stories() {
  return (
    <section className="stories dark-section" id="stories">
      <div className="container">
        <motion.h2
          className="stories__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          Success Stories We’re Proud Of
        </motion.h2>

        <motion.div
          className="stories__grid"
          variants={stagger(0, 0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {STORIES.map((s, i) => (
            <motion.article className="story" key={i} variants={fadeUp}>
              <span className="story__index">0{i + 1}</span>
              <h3 className="story__title">{s.title}</h3>
              <p className="story__body">{s.body}</p>
              <span className="story__link">Read Story <span className="arrow">↗</span></span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
