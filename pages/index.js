/** @jsxImportSource theme-ui */
import Head from 'next/head'
import { Box, Text } from 'theme-ui'
import { useEffect, useState } from 'react'

const tabs = ['Overview', 'Flight plan', 'Systems']
const telemetry = [
  ['ALTITUDE', '184.2', 'km', '+12.4 km/s'],
  ['VELOCITY', '7.61', 'km/s', '+0.18 km/s'],
  ['FUEL LOAD', '98.6', '%', 'NOMINAL'],
  ['CABIN PRESSURE', '14.7', 'psi', 'NOMINAL']
]

const Panel = ({ children, sx = {} }) => (
  <Box sx={{ bg: '#111820', border: '1px solid #263542', borderRadius: 2, ...sx }}>{children}</Box>
)

const Metric = ({ label, value, unit, detail }) => (
  <Panel sx={{ p: 3 }}>
    <Text sx={{ color: '#718392', fontSize: 11, letterSpacing: '0.14em', fontWeight: 700 }}>{label}</Text>
    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mt: 2 }}>
      <Text sx={{ color: '#f4f7f8', fontSize: [32, 40], fontWeight: 700, letterSpacing: '-0.05em' }}>{value}</Text>
      <Text sx={{ color: '#8295a4', fontSize: 13 }}>{unit}</Text>
    </Box>
    <Text sx={{ color: '#37d49a', fontSize: 11, mt: 2, letterSpacing: '0.1em' }}>↗ {detail}</Text>
  </Panel>
)

