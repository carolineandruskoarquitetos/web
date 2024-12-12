import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

interface ProjectImageProps {
  project: Project;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ project }) => {
  return (
    <Link
      key={project.id}
      href={`/projetos/${project.id}`}
      className="group overflow-hidden"
    >
      <div className="aspect-[4/3] relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </div>
      <div className="pt-1 text-stone-600">
        <h2 className="text-md tracking-[.3em]">{project.title}</h2>
      </div>
    </Link>
  );
};

export default ProjectImage;
