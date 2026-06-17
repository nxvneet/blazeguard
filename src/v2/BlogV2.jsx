import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../anim.js'

const POSTS = [
  { date: 'Nov 20, 2025', title: 'Understanding EI ratings: integrity vs insulation explained', read: '5 min read', img: '/images/v2-facade.jpg' },
  { date: 'Dec 5, 2025', title: 'How fire-resistant glass keeps escape routes clear', read: '6 min read', img: '/images/v2-interior.jpg' },
  { date: 'Jul 30, 2025', title: 'Specifying fire glass for Gulf high-rise towers', read: '5 min read', img: '/images/v2-hero.jpg' },
]

export default function BlogV2() {
  return (
    <section className="v2blog v2-section" id="v2-blog">
      <div className="v2-container">
        <motion.h2 className="v2blog__title v2-h2" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          Blazeguard insights
        </motion.h2>
        <motion.div className="v2blog__grid" variants={stagger(0, 0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-6%' }}>
          {POSTS.map((p) => (
            <motion.a className="v2post" href="#v2-cta" key={p.title} variants={fadeUp}>
              <div className="v2post__media"><img src={p.img} alt={p.title} /></div>
              <span className="v2post__date">{p.date}</span>
              <h3 className="v2post__title">{p.title}</h3>
              <div className="v2post__foot">
                <span>{p.read}</span>
                <span className="v2post__arrow">↗</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
        <div className="v2blog__more">
          <a href="#v2-blog" className="v2-btn v2-btn-dark">Go to blog <span className="ico">↗</span></a>
        </div>
      </div>
    </section>
  )
}
