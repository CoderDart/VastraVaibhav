import { useState } from 'react'

export default function ImageShowcase({ src, alt, className = '', fallback }) {
  const [currentSrc, setCurrentSrc] = useState(src)

  const handleError = () => {
    if (fallback && currentSrc !== fallback) setCurrentSrc(fallback)
  }

  return (
    <div className={`image-showcase ${className}`}>
      <img src={currentSrc} alt={alt} loading="lazy" decoding="async" onError={handleError} />
      <style>{`
        .image-showcase {
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          background: var(--bg-white);
        }
        .image-showcase img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: var(--radius);
          transition: transform var(--transition);
        }
        .image-showcase:hover img {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  )
}
