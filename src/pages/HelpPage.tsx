import './HelpPage.css'

function HelpPage() {
  return (
    <div className="help-page">
      <div className="help-content">
        <h1>Help Center</h1>
        <p className="help-description">
          Find answers to common questions and learn how to get the most out of our platform.
        </p>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>How do I get started?</h3>
            <p>
              Getting started is easy! Simply explore the features on the home page
              and try out the interactive demo to familiarize yourself with the platform.
            </p>
          </div>

          <div className="faq-item">
            <h3>Where can I find documentation?</h3>
            <p>
              Documentation is available in the README file of the repository.
              You can also check the code comments for inline documentation.
            </p>
          </div>

          <div className="faq-item">
            <h3>How do I report a bug?</h3>
            <p>
              You can report bugs by opening an issue on our GitHub repository.
              Please include steps to reproduce the issue and any relevant error messages.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I contribute to the project?</h3>
            <p>
              Absolutely! We welcome contributions. Please check our contributing
              guidelines in the repository for more information on how to get involved.
            </p>
          </div>
        </section>

        <section className="support-section">
          <h2>Need More Help?</h2>
          <p>
            If you can't find what you're looking for, feel free to reach out to us
            through the Contact page. Our team is here to help!
          </p>
        </section>
      </div>
    </div>
  )
}

export default HelpPage
