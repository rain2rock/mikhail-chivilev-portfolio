/* Case study page — renders the generic section model from case-data.jsx
   in the warm / bold design language. Reads ?id= from the URL. */

const { COPY, Icon, SmartImage } = window.PortfolioData;
const { CASES, CASE_ORDER, LEAD_ORDER } = window.CaseData;

/* Interior top bar */
function CaseTopBar({ lang, setLang }) {
  const t = COPY[lang];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--ink)', color: 'var(--paper-2)',
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

const wrap = { maxWidth: 1280, margin: '0 auto', padding: '0 40px' };

function SectionTitle({ children }) {
  return (
    <h2 className="tracking-tighter" style={{
      fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.02,
      margin: '0 0 36px', color: 'var(--ink)',
    }}>{children}</h2>
  );
}

/* ---- Section renderers ---- */
function ProseSection({ s, first }) {
  return (
    <section style={{ padding: '64px 0', borderTop: first ? 'none' : '1px solid var(--line)' }}>
      <div className="r-pad" style={wrap}>
        <div className="r-cols-prose" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48 }}>
          <SectionTitle>{s.title}</SectionTitle>
          <p style={{
            fontSize: 'clamp(18px, 1.9vw, 22px)', lineHeight: 1.6, color: 'var(--ink-2)',
            margin: 0, textWrap: 'pretty', whiteSpace: 'pre-line', maxWidth: 760,
          }}>{s.text}</p>
        </div>
      </div>
    </section>
  );
}

