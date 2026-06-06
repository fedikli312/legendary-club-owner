import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const QUESTIONS = [
  {
    id: 0,
    text: 'Your star striker is injured. Transfer window opens in 3 days. You do...',
    options: [
      { label: 'Sign a replacement immediately — squad depth wins titles', type: 'builder' },
      { label: 'Shuffle the formation, make the squad adapt', type: 'tactician' },
      { label: 'Promote the young talent from my academy', type: 'scout' },
    ],
  },
  {
    id: 1,
    text: "You're sitting 3rd, 2 points off the top. Season ends in 4 matches. Your move?",
    options: [
      { label: 'Upgrade the stadium — revenue funds the title push', type: 'builder' },
      { label: 'Study the leaders\' match data and exploit their weaknesses', type: 'tactician' },
      { label: 'Loan a proven winner from a higher league', type: 'scout' },
    ],
  },
  {
    id: 2,
    text: 'Transfer budget dropped by 20%. How do you rebuild?',
    options: [
      { label: 'Cut costs, double down on sponsorship deals', type: 'builder' },
      { label: 'No budget, no problem — squeeze more from the current squad', type: 'tactician' },
      { label: 'Find undervalued players with high potential', type: 'scout' },
    ],
  },
  {
    id: 3,
    text: 'A new formation is trending in the top leagues. You...',
    options: [
      { label: 'Ignore it — stability beats trends. My system works.', type: 'builder' },
      { label: 'Immediately test it in training and adapt', type: 'tactician' },
      { label: 'Scout players who fit that system and plan ahead', type: 'scout' },
    ],
  },
  {
    id: 4,
    text: "You've just won promotion. First thing you do as a top-flight manager?",
    options: [
      { label: 'Expand the ground and lock in a major shirt sponsor', type: 'builder' },
      { label: 'Study every opponent. I need data before I spend a penny.', type: 'tactician' },
      { label: 'Hunt the gems other clubs have missed in the transfer market', type: 'scout' },
    ],
  },
]

const RESULTS = {
  tactician: {
    title: 'THE TACTICIAN',
    emoji: '🧠',
    color: '#3b82f6',
    desc: "You're the gaffer other managers hate to face. Systems, data, formations — you squeeze every last point from what you've got. You don't need the biggest budget; you need the right setup. Your whiteboard does more damage than any chequebook.",
    trait: 'Formation Mastermind',
  },
  scout: {
    title: 'THE SCOUT',
    emoji: '🔭',
    color: '#f59e0b',
    desc: "While others overpay for names, you're watching the U21s and hunting value where no one else looks. You see the player before the world does. Half the squad you build will be sold for 3x the fee — the other half wins you the league.",
    trait: 'Market Genius',
  },
  builder: {
    title: 'THE BUILDER',
    emoji: '🏗️',
    color: '#22c55e',
    desc: "Trophies aren't won on match day — they're built over years. You know that a full stadium, the right sponsors, and a proper academy create winners long before kick-off. The club you leave behind will be competing at the top for a generation.",
    trait: 'Club Architect',
  },
}

function ProgressBar({ current, total }) {
  return (
    <div style={{ display: 'flex', gap: '6px', marginBottom: '32px' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            flex: 1, height: '3px', borderRadius: '2px',
            background: i <= current ? 'var(--green)' : 'rgba(240,250,243,0.12)',
            transition: 'background 0.4s ease',
          }}
        />
      ))}
    </div>
  )
}

