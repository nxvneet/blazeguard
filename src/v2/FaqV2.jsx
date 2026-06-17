import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../anim.js'

const FAQS = [
  { q: 'What do EI-30, EI-60 and EI-90 ratings mean?', a: 'The EI rating certifies how many minutes a system maintains both integrity (E) against flame and insulation (I) against heat transfer. EI-90 holds back fire and limits heat for 90 minutes.' },
  { q: 'Can fire-resistant glass be as clear as ordinary glazing?', a: 'Yes. Our German-engineered systems deliver certified fire performance while preserving daylight, optical clarity and sightlines — so safety never compromises the design.' },
  { q: 'Do you handle testing and certification?', a: 'We provide accredited furnace testing and complete documentation of fire-resistance performance and regulatory compliance for authorities, insurers and owners.' },
  { q: 'Which markets does Blazeguard serve?', a: 'We deliver across the Gulf — Qatar, the UAE and Saudi Arabia — for commercial, residential and industrial infrastructure.' },
  { q: 'Do you install, or only supply?', a: 'Both. Our specialists install fire doors, escape-route glazing and structural fire-glass with proper sealing, so the as-built system matches the tested specification.' },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div className={`v2faq__item ${open ? 'is-open' : ''}`} variants={fadeUp}>
      <button className="v2faq__q" onClick={() => setOpen((v) => !v)}>
        <span>{q}</span>
        <span className="v2faq__icon">{open ? '–' : '+'}</span>
      </button>
      <motion.div
        className="v2faq__a"
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>{a}</p>
      </motion.div>
    </motion.div>
  )
}

export default function FaqV2() {
  return (
    <section className="v2faq v2-section">
      <div className="v2-container">
        <motion.h2 className="v2faq__title v2-display" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          Frequently asked questions
        </motion.h2>
        <motion.div className="v2faq__list" initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ staggerChildren: 0.08 }}>
          {FAQS.map((f) => <Item key={f.q} {...f} />)}
        </motion.div>
      </div>
    </section>
  )
}