export default function MissionControl() {
  const [tab, setTab] = useState('Overview')
  const [abort, setAbort] = useState(false)
  const [seconds, setSeconds] = useState(8 * 60 + 42)

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(timer)
  }, [])

  const clock = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`
  return (
    <>
      <Head><title>Artemis-07 / Mission Control</title><meta name="theme-color" content="#0b1015" /></Head>
      <Box sx={{ minHeight: '100vh', bg: '#0b1015', color: '#e9eff2', fontFamily: 'Inter, system-ui, sans-serif', px: [3, 5, 6], py: 4 }}>
        <Box sx={{ maxWidth: 1280, mx: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: [5, 7] }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}><Box sx={{ width: 28, height: 28, border: '2px solid #f4f7f8', borderRadius: '50%', position: 'relative', '::after': { content: '""', position: 'absolute', width: 8, height: 8, bg: '#ff5a36', borderRadius: '50%', top: 8, left: 8 } }} /><Text sx={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.18em' }}>NORTHSTAR // FLIGHT</Text></Box>
            <Text sx={{ color: '#718392', fontSize: 11, letterSpacing: '0.12em' }}>UTC 14:28:06 &nbsp;·&nbsp; GROUND LINK <Text as="span" sx={{ color: '#37d49a' }}>● ONLINE</Text></Text>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: ['flex-start', 'flex-end'], flexDirection: ['column', 'row'], gap: 4, mb: 5 }}>
            <Box><Text sx={{ color: '#ff5a36', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em' }}>MISSION 07 / ORBITAL INSERTION</Text><Text as="h1" sx={{ fontSize: [42, 64], lineHeight: 1, letterSpacing: '-0.06em', mt: 3, mb: 3, fontWeight: 700 }}>ARTEMIS-07</Text><Text sx={{ color: '#8295a4', fontSize: 15 }}>Starship Block 2 · Pad 39A · Kennedy Space Center, FL</Text></Box>
            <Box sx={{ textAlign: ['left', 'right'] }}><Text sx={{ color: '#718392', fontSize: 11, letterSpacing: '0.16em' }}>T− COUNTDOWN</Text><Text sx={{ color: '#f4f7f8', fontSize: [48, 68], fontFamily: 'monospace', letterSpacing: '-0.08em', lineHeight: 1.1 }}>{clock}</Text><Text sx={{ color: '#37d49a', fontSize: 11, letterSpacing: '0.12em' }}>● HOLD POINT CLEAR</Text></Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 1, borderBottom: '1px solid #263542', mb: 5 }}>{tabs.map((item) => <Box key={item} as="button" onClick={() => setTab(item)} sx={{ color: tab === item ? '#f4f7f8' : '#718392', bg: 'transparent', border: 0, borderBottom: tab === item ? '2px solid #ff5a36' : '2px solid transparent', px: 3, py: 3, fontSize: 12, letterSpacing: '0.1em', cursor: 'pointer' }}>{item.toUpperCase()}</Box>)}</Box>

          {tab === 'Overview' ? <>
            <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)'], gap: 3, mb: 5 }}>{telemetry.map((m) => <Metric key={m[0]} label={m[0]} value={m[1]} unit={m[2]} detail={m[3]} />)}</Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', '1.4fr 0.6fr'], gap: 3 }}>
              <Panel sx={{ p: [3, 4], minHeight: 330 }}><Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}><Text sx={{ fontSize: 11, color: '#718392', letterSpacing: '0.14em' }}>FLIGHT PROFILE / LIVE</Text><Text sx={{ fontSize: 11, color: '#37d49a' }}>● STREAMING</Text></Box><Box sx={{ height: 220, position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, rgba(255,90,54,.04), transparent)' }}><Box sx={{ position: 'absolute', inset: '12% 0 0', borderTop: '1px dashed #30404d', borderBottom: '1px dashed #30404d', transform: 'skewY(-8deg)' }} /><Box sx={{ position: 'absolute', left: '8%', right: '4%', top: '48%', borderTop: '2px solid #ff5a36', transform: 'skewY(-8deg)', boxShadow: '0 0 14px #ff5a36' }} /><Text sx={{ position: 'absolute', top: '15%', left: '8%', color: '#718392', fontSize: 10 }}>200 KM</Text><Text sx={{ position: 'absolute', bottom: '8%', right: '4%', color: '#718392', fontSize: 10 }}>T+00:18:42</Text></Box></Panel>
              <Panel sx={{ p: [3, 4], display: 'flex', flexDirection: 'column' }}><Text sx={{ fontSize: 11, color: '#718392', letterSpacing: '0.14em', mb: 4 }}>MISSION STATUS</Text><Text sx={{ color: '#37d49a', fontSize: 24, fontWeight: 700, mb: 2 }}>NOMINAL</Text><Text sx={{ color: '#8295a4', fontSize: 13, lineHeight: 1.6 }}>All systems within expected flight parameters. Guidance has confirmed the insertion window.</Text><Box sx={{ mt: 'auto', pt: 5 }}><Box as="button" onClick={() => setAbort(!abort)} sx={{ width: '100%', py: 3, color: abort ? '#0b1015' : '#ff8066', bg: abort ? '#ff5a36' : 'transparent', border: '1px solid #ff5a36', borderRadius: 1, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', cursor: 'pointer' }}>{abort ? 'CONFIRM ABORT SEQUENCE' : 'ARM ABORT SEQUENCE'}</Box><Text sx={{ textAlign: 'center', color: '#536675', fontSize: 10, mt: 3 }}>Requires two-person authorization</Text></Box></Panel>
            </Box>
          </> : <Panel sx={{ p: [4, 6], minHeight: 360 }}><Text sx={{ color: '#ff5a36', fontSize: 11, letterSpacing: '0.14em' }}>{tab.toUpperCase()} / TELEMETRY</Text><Text sx={{ display: 'block', mt: 4, color: '#8295a4' }}>Subsystem data is nominal. Detailed {tab.toLowerCase()} telemetry will populate as the vehicle progresses through the flight profile.</Text></Panel>}
          <Text sx={{ display: 'block', color: '#536675', fontSize: 10, letterSpacing: '0.12em', mt: 6 }}>NORTHSTAR FLIGHT SYSTEMS &nbsp;·&nbsp; INTERNAL OPERATIONS CONSOLE &nbsp;·&nbsp; BUILD 07.4.1</Text>
        </Box>
      </Box>
    </>
  )
}
