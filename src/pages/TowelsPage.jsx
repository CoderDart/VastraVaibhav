import { useState } from 'react'
import ImageShowcase from '../components/ImageShowcase'
import SelectGroup from '../components/SelectGroup'
import PriceDisplay from '../components/PriceDisplay'

const TOWEL_PRICING = {
  '400': 825,
  '600': 1685,
}

const GSM_OPTIONS = [
  { value: '400', label: '400 GSM' },
  { value: '600', label: '600 GSM' },
]

export default function TowelsPage() {
  const [gsm, setGsm] = useState('')

  const price = gsm ? TOWEL_PRICING[gsm] ?? null : null

  return (
    <div className="product-page">
      <section className="section product-section">
        <div className="product-section__grid">
          <div className="product-section__media">
            <ImageShowcase
              src="towel.jpeg"
              alt="Premium towels - Vastra Vaibhav Enterprises"
            />
            <p className="image-caption caption text-muted">
              A plush towel design selected to highlight the softness, thickness, and refined finish that define our towel collection.
            </p>
          </div>
          <div className="product-section__details">
            <h1 className="page-title">Towels</h1>
            <p className="product-intro body-text text-muted">
              Our towels are crafted to deliver everyday comfort with reliable absorbency. Designed in a standard size for convenience, they are available in different GSM options so you can choose the level of softness and thickness that suits your preference.
            </p>

            <div className="selectors">
              <SelectGroup
                id="towel-gsm"
                label="GSM"
                options={GSM_OPTIONS}
                value={gsm}
                onChange={setGsm}
              />
            </div>

            <PriceDisplay price={price} label="Price" />

            <div className="product-description">
              <h3 className="card-title">Softness, absorbency & long-lasting quality</h3>
              <p className="body-text text-muted">
                Our towels are designed for superior comfort and performance. The dense fabric construction enhances absorbency and plushness, while quality finishing ensures long-lasting softness. Available in higher GSM options for a richer feel, they are perfect for everyday use as well as guest and premium settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .product-section__media .image-showcase img {
  width: 100%;          /* stretch full width */
  height: 450px;        /* same fixed height as bedsheets */
  object-fit: cover;    /* crop/scale to fill space consistently */
  border-radius: var(--radius-lg);
}
        .product-page { padding: 1rem; max-width: 1200px; margin: 0 auto; }
        .product-section__grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 1.5rem;
          align-items: start;
        }
        .product-section__media .image-showcase { margin-bottom: 0.75rem; }
        .product-section__media .image-showcase img { min-height: 300px; object-fit: cover; }
        @media (max-width: 768px) {
          .product-section__grid { grid-template-columns: 1fr; }
          .product-section__media .image-showcase img { min-height: 260px; }
        }
        .image-caption {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-style: italic;
          margin-top: 0.5rem;
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
