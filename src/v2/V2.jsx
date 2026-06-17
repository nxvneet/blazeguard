import './v2.css'
import './v2-sections.css'
import NavV2 from './NavV2.jsx'
import HeroV2 from './HeroV2.jsx'
import IntroV2 from './IntroV2.jsx'
import LogosV2 from './LogosV2.jsx'
import ServicesV2 from './ServicesV2.jsx'
import AdvantagesV2 from './AdvantagesV2.jsx'
import ProjectsV2 from './ProjectsV2.jsx'
import PanelsV2 from './PanelsV2.jsx'
import FaqV2 from './FaqV2.jsx'
import TeamV2 from './TeamV2.jsx'
import ReviewsV2 from './ReviewsV2.jsx'
import BlogV2 from './BlogV2.jsx'
import CtaV2 from './CtaV2.jsx'
import FooterV2 from './FooterV2.jsx'

/* V2 — Proforma-modelled layout, Blazeguard branded */
export default function V2() {
  return (
    <div className="v2-root">
      <NavV2 />
      <main>
        <HeroV2 />
        <IntroV2 />
        <LogosV2 />
        <ServicesV2 />
        <AdvantagesV2 />
        <ProjectsV2 />
        <PanelsV2 />
        <FaqV2 />
        <TeamV2 />
        <ReviewsV2 />
        <BlogV2 />
        <CtaV2 />
      </main>
      <FooterV2 />
    </div>
  )
}
