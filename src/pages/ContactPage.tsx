import './ContactPage.css'

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p className="contact-description">
          Have questions or feedback? We'd love to hear from you!
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div>
              <h3>Email</h3>
              <p>contact@example.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <h3>Location</h3>
              <p>123 Main Street, City, Country</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <p className="footer-note">
          We typically respond within 24-48 business hours. For urgent matters, please call us directly.
        </p>
      </footer>
    </div>
  )
}

export default ContactPage
