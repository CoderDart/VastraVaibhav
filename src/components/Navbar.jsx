import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const productItems = [
  { to: '/bedsheets', label: 'Bedsheets' },
  { to: '/towels', label: 'Towels' },
]

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  const isProductsActive = location.pathname === '/bedsheets' || location.pathname === '/towels'

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar__container">
        <Link to="/" className="navbar__brand">
          <img
            src="/images/logo1.jpeg"
            alt="Vastra Vaibhav Logo"
            className="navbar__logo"
          />

          Vastra Vaibhav
        </Link>
        <button
          type="button"
          className="navbar__toggler"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar__menu ${open ? 'navbar__menu--open' : ''}`}>
          <li>
            <Link
              to="/"
              className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="navbar__dropdown-wrap" ref={dropdownRef}>
            <button
              type="button"
              className={`navbar__link navbar__link--trigger ${productsOpen || isProductsActive ? 'navbar__link--active' : ''}`}
              onClick={() => setProductsOpen((o) => !o)}
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Products
              <i className="fas fa-chevron-down navbar__chevron" />
            </button>
            <ul className={`navbar__dropdown ${productsOpen ? 'navbar__dropdown--open' : ''}`}>
              {productItems.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`navbar__sublink ${location.pathname === to ? 'navbar__sublink--active' : ''}`}
                    onClick={() => { setOpen(false); setProductsOpen(false); }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {navLinks.slice(1).map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`navbar__link ${location.pathname === to ? 'navbar__link--active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
.navbar__brand {
  display: flex;              /* ensures logo + text are side by side */
  align-items: center;        /* vertically centers them */
  gap: 0.5rem;                /* spacing between logo and text */
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--bg-white) !important;
  letter-spacing: 0.02em;
  text-decoration: none;
}

.navbar__logo {
  height: 60px;               /* adjust size */
  width: auto;
}

@media (max-width: 767px) {
  .navbar__logo {
    height: 26px;             /* smaller logo on mobile */
  }
}
        .navbar {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-light) 100%);
          color: var(--bg-white);
          padding: 0.75rem 1.5rem;
          box-shadow: var(--shadow-md);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .navbar__container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .navbar__brand {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.75rem;
          color: var(--bg-white) !important;
          letter-spacing: 0.02em;
        }
        .navbar__brand:hover { color: var(--bg-cream) !important; }
        .navbar__toggler {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: var(--bg-white);
        }
        .navbar__toggler span {
          width: 24px;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
          transition: var(--transition);
        }
        @media (min-width: 768px) { .navbar__toggler { display: none; } }
        .navbar__menu {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin: 0;
          padding: 0;
        }
        @media (max-width: 767px) {
          .navbar__menu {
            display: none;
            width: 100%;
            flex-direction: column;
            align-items: stretch;
            padding: 1rem 0;
          }
          .navbar__menu--open { display: flex; }
          .navbar__dropdown-wrap { order: 1; }
        }
        .navbar__link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.92) !important;
          transition: var(--transition);
          border: none;
          cursor: pointer;
          background: transparent;
          text-decoration: none;
        }
        .navbar__link:hover {
          background: rgba(255,255,255,0.18);
          color: var(--bg-white) !important;
        }
        .navbar__link--active {
          background: rgba(255,255,255,0.22);
          color: var(--bg-white) !important;
        }
        .navbar__chevron {
          font-size: 0.65rem;
          transition: transform var(--transition);
        }
        .navbar__dropdown--open .navbar__chevron { transform: rotate(180deg); }
        .navbar__dropdown-wrap { position: relative; }
        .navbar__dropdown {
          list-style: none;
          margin: 0;
          padding: 0.5rem 0;
          min-width: 160px;
          background: var(--bg-white);
          border-radius: var(--radius);
          box-shadow: var(--shadow-md);
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 0.25rem;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-4px);
          transition: var(--transition);
          z-index: 50;
          border: 1px solid var(--border-light);
        }
        .navbar__dropdown--open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        @media (max-width: 767px) {
          .navbar__dropdown {
            position: static;
            margin-top: 0.25rem;
            margin-left: 1rem;
            opacity: 1;
            visibility: visible;
            transform: none;
            max-height: 0;
            overflow: hidden;
            padding: 0;
            box-shadow: none;
            background: rgba(255,255,255,0.1);
            border: none;
          }
          .navbar__dropdown--open {
            max-height: 120px;
            padding: 0.5rem 0;
          }
        }
        .navbar__sublink {
          display: block;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          color: var(--text-dark) !important;
          transition: var(--transition);
        }
        .navbar__sublink:hover {
          background: var(--bg-section);
          color: var(--primary-blue-dark) !important;
        }
        .navbar__sublink--active {
          background: var(--accent-blue-soft);
          color: var(--primary-blue-dark) !important;
          font-weight: 500;
        }
        @media (max-width: 767px) {
          .navbar__sublink { color: rgba(255,255,255,0.95) !important; padding-left: 1rem; }
          .navbar__sublink:hover { background: rgba(255,255,255,0.15); color: var(--bg-white) !important; }
          .navbar__sublink--active { background: rgba(255,255,255,0.2); color: var(--bg-white) !important; }
        }
      `}</style>
    </nav>
  )
}
