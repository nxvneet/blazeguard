import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, viewportOnce } from '../anim.js'

const SERVICES = [
  {
    title: 'Fire-resistant glazing',
    img: '/images/v2-facade.jpg',
    body: 'EI-30, EI-60 and EI-90 rated glass systems that hold back flame and smoke while keeping daylight and sightlines intact.',
  },
  {
    title: 'Fire doors & screens',
    img: '/images/glass-installation.png',
    body: 'Certified door and screen assemblies engineered to seal openings against fire and smoke propagation in critical applications.',
  },
  {
    title: 'Escape-route glazing',
    img: '/images/v2-hero.jpg',
    body: 'Protected escape corridors and stair cores that stay clear and visible during evacuation, enabling safer egress.',
  },
  {
    title: 'Testing & certification',
    img: '/images/furnace-test.png',
    body: 'Accredited furnace testing and full documentation that proves performance and satisfies regional compliance.',
  },
  {
    title: 'Installation & sealing',
    img: '/images/fire-test-panel.png',
    body: 'Specialist on-site installation and sealing so the as-built system performs exactly as the tested specification.',
  },
]

export default function ServicesV2() {
  const [active, setActive] = useState(0)
  return (
    <section className="v2services v2-section" id="v2-services">
      <div className="v2-container">
        <motion.h2 className="v2services__title v2-h2" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          Our services
        </motion.h2>

        <div className="v2services__grid">
          <div className="v2services__media">
            <AnimatePresence mode="wait">
              <motion.img
                key={SERVICES[active].img + active}
                src={SERVICES[active].img}
                alt={SERVICES[active].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>

          <ul className="v2services__list">
            {SERVICES.map((s, i) => (
              <li
                key={s.title}
                className={`v2service ${i === active ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <button className="v2service__head">
                  <span className="v2service__title">{s.title}</span>
                  <span className="v2service__plus">{i === active ? '–' : '+'}</span>
                </button>
                <motion.div
                  className="v2service__body"
                  initial={false}
                  animate={{ height: i === active ? 'auto' : 0, opacity: i === active ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{s.body}</p>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
