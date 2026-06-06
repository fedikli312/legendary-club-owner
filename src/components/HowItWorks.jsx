import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const STEPS = [
  { num: '01', title: 'Build Your Club', desc: 'Construct your stadium, expand facilities, set up scouting networks, and lock in sponsorship deals. Every brick matters.' },
  { num: '02', title: 'Scout & Sign Players', desc: 'Browse hundreds of real player cards rated by actual performance data. Build a squad that fits your system.' },
  { num: '03', title: 'Set Your Tactics', desc: 'Choose your formation, assign roles, and dial in your instructions. This is where managers are separated from dreamers.' },
  { num: '04', title: 'Compete & Climb', desc: 'Weekly leagues against real managers. Our engine simulates full 90-minute matches — and rewards you for every position gained.' },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} style={{
      padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 80px)',
      background: 'var(--pitch)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background number watermark */}
      <div style={{
        position: 'absolute', right: '-40px', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'var(--font-display)', fontSize: '400px', color: 'rgba(34,197,94,0.03)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>90</div>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '13px', letterSpacing: '0.15em', color: 'var(--green)', marginBottom: '12px' }}>THE GAME LOOP</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 7vw, 72px)', lineHeight: 1, color: 'var(--white)' }}>HOW YOU WIN</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {STEPS.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '24px',
                padding: '32px 0',
                borderBottom: '1px solid rgba(240,250,243,0.07)',
                alignItems: 'start',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '52px',
                color: 'rgba(34,197,94,0.25)',
                lineHeight: 1,
              }}>{num}</div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(24px, 4vw, 36px)',
                  color: 'var(--white)',
                  letterSpacing: '0.02em',
                  marginBottom: '10px',
                }}>{title}</h3>
                <p style={{
                  fontSize: '15px',
                  color: 'rgba(240,250,243,0.55)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  maxWidth: '540px',
                }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
