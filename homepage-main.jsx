/* Main Homepage — confident & bold direction.
   Renders the full page from hero → contact at 1440px design width.
   Uses window.PortfolioData (from data.jsx). */

const { COPY, EXPERIENCES, PROJECTS, LEADERSHIP, ArtworkPlaceholder, SmartImage, Icon } = window.PortfolioData;

/* Bold metric tokens (numbers, %, ranges) and key product terms inside detail text. */
const BOLD_RE = /(\b(?:Ant Design|Admiral|Shopify Polaris|Polaris|Storybook|RICE|CJM|JTBD|PDF Viewer|Meeting Flow|Jira|MAU|Information Architecture)\b|[−~]?\d[\d .,]*(?:%|\+|K|→\s?\d[\d.,]*[%+K]*|[–-]\d[\d.,]*[%+K]*)?(?:\s?(?:months?|mo|мес(?:яцев|яца)?|years?|yrs?|лет|года?|days?|ч|h))?)/g;
function boldify(text) {
  return String(text).split(BOLD_RE).map((p, i) =>
    i % 2 === 1
      ? <strong key={i} style={{ color: 'var(--ink)', fontWeight: 700 }}>{p}</strong>
      : p
  );
}

/* ---------------------- Hooks --------------------------------- */
function useRotator(items, period = 2200) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % items.length), period);
    return () => clearInterval(t);
  }, [items.length, period]);
  return items[i];
}

