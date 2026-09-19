import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";

function HeroSection() {
  return (
    <section className="hero">
      <Container className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Full-Stack Software Developer
          </p>

          <h1 className="hero__title">
            I build modern digital products
            <span> from idea to deployment.</span>
          </h1>

          <p className="hero__description">
            I develop fast and scalable web applications using
            React, Laravel, MySQL, Tailwind CSS and modern software
            architecture.
          </p>

          <div className="hero__actions">
            <Button to="/projects">
              Explore my work
            </Button>

            <Button to="/contact" variant="secondary">
              Contact me
            </Button>
          </div>

          <div className="hero__technologies">
            <span>React</span>
            <span>Laravel</span>
            <span>MySQL</span>
            <span>Tailwind</span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__glow" />

          <div className="developer-card">
            <div className="developer-card__top">
              <span className="status-dot" />
              <span>Available for opportunities</span>
            </div>

            <div className="developer-card__code">
              <p>
                <span>const</span> developer = {"{"}
              </p>
              <p className="code-indent">
                name: <strong>"Ahmed"</strong>,
              </p>
              <p className="code-indent">
                role: <strong>"Full-Stack Developer"</strong>,
              </p>
              <p className="code-indent">
                builds: <strong>"Digital Products"</strong>
              </p>
              <p>{"};"}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;