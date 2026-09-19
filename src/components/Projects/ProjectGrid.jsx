import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects }) {
  if (!projects.length) {
    return (
      <p className="projects-empty">
        No projects were found.
      </p>
    );
  }

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;