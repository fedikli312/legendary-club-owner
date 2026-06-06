import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const USPS = [
  {
    icon: '🧠',
    title: 'Pure Skill',
    desc: 'No loot boxes. No random draws. Every result traces back to your decisions — transfers, tactics, training.',
  },
  {
    icon: '🆓',
    title: 'Free to Play, Fair to Win',
    desc: 'Pay only to skip ads or for cosmetics. The best manager wins, not the biggest spender.',
  },
  {
    icon: '💸',
    title: 'Real Cash Rewards',
    desc: 'Verified players earn actual money based on seasonal ranking. Everyone on the leaderboard gets paid.',
  },
  {
    icon: '⚽',
    title: 'Real Match Data',
    desc: 'Full 90-minute simulations powered by real football performance data. Not a spreadsheet — a simulation.',
  },
]

export default function USPStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{
      background: 'var(--pitch-mid)',
      borderTop: '1px solid rgba(34,197,94,0.1)',
      borderBottom: '1px solid rgba(34,197,94,0.1)',
      padding: 'clamp(48px, 8vw, 96px) clamp(20px, 5vw, 80px)',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '40px',
      }}>
        {USPS.map(({ icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <span style={{ fontSize: '32px' }}>{icon}</span>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              letterSpacing: '0.02em',
              color: 'var(--white)',
            }}>{title}</h3>
            <p style={{
              fontSize: '15px',
              color: 'rgba(240,250,243,0.6)',
              lineHeight: 1.65,
              fontWeight: 300,
            }}>{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
