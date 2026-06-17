import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Stats from './components/Stats.jsx'
import Process from './components/Process.jsx'
import Services from './components/Services.jsx'
import Testimonial from './components/Testimonial.jsx'
import Projects from './components/Projects.jsx'
import Stories from './components/Stories.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Process />
        <Services />
        <Testimonial />
        <Projects />
        <Stories />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
