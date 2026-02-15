import ImageShowcase from '../components/ImageShowcase'

const HERO_IMG = '/images/contact.png'

const DUMMY_ADDRESS = 'R 1,2,3 SHIIV MARKET, Vinoba Rd, Shivarampet, Mysuru, Karnataka 570001'
const MAP_LINK = 'https://www.google.com/maps/search/?api=1&query=Andheri+East+Mumbai'

const contactInfo = [
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    value: 'vastra_vaibhav@yahoo.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vastra_vaibhav@yahoo.com'

,
  },
  {
    icon: 'fas fa-phone',
    title: 'Phone',
    value: '+91 9342182007',
    href: 'tel:+919342182007',
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Address',
    value: DUMMY_ADDRESS,
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="contact-page">

      <section className="section contact-cards">
        <h2 className="section-title contact-cards__title">Get in Touch</h2>
        <div className="contact-cards__grid">
          {contactInfo.map(({ icon, title, value, href }) => (
            <div key={title} className="contact-card">
              <div className="contact-card__icon">
                <i className={icon} />
              </div>
              <h3 className="card-title">{title}</h3>
              {href ? (
                <a href={href} className="contact-card__link" target="_blank" rel="noopener noreferrer">
                  {value}
                </a>
              ) : (
                <p className="contact-card__value body-text text-muted">{value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Map integration – space for Google Maps embed */}
      <section className="section contact-map">
        <h2 className="section-title contact-map__title">Find us</h2>
        <p className="body-text text-muted contact-map__address">
          {DUMMY_ADDRESS}
        </p>
        <div className="contact-map__container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995816.3028139577!2d75.27703769082326!3d12.310485779027601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf71f622e7abab%3A0xe6008d089a0a797f!2sVastra%20Vaibhav!5e0!3m2!1sen!2sin!4v1770083991721!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
         <section className="section contact-hero">
        <div className="contact-hero__grid">

          <div className="contact-hero__content">
            <h1 className="page-title">Contact Us</h1>
            <p className="body-text">
              We’re always happy to connect with you. Whether you’re exploring our bedsheet and towel collections, need assistance with sizing or fabric details, or wish to enquire about bulk or retail orders, our team is ready to support you.
            </p>
            <p className="body-text text-muted">
              Feel free to reach us through email or phone, or visit us at our store address. We value every enquiry and strive to respond quickly and professionally.
            </p>
          </div>
        </div>
      </section>

      <style>{`
      .contact-map__container iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
        .contact-page { padding: 1rem; max-width: 1200px; margin: 0 auto; }
       .contact-hero__grid {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  text-align: center;
}
        .contact-hero__media .image-showcase img { min-height: 260px; object-fit: cover; }
        @media (max-width: 768px) {
          .contact-hero__grid { grid-template-columns: 1fr; }
          .contact-hero__media .image-showcase img { min-height: 220px; }
        }
        .contact-hero__content {
  text-align: center;          /* centers all text inside */
  display: flex;
  flex-direction: column;
  align-items: center;         /* centers horizontally */
  justify-content: center;     /* centers vertically if needed */
}
        .contact-hero__content .body-text { margin-bottom: 0.75rem; }
        .contact-cards__title { text-align: center; margin-bottom: 1.5rem; }
        .contact-cards__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .contact-card {
          background: var(--bg-white);
          border-radius: var(--radius);
          padding: 1.75rem;
          text-align: center;
          border: 1px solid var(--border-soft);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }
        .contact-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--primary-blue-light);
        }
        .contact-card__icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 1rem;
          background: linear-gradient(145deg, var(--primary-blue-light), var(--accent-blue));
          color: var(--bg-white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }
        .contact-card .card-title { margin-bottom: 0.5rem; }
        .contact-card__link {
          color: var(--primary-blue-dark);
          font-weight: 500;
          font-size: var(--text-caption-size);
        }
        .contact-card__link:hover { color: var(--accent-blue); text-decoration: underline; }
        .contact-card__value { margin: 0; font-size: var(--text-caption-size); }
        .contact-map__title { margin-bottom: 0.5rem; }
        .contact-map__address { margin-bottom: 1.25rem; font-size: var(--text-caption-size); }
        .contact-map__container {
          width: 100%;
          border-radius: var(--radius);
          overflow: hidden;
          border: 1px solid var(--border-soft);
          background: var(--bg-section);
        }
        .contact-map__placeholder {
          min-height: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 2rem;
          background: linear-gradient(145deg, var(--bg-section) 0%, var(--bg-card) 100%);
        }
        .contact-map__placeholder-text {
          font-family: var(--font-body);
          font-size: var(--text-caption-size);
          color: var(--text-muted);
          text-align: center;
          margin: 0;
        }
        .contact-map__link {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: var(--text-caption-size);
          color: var(--primary-blue-dark);
        }
        .contact-map__link:hover { color: var(--primary-blue); text-decoration: underline; }
      `}</style>
    </div>
  )
}
