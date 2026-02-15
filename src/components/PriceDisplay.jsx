export default function PriceDisplay({ price, label = 'Price' }) {
  const hasPrice = price != null && price !== ''

  return (
    <div className="price-display">
      <span className="price-display__label">{label}</span>
      <span className="price-display__value">
        {hasPrice ? `₹${Number(price).toLocaleString('en-IN')}` : '—'}
      </span>
      <style>{`
        .price-display {
          padding: 1rem 1.25rem;
          background: var(--bg-white);
          border-radius: var(--radius);
          border: 2px solid var(--border-light);
          display: inline-flex;
          flex-direction: column;
          gap: 0.25rem;
          min-width: 140px;
        }
        .price-display__label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .price-display__value {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-blue-dark);
        }
      `}</style>
    </div>
  )
}
