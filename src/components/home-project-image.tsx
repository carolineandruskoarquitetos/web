import Image from "next/image";
import { Project } from "@/types";

interface HomeProjectImageProps {
  project: Project;
}

const HomeProjectImage: React.FC<HomeProjectImageProps> = ({ project }) => {
  return (
    <div className="aspect-[4/3] relative overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
      />
      {/* Overlay with title */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute bottom-4 left-4">
          <h2 className="text-white text-lg tracking-[.3em] uppercase">
            {project.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomeProjectImage;
