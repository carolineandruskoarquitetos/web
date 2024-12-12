import React from "react";

interface ProjectDetails {
  location: string;
  status: string;
  projectYear: string;
  constructionYear: string;
  photographer: string;
  description?: string;
}

interface ProjectDescriptionProps {
  details: ProjectDetails;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ details }) => {
  return (
    <div className="flex flex-col justify-center mx-auto max-w-6xl">
      <div className="mx-8 sm:mx-16 grid grid-cols-3 gap-x-8 gap-y-4 mt-8 mb-6 text-stone-600">
        <div>
          <h3 className="font-semibold mb-1">Local</h3>
          <p className="text-sm sm:text-base">{details.location}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Status</h3>
          <p className="text-sm sm:text-base">{details.status}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Projeto</h3>
          <p className="text-sm sm:text-base">{details.projectYear}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Obra</h3>
          <p className="text-sm sm:text-base">{details.constructionYear}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Fotos</h3>
          <p className="text-sm sm:text-base">{details.photographer}</p>
        </div>
      </div>

      {details?.description && (
        <div className="mx-8 sm:mx-16 py-8 text-stone-600">
          <p className="text-lg">{details.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDescription;
