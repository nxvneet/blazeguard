import { motion } from 'framer-motion'
import { easeOut } from '../anim.js'

const TEXT =
  'We understand that every structure is unique. Our team of fire-safety engineers is ready to specify the right glass system for your project — balancing certified fire resistance with light, clarity and design.'

export default function IntroV2() {
  const words = TEXT.split(' ')
  return (
    <section className="v2intro v2-section" id="v2-about">
      <div className="v2-container">
        <motion.p
          className="v2intro__text"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-20%' }}
          transition={{ staggerChildren: 0.02 }}
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              variants={{ hidden: { opacity: 0.15 }, show: { opacity: 1, transition: { duration: 0.5, ease: easeOut } } }}
            >
              {w}{' '}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  )
}
