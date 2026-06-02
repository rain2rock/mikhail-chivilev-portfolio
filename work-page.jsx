/* Work index — all projects, editorial list. */

const { COPY, PROJECTS, ArtworkPlaceholder, SmartImage, Icon } = window.PortfolioData;
const { CASE_ORDER } = window.CaseData;

function WorkTopBar({ lang, setLang }) {
  const t = COPY[lang];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'var(--ink)', color: 'var(--paper-2)',
    }}>
      <div className="r-bar" style={{
        maxWidth: 1280, margin: '0 auto', padding: '14px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <a href="home.html#top" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>{t.name}</span>
        </a>
        <nav className="r-topnav" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {Object.entries(t.nav).map(([k, v]) => (
            <a key={k} href={`home.html#${k}`} style={{
              padding: '8px 14px', borderRadius: 999, fontSize: 13, fontWeight: 500,
              color: 'rgba(251,247,239,0.65)', transition: 'color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--paper-2)'; e.currentTarget.style.background = 'rgba(251,247,239,0.06)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(251,247,239,0.65)'; e.currentTarget.style.background = 'transparent'; }}
            >{v}</a>
          ))}
        </nav>
        <div style={{
          display: 'inline-flex', padding: 3, gap: 2,
          border: '1px solid rgba(251,247,239,0.16)', borderRadius: 999,
        }}>
          {['en', 'ru'].map(L => (
            <button key={L} onClick={() => setLang(L)} style={{
              padding: '5px 12px', borderRadius: 999, fontSize: 11, fontWeight: 700,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              background: lang === L ? 'var(--paper-2)' : 'transparent',
              color: lang === L ? 'var(--ink)' : 'rgba(251,247,239,0.55)', transition: 'all 0.2s',
            }}>{L}</button>
          ))}
        </div>
      </div>
    </header>
  );
}

function WorkIndex() {
  const [lang, setLang] = window.usePortfolioLang();
  const t = COPY[lang];
  const byId = Object.fromEntries(PROJECTS[lang].map(p => [p.id, p]));
  const list = CASE_ORDER.map(id => byId[id]).filter(Boolean);
  const [hover, setHover] = React.useState(null);

  return (
    <div style={{ background: 'var(--bone)', color: 'var(--ink)', minHeight: '100%' }}>
      <WorkTopBar lang={lang} setLang={setLang}/>

      <section style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="r-pad r-sec-pad" style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 40px 56px' }}>
          <div className="eyebrow eyebrow-accent" style={{ marginBottom: 20 }}>
            {lang === 'ru' ? 'Избранные работы' : 'Selected work'}
          </div>
          <h1 className="tracking-tighter" style={{
            fontSize: 'clamp(56px, 8vw, 128px)', fontWeight: 800, lineHeight: 0.92, margin: 0, color: 'var(--ink)',
          }}>
            {lang === 'ru' ? 'Работы' : 'Work'}
          </h1>
          <p style={{ fontSize: 20, lineHeight: 1.5, color: 'var(--ink-2)', margin: '28px 0 0', maxWidth: 680, textWrap: 'pretty' }}>
            {lang === 'ru'
              ? 'Кейсы, которые лучше всего показывают, как я мыслю и довожу сложные продукты до результата.'
              : 'The cases that best show how I think and ship complex products end to end.'}
          </p>
        </div>
      </section>

      {/* Editorial rows with peeking artwork */}
      <section>
        <div className="r-pad" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
          {list.map((p, i) => (
            <a key={p.id} href={`case.html?id=${p.id}`}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
              className="r-workrow"
              style={{
                display: 'grid', gridTemplateColumns: '80px 1fr 420px 56px', gap: 32, alignItems: 'center',
                padding: '36px 0',
                borderBottom: '1px solid var(--line)',
                color: hover === i ? 'var(--accent)' : 'var(--ink)',
                transition: 'color 0.3s',
              }}>
              <span className="mono" style={{ fontSize: 14, color: hover === i ? 'var(--accent)' : 'var(--ink-4)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="tracking-tighter" style={{ fontSize: 'clamp(36px, 4.4vw, 60px)', fontWeight: 700, lineHeight: 1 }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 12 }}>
                  {p.sub} · {p.tags.join(' · ')}
                </div>
              </div>
              <div className="r-workimg" style={{
                borderRadius: 'var(--r-lg)', overflow: 'hidden',
                opacity: hover === i ? 1 : 0.85,
                transform: hover === i ? 'scale(1.02)' : 'scale(1)',
                transition: 'opacity 0.3s, transform 0.3s',
              }}>
                <SmartImage src={p.image} fallbackId={p.art} alt={p.title} aspect="16 / 9"/>
              </div>
              <span className="r-workarrow" style={{
                justifySelf: 'end',
                transform: hover === i ? 'translateX(4px)' : 'none', transition: 'transform 0.3s',
              }}><Icon.arrowUpRight/></span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section style={{ background: 'var(--bone-2)', borderTop: '1px solid var(--line)', marginTop: 0 }}>
        <div className="r-pad r-sec-pad" style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 40px' }}>
          <h2 className="tracking-tighter" style={{
            fontSize: 'clamp(40px, 5vw, 80px)', fontWeight: 800, lineHeight: 0.95, margin: '0 0 28px', color: 'var(--ink)',
          }}>
            {lang === 'ru'
              ? <>Мои <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>контакты</span></>
              : <>Let's <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>talk.</span></>
            }
          </h2>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="mailto:chivilev.mikhail@gmail.com" style={{
              padding: '14px 22px', borderRadius: 999, background: 'var(--ink)', color: 'var(--paper-2)',
              fontSize: 15, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 10,
            }}><Icon.mail/> chivilev.mikhail@gmail.com</a>
            <a href="https://www.linkedin.com/in/mikhail-chivilev-a3b224b5/" target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 22px', borderRadius: 999, background: 'transparent', color: 'var(--ink)',
              border: '1px solid var(--ink)', fontSize: 15, fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}><Icon.linkedin/> LinkedIn</a>
            <a href="https://t.me/RainRock" target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 22px', borderRadius: 999, background: 'transparent', color: 'var(--ink)',
              border: '1px solid var(--ink)', fontSize: 15, fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}><Icon.send/> Telegram</a>
            <a href={t.cvLink} target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 22px', borderRadius: 999, background: 'var(--accent)', color: 'var(--paper-2)',
              fontSize: 15, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 10,
            }}><Icon.download/> {lang === 'ru' ? 'Скачать резюме (PDF)' : 'Download CV (PDF)'}</a>
          </div>
        </div>
        <footer className="r-pad r-foot" style={{
          borderTop: '1px solid var(--line)', padding: '24px 40px',
          display: 'flex', justifyContent: 'space-between', maxWidth: 1280, margin: '0 auto',
        }}>
          <div className="mono" style={{ fontSize: 12, color: 'var(--ink-3)' }}>© 2026 {t.name} — {t.role}</div>
          <a href="home.html#top" className="mono link-underline" style={{ fontSize: 12, color: 'var(--ink-3)' }}>
            {lang === 'ru' ? '↑ На главную' : '↑ Back to top'}
          </a>
        </footer>
      </section>
    </div>
  );
}

window.WorkIndex = WorkIndex;
