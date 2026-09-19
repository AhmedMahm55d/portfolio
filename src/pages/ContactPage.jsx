import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import { siteConfig } from "../config/siteConfig";

function ContactPage() {
  return (
    <main className="page">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build something useful"
          description="Have a project, opportunity or idea? Send me a message."
        />

        <div className="contact-page">
          <div className="contact-page__information">
            <h2>Contact information</h2>

            <p>
              I am available for full-time opportunities,
              freelance projects and technical collaborations.
            </p>

            <a href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>

            <Button href={siteConfig.socialLinks.linkedin}>
              Connect on LinkedIn
            </Button>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="How can I help?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project or opportunity"
              />
            </div>

            <button
              className="button button--primary"
              type="submit"
            >
              Send message
            </button>
          </form>
        </div>
      </Container>
    </main>
  );
}

export default ContactPage;