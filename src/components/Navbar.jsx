import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stories', href: '#stories' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="nav__inner container">
        <a href="#top" className="nav__logo" aria-label="Blazeguard — home">
          <img src="/images/blazeguard-logo-dark.png" alt="Blazeguard®" />
        </a>

        <nav className={`nav__menu ${open ? 'is-open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-light nav__cta-mobile">Contact Us</a>
        </nav>

        <a href="#contact" className="btn btn-light nav__cta">Contact Us</a>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </motion.header>
  )
}
