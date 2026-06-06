export default function GameMockup() {
  return (
    <div style={{
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px',
      fontFamily: 'var(--font-body)',
    }}>

      {/* Screen 1: League Table */}
      <div style={{ background: '#0a160d', borderRadius: '12px', border: '1px solid #1a3822', overflow: 'hidden' }}>
        <div style={{ background: '#0f2318', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #1a3822' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
          <span style={{ color: '#6b8f77', fontSize: '11px', letterSpacing: '.08em' }}>SEASON 5 · WEEK 8</span>
          <span style={{ marginLeft: 'auto', color: '#22c55e', fontSize: '11px', fontWeight: 600 }}>LIVE</span>
        </div>
        <div style={{ padding: '8px 0' }}>
          {/* Header */}
          <div style={{ padding: '4px 12px', display: 'grid', gridTemplateColumns: '18px 1fr 28px 28px 28px', gap: '4px', marginBottom: '2px' }}>
            <span style={{ color: '#6b8f77', fontSize: '10px' }}>#</span>
            <span style={{ color: '#6b8f77', fontSize: '10px' }}>Club</span>
            <span style={{ color: '#6b8f77', fontSize: '10px', textAlign: 'center' }}>W</span>
            <span style={{ color: '#6b8f77', fontSize: '10px', textAlign: 'center' }}>L</span>
            <span style={{ color: '#6b8f77', fontSize: '10px', textAlign: 'center' }}>PTS</span>
          </div>
          {/* You - highlighted */}
          <div style={{ padding: '7px 12px', display: 'grid', gridTemplateColumns: '18px 1fr 28px 28px 28px', gap: '4px', alignItems: 'center', background: 'rgba(34,197,94,0.1)', borderLeft: '2px solid #22c55e' }}>
            <span style={{ color: '#22c55e', fontSize: '12px', fontWeight: 700 }}>1</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, color: '#060e0a', flexShrink: 0 }}>FC</div>
              <span style={{ color: '#f0faf3', fontSize: '12px', fontWeight: 600 }}>Your Club</span>
              <span style={{ fontSize: '9px', background: 'rgba(34,197,94,0.2)', color: '#22c55e', borderRadius: '4px', padding: '1px 5px' }}>YOU</span>
            </div>
            <span style={{ color: '#f0faf3', fontSize: '12px', textAlign: 'center' }}>7</span>
            <span style={{ color: '#f0faf3', fontSize: '12px', textAlign: 'center' }}>1</span>
            <span style={{ color: '#22c55e', fontSize: '13px', fontWeight: 700, textAlign: 'center' }}>21</span>
          </div>
          {[
            { rank: 2, abbr: 'BL', bg: '#1e3a5f', tc: '#7eb3e0', name: 'Blue Lions', w: 6, l: 2, pts: 18 },
            { rank: 3, abbr: 'RA', bg: '#3b1f1f', tc: '#e07e7e', name: 'Red Arrow', w: 5, l: 3, pts: 15 },
            { rank: 4, abbr: 'GE', bg: '#2a2a1f', tc: '#c9b86a', name: 'Gold Eagles', w: 4, l: 4, pts: 12 },
            { rank: 5, abbr: 'TC', bg: '#1f2a2a', tc: '#6ab8b8', name: 'Teal City', w: 3, l: 5, pts: 9 },
          ].map(({ rank, abbr, bg, tc, name, w, l, pts }) => (
            <div key={rank} style={{ padding: '7px 12px', display: 'grid', gridTemplateColumns: '18px 1fr 28px 28px 28px', gap: '4px', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <span style={{ color: '#a3b8ac', fontSize: '12px' }}>{rank}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', color: tc, flexShrink: 0 }}>{abbr}</div>
                <span style={{ color: '#a3b8ac', fontSize: '12px' }}>{name}</span>
              </div>
              <span style={{ color: '#a3b8ac', fontSize: '12px', textAlign: 'center' }}>{w}</span>
              <span style={{ color: '#a3b8ac', fontSize: '12px', textAlign: 'center' }}>{l}</span>
              <span style={{ color: '#a3b8ac', fontSize: '13px', fontWeight: 600, textAlign: 'center' }}>{pts}</span>
            </div>
          ))}
        </div>
        <div style={{ margin: '8px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '8px', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '14px' }}>🏆</span>
          <div>
            <div style={{ color: '#f59e0b', fontSize: '11px', fontWeight: 600 }}>1st place reward</div>
            <div style={{ color: '#a3b8ac', fontSize: '10px' }}>Season ends in 3 days</div>
          </div>
          <div style={{ marginLeft: 'auto', color: '#f59e0b', fontSize: '12px', fontWeight: 700 }}>TOP PRIZE</div>
        </div>
      </div>

      {/* Screen 2: Lineup */}
      <div style={{ background: '#0a160d', borderRadius: '12px', border: '1px solid #1a3822', overflow: 'hidden' }}>
        <div style={{ background: '#0f2318', padding: '10px 12px', borderBottom: '1px solid #1a3822' }}>
          <span style={{ color: '#f0faf3', fontSize: '12px', fontWeight: 600 }}>Lineup · 4-3-3</span>
        </div>
        {/* Mini pitch */}
        <div style={{ position: 'relative', margin: '10px', borderRadius: '8px', overflow: 'hidden', background: '#0f5c1a', aspectRatio: '3/4' }}>
          <div style={{ position: 'absolute', inset: '8px', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '2px' }} />
          <div style={{ position: 'absolute', left: '8px', right: '8px', top: '50%', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)' }} />
          <div style={{ position: 'absolute', left: '8px', right: '8px', top: '8px', height: '22%', border: '1px solid rgba(255,255,255,0.2)' }} />
          {/* GK */}
          <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#f59e0b', border: '2px solid #0a160d', margin: '0 auto 2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 700, color: '#0a160d' }}>GK</div>
            <span style={{ color: '#f0faf3', fontSize: '8px' }}>Reyes</span>
          </div>
          {/* DEF */}
          <div style={{ position: 'absolute', bottom: '22%', left: 0, right: 0, display: 'flex', justifyContent: 'space-around', padding: '0 6px' }}>
            {[['LB','Park'],['CB','Silva'],['CB','Müller'],['RB','Kane']].map(([pos, name]) => (
              <div key={pos} style={{ textAlign: 'center' }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#22c55e', border: '2px solid #0a160d', margin: '0 auto 2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', fontWeight: 700, color: '#0a160d' }}>{pos}</div>
                <span style={{ color: '#f0faf3', fontSize: '7px' }}>{name}</span>
              </div>
            ))}
          </div>
          {/* MID */}
          <div style={{ position: 'absolute', bottom: '44%', left: 0, right: 0, display: 'flex', justifyContent: 'space-around', padding: '0 14px' }}>
            {[['CM','Lorca'],['DM','Asante'],['CM','Diaz']].map(([pos, name]) => (
              <div key={pos} style={{ textAlign: 'center' }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#22c55e', border: '2px solid #0a160d', margin: '0 auto 2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', fontWeight: 700, color: '#0a160d' }}>{pos}</div>
                <span style={{ color: '#f0faf3', fontSize: '7px' }}>{name}</span>
              </div>
            ))}
          </div>
          {/* FWD */}
          <div style={{ position: 'absolute', bottom: '64%', left: 0, right: 0, display: 'flex', justifyContent: 'space-around', padding: '0 10px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#22c55e', border: '2px solid #0a160d', margin: '0 auto 2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', fontWeight: 700, color: '#0a160d' }}>LW</div>
              <span style={{ color: '#f0faf3', fontSize: '7px' }}>Osei</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#f59e0b', border: '2px solid #0a160d', margin: '0 auto 2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', fontWeight: 700, color: '#0a160d' }}>ST</div>
              <span style={{ color: '#f59e0b', fontSize: '7px', fontWeight: 600 }}>Gomez ★</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#22c55e', border: '2px solid #0a160d', margin: '0 auto 2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', fontWeight: 700, color: '#0a160d' }}>RW</div>
              <span style={{ color: '#f0faf3', fontSize: '7px' }}>Yilmaz</span>
            </div>
          </div>
        </div>
        <div style={{ padding: '0 10px 10px', display: 'flex', gap: '8px' }}>
          {[['84','AVG OVR','#22c55e','rgba(34,197,94,0.08)','rgba(34,197,94,0.15)'],['ATK','FOCUS','#f59e0b','rgba(245,158,11,0.08)','rgba(245,158,11,0.15)'],['11','PLAYERS','#22c55e','rgba(34,197,94,0.08)','rgba(34,197,94,0.15)']].map(([val, label, color, bg, border]) => (
            <div key={label} style={{ flex: 1, background: bg, border: `1px solid ${border}`, borderRadius: '6px', padding: '6px', textAlign: 'center' }}>
              <div style={{ color, fontSize: '15px', fontWeight: 700 }}>{val}</div>
              <div style={{ color: '#6b8f77', fontSize: '9px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Screen 3: Transfer Market */}
      <div style={{ background: '#0a160d', borderRadius: '12px', border: '1px solid #1a3822', overflow: 'hidden' }}>
        <div style={{ background: '#0f2318', padding: '10px 12px', borderBottom: '1px solid #1a3822' }}>
          <span style={{ color: '#f0faf3', fontSize: '12px', fontWeight: 600 }}>Transfer Market</span>
        </div>
        <div style={{ padding: '8px' }}>
          {[
            { emoji: '⚡', name: "K. Mbappé", rating: 94, ratingBg: 'rgba(245,158,11,0.2)', ratingColor: '#f59e0b', pos: 'ST · France', price: '€89M', bars: [97, 92, 95], barLabels: ['PAC','SHT','DRB'], featured: true },
            { emoji: '🛡️', name: 'V. van Dijk', rating: 91, ratingBg: 'rgba(34,197,94,0.15)', ratingColor: '#22c55e', pos: 'CB · Netherlands', price: '€52M', bars: [93, 90, 88], barLabels: ['DEF','PHY','HED'], featured: false },
            { emoji: '🎯', name: 'B. Fernandes', rating: 88, ratingBg: 'rgba(34,197,94,0.15)', ratingColor: '#22c55e', pos: 'CAM · Portugal', price: '€41M', bars: [85, 88, 91], barLabels: ['PAS','SHT','VIS'], featured: false },
          ].map(({ emoji, name, rating, ratingBg, ratingColor, pos, price, bars, barLabels, featured }) => (
            <div key={name} style={{ background: '#0f2318', borderRadius: '8px', padding: '8px', marginBottom: '6px', border: featured ? '1px solid rgba(245,158,11,0.3)' : '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: 36, height: 36, borderRadius: '8px', background: '#1a3822', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>{emoji}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                    <span style={{ color: '#f0faf3', fontSize: '12px', fontWeight: 600 }}>{name}</span>
                    <span style={{ fontSize: '9px', background: ratingBg, color: ratingColor, borderRadius: '3px', padding: '1px 4px' }}>{rating}</span>
                  </div>
                  <span style={{ color: '#6b8f77', fontSize: '10px' }}>{pos}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#22c55e', fontSize: '11px', fontWeight: 700 }}>{price}</div>
                  <div style={{ background: featured ? '#22c55e' : 'rgba(34,197,94,0.15)', color: featured ? '#060e0a' : '#22c55e', fontSize: '9px', fontWeight: 700, padding: '2px 7px', borderRadius: '4px', marginTop: '2px', border: featured ? 'none' : '1px solid rgba(34,197,94,0.3)' }}>BID</div>
                </div>
              </div>
              <div style={{ marginTop: '6px', display: 'flex', gap: '4px' }}>
                {bars.map((val, i) => (
                  <div key={i} style={{ flex: 1 }}>
                    <div style={{ color: '#6b8f77', fontSize: '9px', marginBottom: '2px' }}>{barLabels[i]}</div>
                    <div style={{ height: '3px', background: '#1a3822', borderRadius: '2px' }}>
                      <div style={{ height: '100%', width: `${val}%`, background: '#22c55e', borderRadius: '2px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)', borderRadius: '6px', padding: '7px 10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ color: '#6b8f77', fontSize: '10px' }}>Transfer Budget</span>
              <span style={{ color: '#22c55e', fontSize: '10px', fontWeight: 600 }}>€120M remaining</span>
            </div>
            <div style={{ height: '4px', background: '#1a3822', borderRadius: '2px' }}>
              <div style={{ height: '100%', width: '58%', background: '#22c55e', borderRadius: '2px' }} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
