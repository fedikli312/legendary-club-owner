export default function Footer() {
  return (
    <footer style={{
      background: 'var(--pitch-mid)',
      borderTop: '1px solid rgba(34,197,94,0.08)',
      padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 80px)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* CTA Banner */}
        <div style={{
          textAlign: 'center',
          padding: 'clamp(40px, 6vw, 72px) clamp(24px, 4vw, 48px)',
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(34,197,94,0.1) 0%, transparent 70%)',
          borderRadius: '16px',
          border: '1px solid rgba(34,197,94,0.15)',
          marginBottom: '64px',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 8vw, 88px)',
            color: 'var(--white)',
            lineHeight: 1,
            marginBottom: '20px',
          }}>
            YOUR CLUB.<br />
            <span style={{ color: 'var(--green)' }}>YOUR CALL.</span>
          </h2>
          <p style={{
            fontSize: '16px', color: 'rgba(240,250,243,0.55)',
            fontWeight: 300, marginBottom: '36px',
          }}>
            Free to download. No pay-to-win. Real rewards for real managers.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://apps.apple.com/tr/app/efsane-ba%C5%9Fkan/id6743401408"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'var(--white)', color: 'var(--pitch)',
                borderRadius: '10px', padding: '14px 28px',
                textDecoration: 'none', fontWeight: 600, fontSize: '14px',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <span style={{ fontSize: '18px' }}>🍎</span> Download on iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.nosurrenderstudio.efsanebaskan"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'transparent', color: 'var(--white)',
                border: '1px solid rgba(240,250,243,0.25)',
                borderRadius: '10px', padding: '14px 28px',
                textDecoration: 'none', fontWeight: 400, fontSize: '14px',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(240,250,243,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,250,243,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <span style={{ fontSize: '18px' }}>▶</span> Get it on Android
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '24px',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px', color: 'var(--green)',
              letterSpacing: '0.05em', marginBottom: '4px',
            }}>
              LEGENDARY CLUB OWNER
            </div>
            <div style={{ fontSize: '13px', color: 'var(--muted)' }}>
              by NoSurrender Studio
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/efsanebaskanapp/' },
              { label: 'nosurrender.studio', href: 'https://nosurrender.studio' },
              { label: 'Privacy Policy', href: 'https://nosurrender.studio/legal/privacy-policy/' },
              { label: 'Terms', href: 'https://nosurrender.studio/legal/terms-of-service/' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--muted)', fontSize: '13px',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--white)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: '32px', paddingTop: '24px',
          borderTop: '1px solid rgba(240,250,243,0.06)',
          fontSize: '12px', color: 'rgba(107,143,119,0.6)',
          textAlign: 'center',
        }}>
          © 2025 NOSURRENDER YAZILIM VE TİCARET A.Ş. · Apple Inc. is not a sponsor of this competition.
        </div>
      </div>
    </footer>
  )
}
