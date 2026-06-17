import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../anim.js'

const PANELS = [
  {
    title: 'Our standard: protection and clarity',
    sub: 'We take pride in curating fire-safety glass that embodies certified performance and architectural quality in equal measure.',
    img: '/images/v2-facade.jpg',
    flip: false,
  },
  {
    title: 'Tailored protection for every building',
    sub: 'Understanding that each structure is unique, we shape every specification around its occupancy, escape strategy and code.',
    img: '/images/v2-interior.jpg',
    flip: true,
  },
  {
    title: 'Compliance, handled end to end',
    sub: 'We value your time. From testing to documentation, we manage certification so your project moves forward without delays.',
    img: '/images/v2-hero.jpg',
    flip: false,
  },
]

export default function PanelsV2() {
  return (
    <section className="v2panels">
      {PANELS.map((p, i) => (
        <div className={`v2panel ${p.flip ? 'v2panel--flip' : ''}`} key={i}>
          <motion.div
            className="v2panel__text"
            variants={stagger(0, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2 className="v2panel__title v2-h2" variants={fadeUp}>{p.title}</motion.h2>
            <motion.p className="v2panel__sub" variants={fadeUp}>{p.sub}</motion.p>
            <motion.a className="v2-btn v2-btn-light v2panel__btn" href="#v2-cta" variants={fadeUp}>
              Learn more <span className="ico">↗</span>
            </motion.a>
          </motion.div>
          <motion.div
            className="v2panel__media"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={p.img} alt={p.title} />
          </motion.div>
        </div>
      ))}
    </section>
  )
}