/* ---------------------- Top bar (minimal) ------------------- */
function TopBar({ lang, setLang }) {
  const t = COPY[lang];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--ink)', color: 'var(--paper-2)',
    }}>
      <div className="r-bar" style={{
        maxWidth: 1280, margin: '0 auto', padding: '14px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24,
      }}>
        {/* Brand — just name */}
        <a href="home.html#top" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>{t.name}</span>
        </a>

        {/* Nav */}
        <nav className="r-topnav" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {Object.entries(t.nav).map(([k, v]) => (
            <a key={k} href={`home.html#${k}`} style={{
              padding: '8px 14px', borderRadius: 999,
              fontSize: 13, fontWeight: 500,
              color: 'rgba(251,247,239,0.65)',
              transition: 'color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--paper-2)';
              e.currentTarget.style.background = 'rgba(251,247,239,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(251,247,239,0.65)';
              e.currentTarget.style.background = 'transparent';
            }}
            >{v}</a>
          ))}
        </nav>

        {/* Lang toggle only */}
        <div style={{
          display: 'inline-flex', padding: 3, gap: 2,
          border: '1px solid rgba(251,247,239,0.16)', borderRadius: 999,
        }}>
          {['en', 'ru'].map(L => (
            <button key={L} onClick={() => setLang(L)}
              style={{
                padding: '5px 12px', borderRadius: 999, fontSize: 11, fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                background: lang === L ? 'var(--paper-2)' : 'transparent',
                color: lang === L ? 'var(--ink)' : 'rgba(251,247,239,0.55)',
                transition: 'all 0.2s',
              }}>{L}</button>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ---------------------- Hero (pure manifesto) --------------- */
function Hero({ lang }) {
  const t = COPY[lang];
  const role = useRotator(t.roles, 2400);
  return (
    <section id="top" style={{
      background: 'var(--accent)', color: 'var(--paper-2)',
      display: 'flex', flexDirection: 'column',
      borderBottom: '1px solid var(--line)',
    }}>
      <div className="r-pad" style={{
        maxWidth: 1280, margin: '0 auto', width: '100%',
        padding: '96px 40px 80px', flex: 1,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <h1 className="tracking-tighter" style={{
          fontSize: lang === 'ru' ? 'clamp(48px, 5.6vw, 92px)' : 'clamp(64px, 8.4vw, 144px)',
          fontWeight: 700, lineHeight: lang === 'ru' ? 1.06 : 0.98, margin: 0,
          color: 'var(--paper-2)', maxWidth: lang === 'ru' ? 1080 : 1200, textWrap: 'balance',
        }}>
          {lang === 'ru'
            ? <>«Комплексные системы — это не сложно. Сложно сделать их <span style={{ fontStyle: 'italic', fontWeight: 600, color: 'var(--bone-2)' }}>понятными</span>».</>
            : <>"Complexity isn't hard.<br/><span style={{ fontStyle: 'italic', fontWeight: 600, color: 'var(--bone-2)' }}>Clarity</span> is hard."</>
          }
        </h1>

        {/* Currently badge under manifesto */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 12, alignSelf: 'start',
          marginTop: 44,
          padding: '7px 16px', borderRadius: 999,
          background: 'var(--paper-2)',
        }}>
          <span style={{
            fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--accent)', fontWeight: 700,
          }}>
            {lang === 'ru' ? 'Сейчас' : 'Currently'}
          </span>
          <span style={{ width: 1, height: 12, background: 'var(--line-2)' }}/>
          <span className="r-role" style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', minWidth: 200 }}>
            {role}<span className="caret" style={{ background: 'var(--accent)' }}> </span>
          </span>
        </div>
      </div>

      {/* Companies marquee */}
      <div style={{
        borderTop: '1px solid rgba(251,247,239,0.22)',
        background: 'rgba(0,0,0,0.10)',
        padding: '18px 0', overflow: 'hidden',
        maskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)',
      }}>
        <div style={{
          display: 'inline-flex', whiteSpace: 'nowrap', gap: 56,
          animation: 'marquee-x 36s linear infinite',
        }}>
          {[...t.companies, ...t.companies, ...t.companies].map((c, i) => (
            <span key={i} style={{
              fontSize: 22, fontWeight: 600, color: 'var(--paper-2)',
              letterSpacing: '-0.02em',
              display: 'inline-flex', alignItems: 'center', gap: 56,
            }}>{c}<span style={{ color: 'var(--bone-2)' }}>✦</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- About band (summary + stats) -------- */
function AboutBand({ lang }) {
  const t = COPY[lang];
  return (
    <section style={{
      background: 'var(--bone)', borderBottom: '1px solid var(--line)',
    }}>
      <div className="r-pad r-sec-pad" style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 40px' }}>
        <div className="r-cols-2to1" style={{
          display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'start',
        }}>
          <div>
            <div className="eyebrow eyebrow-accent" style={{ marginBottom: 16 }}>
              {lang === 'ru' ? 'Коротко обо мне' : 'In short'}
            </div>
            <p style={{
              fontSize: 22, lineHeight: 1.45, color: 'var(--ink)',
              margin: 0, textWrap: 'pretty', letterSpacing: '-0.01em',
            }}>{t.summary}</p>
          </div>

          <div className="r-cols-4to2" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 0,
            borderTop: '1px solid var(--line-2)',
          }}>
            {t.stats.map((s, i) => (
              <div key={i} style={{
                padding: '24px 18px 8px',
                borderRight: i < t.stats.length - 1 ? '1px solid var(--line)' : 'none',
              }}>
                <div className="tracking-tighter" style={{
                  fontSize: 56, fontWeight: 800, lineHeight: 1, color: 'var(--ink)',
                }}>{s.v}</div>
                <div style={{ marginTop: 12, fontSize: 13, color: 'var(--ink-3)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Skills ------------------------------- */
function Skills({ lang }) {
  const t = COPY[lang];
  return (
    <section id="skills" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="r-pad r-sec-pad" style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 40px' }}>
        <div className="r-cols-2to1" style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'start' }}>
          <div>
            <div className="eyebrow eyebrow-accent" style={{ marginBottom: 16 }}>
              {t.sections.skillsK}
            </div>
            <h2 className="tracking-tighter r-h2" style={{
              fontSize: 56, fontWeight: 700, lineHeight: 1.0, margin: 0, color: 'var(--ink)',
            }}>{t.sections.skillsT}</h2>
          </div>
          <div style={{ display: 'grid', gap: 0 }}>
            {t.skills.map((s, i) => (
              <div key={s.k} className="r-skillrow" style={{
                display: 'grid', gridTemplateColumns: '180px 1fr 40px', gap: 24, alignItems: 'baseline',
                padding: '24px 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--line)',
              }}>
                <div style={{
                  fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--ink)',
                }}>{s.k}</div>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: 'var(--ink-2)' }}>{s.v}</p>
                <div className="mono r-skillnum" style={{ fontSize: 12, color: 'var(--ink-4)', textAlign: 'right' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Experience --------------------------- */
function ExperienceCard({ exp, lang, expanded, onToggle, index, total }) {
  const t = COPY[lang];
  return (
    <article className="r-exprow" style={{
      display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40,
      padding: '40px 0',
      borderTop: '1px solid var(--line)',
    }}>
      {/* left rail */}
      <div className="r-exprail">
        <div className="mono" style={{ fontSize: 12, color: 'var(--ink-4)' }}>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
        <div style={{
          marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)',
        }}>{exp.period}</div>
        <div style={{
          marginTop: 4, fontFamily: 'var(--font-mono)', fontSize: 12,
          color: 'var(--accent)', fontWeight: 600,
        }}>{exp.length}</div>
      </div>

      {/* main */}
      <div>
        <div className="r-exptitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, marginBottom: 6 }}>
          <h3 className="tracking-tight r-expco" style={{
            fontSize: 40, fontWeight: 700, margin: 0, color: 'var(--ink)', lineHeight: 1.05,
          }}>{exp.company}</h3>
          {exp.link && (
            <a href={`https://${exp.link}`} target="_blank" rel="noopener noreferrer"
              className="link-underline"
              style={{ fontSize: 14, color: 'var(--ink-3)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              {exp.link} <Icon.arrowUpRight/>
            </a>
          )}
        </div>
        <div style={{ fontSize: 15, color: 'var(--ink-3)', marginBottom: 20 }}>{exp.role}</div>

        <p style={{
          fontSize: 18, lineHeight: 1.55, color: 'var(--ink-2)', margin: '0 0 24px',
          textWrap: 'pretty', maxWidth: 760,
        }}>{exp.summary}</p>

        {/* Numbers — key metrics */}
        {exp.stats && exp.stats.length > 0 && (
          <div className="r-expstats" style={{
            display: 'grid', gridTemplateColumns: `repeat(${exp.stats.length}, 1fr)`,
            gap: 0, marginBottom: 24,
            borderTop: '1px solid var(--line-2)', borderBottom: '1px solid var(--line)',
          }}>
            {exp.stats.map((s, i) => (
              <div key={i} className="r-expstatcell" style={{
                padding: '20px 18px 18px',
                borderRight: i < exp.stats.length - 1 ? '1px solid var(--line)' : 'none',
              }}>
                <div className="tracking-tighter r-statnum" style={{
                  fontSize: 40, fontWeight: 800, lineHeight: 1, color: 'var(--ink)',
                }}>{s.v}</div>
                <div style={{ marginTop: 10, fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.35 }}>{s.l}</div>
              </div>
            ))}
          </div>
        )}



        <button onClick={onToggle} style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 16px',
          borderRadius: 999, border: '1px solid var(--line-2)', background: 'transparent',
          fontSize: 13, fontWeight: 600, color: 'var(--ink)',
        }}>
          <span style={{
            width: 18, height: 18, borderRadius: 999,
            background: expanded ? 'var(--accent)' : 'var(--ink)',
            color: 'var(--paper-2)', display: 'grid', placeItems: 'center',
            fontSize: 14, lineHeight: 1,
          }}>{expanded ? '–' : '+'}</span>
          {expanded
            ? (lang === 'ru' ? 'Свернуть детали' : 'Hide details')
            : (lang === 'ru' ? 'Развернуть детали' : 'Expand details')}
        </button>

        {expanded && (
          <div style={{ marginTop: 32, display: 'grid', gap: 28 }}>
            {exp.blocks.map(block => (
              <div key={block.k} className="r-exprow" style={{
                display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24,
              }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}>{block.k}</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
                  {block.items.map((it, i) => (
                    <li key={i} style={{
                      display: 'grid', gridTemplateColumns: '24px 1fr', gap: 4,
                      fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.55,
                    }}>
                      <span className="mono" style={{ color: 'var(--ink-4)', fontSize: 12, paddingTop: 4 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{boldify(it)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function Experience({ lang }) {
  const [open, setOpen] = React.useState('InnoTech');
  const t = COPY[lang];
  const list = EXPERIENCES[lang];
  return (
    <section id="experience" style={{
      background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
    }}>
      <div className="r-pad r-sec-pad" style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 40px' }}>
        <div className="r-exphead" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48 }}>
          <div>
            <div className="eyebrow eyebrow-accent" style={{ marginBottom: 16 }}>
              {t.sections.experienceK}
            </div>
            <h2 className="tracking-tighter r-h2" style={{
              fontSize: 56, fontWeight: 700, lineHeight: 1.0, margin: 0, color: 'var(--ink)', maxWidth: 720,
            }}>{t.sections.experienceT}</h2>
          </div>
          <div className="mono" style={{ fontSize: 12, color: 'var(--ink-3)', textAlign: 'right' }}>
            {list.length} {lang === 'ru' ? 'компаний' : 'companies'}<br/>
            <span style={{ color: 'var(--ink-4)' }}>2013 → 2026</span>
          </div>
        </div>

        <div>
          {list.map((exp, i) => (
            <ExperienceCard
              key={exp.company} exp={exp} lang={lang} index={i} total={list.length}
              expanded={open === exp.company}
              onToggle={() => setOpen(open === exp.company ? null : exp.company)}
            />
          ))}
          <div style={{ borderTop: '1px solid var(--line)' }}/>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Leadership --------------------------- */
function Leadership({ lang }) {
  const t = COPY[lang];
  const items = LEADERSHIP[lang];
  return (
    <section id="leadership" style={{
      background: 'var(--ink)', color: 'var(--paper-2)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div className="r-pad r-sec-pad" style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 40px' }}>
        <div className="r-cols-2to1" style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, marginBottom: 56 }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--accent-2)', marginBottom: 16 }}>
              {t.sections.leadershipK}
            </div>
            <h2 className="tracking-tighter r-h2" style={{
              fontSize: 64, fontWeight: 700, lineHeight: 0.98, margin: 0, color: 'var(--paper-2)',
            }}>{t.sections.leadershipT}</h2>
          </div>
          <div style={{ alignSelf: 'end' }}>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: 'rgba(251,247,239,0.65)', margin: 0, textWrap: 'pretty' }}>
              {t.sections.leadershipSub}
            </p>
          </div>
        </div>

        <div className="r-cols-2to1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {items.map((it, i) => {
            const inDev = it.id === 'ideals-board-lead';
            return (
            <a key={it.id} href={`case.html?id=${it.id}`} style={{
              padding: 36, borderRadius: 'var(--r-lg)',
              background: i === 0 ? 'var(--accent)' : 'rgba(251,247,239,0.05)',
              border: i === 0 ? 'none' : '1px solid rgba(251,247,239,0.1)',
              color: i === 0 ? 'var(--paper-2)' : 'var(--paper-2)',
              display: 'grid', gap: 20, position: 'relative', overflow: 'hidden',
            }}>
              {inDev && (
                <div aria-hidden="true" style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 10, zIndex: 3,
                  backgroundImage: 'repeating-linear-gradient(45deg, #FFD400 0 12px, #14110E 12px 24px)',
                }}/>
              )}
              <div style={{
                position: 'absolute', top: 28, right: 28,
                width: 44, height: 44, borderRadius: 999,
                background: i === 0 ? 'rgba(0,0,0,0.15)' : 'rgba(251,247,239,0.08)',
                display: 'grid', placeItems: 'center',
              }}>
                <Icon.arrowUpRight/>
              </div>

              <SmartImage src={it.image} fallbackId={it.art} alt={it.title} aspect="16 / 8"/>

              <div>
                <div className="eyebrow" style={{
                  color: i === 0 ? 'rgba(0,0,0,0.55)' : 'var(--accent-2)', marginBottom: 8,
                }}>{it.sub}</div>
                <h3 className="tracking-tight" style={{
                  fontSize: 28, fontWeight: 700, margin: 0, lineHeight: 1.1,
                }}>{it.title}</h3>
              </div>

              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
                {it.bullets.map((b, j) => (
                  <li key={j} style={{
                    display: 'grid', gridTemplateColumns: '14px 1fr', gap: 8,
                    fontSize: 14, lineHeight: 1.5,
                    color: i === 0 ? 'rgba(0,0,0,0.85)' : 'rgba(251,247,239,0.75)',
                  }}>
                    <span style={{ paddingTop: 6 }}>
                      <span style={{
                        display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
                        background: i === 0 ? 'rgba(0,0,0,0.6)' : 'var(--accent-2)',
                      }}/>
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Portfolio bento ---------------------- */
/* Asymmetric bento (matches Bento A in the canvas).
   Layout: [0] big top-left · [1] tall right (DARK) · [2] medium · [3] big right. */
function PortfolioCard({ p, big = false, dark = false, aspect = '4 / 3' }) {
  return (
    <a href={`case.html?id=${p.id}`} style={{
      display: 'flex', flexDirection: 'column',
      background: dark ? 'var(--ink)' : 'var(--paper-2)',
      color: dark ? 'var(--paper-2)' : 'var(--ink)',
      border: dark ? 'none' : '1px solid var(--line)',
      borderRadius: 'var(--r-xl)', overflow: 'hidden',
      height: '100%', transition: 'box-shadow 0.3s, transform 0.3s',
    }}>
      <div style={{ padding: 14, paddingBottom: 0 }}>
        <SmartImage src={p.image} fallbackId={p.art} alt={p.title} aspect={aspect}/>
      </div>
      <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 12 }}>
          <div>
            <div className="eyebrow" style={{
              color: dark ? 'rgba(251,247,239,0.55)' : 'var(--ink-3)', marginBottom: 6,
            }}>{p.sub}</div>
            <h3 className="tracking-tight" style={{
              fontSize: big ? 34 : 22, fontWeight: 700, margin: 0, lineHeight: 1.08,
            }}>{p.title}</h3>
          </div>
          <span style={{
            width: 34, height: 34, borderRadius: 999, flexShrink: 0,
            background: dark ? 'rgba(251,247,239,0.1)' : 'var(--bone)',
            display: 'grid', placeItems: 'center',
          }}><Icon.arrowUpRight/></span>
        </div>
        <p style={{
          margin: 0, fontSize: big ? 15 : 14, lineHeight: 1.55,
          color: dark ? 'rgba(251,247,239,0.65)' : 'var(--ink-3)',
          maxWidth: 560,
          display: '-webkit-box', WebkitLineClamp: big ? 'unset' : 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>{p.desc}</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto' }}>
          {p.tags.map(tag => (
            <span key={tag} style={{
              padding: '4px 10px', borderRadius: 999, fontSize: 12,
              background: dark ? 'rgba(251,247,239,0.08)' : 'var(--bone)',
              color: dark ? 'rgba(251,247,239,0.85)' : 'var(--ink-2)',
              border: dark ? 'none' : '1px solid var(--line)',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

function Portfolio({ lang }) {
  const t = COPY[lang];
  const list = PROJECTS[lang];
  return (
    <section id="portfolio" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="r-pad r-sec-pad" style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 40px' }}>
        <div className="r-exphead" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48 }}>
          <div>
            <div className="eyebrow eyebrow-accent" style={{ marginBottom: 16 }}>
              {t.sections.portfolioK}
            </div>
            <h2 className="tracking-tighter r-h2" style={{
              fontSize: 64, fontWeight: 700, lineHeight: 0.98, margin: 0, color: 'var(--ink)',
            }}>{t.sections.portfolioT}</h2>
          </div>
          <a href="work.html" className="link-underline" style={{
            fontSize: 15, color: 'var(--ink-2)', display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>{lang === 'ru' ? 'Все проекты' : 'All projects'} <Icon.arrow/></a>
        </div>

        <div className="r-bento" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: 'minmax(220px, auto)',
          gap: 16,
        }}>
          <div style={{ gridColumn: 'span 8', gridRow: 'span 2' }}>
            <PortfolioCard p={list[0]} big aspect="16 / 9"/>
          </div>
          <div style={{ gridColumn: 'span 4', gridRow: 'span 2' }}>
            <PortfolioCard p={list[1]} dark aspect="4 / 3"/>
          </div>
          <div style={{ gridColumn: 'span 5' }}>
            <PortfolioCard p={list[2]} aspect="4 / 3"/>
          </div>
          <div style={{ gridColumn: 'span 7' }}>
            <PortfolioCard p={list[3]} big aspect="4 / 3"/>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Contact ------------------------------ */
function Contact({ lang }) {
  const t = COPY[lang];
  return (
    <section id="contact" style={{ background: 'var(--bone-2)', borderBottom: '1px solid var(--line)' }}>
      <div className="r-pad r-sec-pad" style={{ maxWidth: 1280, margin: '0 auto', padding: '120px 40px' }}>
        <div className="eyebrow eyebrow-accent" style={{ marginBottom: 16 }}>{t.sections.contactK}</div>
        <h2 className="tracking-tighter" style={{
          fontSize: 'clamp(64px, 8.5vw, 152px)', fontWeight: 800, lineHeight: 0.92, margin: '0 0 28px',
          color: 'var(--ink)', maxWidth: 1100,
        }}>
          {lang === 'ru' ? 'Мои' : "Let's"}<br/>
          <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 700 }}>
            {lang === 'ru' ? 'контакты.' : 'talk.'}
          </span>
        </h2>
        <p style={{
          fontSize: 20, lineHeight: 1.55, color: 'var(--ink-2)', margin: '0 0 48px', maxWidth: 640,
        }}>{t.sections.contactT}</p>

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
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        maxWidth: 1280, margin: '0 auto',
      }}>
        <div className="mono" style={{ fontSize: 12, color: 'var(--ink-3)' }}>
          © {new Date().getFullYear()} {t.name} — {t.role}
        </div>
        <div className="mono" style={{ fontSize: 12, color: 'var(--ink-3)' }}>
          {lang === 'ru' ? 'Сделано с заботой к деталям' : 'Crafted with care'}
        </div>
      </footer>
    </section>
  );
}

/* ---------------------- Root --------------------------------- */
function MainHomepage({ initialLang }) {
  const [persistedLang, setLang] = window.usePortfolioLang();
  const lang = initialLang || persistedLang;

  // Persist scroll position; restore it when returning from a case page.
  React.useEffect(() => {
    const KEY = 'pf-home-scroll';
    try {
      if (sessionStorage.getItem('pf-restore') === '1') {
        const y = parseInt(sessionStorage.getItem(KEY) || '0', 10);
        sessionStorage.removeItem('pf-restore');
        if (y > 0) {
          [0, 120, 360, 700].forEach(d => setTimeout(() => window.scrollTo(0, y), d));
        }
      }
    } catch (e) {}
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { try { sessionStorage.setItem(KEY, String(window.scrollY)); } catch (e) {} });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ background: 'var(--bone)', color: 'var(--ink)', minHeight: '100%' }}>
      <TopBar lang={lang} setLang={setLang}/>
      <Hero lang={lang}/>
      <AboutBand lang={lang}/>
      <Skills lang={lang}/>
      <Experience lang={lang}/>
      <Leadership lang={lang}/>
      <Portfolio lang={lang}/>
      <Contact lang={lang}/>
    </div>
  );
}

window.MainHomepage = MainHomepage;
