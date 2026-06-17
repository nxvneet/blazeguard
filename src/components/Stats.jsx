import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../anim.js'
import './Stats.css'

const STATS = [
  { value: 90, suffix: '', label: 'EI-90 fire resistance, in minutes' },
  { value: 3, suffix: '', label: 'Gulf markets: Qatar, UAE & KSA' },
  { value: 100, suffix: '%', label: 'German-engineered & certified' },
  { value: 1200, suffix: '°C', label: 'Withstood in furnace testing' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20%' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const dur = 1600
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        <motion.div
          className="stats__left"
          variants={stagger(0, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.span className="eyebrow" variants={fadeUp}>Proven Performance</motion.span>
          <motion.h2 className="stats__title" variants={fadeUp}>
            Trusted Across the Gulf and Built on German Engineering Excellence
          </motion.h2>
          <motion.p className="stats__copy" variants={fadeUp}>
            Whether you’re specifying escape-route glazing for a high-rise tower or fire doors
            for an industrial facility, our systems are tested, certified and engineered to
            contain fire and smoke when it matters most. Still have questions? Reach out and our
            team will get back to you.
          </motion.p>
          <motion.a className="btn btn-dark" href="#contact" variants={fadeUp}>
            Contact Us <span className="arrow">↗</span>
          </motion.a>

          <motion.div className="stats__numbers" variants={fadeUp}>
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat__value">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="stats__media"
          initial={{ clipPath: 'inset(14% 14% 14% 14% round 20px)', opacity: 0.4 }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 20px)', opacity: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src="/images/fire-test-panel.png" alt="Technician inspecting a fire-test glazing panel" />
        </motion.div>
      </div>
    </section>
  )
}
