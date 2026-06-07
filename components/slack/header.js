/** @jsxImportSource theme-ui */
import React, { useState, useRef, useEffect } from 'react'
import { Box, Card, Grid, Heading, Text } from 'theme-ui'
import { motion } from 'framer-motion'
import { getLiveCount, formatted as defaultFormatted } from '../../lib/members'
import usePrefersMotion from '../../lib/use-prefers-motion'
import useHasMounted from '../../lib/use-has-mounted'

const HeroGraphic = () => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      zIndex: 0,
      pointerEvents: 'none'
    }}
  >
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        scale: [1, 1.1, 1],
        rotate: [0, 10, 0]
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      style={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(10px)'
      }}
    />
    <motion.div
      animate={{
        y: [0, 40, 0],
        x: [0, -30, 0],
        scale: [1, 1.2, 1],
        rotate: [0, -15, 0]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 2
      }}
      style={{
        position: 'absolute',
        bottom: '10%',
        right: '15%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(15px)'
      }}
    />
    <motion.div
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.15, 1]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 5
      }}
      style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        marginLeft: '-100px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(20px)'
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity: 0.2,
        mixBlendMode: 'overlay'
      }}
    />
  </Box>
)

const MemberBadge = () => {
  const [count, setCount] = useState(defaultFormatted)

  useEffect(() => {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 3000)
    getLiveCount(controller.signal)
      .then(data => setCount(data.formatted))
      .catch(() => {})
      .finally(() => clearTimeout(timeout))
    return () => {
      controller.abort()
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Box sx={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      bg: 'rgba(255,255,255,0.15)',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: '999px',
      px: 3, py: 1, mb: 3,
      backdropFilter: 'blur(8px)'
    }}>
      <Box sx={{
        width: '8px', height: '8px',
        borderRadius: '50%', bg: '#2eb67d',
        boxShadow: '0 0 6px #2eb67d',
        animation: 'pulse 2s ease-in-out infinite',
        '@keyframes pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 }
        }
      }} />
      <Text sx={{ color: 'white', fontSize: 1, fontWeight: 600, letterSpacing: '0.03em' }}>
        {count} hackers online
      </Text>
    </Box>
  )
}

const Content = ({ onJoinClick, headingRef }) => (
  <Grid
    gap={3}
    pt={[5, '100px']}
    pb={[3, 4]}
    sx={{
      backgroundImage:
        'radial-gradient(ellipse farthest-corner at top left, #ff8c37, #ec3750)',
      position: 'relative'
    }}
  >
    <HeroGraphic />
    <Box
      ref={headingRef}
      sx={{
        position: 'relative',
        zIndex: 1,
        textShadow: 'text',
        textAlign: ['center', 'center'],
        willChange: 'transform'
      }}
    >
      <MemberBadge />
      <Heading
        as="h1"
        variant="title"
        sx={{ color: 'white', fontSize: [5, 6, 7], lineHeight: 'limit', mb: [2, 3] }}
      >
        Hack Club Slack
      </Heading>
    </Box>
    <Box sx={{ zIndex: 5, display: 'flex', alignItems: 'center', position: 'relative' }}>
      <Card
        sx={{
          variant: 'cards.translucent',
          maxWidth: (t) => `calc(${t.sizes.narrow} * 1.2)`,
          mx: 'auto',
          textAlign: 'center'
        }}
      >
        <Text as="p" sx={{ fontSize: [2, 3], mb: 3 }}>
          Hack Clubbers hang out on our Slack.
          <br />
          Join up to make friends, find projects, and have fun.
        </Text>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.button
            type="button"
            onClick={onJoinClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            sx={{
              bg: 'red',
              backgroundImage:
                'radial-gradient(ellipse farthest-corner at top left, #ff8c37, #ec3750)',
              color: 'white',
              fontSize: [2, 3],
              px: 5, py: 3,
              borderRadius: 'extra',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-block',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid white',
              cursor: 'pointer',
              fontFamily: 'inherit',
              willChange: 'transform',
              ':hover': {
                boxShadow: '0 0 0 2px white',
                backgroundImage:
                  'radial-gradient(ellipse farthest-corner at bottom right, #ff8c37, #ec3750)'
              }
            }}
          >
            Join Hack Club
          </motion.button>
        </Box>
      </Card>
    </Box>
  </Grid>
)

const Cover = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    sx={{
      position: 'absolute',
      bottom: '-20%',
      height: '100%',
      aspectRatio: '1/1',
      right: 0,
      backgroundImage: 'url(slack-logo.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      opacity: 0.75,
      zIndex: 0,
      filter: 'saturate(0.9) grayscale(0.2)',
      willChange: 'transform'
    }}
  />
))
Cover.displayName = 'Cover'

const Static = ({
  img = 'https://cloud-r4rrjh2z8-hack-club-bot.vercel.app/02020-07-25_a1tcva4ch6mmr6j2cfmcb4e9ync3yhar.png',
  onJoinClick
}) => (
  <Box
    as="section"
    id="slack"
    sx={{
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover'
    }}
  >
    <Cover />
    <Content onJoinClick={onJoinClick} />
  </Box>
)

const Slack = ({ onJoinClick }) => {
  const hasMounted = useHasMounted()
  const prefersMotion = usePrefersMotion()
  const coverRef = useRef(null)
  const headingRef = useRef(null)
  const btnRef = useRef(null)
  const scrollRafRef = useRef(null)
  const scrollYRef = useRef(0)
  useEffect(() => {
    if (!prefersMotion) return
    const onScroll = () => {
      scrollYRef.current = window.scrollY
      if (!scrollRafRef.current) {
        scrollRafRef.current = requestAnimationFrame(() => {
          const y = scrollYRef.current
          if (coverRef.current)
            coverRef.current.style.transform = `translateY(${y * 0.25}px)`
          if (headingRef.current)
            headingRef.current.style.transform = `translateY(${y * -0.08}px)`
          scrollRafRef.current = null
        })
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [prefersMotion])

  if (hasMounted && prefersMotion) {
    return (
      <Box
        as="section"
        id="slack"
        sx={{ overflow: 'hidden', position: 'relative' }}
      >
        <Cover ref={coverRef} />
        <Content
          onJoinClick={onJoinClick}
          headingRef={headingRef}
        />
      </Box>
    )
  } else {
    return <Static onJoinClick={onJoinClick} />
  }
}

export default Slack
