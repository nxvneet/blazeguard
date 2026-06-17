import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../anim.js'

const REVIEWS = [
  { stars: 5, text: 'Blazeguard kept the openness our towers are known for without compromising life-safety. Certification was watertight, the install flawless.', name: 'Khalid Al-Mansoori', meta: 'Project Director' },
  { stars: 5, text: 'They turned a complex compartmentation brief into a buildable, certified system — on spec and on time.', name: 'Daniel R.', meta: 'Main Contractor' },
  { stars: 5, text: 'The clarity of the glazing is remarkable for an EI-90 system. Our architects were thrilled.', name: 'Laura Martens', meta: 'Lead Architect' },
  { stars: 5, text: 'Documentation was exactly what our authorities needed. Zero back-and-forth on approvals.', name: 'S. Haddad', meta: 'Compliance Lead' },
]

function Stars({ n }) {
  return <span className="v2review__stars">{'★'.repeat(n)}</span>
}

export default function ReviewsV2() {
  return (
    <section className="v2reviews">
      <div className="v2reviews__media">
        <img src="/images/v2-interior.jpg" alt="Fire-resistant glass partition in a modern lobby" />
        <div className="v2reviews__overlay" />
        <div className="v2reviews__heading">
          <h2 className="v2-h2">Our commitment: protection and clarity</h2>
          <p>Whether you’re protecting a tower, a terminal or an industrial plant, our work speaks through the people who specify it.</p>
        </div>
      </div>

      <motion.div className="v2reviews__list" variants={stagger(0, 0.1)} initial="hidden" whileInView="show" viewport={viewportOnce}>
        {REVIEWS.map((r, i) => (
          <motion.article className="v2review" key={i} variants={fadeUp}>
            <Stars n={r.stars} />
            <p className="v2review__text">{r.text}</p>
            <div className="v2review__by">
              <span className="v2review__name">{r.name}</span>
              <span className="v2review__meta">{r.meta}</span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
