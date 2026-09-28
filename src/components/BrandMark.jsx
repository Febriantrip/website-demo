export default function BrandMark({ suffix = 'STUDIO', compact = false }) {
  return (
    <span className={`brand-lockup ${compact ? 'compact' : ''}`}>
      <span className="brand-symbol" aria-hidden="true"><i/><i/><i/></span>
      <span className="brand-copy"><strong>NEXORA</strong><small>{suffix}</small></span>
    </span>
  )
}
