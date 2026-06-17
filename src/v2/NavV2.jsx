import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { label: 'About', href: '#v2-about' },
  { label: 'Services', href: '#v2-services' },
  { label: 'Projects', href: '#v2-projects' },
  { label: 'Insights', href: '#v2-blog' },
]

export default function NavV2() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <motion.header
      className={`v2nav ${scrolled ? 'v2nav--scrolled' : ''}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="v2-container v2nav__inner">
        <a href="#v2-top" className="v2nav__logo">
          <img src="/images/blazeguard-logo-dark.png" alt="Blazeguard®" />
        </a>
        <nav className={`v2nav__menu ${open ? 'is-open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
        <div className="v2nav__right">
          <a href="#v2-cta" className="v2-btn v2-btn-fire v2nav__contact">Contact</a>
          <button className={`v2nav__burger ${open ? 'is-open' : ''}`} aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </motion.header>
  )
}
