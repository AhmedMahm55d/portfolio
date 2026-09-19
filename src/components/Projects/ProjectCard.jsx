import { Link } from "react-router-dom";

import Card from "../ui/Card";
import TechnologyBadge from "./TechnologyBadge";

function ProjectCard({ project }) {
  return (
    <Card className="project-card">
      <Link
        to={`/projects/${project.slug}`}
        className="project-card__image-link"
      >
        <div className="project-card__image">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
          />

          <span className="project-card__category">
            {project.category}
          </span>
        </div>
      </Link>

      <div className="project-card__content">
        <h2>
          <Link to={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h2>

        <p>{project.shortDescription}</p>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <TechnologyBadge
              key={technology}
              technology={technology}
            />
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="project-card__link"
        >
          View case study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Card>
  );
}

export default ProjectCard;