import { Check, ChevronRight, Layers3, X } from 'lucide-react'

export default function IndustryMenu({ open, activeId, industries, onClose, onSelect }) {
  if (!open) return null

  return (
    <div className="industry-menu-layer" aria-live="polite">
      <button className="industry-menu-backdrop" onClick={onClose} aria-label="Tutup menu industri" />
      <section className="industry-mega-menu" role="dialog" aria-modal="true" aria-label="Pilih industri demo">
        <div className="industry-menu-head">
          <div>
            <span className="industry-menu-kicker"><Layers3 size={14}/> PILIH INDUSTRI</span>
            <h2>Satu website. <em>Enam karakter.</em></h2>
            <p>Pilih industri di bawah. Konten, warna, visual, ritme animasi, dan showcase akan berubah langsung di halaman yang sama.</p>
          </div>
          <button className="industry-menu-close" onClick={onClose} aria-label="Tutup menu industri"><X /></button>
        </div>

        <div className="industry-menu-grid">
          {industries.map((item, index) => (
            <button
              key={item.id}
              className={`industry-menu-card menu-${item.id} ${activeId === item.id ? 'active' : ''}`}
              onClick={() => onSelect(item.id)}
            >
              <span className="industry-menu-index">0{index + 1}</span>
              <span className="industry-menu-card-copy">
                <strong>{item.label}</strong>
                <small>{item.eyebrow}</small>
              </span>
              <span className="industry-menu-arrow">
                {activeId === item.id ? <Check size={16}/> : <ChevronRight size={17}/>} 
              </span>
            </button>
          ))}
        </div>

        <div className="industry-menu-foot">
          <span>ACTIVE DEMO</span>
          <strong>{industries.find((item) => item.id === activeId)?.label}</strong>
          <i />
          <span>Tetap di URL yang sama</span>
        </div>
      </section>
    </div>
  )
}
