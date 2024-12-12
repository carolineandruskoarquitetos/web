import React from "react";
import { Project } from "@/types";
import ProjectImage from "./project-image";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectImage key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
