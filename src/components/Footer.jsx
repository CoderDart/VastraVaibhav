export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Vastra Vaibhav. All rights reserved.</p>
      <style>{`
        .footer {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-light) 100%);
          color: var(--bg-white);
          text-align: center;
          padding: 1.5rem;
          margin-top: 3rem;
          border-top: 3px solid var(--accent-blue);
          font-size: 0.95rem;
        }
        .footer p { margin: 0; }
      `}</style>
    </footer>
  )
}
