import { Link, useParams } from "react-router-dom";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import TechnologyBadge from "../components/Projects/TechnologyBadge";
import { projects } from "../data/projects";

function ProjectDetailsPage() {
  const { slug } = useParams();

  const project = projects.find(
    (projectItem) => projectItem.slug === slug
  );

  if (!project) {
    return (
      <main className="page">
        <Container>
          <div className="project-not-found">
            <p>Project not found.</p>

            <Link to="/projects">
              Return to projects
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="project-details">
      <Container>
        <Link
          to="/projects"
          className="project-details__back"
        >
          ← Back to projects
        </Link>

        <div className="project-details__header">
          <p className="project-details__category">
            {project.category}
          </p>

          <h1>{project.title}</h1>

          <p className="project-details__description">
            {project.shortDescription}
          </p>

          <div className="project-details__technologies">
            {project.technologies.map((technology) => (
              <TechnologyBadge
                key={technology}
                technology={technology}
              />
            ))}
          </div>

          {project.liveUrl && (
            <Button href={project.liveUrl}>
              Visit live project
            </Button>
          )}
        </div>

        <div className="project-details__cover">
          <img
            src={project.image}
            alt={`${project.title} project`}
          />
        </div>

        <div className="project-details__content">
          <section>
            <h2>Project overview</h2>

            <p>
              This case study will explain the project goals,
              architecture, development process and the solutions
              used to build the final product.
            </p>
          </section>

          <section>
            <h2>My role</h2>

            <p>
              I worked on the planning, architecture, development,
              testing and deployment of this project.
            </p>
          </section>

          <section>
            <h2>Challenges and solutions</h2>

            <p>
              Detailed challenges and technical solutions will be
              added for each project individually.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}

export default ProjectDetailsPage;