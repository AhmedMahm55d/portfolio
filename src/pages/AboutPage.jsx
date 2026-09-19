import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

function AboutPage() {
  return (
    <main className="page">
      <Container>
        <SectionTitle
          eyebrow="About Me"
          title="Building useful products with clean technology"
          description="Learn more about my background, experience and development journey."
        />

        <div className="about-page__content">
          <div className="about-page__text">
            <p>
              I am a Full-Stack Software Developer focused on
              building modern, scalable and user-friendly digital
              products.
            </p>

            <p>
              I work across frontend, backend and mobile
              development using technologies such as React,
              Laravel, Vue.js, MySQL and Flutter.
            </p>

            <p>
              I enjoy transforming business ideas into complete
              products, starting from planning and architecture
              through development, testing and deployment.
            </p>
          </div>

          <div className="about-page__details">
            <div>
              <span>Specialization</span>
              <strong>Full-Stack Development</strong>
            </div>

            <div>
              <span>Education</span>
              <strong>Computer Engineering</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Egypt</strong>
            </div>

            <div>
              <span>Availability</span>
              <strong>Open to opportunities</strong>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default AboutPage;