function CardsSection({ s, first }) {
  return (
    <section style={{ padding: '64px 0', borderTop: first ? 'none' : '1px solid var(--line)' }}>
      <div className="r-pad" style={wrap}>
        {s.title && <SectionTitle>{s.title}</SectionTitle>}
        <div className="r-2to1" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {s.items.map((it, i) => (
            <div key={i} style={{
              padding: 28, background: 'var(--paper-2)', border: '1px solid var(--line)',
              borderRadius: 'var(--r-lg)',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
                <span className="mono" style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="tracking-tight" style={{ fontSize: 20, fontWeight: 700, margin: 0, color: 'var(--ink)' }}>
                  {it.k}
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)', whiteSpace: 'pre-line', textWrap: 'pretty' }}>
                {it.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImagesSection({ s, fallbackId, onZoom, first }) {
  const cols = s.cols === 3 ? 3 : 2;
  const hasCaption = (i) => s.captions && s.captions[i];
  return (
    <section style={{ padding: s.title ? '64px 0' : '0 0 16px', borderTop: (s.title && !first) ? '1px solid var(--line)' : 'none' }}>
      <div className="r-pad" style={wrap}>
        {s.title && <SectionTitle>{s.title}</SectionTitle>}
        <div className="r-imgs" style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 16 }}>
          {s.images.map((src, i) => (
            <figure key={i} style={{
              margin: 0, background: 'var(--paper-2)', border: '1px solid var(--line)',
              borderRadius: 'var(--r-lg)', overflow: 'hidden',
            }}>
              <SmartImage src={src} alt={hasCaption(i) ? s.captions[i] : ''} aspect={cols === 3 ? '4 / 3' : '16 / 10'} radius="0" onZoom={onZoom} />
              {hasCaption(i) && (
                <figcaption style={{ padding: '12px 16px', fontSize: 13, color: 'var(--ink-3)' }}>
                  {s.captions[i]}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection({ s, first }) {
  const col = (data, isAfter) => (
    <div style={{
      padding: 32, borderRadius: 'var(--r-lg)',
      background: isAfter ? 'var(--accent)' : 'var(--paper-2)',
      color: isAfter ? 'var(--paper-2)' : 'var(--ink-2)',
      border: isAfter ? 'none' : '1px dashed var(--line-2)',
    }}>
      <div className="eyebrow" style={{ color: isAfter ? 'rgba(251,247,239,0.7)' : 'var(--ink-3)', marginBottom: 18 }}>
        {data.title}
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 12 }}>
        {data.items.map((it, i) => (
          <li key={i} style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: 10, fontSize: 16, lineHeight: 1.5 }}>
            <span style={{ color: isAfter ? 'var(--paper-2)' : 'var(--ink-4)', fontWeight: 700 }}>{isAfter ? '✓' : '✗'}</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <section style={{ padding: '64px 0', borderTop: first ? 'none' : '1px solid var(--line)' }}>
      <div className="r-pad" style={wrap}>
        {s.title && <SectionTitle>{s.title}</SectionTitle>}
        <div className="r-2to1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {col(s.before, false)}
          {col(s.after, true)}
        </div>
      </div>
    </section>
  );
}

function renderSection(s, i, fallbackId, onZoom) {
  const first = i === 0;
  if (s.type === 'prose') return <ProseSection key={i} s={s} first={first} />;
  if (s.type === 'cards') return <CardsSection key={i} s={s} first={first} />;
  if (s.type === 'images') return <ImagesSection key={i} s={s} fallbackId={fallbackId} onZoom={onZoom} first={first} />;
  if (s.type === 'beforeafter') return <BeforeAfterSection key={i} s={s} first={first} />;
  return null;
}

/* Fullscreen image viewer */
function Lightbox({ src, alt, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose]);
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(20,18,14,0.92)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, cursor: 'zoom-out',
    }}>
      <button onClick={onClose} aria-label="Close" style={{
        position: 'absolute', top: 20, right: 24, width: 44, height: 44, borderRadius: 999,
        background: 'rgba(251,247,239,0.12)', color: 'var(--paper-2)', display: 'grid', placeItems: 'center',
        fontSize: 22, lineHeight: 1,
      }}>×</button>
      <img src={src} alt={alt || ''} onClick={(e) => e.stopPropagation()} style={{
        maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', borderRadius: 'var(--r-md)',
        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6)',
      }} />
      {alt && (
        <div style={{ position: 'absolute', bottom: 24, left: 0, right: 0, textAlign: 'center',
          fontSize: 13, color: 'rgba(251,247,239,0.7)' }}>{alt}</div>
      )}
    </div>
  );
}

function CaseStudyPage({ id }) {
  const [lang, setLang] = window.usePortfolioLang();
  const [zoom, setZoom] = React.useState(null);
  const entry = CASES[id];
  const c = entry && entry[lang];
  const inDev = id === 'ideals-board-lead';
  const hazard = 'repeating-linear-gradient(45deg, #FFD400 0 14px, #14110E 14px 28px)';

  const goBack = (e) => {
    e.preventDefault();
    try { sessionStorage.setItem('pf-restore', '1'); } catch (_) {}
    window.location.href = 'home.html';
  };

  if (!c) {
    return (
      <div style={{ background: 'var(--bone)', minHeight: '100vh' }}>
        <CaseTopBar lang={lang} setLang={setLang} />
        <div className="r-pad" style={{ maxWidth: 800, margin: '0 auto', padding: '120px 40px', textAlign: 'center' }}>
          <h1 className="tracking-tighter" style={{ fontSize: 64, fontWeight: 800, margin: 0 }}>404</h1>
          <p style={{ fontSize: 18, color: 'var(--ink-3)', marginTop: 16 }}>
            {lang === 'ru' ? 'Кейс не найден.' : 'Case study not found.'}
          </p>
          <a href="work.html" className="link-underline" style={{ fontSize: 15, fontWeight: 600 }}>
            {lang === 'ru' ? '← Все работы' : '← All work'}
          </a>
        </div>
      </div>
    );
  }

  const order = entry.group === 'leadership' ? LEAD_ORDER : CASE_ORDER;
  const idx = order.indexOf(id);
  const nextId = order[(idx + 1) % order.length];
  const nextCase = CASES[nextId][lang];

  return (
    <div style={{ background: 'var(--bone)', color: 'var(--ink)', minHeight: '100%' }}>
      <CaseTopBar lang={lang} setLang={setLang} />

      {inDev && (
        <div style={{ background: 'var(--ink)', color: 'var(--paper-2)' }}>
          <div aria-hidden="true" style={{ height: 12, backgroundImage: hazard }}/>
          <div className="r-pad" style={{
            ...wrap, paddingTop: 22, paddingBottom: 22,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 18, flexWrap: 'wrap', textAlign: 'center',
          }}>
            <span style={{
              fontWeight: 800, fontSize: 16, letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>{lang === 'ru' ? 'Страница в разработке' : 'Page in development'}</span>
            <span style={{ fontSize: 15, color: 'rgba(251,247,239,0.6)' }}>
              {lang === 'ru' ? 'Картинки скоро будут' : 'Images coming soon'}
            </span>
          </div>
          <div aria-hidden="true" style={{ height: 12, backgroundImage: hazard }}/>
        </div>
      )}

      {/* Hero */}
      <section>
        <div className="r-pad" style={{ ...wrap, paddingTop: 40 }}>
          <a href="home.html" onClick={goBack} className="link-underline" style={{
            fontSize: 13, color: 'var(--ink-3)', display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 500, cursor: 'pointer',
          }}>
            <span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}><Icon.arrow /></span>
            {lang === 'ru' ? 'Назад на главную' : 'Back to home'}
          </a>
        </div>

        <div className="r-pad" style={{ ...wrap, paddingTop: 36, paddingBottom: 48 }}>
          <div className="eyebrow eyebrow-accent" style={{ marginBottom: 20 }}>{c.kicker}</div>
          <h1 className="tracking-tighter" style={{
            fontSize: 'clamp(48px, 7vw, 108px)', fontWeight: 800, lineHeight: 0.96, margin: 0, color: 'var(--ink)',
            textWrap: 'balance', maxWidth: 1100,
          }}>{c.title}</h1>
          <p style={{
            fontSize: 'clamp(18px, 2vw, 24px)', lineHeight: 1.5, color: 'var(--ink-2)',
            margin: '28px 0 0', maxWidth: 820, textWrap: 'pretty',
          }}>{c.about}</p>
          {c.website && (
            <a href={c.website} target="_blank" rel="noopener noreferrer" className="link-underline" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20,
              fontSize: 15, fontWeight: 600, color: 'var(--accent)',
            }}>{c.website.replace(/^https?:\/\//, '').replace(/\/$/, '')} <Icon.arrowUpRight /></a>
          )}
        </div>

        {entry.intro && (
          <div className="r-pad" style={{ ...wrap, paddingBottom: 8 }}>
            <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <SmartImage src={entry.intro} fallbackId={entry.art} alt={c.title} aspect="21 / 9" radius="0" onZoom={(src, alt) => setZoom({ src, alt })} />
            </div>
          </div>
        )}
      </section>

      {/* Body sections */}
      {c.sections.map((s, i) => renderSection(s, i, entry.art, (src, alt) => setZoom({ src, alt })))}

      {/* Next project */}
      <a href={`case.html?id=${nextId}`} style={{
        display: 'block', background: 'var(--ink)', color: 'var(--paper-2)', borderTop: '1px solid var(--line)',
      }}
      onMouseEnter={(e) => { const el = e.currentTarget.querySelector('.next-title'); if (el) el.style.transform = 'translateX(8px)'; }}
      onMouseLeave={(e) => { const el = e.currentTarget.querySelector('.next-title'); if (el) el.style.transform = 'none'; }}
      >
        <div className="r-pad r-next" style={{ ...wrap, paddingTop: 72, paddingBottom: 72, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40 }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--accent-2)', marginBottom: 16 }}>
              {entry.group === 'leadership' ? (lang === 'ru' ? 'Следующий кейс' : 'Next case') : (lang === 'ru' ? 'Следующий проект' : 'Next project')}
            </div>
            <div className="next-title tracking-tighter" style={{
              fontSize: 'clamp(36px, 5vw, 76px)', fontWeight: 800, lineHeight: 0.98,
              transition: 'transform 0.4s cubic-bezier(.7,0,.2,1)',
            }}>{nextCase.title}</div>
          </div>
          <span style={{
            width: 64, height: 64, borderRadius: 999, flexShrink: 0,
            background: 'var(--accent)', color: 'var(--paper-2)', display: 'grid', placeItems: 'center',
          }}><span style={{ transform: 'scale(1.6)' }}><Icon.arrow /></span></span>
        </div>
      </a>

      {/* Contact */}
      <section style={{ background: 'var(--bone-2)' }}>
        <div className="r-pad" style={{ ...wrap, paddingTop: 96, paddingBottom: 56 }}>
          <div className="eyebrow eyebrow-accent" style={{ marginBottom: 16 }}>{COPY[lang].sections.contactK}</div>
          <h2 className="tracking-tighter" style={{
            fontSize: 'clamp(44px, 6vw, 92px)', fontWeight: 800, lineHeight: 0.95, margin: '0 0 32px', color: 'var(--ink)',
          }}>
            {lang === 'ru'
              ? <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 700 }}>Мои контакты</span>
              : <>Let's <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 700 }}>talk.</span></>
            }
          </h2>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="mailto:chivilev.mikhail@gmail.com" style={{
              padding: '14px 22px', borderRadius: 999, background: 'var(--ink)', color: 'var(--paper-2)',
              fontSize: 15, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 10,
            }}><Icon.mail /> chivilev.mikhail@gmail.com</a>
            <a href="https://www.linkedin.com/in/mikhail-chivilev-a3b224b5/" target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 22px', borderRadius: 999, background: 'transparent', color: 'var(--ink)',
              border: '1px solid var(--ink)', fontSize: 15, fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}><Icon.linkedin /> LinkedIn</a>
            <a href="https://t.me/RainRock" target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 22px', borderRadius: 999, background: 'transparent', color: 'var(--ink)',
              border: '1px solid var(--ink)', fontSize: 15, fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}><Icon.send /> Telegram</a>
            <a href={COPY[lang].cvLink} target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 22px', borderRadius: 999, background: 'var(--accent)', color: 'var(--paper-2)',
              fontSize: 15, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 10,
            }}><Icon.download /> {lang === 'ru' ? 'Скачать резюме (PDF)' : 'Download CV (PDF)'}</a>
          </div>
        </div>
        <footer className="r-pad r-foot" style={{
          borderTop: '1px solid var(--line)', padding: '24px 40px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1280, margin: '0 auto',
        }}>
          <div className="mono" style={{ fontSize: 12, color: 'var(--ink-3)' }}>© 2026 {COPY[lang].name} — {COPY[lang].role}</div>
          <a href="home.html#top" className="mono link-underline" style={{ fontSize: 12, color: 'var(--ink-3)' }}>
            {lang === 'ru' ? '↑ На главную' : '↑ Back to top'}
          </a>
        </footer>
      </section>
      {zoom && <Lightbox src={zoom.src} alt={zoom.alt} onClose={() => setZoom(null)} />}
    </div>
  );
}

window.CaseStudyPage = CaseStudyPage;
