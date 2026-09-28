import { useEffect, useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { company } from '../data/industries'

export default function QuoteModal({ open, onClose, industry }) {
  const [form, setForm] = useState({ name: '', business: '', need: '' })
  useEffect(() => {
    if (open) setForm((value) => ({ ...value, need: value.need || `Saya tertarik dengan demo website industri ${industry.label}.` }))
  }, [open, industry.label])
  if (!open) return null

  const submit = (event) => {
    event.preventDefault()
    const message = [
      'Halo Nexora, saya tertarik dengan demo website company profile.',
      `Industri: ${industry.label}`,
      `Nama: ${form.name}`,
      `Perusahaan: ${form.business}`,
      `Kebutuhan: ${form.need}`,
    ].join('\n')
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="quote-modal" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Tutup"><X size={20}/></button>
        <div className="section-eyebrow"><span/>START A PROJECT</div>
        <h3>Jadikan demo ini milik perusahaan Anda.</h3>
        <p>Kirim brief singkat. Pesan akan diteruskan ke WhatsApp agar pembicaraan bisa dilanjutkan dengan cepat.</p>
        <form onSubmit={submit}>
          <label>Nama<input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Nama Anda"/></label>
          <label>Perusahaan<input required value={form.business} onChange={(e)=>setForm({...form,business:e.target.value})} placeholder="Nama perusahaan"/></label>
          <label>Kebutuhan<textarea required value={form.need} onChange={(e)=>setForm({...form,need:e.target.value})} placeholder="Ceritakan kebutuhan website Anda"/></label>
          <button type="submit" className="modal-submit">Kirim via WhatsApp <ArrowRight size={18}/></button>
        </form>
      </div>
    </div>
  )
}
