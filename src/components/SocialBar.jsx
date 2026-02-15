const socialLinks = [
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    value: 'vastra_vaibhav@yahoo.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vastra_vaibhav@yahoo.com'

,
  },
 {
  href: 'https://wa.me/919342182007',  
  icon: 'fa-brands fa-whatsapp',
  label: 'WhatsApp',
  value: '+919342182007'
},
  { href: 'https://www.instagram.com/raghavendra_rajendra?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: 'https://www.justdial.com/Mysore/Vastra-Vaibhav-Bombay-Dyeing-Next-To-Rajkamal-Theatre-Shivarampet/0821PX821-X821-131003191134-B9Z3_BZDET?rand3=&rand2=&rand1=', icon: 'fab fa-solid fa-j', label: 'JustDial' },
]

export default function SocialBar() {
  return (
    <div className="social-bar" aria-label="Social media links">
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-bar__link"
          aria-label={label}
        >
          <i className={icon} />
        </a>
      ))}
      <style>{`
        .social-bar {
          position: fixed;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          z-index: 50;
          padding: 0.5rem;
        }
        .social-bar__link {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-blue);
          color: var(--bg-white) !important;
          border-radius: 50%;
          font-size: 1.1rem;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }
        .social-bar__link:hover {
          background: var(--accent-blue);
          transform: scale(1.08);
          box-shadow: var(--shadow-md);
        }
        @media (max-width: 768px) {
          .social-bar {
            top: auto;
            bottom: 1rem;
            right: 1rem;
            transform: none;
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  )
}
