import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TIERS = [
  { rank: '🥇 1st', reward: 'Top Prize', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)' },
  { rank: '🥈 2nd–5th', reward: 'Major Payout', color: '#94a3b8', bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.2)' },
  { rank: '🥉 Top 20', reward: 'Season Reward', color: '#cd7c41', bg: 'rgba(205,124,65,0.08)', border: 'rgba(205,124,65,0.2)' },
  { rank: '📋 Top 100', reward: 'Leaderboard Cut', color: '#22c55e', bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)' },
]

export default function RewardSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} style={{
      background: 'var(--pitch)',
      padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 80px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '13px', letterSpacing: '0.15em', color: '#f59e0b', marginBottom: '12px' }}>REAL MONEY. REAL STAKES.</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 7vw, 68px)',
              lineHeight: 1,
              color: 'var(--white)',
              marginBottom: '24px',
            }}>
              WIN MORE<br />THAN BRAGGING<br />RIGHTS
            </h2>
            <p style={{
              fontSize: '15px',
              color: 'rgba(240,250,243,0.55)',
              lineHeight: 1.75,
              fontWeight: 300,
              marginBottom: '32px',
              maxWidth: '420px',
            }}>
              Every season, the top managers on the verified leaderboard earn real cash rewards. 
              Not coins, not store credit — actual money, paid out based on where you finish.
              Everyone in the top 100 gets something.
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.2)',
              borderRadius: '8px', padding: '12px 20px',
              fontSize: '14px', color: 'rgba(240,250,243,0.7)',
            }}>
              <span style={{ fontSize: '20px' }}>✅</span>
              Identity-verified payouts only. No bots, no cheats.
            </div>
          </motion.div>

          {/* Right: leaderboard tiers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {TIERS.map(({ rank, reward, color, bg, border }, i) => (
              <motion.div
                key={rank}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: bg,
                  border: `1px solid ${border}`,
                  borderRadius: '10px',
                  padding: '16px 20px',
                }}
              >
                <span style={{ fontSize: '15px', color: 'rgba(240,250,243,0.85)', fontWeight: 400 }}>{rank}</span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '18px',
                  color,
                  letterSpacing: '0.05em',
                }}>{reward}</span>
              </motion.div>
            ))}
            <div style={{
              textAlign: 'center', fontSize: '13px',
              color: 'var(--muted)', marginTop: '8px',
            }}>
              Season 5 is live in Turkey · International launch coming soon
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
