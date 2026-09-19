import Container from "../ui/Container";
import { siteConfig } from "../../config/siteConfig";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container className="footer__content">
        <p className="footer__copyright">
          © {currentYear} {siteConfig.name}. All rights reserved.
        </p>

        <div className="footer__links">
          <a
            href={siteConfig.socialLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href={`mailto:${siteConfig.email}`}>
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;