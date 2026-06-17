import { motion } from 'framer-motion'
import './VersionSwitch.css'

/* Floating tab switch to toggle between the two site versions. */
export default function VersionSwitch({ version, onChange }) {
  return (
    <div className="vswitch" role="tablist" aria-label="Site version">
      <button
        role="tab"
        aria-selected={version === 'v1'}
        className={`vswitch__tab ${version === 'v1' ? 'is-active' : ''}`}
        onClick={() => onChange('v1')}
      >
        {version === 'v1' && <motion.span layoutId="vswitch-pill" className="vswitch__pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
        <span className="vswitch__label">V1</span>
      </button>
      <button
        role="tab"
        aria-selected={version === 'v2'}
        className={`vswitch__tab ${version === 'v2' ? 'is-active' : ''}`}
        onClick={() => onChange('v2')}
      >
        {version === 'v2' && <motion.span layoutId="vswitch-pill" className="vswitch__pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
        <span className="vswitch__label">V2</span>
      </button>
    </div>
  )
}
