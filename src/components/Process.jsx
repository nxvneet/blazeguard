import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion'
import './Process.css'

const STEPS = [
  {
    n: '01',
    title: 'Consultation & Risk Assessment',
    body: 'Every project begins with a deep understanding of the building, its occupancy and its fire-safety obligations. We assess escape routes, compartmentation needs and the local code so every recommendation is grounded in real-world risk.',
    img: '/images/fire-test-panel.png',
  },
  {
    n: '02',
    title: 'Specification & Compliance',
    body: 'We translate the assessment into a precise specification — defining the required EI-30, EI-60 or EI-90 classification, frame systems and detailing that satisfy Qatar, UAE and Saudi regulatory standards.',
    img: '/images/glass-cross-section.png',
  },
  {
    n: '03',
    title: 'Glass Engineering',
    body: 'Our German-engineered fire-resistant glass is configured for each opening, balancing fire performance with sound insulation, weight and optical clarity — without compromising the architectural vision.',
    img: '/images/fire-glass-panels.jpg',
  },
  {
    n: '04',
    title: 'Fire & Smoke Testing',
    body: 'Systems are validated against extreme temperatures in accredited furnace testing, proving their ability to hold back flame and smoke for the full rated duration and create a secure barrier for evacuation.',
    img: '/images/furnace-test.png',
  },
  {
    n: '05',
    title: 'Certification',
    body: 'We deliver comprehensive testing and certification that documents fire-resistance performance and regulatory compliance — giving authorities, insurers and owners verifiable proof of life-safety.',
    img: '/images/glass-cross-section.png',
  },
  {
    n: '06',
    title: 'Expert Installation',
    body: 'Specialist crews install fire doors, escape-route glazing and structural fire-glass with proper sealing against fire and smoke propagation, ensuring on-site performance matches the tested system.',
    img: '/images/glass-installation.png',
  },
  {
    n: '07',
    title: 'Handover & Support',
    body: 'We hand over a fully certified, fire-ready installation — complete with documentation and ongoing support, so the building is protected throughout its life and ready for inspection at any time.',
    img: '/images/fire-glass-panels.jpg',
  },
]

function useMediaQuery(query) {
  const [match, setMatch] = useState(false)
  useEffect(() => {
    const m = window.matchMedia(query)
    const on = () => setMatch(m.matches)
    on()
    m.addEventListener('change', on)
    return () => m.removeEventListener('change', on)
  }, [query])
  return match
}

const HEADING = 'Our Fully Engineered Fire-Protection Approach, From First Assessment to Certified Handover'

/* ----- Pinned scroll-stepper (desktop) — mirrors the reference recording ----- */
function PinnedProcess() {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  })

  const n = STEPS.length
  const [active, setActive] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    // small bias so each step "settles" near the middle of its scroll band
    const idx = Math.min(n - 1, Math.max(0, Math.floor(p * n + 0.0001)))
    setActive(idx)
  })

  // central line fills top→bottom across the whole pinned scroll
  const lineFill = useTransform(scrollYProgress, [0, 1], [0.04, 1])
  const nextNum = active < n - 1 ? STEPS[active + 1].n : null

  return (
    <section className="process dark-section rounded" id="process">
      {/* intro heading — normal flow, scrolls away before the stepper pins */}
      <div className="process__intro container">
        <span className="eyebrow">How We Work</span>
        <h2 className="process__heading">{HEADING}</h2>
      </div>

      {/* pinned scroll track */}
      <div className="process__track" ref={trackRef} style={{ height: `${n * 100}vh` }}>
        <div className="process__sticky">
          <div className="process__stage container">
            {/* left: cross-fading images */}
            <div className="process__media">
              {STEPS.map((s, i) => (
                <motion.div
                  className="process__img"
                  key={s.n}
                  initial={false}
                  animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.05 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ zIndex: i === active ? 2 : 1 }}
                >
                  <img src={s.img} alt={s.title} />
                </motion.div>
              ))}
            </div>

            {/* center: progress line + numbered badge (+ ghost next marker) */}
            <div className="process__center">
              <div className="process__line">
                <motion.div className="process__line-fill" style={{ scaleY: lineFill }} />
              </div>
              <div className="process__badge">
                {STEPS.map((s, i) => (
                  <motion.span
                    className="process__num"
                    key={s.n}
                    initial={false}
                    animate={{
                      opacity: i === active ? 1 : 0,
                      y: i === active ? 0 : i < active ? -26 : 26,
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {s.n}
                  </motion.span>
                ))}
              </div>
              {nextNum && <div className="process__ghost">{nextNum}</div>}
            </div>

            {/* right: cross-fading text over blueprint watermark */}
            <div className="process__text">
              <img className="process__blueprint" src="/images/blueprint.svg" alt="" aria-hidden="true" />
              <div className="process__copy-wrap">
                {STEPS.map((s, i) => (
                  <motion.div
                    className="process__copy"
                    key={s.n}
                    initial={false}
                    animate={{ opacity: i === active ? 1 : 0, y: i === active ? 0 : 24 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    style={{ pointerEvents: i === active ? 'auto' : 'none' }}
                  >
                    <span className="process__step-label">Step {s.n} / {STEPS[n - 1].n}</span>
                    <h3 className="process__title">{s.title}</h3>
                    <p className="process__body">{s.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----- Stacked fallback (mobile / reduced motion) ----- */
function StackedProcess() {
  return (
    <section className="process process--stacked dark-section rounded" id="process">
      <div className="container">
        <div className="process__head">
          <span className="eyebrow">How We Work</span>
          <h2 className="process__heading">{HEADING}</h2>
        </div>
        <div className="process__list">
          {STEPS.map((s) => (
            <motion.div
              className="step"
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="step__media">
                <img src={s.img} alt={s.title} />
              </div>
              <div className="step__badge">{s.n}</div>
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

export default function Process() {
  const isMobile = useMediaQuery('(max-width: 900px)')
  const reduce = useMediaQuery('(prefers-reduced-motion: reduce)')
  return isMobile || reduce ? <StackedProcess /> : <PinnedProcess />
}
