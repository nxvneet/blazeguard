import { useEffect, useState } from 'react'
import V1 from './V1.jsx'
import V2 from './v2/V2.jsx'
import VersionSwitch from './components/VersionSwitch.jsx'

function getInitialVersion() {
  const url = new URL(window.location.href)
  const q = url.searchParams.get('v') || (url.hash === '#v2' ? '2' : url.hash === '#v1' ? '1' : null)
  if (q === '2') return 'v2'
  if (q === '1') return 'v1'
  return localStorage.getItem('bg-version') || 'v1'
}

export default function App() {
  const [version, setVersion] = useState(getInitialVersion)

  useEffect(() => {
    localStorage.setItem('bg-version', version)
    const url = new URL(window.location.href)
    url.searchParams.set('v', version === 'v2' ? '2' : '1')
    window.history.replaceState({}, '', url)
    window.scrollTo(0, 0)
  }, [version])

  return (
    <>
      {version === 'v2' ? <V2 /> : <V1 />}
      <VersionSwitch version={version} onChange={setVersion} />
    </>
  )
}
