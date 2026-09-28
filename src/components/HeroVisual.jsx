import { Activity, ArrowUpRight, BadgePercent, Boxes, Circle, Gauge, Layers3, ScanLine, ShoppingBag, Sparkles, Waves } from 'lucide-react'

function DistributorVisual({ industry }) {
  return (
    <div className="hero-visual hero-visual-network">
      <div className="visual-photo visual-photo-main"><img src={industry.heroImage} alt=""/><div className="visual-shade"/></div>
      <div className="visual-hud hud-top"><span className="live-dot"/> LIVE NETWORK <b>OPERATING</b></div>
      <div className="visual-hud hud-bottom"><small>DISTRIBUTION CENTER</small><strong>WEST JAVA / ID</strong></div>
      <div className="float-panel panel-a"><Boxes/><span><small>ON-TIME</small><b>98.7%</b></span><i className="mini-bars"><b/><b/><b/><b/><b/></i></div>
      <div className="float-panel panel-b"><Activity/><span><small>LIVE COVERAGE</small><b>34 CITIES</b></span></div>
      <svg className="route-overlay" viewBox="0 0 600 620" preserveAspectRatio="none" aria-hidden="true">
        <path d="M38 520 C135 420 170 455 230 365 S360 250 550 90"/>
        <circle cx="38" cy="520" r="6"/><circle cx="230" cy="365" r="6"/><circle cx="550" cy="90" r="6"/>
      </svg>
    </div>
  )
}

function RetailVisual({ industry }) {
  return (
    <div className="hero-visual hero-visual-retail">
      <div className="retail-frame retail-main"><img src={industry.heroImage} alt=""/></div>
      <div className="retail-frame retail-small"><img src={industry.secondaryImage} alt=""/></div>
      <div className="retail-ticket"><span>WEEKEND DROP</span><strong>20%</strong><small>SELECTED ITEMS</small></div>
      <div className="retail-bag"><ShoppingBag/><span>CURATED<br/>ESSENTIALS</span></div>
      <div className="retail-orbit"><span/><span/><span/></div>
      <div className="retail-sticker"><BadgePercent/><b>NEW</b></div>
    </div>
  )
}

function FashionVisual({ industry }) {
  return (
    <div className="hero-visual hero-visual-fashion">
      <div className="fashion-photo"><img src={industry.heroImage} alt=""/></div>
      <div className="fashion-outline">26</div>
      <div className="fashion-issue"><span>ISSUE</span><b>NO. 06</b></div>
      <div className="fashion-caption">THE<br/><i>EDIT</i></div>
      <div className="fashion-ring"><span>NEW SEASON • NEW SEASON • </span><Sparkles/></div>
    </div>
  )
}

function TextileVisual({ industry }) {
  return (
    <div className="hero-visual hero-visual-textile">
      <div className="textile-photo"><img src={industry.heroImage} alt=""/><ScanLine className="textile-scan"/></div>
      <div className="weave-lines" aria-hidden="true">{Array.from({length: 14}).map((_,i)=><i key={i}/>)}</div>
      <div className="swatch-stack"><span className="swatch s1"/><span className="swatch s2"/><span className="swatch s3"/><span className="swatch s4"/></div>
      <div className="textile-spec"><small>MATERIAL / 042</small><strong>COTTON COMPACT</strong><span>220 GSM • 95/5 • SOFT FINISH</span></div>
      <Waves className="textile-wave"/>
    </div>
  )
}

function ManufacturingVisual({ industry }) {
  return (
    <div className="hero-visual hero-visual-manufacturing">
      <div className="factory-photo"><img src={industry.heroImage} alt=""/><div className="factory-scan"/></div>
      <div className="factory-grid"/>
      <div className="factory-readout top"><span>LINE 04</span><b>RUNNING</b><Circle fill="currentColor" size={8}/></div>
      <div className="factory-readout bottom"><Gauge/><span><small>OEE</small><b>92.4%</b></span></div>
      <div className="factory-coordinates">X 184.20<br/>Y 072.91<br/>TOL ±0.02</div>
      <div className="factory-corners"><i/><i/><i/><i/></div>
    </div>
  )
}

function ServicesVisual({ industry }) {
  return (
    <div className="hero-visual hero-visual-services">
      <div className="service-mesh"/>
      <div className="service-photo"><img src={industry.heroImage} alt=""/></div>
      <div className="orbit orbit-one"><span/><span/><span/></div>
      <div className="orbit orbit-two"><span/><span/></div>
      <div className="service-core"><Layers3/><small>PROJECT SYSTEM</small><b>CONNECTED</b></div>
      <div className="service-note note-a"><span>01</span> STRATEGY</div>
      <div className="service-note note-b"><span>02</span> EXECUTION</div>
      <div className="service-note note-c"><span>03</span> OUTCOME</div>
      <ArrowUpRight className="service-arrow"/>
    </div>
  )
}

export default function HeroVisual({ industry }) {
  if (industry.visualMode === 'retail') return <RetailVisual industry={industry}/>
  if (industry.visualMode === 'fashion') return <FashionVisual industry={industry}/>
  if (industry.visualMode === 'textile') return <TextileVisual industry={industry}/>
  if (industry.visualMode === 'manufacturing') return <ManufacturingVisual industry={industry}/>
  if (industry.visualMode === 'services') return <ServicesVisual industry={industry}/>
  return <DistributorVisual industry={industry}/>
}