export default function ManagerQuiz() {
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)
  const [selected, setSelected] = useState(null)

  const handleAnswer = (type) => {
    if (selected !== null) return
    setSelected(type)
    setTimeout(() => {
      const next = [...answers, type]
      if (current + 1 < QUESTIONS.length) {
        setAnswers(next)
        setCurrent(c => c + 1)
        setSelected(null)
      } else {
        // Tally
        const counts = next.reduce((acc, t) => ({ ...acc, [t]: (acc[t] || 0) + 1 }), {})
        const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]
        setResult(winner)
      }
    }, 600)
  }

  const restart = () => {
    setStarted(false)
    setCurrent(0)
    setAnswers([])
    setResult(null)
    setSelected(null)
  }

  const q = QUESTIONS[current]

  return (
    <section
      id="quiz"
      style={{
        background: 'var(--pitch-mid)',
        padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 80px)',
        borderTop: '1px solid rgba(34,197,94,0.08)',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '13px', letterSpacing: '0.15em', color: 'var(--green)', marginBottom: '12px' }}>
            INTERACTIVE
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 7vw, 68px)',
            lineHeight: 1,
            color: 'var(--white)',
            marginBottom: '16px',
          }}>
            WHAT KIND OF<br />MANAGER ARE YOU?
          </h2>
          <p style={{ color: 'rgba(240,250,243,0.5)', fontSize: '15px', fontWeight: 300 }}>
            5 questions. One manager type. No wrong answers.
          </p>
        </div>

        {/* Quiz card */}
        <AnimatePresence mode="wait">
          {!started && !result && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                background: 'rgba(240,250,243,0.04)',
                border: '1px solid rgba(34,197,94,0.2)',
                borderRadius: '16px',
                padding: 'clamp(32px, 5vw, 56px)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>⚽</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 5vw, 44px)',
                color: 'var(--white)',
                marginBottom: '16px',
              }}>
                FIND YOUR STYLE
              </h3>
              <p style={{ color: 'rgba(240,250,243,0.55)', fontSize: '15px', lineHeight: 1.7, marginBottom: '36px', fontWeight: 300 }}>
                Are you the master tactician who squeezes every drop from a formation?<br />
                The ruthless scout who spots talent before anyone else?<br />
                Or the builder who grows clubs into empires?
              </p>
              <button
                onClick={() => setStarted(true)}
                style={{
                  background: 'var(--green)', color: 'var(--pitch)',
                  border: 'none', borderRadius: '8px',
                  padding: '16px 48px', fontSize: '15px', fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer', letterSpacing: '0.04em',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.target.style.background = 'var(--green-bright)'; e.target.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.target.style.background = 'var(--green)'; e.target.style.transform = 'translateY(0)'; }}
              >
                START THE QUIZ
              </button>
            </motion.div>
          )}

          {started && !result && (
            <motion.div
              key={`q-${current}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(240,250,243,0.04)',
                border: '1px solid rgba(34,197,94,0.2)',
                borderRadius: '16px',
                padding: 'clamp(28px, 5vw, 48px)',
              }}
            >
              <ProgressBar current={current} total={QUESTIONS.length} />
              <div style={{
                fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em',
                marginBottom: '16px',
              }}>
                QUESTION {current + 1} OF {QUESTIONS.length}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px, 4vw, 32px)',
                color: 'var(--white)',
                lineHeight: 1.2,
                marginBottom: '32px',
              }}>
                {q.text}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {q.options.map((opt, i) => {
                  const isSelected = selected === opt.type
                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.type)}
                      disabled={selected !== null}
                      style={{
                        background: isSelected ? 'rgba(34,197,94,0.15)' : 'rgba(240,250,243,0.04)',
                        border: `1px solid ${isSelected ? 'rgba(34,197,94,0.6)' : 'rgba(240,250,243,0.1)'}`,
                        borderRadius: '10px',
                        padding: '16px 20px',
                        color: isSelected ? 'var(--green-bright)' : 'rgba(240,250,243,0.8)',
                        fontSize: '15px',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 400,
                        textAlign: 'left',
                        cursor: selected !== null ? 'default' : 'pointer',
                        transition: 'all 0.2s',
                        lineHeight: 1.5,
                      }}
                      onMouseEnter={e => {
                        if (selected === null) {
                          e.currentTarget.style.background = 'rgba(34,197,94,0.08)'
                          e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'
                          e.currentTarget.style.color = 'var(--white)'
                        }
                      }}
                      onMouseLeave={e => {
                        if (selected === null) {
                          e.currentTarget.style.background = 'rgba(240,250,243,0.04)'
                          e.currentTarget.style.borderColor = 'rgba(240,250,243,0.1)'
                          e.currentTarget.style.color = 'rgba(240,250,243,0.8)'
                        }
                      }}
                    >
                      {opt.label}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              style={{
                background: 'rgba(240,250,243,0.04)',
                border: `1px solid ${RESULTS[result].color}44`,
                borderRadius: '16px',
                padding: 'clamp(32px, 5vw, 56px)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '72px', marginBottom: '20px' }}>{RESULTS[result].emoji}</div>
              <div style={{
                display: 'inline-block',
                background: `${RESULTS[result].color}22`,
                border: `1px solid ${RESULTS[result].color}55`,
                borderRadius: '100px',
                padding: '6px 18px',
                fontSize: '12px',
                letterSpacing: '0.12em',
                color: RESULTS[result].color,
                marginBottom: '20px',
              }}>
                {RESULTS[result].trait}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 8vw, 72px)',
                color: RESULTS[result].color,
                lineHeight: 1,
                marginBottom: '24px',
              }}>
                {RESULTS[result].title}
              </h3>
              <p style={{
                fontSize: '16px',
                color: 'rgba(240,250,243,0.7)',
                lineHeight: 1.75,
                fontWeight: 300,
                marginBottom: '40px',
                maxWidth: '520px',
                margin: '0 auto 40px',
              }}>
                {RESULTS[result].desc}
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://apps.apple.com/tr/app/efsane-ba%C5%9Fkan/id6743401408"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'var(--green)', color: 'var(--pitch)',
                    border: 'none', borderRadius: '8px',
                    padding: '14px 32px', fontSize: '14px', fontWeight: 600,
                    fontFamily: 'var(--font-body)',
                    cursor: 'pointer', letterSpacing: '0.04em',
                    textDecoration: 'none', display: 'inline-block',
                    transition: 'all 0.2s',
                  }}
                >
                  Play Free on iOS →
                </a>
                <button
                  onClick={restart}
                  style={{
                    background: 'transparent', color: 'rgba(240,250,243,0.5)',
                    border: '1px solid rgba(240,250,243,0.15)', borderRadius: '8px',
                    padding: '14px 32px', fontSize: '14px', fontWeight: 400,
                    fontFamily: 'var(--font-body)',
                    cursor: 'pointer', letterSpacing: '0.04em',
                    transition: 'all 0.2s',
                  }}
                >
                  Try Again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
