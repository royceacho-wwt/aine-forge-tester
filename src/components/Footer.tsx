// aine-forge-rule: reviewed
import './Footer.css'

interface FooterProps {
  companyName?: string
  year?: number
}

export function Footer({ companyName = 'Aine Forge Tester', year = new Date().getFullYear() }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {year} {companyName}. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="/about" className="footer-link">About</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/privacy" className="footer-link">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
