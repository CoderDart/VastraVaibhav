import ImageShowcase from '../components/ImageShowcase'


const HERO_IMG = '/images/about.png'
const newIMG= '/images/logo1.jpeg'

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="section about-hero">
        <div className="about-hero__grid">
          <div className="about-hero__media">
            <ImageShowcase
              src={HERO_IMG}
              alt="Vastra Vaibhav"
            />
          </div>
          <div className="about-hero__content">
            <span className="about-hero__label label">About Us</span>
            <h1 className="page-title">Welcome to Vastra Vaibhav</h1>
            <p className="body-text">
              Vastra Vaibhav is dedicated to delivering high-quality home textiles that blend comfort, elegance, and everyday practicality. We specialize in bedsheets and towels designed to enhance the look and feel of modern homes while meeting the demands of daily use.
            </p>
            <p className="body-text">
              Our products are crafted using carefully sourced fabrics and refined manufacturing techniques to ensure softness, durability, and long-lasting performance. Each piece reflects our focus on detail, from color consistency to stitching quality.
            </p>
            <p className="body-text text">
              We believe premium textiles should be accessible, reliable, and enjoyable for every household.
            </p>
          </div>
        </div>
      </section>



      <style>{`
        .about-page { padding: 1rem; max-width: 1200px; margin: 0 auto; }
        .about-hero__grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 1.5rem;
          align-items: center;
          min-height:62vh; 

        }
        .about-hero__media .image-showcase img { min-height: 260px; object-fit: cover; }
        @media (max-width: 768px) {
          .about-hero__grid { grid-template-columns: 1fr; }
          .about-hero__media .image-showcase img { min-height: 220px; }
        }
        .about-hero__label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary-blue);
          margin-bottom: 0.5rem;
        }
        .about-hero__content h1 { margin-bottom: 1rem; }
        .about-hero__content p { margin-bottom: 0.75rem; color: var(--text-muted); }
        .about-blocks__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .about-blocks__grid { grid-template-columns: 1fr; }
        }
        .about-block {
          background: var(--bg-white);
          border-radius: var(--radius);
          padding: 1.5rem;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
        }
        .about-block h3 { margin-bottom: 1rem; }
        .about-block__media { margin-bottom: 1rem; }
        .about-block__media .image-showcase img { min-height: 180px; object-fit: cover; }
        .about-block p { font-size: 0.95rem; color: var(--text-muted); }
        .about-history { text-align: center; }
        .about-history h2 { margin-bottom: 1.25rem; }
        .about-history__media { max-width: 800px; margin: 0 auto 1.5rem; }
        .about-history__media .image-showcase img { min-height: 280px; object-fit: cover; }
        .about-history__text {
          max-width: 640px;
          margin: 0 auto;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  )
}
