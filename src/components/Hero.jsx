import { motion } from 'framer-motion'

function PitchSVG() {
  return (
    <svg
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: 0.07, pointerEvents: 'none',
      }}
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect x="0" y="0" width="800" height="500" fill="none" stroke="#22c55e" strokeWidth="2" />
      <line x1="400" y1="0" x2="400" y2="500" stroke="#22c55e" strokeWidth="1.5" />
      <circle cx="400" cy="250" r="80" fill="none" stroke="#22c55e" strokeWidth="1.5" />
      <circle cx="400" cy="250" r="5" fill="#22c55e" />
      <rect x="0" y="140" width="130" height="220" fill="none" stroke="#22c55e" strokeWidth="1.5" />
      <rect x="0" y="185" width="55" height="130" fill="none" stroke="#22c55e" strokeWidth="1" />
      <rect x="670" y="140" width="130" height="220" fill="none" stroke="#22c55e" strokeWidth="1.5" />
      <rect x="745" y="185" width="55" height="130" fill="none" stroke="#22c55e" strokeWidth="1" />
      <path d="M 0 0 Q 15 0 15 15" fill="none" stroke="#22c55e" strokeWidth="1" />
      <path d="M 800 0 Q 785 0 785 15" fill="none" stroke="#22c55e" strokeWidth="1" />
      <path d="M 0 500 Q 15 500 15 485" fill="none" stroke="#22c55e" strokeWidth="1" />
      <path d="M 800 500 Q 785 500 785 485" fill="none" stroke="#22c55e" strokeWidth="1" />
    </svg>
  )
}

export default function Hero() {
  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '80px 24px 60px',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse 80% 70% at 50% 40%, #0f2318 0%, #0a1a0f 100%)',
    }}>
      <PitchSVG />

      {/* Noise grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
        pointerEvents: 'none',
      }} />

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)',
          borderRadius: '100px', padding: '6px 16px', marginBottom: '32px',
          fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
          color: 'var(--green)',
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
        INTERNATIONAL LAUNCH COMING SOON
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(56px, 12vw, 130px)',
          lineHeight: 0.9,
          letterSpacing: '0.01em',
          color: 'var(--white)',
          maxWidth: '900px',
          marginBottom: '8px',
        }}
      >
        LEGENDARY
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(56px, 12vw, 130px)',
          lineHeight: 0.9,
          letterSpacing: '0.01em',
          color: 'var(--green)',
          maxWidth: '900px',
          marginBottom: '8px',
        }}
      >
        CLUB OWNER
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          color: 'rgba(240,250,243,0.7)',
          maxWidth: '540px',
          margin: '28px auto 48px',
          fontWeight: 300,
          lineHeight: 1.7,
        }}
      >
        The football club management game where <strong style={{ color: 'var(--white)', fontWeight: 500 }}>your decisions win</strong> — not your wallet.
        Build the club. Outsmart the competition. Earn real rewards.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <button
          onClick={scrollToQuiz}
          style={{
            background: 'var(--green)', color: 'var(--pitch)',
            border: 'none', borderRadius: '6px',
            padding: '16px 36px', fontSize: '15px', fontWeight: 600,
            fontFamily: 'var(--font-body)',
            cursor: 'pointer', letterSpacing: '0.03em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--green-bright)'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 30px rgba(34,197,94,0.35)'; }}
          onMouseLeave={e => { e.target.style.background = 'var(--green)'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
        >
          What Kind of Manager Are You? →
        </button>
        <a
          href="https://www.youtube.com/watch?v=13Mw-Tjti4s"
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => { window.open('https://www.youtube.com/watch?v=13Mw-Tjti4s', '_blank'); }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'transparent', color: 'var(--white)',
            border: '1px solid rgba(240,250,243,0.25)', borderRadius: '6px',
            padding: '16px 36px', fontSize: '15px', fontWeight: 400,
            fontFamily: 'var(--font-body)',
            cursor: 'pointer', letterSpacing: '0.03em',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(240,250,243,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,250,243,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <span style={{
            width: 28, height: 28, borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '11px',
          }}>▶</span>
          Watch Trailer
        </a>
      </motion.div>

      {/* Stadium visual */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{
          width: '100%',
          maxWidth: '780px',
          margin: '56px auto 0',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(34,197,94,0.15)',
          boxShadow: '0 0 80px rgba(34,197,94,0.08)',
        }}
      >
        <img
          src="/stadium.svg"
          alt="Football stadium at night — aerial view with green pitch and floodlights"
          style={{ width: '100%', display: 'block' }}
        />
        <div style={{
          background: 'rgba(10,26,15,0.85)',
          backdropFilter: 'blur(8px)',
          padding: '12px 20px',
          display: 'flex', alignItems: 'center', gap: '12px',
          borderTop: '1px solid rgba(34,197,94,0.1)',
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', flexShrink: 0, animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: '13px', color: 'rgba(240,250,243,0.55)', fontWeight: 300 }}>
            Season 5 LIVE · Daily matches · Real cash rewards every season
          </span>
          <span style={{
            marginLeft: 'auto', fontSize: '12px', color: 'var(--green)',
            background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
            borderRadius: '100px', padding: '3px 10px', flexShrink: 0,
          }}>
            4.5 ★ App Store
          </span>
        </div>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        style={{
          display: 'flex', gap: 'clamp(24px, 6vw, 80px)',
          marginTop: '64px', flexWrap: 'wrap', justifyContent: 'center',
        }}
      >
        {[
          { val: '2M+', label: 'Active Managers' },
          { val: '90', label: 'Min Match Simulation' },
          { val: '100%', label: 'Skill-Based' },
        ].map(({ val, label }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 52px)', color: 'var(--green)', lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em', marginTop: '6px', textTransform: 'uppercase' }}>{label}</div>
          </div>
        ))}
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}
