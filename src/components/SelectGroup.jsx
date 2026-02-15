export default function SelectGroup({ label, options, value, onChange, id }) {
  return (
    <div className="select-group">
      <label htmlFor={id} className="select-group__label">{label}</label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="select-group__select"
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <style>{`
        .select-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .select-group__label {
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--primary-blue-dark);
          font-size: var(--text-caption-size);
        }
        .select-group__select {
          padding: 0.65rem 1rem;
          border: 2px solid var(--border-light);
          border-radius: var(--radius);
          font-size: 1rem;
          font-family: inherit;
          background: var(--bg-white);
          color: var(--text-dark);
          cursor: pointer;
          transition: var(--transition);
        }
        .select-group__select:focus {
          outline: none;
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </div>
  )
}
