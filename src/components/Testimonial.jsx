import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../anim.js'
import './Testimonial.css'

export default function Testimonial() {
  return (
    <section className="testimonial">
      <motion.div
        className="container testimonial__inner"
        variants={stagger(0, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.span className="testimonial__mark" variants={fadeUp}>“</motion.span>
        <motion.blockquote className="testimonial__quote" variants={fadeUp}>
          Blazeguard’s fire-resistant glazing let us keep the openness our towers are known for
          without compromising on life-safety. The certification was watertight and the install
          flawless — exactly the standard our project demanded.
        </motion.blockquote>
        <motion.div className="testimonial__by" variants={fadeUp}>
          <span className="testimonial__name">Khalid Al-Mansoori</span>
          <span className="testimonial__role">Project Director · Gulf Tower Developments</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
