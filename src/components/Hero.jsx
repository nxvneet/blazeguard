import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import { wordReveal, stagger, easeOut } from '../anim.js'
import './Hero.css'

const HEADING = 'Delivering German-Engineered Fire Protection Across the Gulf'

/* -------- exploded fire-glass assembly geometry (isometric slab) -------- */
const PANE_W = 120, PANE_H = 300, CY = 360, RISE = 46, TX = 26, TY = -14
const BASE_GAP = 18, EXPLODE_GAP = 96
const TL = [210, CY - PANE_H / 2], TR = [210 + PANE_W, CY - PANE_H / 2 - RISE]
const BR = [210 + PANE_W, CY + PANE_H / 2 - RISE], BL = [210, CY + PANE_H / 2]
const P = ([x, y]) => `${x},${y}`
const FRONT = `M${P(TL)} L${P(TR)} L${P(BR)} L${P(BL)} Z`
const TOP = `M${P(TL)} L${P(TR)} L${P([TR[0] + TX, TR[1] + TY])} L${P([TL[0] + TX, TL[1] + TY])} Z`
const SIDE = `M${P(TR)} L${P(BR)} L${P([BR[0] + TX, BR[1] + TY])} L${P([TR[0] + TX, TR[1] + TY])} Z`

/* each layer of the fire-resistant glass build-up, front → back */
const LAYERS = [
  { tint: 'rgba(193,187,175,0.06)', frame: true, label: 'Steel glazing frame', mk: [250, 470], lead: 'M250,470 L250,584 L268,584', tx: 274, ty: 588 },
  { tint: 'rgba(120,158,170,0.07)', label: 'Toughened outer pane', mk: [302, 178], lead: 'M302,178 L302,96 L320,96', tx: 326, ty: 100 },
  { tint: 'rgba(207,93,60,0.10)', hatch: true, label: 'Intumescent interlayer', mk: [268, 430], lead: 'M268,430 L268,624 L286,624', tx: 292, ty: 628 },
  { tint: 'rgba(120,158,170,0.05)', label: null },
  { tint: 'rgba(120,158,170,0.07)', grid: true, label: 'Laminated inner pane', mk: [298, 196], lead: 'M298,196 L298,128 L316,128', tx: 322, ty: 132 },
  { tint: 'rgba(193,187,175,0.06)', label: 'EI-rated edge seal', mk: [256, 452], lead: 'M256,452 L256,664 L274,664', tx: 280, ty: 668 },
]

function BlueprintLayer({ progress, i, data }) {
  const x = useTransform(progress, [0.05, 0.82], [i * BASE_GAP, i * (BASE_GAP + EXPLODE_GAP)])
  const start = 0.22 + i * 0.075
  const labelOpacity = useTransform(progress, [start, start + 0.12], [0, 1])

  return (
    <motion.g style={{ x }}>
      <path d={SIDE} fill="rgba(255,255,255,0.018)" stroke="rgba(235,227,221,0.28)" strokeWidth="1.1" />
      <path d={TOP} fill="rgba(255,255,255,0.03)" stroke="rgba(235,227,221,0.4)" strokeWidth="1.1" />
      <path d={FRONT} fill={data.tint} stroke="rgba(235,227,221,0.62)" strokeWidth="1.3" />

      {data.frame && (
        <path
          d={`M${P([TL[0] + 14, TL[1] + 16])} L${P([TR[0] - 14, TR[1] + 16])} L${P([BR[0] - 14, BR[1] - 16])} L${P([BL[0] + 14, BL[1] - 16])} Z`}
          fill="none" stroke="rgba(235,227,221,0.35)" strokeWidth="1"
        />
      )}
      {data.grid && (
        <g stroke="rgba(235,227,221,0.22)" strokeWidth="0.8">
          {[0.2, 0.4, 0.6, 0.8].map((f) => (
            <line key={'h' + f} x1={TL[0]} y1={TL[1] + f * PANE_H} x2={TR[0]} y2={TR[1] + f * PANE_H} />
          ))}
          {[0.25, 0.5, 0.75].map((f) => (
            <line key={'v' + f} x1={TL[0] + f * PANE_W} y1={TL[1] - f * RISE} x2={BL[0] + f * PANE_W} y2={BL[1] - f * RISE} />
          ))}
        </g>
      )}
      {data.hatch && (
        <g stroke="rgba(207,93,60,0.5)" strokeWidth="0.8">
          {Array.from({ length: 10 }).map((_, k) => {
            const f = (k + 1) / 11
            return <line key={k} x1={TL[0] + 6} y1={TL[1] + f * PANE_H} x2={TR[0] - 6} y2={TR[1] + f * PANE_H} />
          })}
        </g>
      )}

      {data.label && (
        <motion.g style={{ opacity: labelOpacity }}>
          <path d={data.lead} fill="none" stroke="rgba(235,227,221,0.5)" strokeWidth="1" />
          <circle cx={data.mk[0]} cy={data.mk[1]} r="6" fill="none" stroke="var(--ember)" strokeWidth="2" />
          <circle cx={data.mk[0]} cy={data.mk[1]} r="2" fill="var(--ember)" />
          <text className="bp-label" x={data.tx} y={data.ty}>{data.label}</text>
        </motion.g>
      )}
    </motion.g>
  )
}

