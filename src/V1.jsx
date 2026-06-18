import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Anatomy from './components/Anatomy.jsx'
import Stats from './components/Stats.jsx'
import Process from './components/Process.jsx'
import Services from './components/Services.jsx'
import Testimonial from './components/Testimonial.jsx'
import Projects from './components/Projects.jsx'
import Stories from './components/Stories.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

/* V1 — the Sienna-based dark editorial layout */
export default function V1() {
  return (
    <div className="v1-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Anatomy />
        <Stats />
        <Process />
        <Services />
        <Testimonial />
        <Projects />
        <Stories />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
