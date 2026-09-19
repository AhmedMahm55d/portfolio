import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectGrid from "../components/Projects/ProjectGrid";
import { projects } from "../data/projects";

function ProjectsPage() {
  return (
    <main className="page">
      <Container>
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects and case studies"
          description="Explore some of the digital products and platforms I have worked on."
        />

        <ProjectGrid projects={projects} />
      </Container>
    </main>
  );
}

export default ProjectsPage;