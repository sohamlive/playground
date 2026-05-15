import ProjectCard from './ProjectCard';
import projectData from '../data/projects.json';
import { Project } from '../types';

export default function ProjectGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(projectData as Project[]).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
