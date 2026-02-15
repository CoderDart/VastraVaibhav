import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

// ─── Auto Image Carousel ──────────────────────────────────────────────────────
function ImageCarousel({ images, alt, height = 280, interval = 3500, showNav = true }) {
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

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % images.length)
        setAnimating(false)
      }, 400)
    }, interval)
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
      {showNav && images.length > 1 && (
        <>
          <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Previous image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="Next image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
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
const heroImages = [
  '/images/hero.png',
  '/images/towel.jpeg',
  '/images/bedsheet1.png',
  '/images/towel1.png',
  '/images/towel2.png',
  '/images/bedsheet2.png',
  '/images/bedsheet3.png',
  '/images/bedsheet4.png',
  '/images/bedsheet5.png',
  '/images/bedsheet6.png',
  '/images/bedsheet7.png',
  '/images/bedsheet8.png',
  '/images/bedsheet9.png',
  '/images/bedsheet10.png',
  '/images/bedsheet11.png',
  '/images/bedsheet12.png',
]

const products = [
  {
    to: '/bedsheets',
    title: 'Bedsheets',
    description: 'Premium cotton in King & Queen sizes with multiple dimensions. Durable, breathable, and easy to care for.',
    images: ['/images/bedsheets.png', '/images/bedsheet5.png', '/images/bedsheet10.png'],
  },
  {
    to: '/towels',
    title: 'Towels',
    description: 'Soft, absorbent towels in 400 & 600 GSM. Ideal for bath and home—quality that lasts.',
    images: ['/images/towel.jpeg', '/images/towel1.png', '/images/towel2.png'],
  },
]

const features = [
  {
    icon: 'fas fa-leaf',
    title: 'Quality fabrics',
    text: 'Carefully selected cotton and materials for comfort and longevity.',
  },
  {
    icon: 'fas fa-ruler-combined',
    title: 'Multiple options',
    text: 'King & Queen bedsheets in various dimensions; towels in different GSM.',
  },
  {
    icon: 'fas fa-tag',
    title: 'Transparent pricing',
    text: 'Clear prices for every size and option—no hidden charges.',
  },
]

const whyUs = [
  'We focus on what we do best: bedsheets and towels you can rely on.',
  'Every product is chosen for fabric quality, comfort, and value for money.',
  'Straightforward size and GSM options make it easy to find the right fit.',
  'A growing base of retail partners and individual customers trust us for consistent quality.',
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="home">

      {/* Hero */}
      <section className="hero section">
        <div className="hero__grid">
          <div className="hero__media">
            <ImageCarousel images={heroImages} alt="Vastra Vaibhav Enterprises" height={320} interval={4000} />
          </div>
          <div className="hero__content">
            <span className="hero__label label">Home textiles you can trust</span>
            <h1 className="page-title">Welcome to Vastra Vaibhav</h1>
            <p className="body-text">
              At Vastra Vaibhav, we specialize in home textiles that combine everyday comfort with lasting quality. Our bedsheets and towels are thoughtfully designed to suit modern homes, offering softness, durability, and a refined finish you can rely on.
            </p>
            <p className="body-text text-muted">
              Browse our collections with ease—select your preferred size or GSM and view clear pricing instantly. No sign-ups or complicated steps, just straightforward choices and dependable products.
            </p>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="features section">
        <h2 className="section-title features__title">Why shop with us</h2>
        <div className="features__grid">
          {features.map(({ icon, title, text }) => (
            <div key={title} className="feature-card">
              <div className="feature-card__icon">
                <i className={icon} />
              </div>
              <h3 className="card-title">{title}</h3>
              <p className="body-text text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product showcase */}
      <section className="showcase section">
        <h2 className="section-title showcase__title">Our products</h2>
        <p className="body-text showcase__intro text-muted">
          Discover our range of bedsheets and towels, designed for daily use and long-lasting performance. Choose your size, dimensions, or GSM to instantly view pricing—making it easy to find what fits your home and budget.
        </p>
        <div className="showcase__grid">
          {products.map(({ to, title, description, images }) => (
            <Link to={to} key={to} className="product-card">
              <div className="product-card__image">
                <ImageCarousel images={images} alt={title} height={220} interval={3500} showNav={false} />
              </div>
              <div className="product-card__body">
                <h3 className="card-title">{title}</h3>
                <p className="body-text text-muted">{description}</p>
                <span className="product-card__cta">View options & pricing →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="why section">
        <h2 className="section-title why__title">A bit about us</h2>
        <p className="body-text why__lead">
          Vastra Vaibhav is driven by a simple goal—to provide reliable home textiles with honest pricing and consistent quality. By focusing on what we do best, we ensure products that meet everyday needs without compromise.
        </p>
        <ul className="why__list">
          {whyUs.map((item, i) => (
            <li key={i} className="body-text text-muted">{item}</li>
          ))}
        </ul>
        <div className="why__cta">
          <Link to="/about" className="why__link">Learn more about us</Link>
        </div>
      </section>

      <style>{`
        /* ── Carousel ───────────────────────────────────── */
        .carousel {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--bg-soft, #f5f5f5);
          height: var(--carousel-height, 280px);
        }
        .carousel__track {
          width: 100%;
          height: 100%;
          transition: opacity 0.4s ease;
        }
        .carousel__track--fade {
          opacity: 0;
        }
        .carousel__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Prev / Next buttons */
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
        .carousel__btn svg {
          width: 18px;
          height: 18px;
        }
        .carousel__btn--prev { left: 10px; }
        .carousel__btn--next { right: 10px; }

        /* Dot indicators */
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

        /* ── Layout ─────────────────────────────────────── */
        .home { padding: 1rem; max-width: 1200px; margin: 0 auto; }
        .hero__grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 1.5rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero__grid { grid-template-columns: 1fr; }
        }
        .hero__label { display: inline-block; margin-bottom: 0.5rem; color: var(--primary-blue) !important; }
        .hero__content .page-title { margin-bottom: 0.75rem; }
        .hero__content .body-text { margin-bottom: 0.75rem; }
        .hero__content .text-muted { margin-bottom: 0.5rem; }

        .features__title { text-align: center; margin-bottom: 1.5rem; }
        .features__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .feature-card {
          background: var(--bg-white);
          border-radius: var(--radius);
          padding: 1.5rem;
          border: 1px solid var(--border-soft);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }
        .feature-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--primary-blue-light);
        }
        .feature-card__icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(145deg, var(--primary-blue-light), var(--accent-blue));
          color: var(--bg-white);
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
        .feature-card .card-title { margin-bottom: 0.4em; }
        .feature-card .text-muted { margin-bottom: 0; font-size: var(--text-caption-size); }

        .showcase__title { text-align: center; margin-bottom: 0.5rem; }
        .showcase__intro { text-align: center; max-width: 560px; margin: 0 auto 1.5rem; }
        .showcase__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.25rem;
        }
        .product-card {
          background: var(--bg-white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-soft);
          transition: var(--transition);
        }
        .product-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-4px);
          border-color: var(--primary-blue-light);
        }
        .product-card__image { margin: 0; }
        .product-card__image .carousel { border-radius: var(--radius-lg) var(--radius-lg) 0 0; }
        .product-card__body { padding: 1.25rem; }
        .product-card .card-title { margin-bottom: 0.4em; }
        .product-card .body-text { margin-bottom: 0.5rem; }
        .product-card__cta {
          display: inline-block;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: var(--text-caption-size);
          color: var(--primary-blue-dark);
        }
        .product-card:hover .product-card__cta { color: var(--accent-blue); }

        .why__title { text-align: center; margin-bottom: 0.5rem; }
        .why__lead { text-align: center; max-width: 540px; margin: 0 auto 1.25rem; }
        .why__list {
          max-width: 560px;
          margin: 0 auto 1.5rem;
          padding-left: 1.25rem;
        }
        .why__list li { margin-bottom: 0.5em; }
        .why__cta { text-align: center; }
        .why__link {
          display: inline-block;
          padding: 0.6rem 1.25rem;
          background: linear-gradient(145deg, var(--primary-blue), var(--primary-blue-light));
          color: var(--bg-white) !important;
          border-radius: var(--radius);
          font-weight: 600;
          font-size: var(--text-caption-size);
        }
        .why__link:hover { opacity: 0.92; }
      `}</style>
    </div>
  )
}