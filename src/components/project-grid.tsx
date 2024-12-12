import { projects } from "@/data";
import { Category } from "@/types";
import ProjectImage from "./project-image";

interface ProjectGridProps {
  category?: Category;
}

export function ProjectGrid({ category }: ProjectGridProps) {
  const filteredProjects = category
    ? projects.filter((project) => project.category === category)
    : projects;

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredProjects.map((project) => (
        <ProjectImage key={project.id} project={project} />
      ))}
    </div>
  );
}
