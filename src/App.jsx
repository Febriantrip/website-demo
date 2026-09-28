import { useEffect, useMemo, useState } from 'react'
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BadgePercent,
  Boxes,
  ChartNoAxesCombined,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Cog,
  Droplets,
  Factory,
  FileCheck2,
  FlaskConical,
  Gauge,
  Headphones,
  Heart,
  Layers3,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Route,
  Ruler,
  ScanLine,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  SwatchBook,
  Workflow,
  X,
} from 'lucide-react'
import BrandMark from './components/BrandMark'
import HeroVisual from './components/HeroVisual'
import IndustryMenu from './components/IndustryMenu'
import QuoteModal from './components/QuoteModal'
import SectionHeader from './components/SectionHeader'
import { company, industries, industryMap } from './data/industries'

const iconMap = {
  Activity,
  BadgePercent,
  Boxes,
  ChartNoAxesCombined,
  Cog,
  Droplets,
  Factory,
  FileCheck2,
  FlaskConical,
  Gauge,
  Headphones,
  Heart,
  Layers3,
  Lightbulb,
  MapPin,
  MessageCircle,
  PackageCheck,
  Route,
  Ruler,
  ScanLine,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  SwatchBook,
  Workflow,
}

export default function App() {
  const [industryId, setIndustryId] = useState('distributor')
  const [industryMenuOpen, setIndustryMenuOpen] = useState(false)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeShowcase, setActiveShowcase] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const industry = industryMap[industryId]
  const year = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    document.documentElement.dataset.industry = industryId
    document.title = `Nexora ${industry.label} Demo`
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', industryId === 'fashion' ? '#f0ede7' : '#08100e')
    setActiveShowcase(0)
  }, [industryId])

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? window.scrollY / total : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [industryId])

  useEffect(() => {
    const pointerMove = (event) => {
      document.documentElement.style.setProperty('--mx', `${event.clientX}px`)
      document.documentElement.style.setProperty('--my', `${event.clientY}px`)
      document.documentElement.style.setProperty('--px', `${(event.clientX / window.innerWidth - 0.5) * 2}`)
      document.documentElement.style.setProperty('--py', `${(event.clientY / window.innerHeight - 0.5) * 2}`)
    }
    window.addEventListener('pointermove', pointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', pointerMove)
  }, [])

  const selectIndustry = (id) => {
    const next = industryMap[id] ? id : 'distributor'
    setIndustryId(next)
    setIndustryMenuOpen(false)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nav = [
    ['Tentang', '#about'],
    ['Kapabilitas', '#capabilities'],
    ['Showcase', '#showcase'],
    ['Proses', '#process'],
    ['Kontak', '#contact'],
  ]

  return (
    <div className={`site-shell industry-${industryId}`}>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />

      <header className="navbar">
        <a className="brand" href="#top" aria-label="Nexora demo home">
          <BrandMark suffix={industry.suffix} />
        </a>
        <nav className="desktop-nav">
          <button className="desktop-industry-menu-button" onClick={() => setIndustryMenuOpen(true)}>
            Industri <ChevronDown size={14}/>
          </button>
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <span className="current-industry-pill"><i /> Demo: {industry.label}</span>
          <button className="nav-cta" onClick={() => setQuoteOpen(true)}>Buat Website <ArrowRight size={16}/></button>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Buka menu"><Menu /></button>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-head"><BrandMark suffix={industry.suffix} compact/><button onClick={() => setMenuOpen(false)}><X /></button></div>
        <button className="mobile-industry" onClick={() => { setMenuOpen(false); setIndustryMenuOpen(true) }}>Pilih Industri <span>{industry.label} <ChevronRight size={16}/></span></button>
        {nav.map(([label, href], index) => <a key={href} href={href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}</a>)}
        <button className="mobile-quote" onClick={() => { setMenuOpen(false); setQuoteOpen(true) }}>Buat Versi Perusahaan Saya <ArrowRight size={17}/></button>
      </div>

      <main key={industryId} className="page-transition">
        <section className="hero" id="top">
          <div className="hero-bg-grid" aria-hidden="true" />
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-copy">
            <div className="hero-eyebrow"><span className="pulse-dot" /> {industry.eyebrow}</div>
            <h1><span>{industry.heroLead}</span><em>{industry.heroAccent}</em></h1>
            <p>{industry.heroBody}</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => setQuoteOpen(true)}>{industry.primaryCta}<span><ArrowRight size={18}/></span></button>
              <a className="secondary-button" href="#about">{industry.secondaryCta}<ArrowDown size={16}/></a>
            </div>
          </div>
          <HeroVisual industry={industry} />
          <div className="hero-bottom">
            <button className="hero-switch-link" onClick={() => setIndustryMenuOpen(true)}><Layers3 size={15}/> Lihat demo industri lain</button>
            <div className="hero-index"><span>INDUSTRY</span><b>0{industries.findIndex((item) => item.id === industryId) + 1} / 06</b></div>
          </div>
        </section>

        <section className="marquee-strip" aria-hidden="true">
          <div className="marquee-track">
            {[...industry.marquee, ...industry.marquee].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✦</i></span>)}
          </div>
        </section>

        <section className="about-section" id="about">
          <SectionHeader eyebrow={industry.aboutEyebrow} title={industry.aboutTitle} body={industry.aboutBody} />
          <div className="metrics-grid reveal">
            {industry.metrics.map(([value, label], index) => <div className="metric-card" key={label}><span>0{index + 1}</span><strong>{value}</strong><small>{label}</small></div>)}
          </div>
          <div className="story-grid reveal">
            <div className="story-media">
              <img src={industry.secondaryImage} alt={`${industry.label} visual`} />
              <div className="story-media-overlay" />
              <div className="story-media-label">{industry.label.toUpperCase()} / EXPERIENCE</div>
            </div>
            <div className="story-copy">
              <span className="story-number">/01</span>
              <h3>{industry.storyTitle}</h3>
              <p>{industry.storyBody}</p>
              <div className="story-points">
                {industry.points.map((point) => <span key={point}><CheckCircle2 size={17}/>{point}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="capabilities-section" id="capabilities">
          <SectionHeader eyebrow="CAPABILITIES" title={industry.servicesTitle} body="Konten dan interaksi berubah mengikuti cara calon pelanggan menilai perusahaan di industrinya." inverse />
          <div className="capability-grid">
            {industry.services.map(([iconName, title, description], index) => {
              const Icon = iconMap[iconName] || Sparkles
              return (
                <article className="capability-card reveal" key={title}>
                  <div className="capability-head"><span>0{index + 1}</span><Icon /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="capability-line" />
                </article>
              )
            })}
          </div>
        </section>

        <section className="showcase-section" id="showcase">
          <SectionHeader eyebrow="SELECTED SHOWCASE" title={industry.showcaseTitle} body="Pilih item di sisi kiri untuk melihat bagaimana tiap kategori bisa dipresentasikan dengan fokus visual yang berbeda." />
          <div className="showcase-shell reveal">
            <div className="showcase-list">
              {industry.showcases.map(([title], index) => (
                <button key={title} className={activeShowcase === index ? 'active' : ''} onMouseEnter={() => setActiveShowcase(index)} onFocus={() => setActiveShowcase(index)} onClick={() => setActiveShowcase(index)}>
                  <span>0{index + 1}</span><strong>{title}</strong><ChevronRight size={20}/>
                </button>
              ))}
            </div>
            <div className="showcase-visual">
              {industry.showcases.map(([title, description, image], index) => (
                <div key={title} className={`showcase-image ${activeShowcase === index ? 'active' : ''}`}>
                  <img src={image} alt={title}/><div className="showcase-shade" />
                  <div className="showcase-caption"><span>0{index + 1}</span><div><strong>{title}</strong><p>{description}</p></div></div>
                </div>
              ))}
              <div className="showcase-crosshair" aria-hidden="true"><i/><i/></div>
            </div>
          </div>
        </section>

        <section className="process-section" id="process">
          <SectionHeader eyebrow="HOW IT WORKS" title={industry.processTitle} body="Alur yang jelas membuat calon customer memahami bagaimana perusahaan bekerja bahkan sebelum mereka menghubungi tim Anda." />
          <div className="process-track reveal">
            {industry.process.map(([title, description], index) => (
              <article className="process-step" key={title}>
                <span>0{index + 1}</span><i/><h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="impact-section">
          <div className="impact-card reveal">
            <img src={industry.heroImage} alt=""/>
            <div className="impact-overlay" />
            <div className="impact-type">
              <span>{industry.closingBig[0]} <em>{industry.closingBig[1]}</em></span>
              <span>{industry.closingBig[2]} <i>{industry.closingBig[3]}</i></span>
            </div>
            <button onClick={() => setIndustryMenuOpen(true)} className="impact-switch">SWITCH INDUSTRY <ArrowRight size={17}/></button>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-card reveal">
            <div className="contact-title"><span className="section-eyebrow"><i/>YOUR TURN</span><h2>{industry.contactTitle}</h2></div>
            <div className="contact-copy">
              <p>{industry.contactBody}</p>
              <button className="contact-button" onClick={() => setQuoteOpen(true)}>Buat Versi Saya <span><ArrowRight/></span></button>
              <div className="contact-meta"><a href={`mailto:${company.email}`}><Mail size={15}/>{company.email}</a><span><MapPin size={15}/>{company.address}</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <BrandMark suffix={`${industry.label.toUpperCase()} DEMO`} />
        <div className="footer-center">ONE WEBSITE / SIX INDUSTRY EXPERIENCES / ONE ROUTE</div>
        <div className="footer-right"><button onClick={() => setIndustryMenuOpen(true)}>Pilih industri</button><span>© {year} {company.legalName}</span></div>
      </footer>

      <IndustryMenu open={industryMenuOpen} activeId={industryId} industries={industries} onClose={() => setIndustryMenuOpen(false)} onSelect={selectIndustry} />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} industry={industry} />
    </div>
  )
}