function useMediaQuery(q) {
  const [m, setM] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(q)
    const on = () => setM(mq.matches)
    on(); mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [q])
  return m
}

export default function Hero() {
  const ref = useRef(null)
  const isMobile = useMediaQuery('(max-width: 860px)')
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const mobileP = useMotionValue(0.62) // static ~60% explosion for the stacked mobile layout
  const progress = isMobile ? mobileP : scrollYProgress

  // heading / text choreography
  const headY = useTransform(scrollYProgress, [0, 0.85], ['0%', '-14%'])
  const subOpacity = useTransform(scrollYProgress, [0.04, 0.18], [1, 0])
  const captionOpacity = useTransform(scrollYProgress, [0.6, 0.78], [0, 1])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.32, 0.2])

  return (
    <section className="hero hero--blueprint" id="top" ref={ref} style={{ height: isMobile ? 'auto' : '260vh' }}>
      <div className="hero__sticky">
        {/* blueprint backdrop */}
        <div className="hero__grid-bg" aria-hidden="true" />
        <motion.div className="hero__glow" style={{ opacity: isMobile ? 0.4 : glowOpacity }} aria-hidden="true" />
        <div className="hero__guides" aria-hidden="true"><span /><span /><span /><span /></div>

        {/* exploded diagram */}
        <svg className="hero__diagram" viewBox="0 0 1180 740" preserveAspectRatio="xMidYMid meet" aria-label="Exploded view of a fire-resistant glass assembly">
          {LAYERS.map((d, i) => (
            <BlueprintLayer key={i} progress={progress} i={i} data={d} />
          ))}
        </svg>

        {/* text overlay */}
        <motion.div className="hero__inner container" style={{ y: isMobile ? 0 : headY }}>
          <motion.span
            className="eyebrow hero__eyebrow"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.3 }}
          >
            Blazeguard® · Fire-Resistant Glass Systems
          </motion.span>

          <motion.h1 className="hero__title" variants={stagger(0.45, 0.08)} initial="hidden" animate="show">
            {HEADING.split(' ').map((w, i) => (
              <span className="word" key={i}><motion.span className="word__inner" variants={wordReveal}>{w}</motion.span></span>
            ))}
          </motion.h1>

          <motion.div
            className="hero__row" style={{ opacity: isMobile ? 1 : subOpacity }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 1.1 }}
          >
            <p className="hero__sub">
              Advanced EI-30, EI-60 and EI-90 rated fire-safety glass setting new life-safety
              standards for Qatar, the UAE and Saudi Arabia’s most critical infrastructure.
            </p>
            <a href="#contact" className="btn btn-fire">Book a Consultation <span className="arrow">↗</span></a>
          </motion.div>
        </motion.div>

        {/* exploded-view caption (reveals as layers separate) */}
        <motion.div className="hero__caption" style={{ opacity: isMobile ? 1 : captionOpacity }}>
          <span className="hero__caption-tag">Exploded view</span>
          <p>EI-90 fire-resistant glass — a German-engineered laminate of toughened panes and intumescent interlayers.</p>
        </motion.div>

        {!isMobile && (
          <motion.div className="hero__scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}>
            <span>Scroll to assemble</span>
            <span className="hero__scroll-line" />
          </motion.div>
        )}
      </div>
    </section>
  )
}
