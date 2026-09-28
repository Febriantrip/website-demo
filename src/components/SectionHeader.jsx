export default function SectionHeader({ eyebrow, title, body, inverse = false }) {
  return (
    <div className={`section-header reveal ${inverse ? 'inverse' : ''}`}>
      <div className="section-eyebrow"><span/>{eyebrow}</div>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  )
}
