import { useState, useMemo, useEffect, useRef } from 'react';
import SelectGroup from '../components/SelectGroup'
import PriceDisplay from '../components/PriceDisplay'

// ─── Auto Image Carousel ──────────────────────────────────────────────────────
function ImageCarousel({ images, alt, height = 320, interval = 3500 }) {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef(null)

  const goTo = (index) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 400)
  }

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % images.length)
        setAnimating(false)
      }, 400)
    }, interval)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [images.length, interval])

  const prev = () => {
    clearInterval(timerRef.current)
    goTo((current - 1 + images.length) % images.length)
  }

  const next = () => {
    clearInterval(timerRef.current)
    goTo((current + 1) % images.length)
  }

  return (
    <div className="carousel" style={{ '--carousel-height': `${height}px` }}>
      <div className={`carousel__track ${animating ? 'carousel__track--fade' : ''}`}>
        <img
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className="carousel__img"
        />
      </div>
      {images.length > 1 && (
        <>
          <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Previous image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="Next image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <div className="carousel__dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel__dot ${i === current ? 'carousel__dot--active' : ''}`}
                onClick={() => { clearInterval(timerRef.current); goTo(i) }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Page data ────────────────────────────────────────────────────────────────
const BEDSHEET_IMAGES = [
  '/images/hero.png',
  '/images/bedsheet1.png',
  '/images/bedsheet2.png',
  '/images/bedsheet3.png',
  '/images/bedsheet4.png',
  '/images/bedsheet5.png',
  '/images/bedsheet6.png',
  '/images/bedsheet7.png',
  '/images/bedsheet8.png',
  '/images/bedsheet9.png',
  '/images/bedsheet10.png',
  '/images/bedsheet12.png',
]
const BEDSHEET_PRICING = {
  King:  { 140: 1750, 160: 1800, 180: 2844, 200: 3000, 300: 5600, 400: 6600 },
  Queen: { 140: 1400, 160: 1650, 180: 2400 },
}

const SIZE_OPTIONS = [
  { value: 'King',  label: 'King'  },
  { value: 'Queen', label: 'Queen' },
]

function getDimensionOptions(size) {
  if (!size) return []
  const dims = Object.keys(BEDSHEET_PRICING[size] || {}).map(Number).sort((a, b) => a - b)
  return dims.map((d) => ({ value: String(d), label: `${d}` }))
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BedsheetsPage() {
  const [size, setSize]           = useState('')
  const [dimension, setDimension] = useState('')

  const dimensionOptions = useMemo(() => getDimensionOptions(size), [size])

  const price = useMemo(() => {
    if (!size || !dimension) return null
    const map = BEDSHEET_PRICING[size]
    return map ? map[Number(dimension)] : null
  }, [size, dimension])

  const handleSizeChange = (newSize) => {
    setSize(newSize)
    setDimension('')
  }

  return (
    <div className="product-page">
      <section className="section product-section">
        <div className="product-section__grid">

          {/* ── Media column ── */}
          <div className="product-section__media">
            <ImageCarousel
              images={BEDSHEET_IMAGES}
              alt="Premium bedsheets – Vastra Vaibhav Enterprises"
              height={360}
              interval={3500}
            />
            <p className="image-caption caption text-muted">
              A carefully crafted bedsheet design showcasing fine cotton fabric, balanced colors, and a smooth finish—representing the comfort, quality, and elegance that define our bedsheet collection.
            </p>
          </div>

          {/* ── Details column ── */}
          <div className="product-section__details">
            <h1 className="page-title">Bedsheets</h1>
            <p className="product-intro body-text text-muted">
              Our bedsheets are thoughtfully designed to offer a perfect balance of softness, strength, and everyday comfort. Made using premium-quality fabric, they are suitable for daily use while maintaining their look and feel over time. Select your preferred size and dimensions to view pricing tailored to your needs.
            </p>

            <div className="selectors">
              <SelectGroup
                id="bedsheet-size"
                label="Size"
                options={SIZE_OPTIONS}
                value={size}
                onChange={handleSizeChange}
              />
              <SelectGroup
                id="bedsheet-dimension"
                label="Thread Count (TC)"
                options={dimensionOptions}
                value={dimension}
                onChange={setDimension}
              />
            </div>

            <PriceDisplay price={price} label="Price" />

            <div className="product-description">
              <h3 className="card-title">Fabric quality, comfort & durability</h3>
              <p className="body-text text-muted">
                Each bedsheet is produced using carefully chosen cotton fabric that feels gentle on the skin and remains breathable throughout the year. The tight weave enhances durability while ensuring smooth texture and comfort. Precision stitching and refined finishing help the bedsheets retain their shape, color, and softness even after repeated washes, making them a reliable choice for long-term use.
              </p>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        /* ── Carousel ─────────────────────────────────────────── */
        .carousel {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--bg-soft, #f5f5f5);
          height: var(--carousel-height, 320px);
        }
        .carousel__track {
          width: 100%;
          height: 100%;
          transition: opacity 0.4s ease;
        }
        .carousel__track--fade { opacity: 0; }
        .carousel__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .carousel__btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 34px;
          height: 34px;
          background: rgba(255,255,255,0.85);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          box-shadow: 0 2px 8px rgba(0,0,0,0.18);
          transition: background 0.2s, transform 0.2s;
          z-index: 2;
          padding: 0;
        }
        .carousel__btn:hover {
          background: rgba(255,255,255,1);
          transform: translateY(-50%) scale(1.08);
        }
        .carousel__btn svg { width: 18px; height: 18px; }
        .carousel__btn--prev { left: 10px; }
        .carousel__btn--next { right: 10px; }
        .carousel__dots {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 2;
        }
        .carousel__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.55);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.25s, transform 0.25s;
        }
        .carousel__dot--active {
          background: #fff;
          transform: scale(1.3);
        }

        /* ── Layout ───────────────────────────────────────────── */
        .product-page { padding: 1rem; max-width: 1200px; margin: 0 auto; }
        .product-section__grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 1.5rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .product-section__grid { grid-template-columns: 1fr; }
        }
        .image-caption {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-style: italic;
          margin-top: 0.75rem;
        }
        .product-intro { margin-bottom: 1.5rem; color: var(--text-muted); }
        .selectors { display: flex; flex-wrap: wrap; gap: 1.25rem; margin-bottom: 1.25rem; }
        .selectors .select-group { min-width: 160px; }
        .product-description { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-light); }
        .product-description h3 { margin-bottom: 0.75rem; }
        .product-description p { color: var(--text-muted); }
      `}</style>
    </div>
  )
}