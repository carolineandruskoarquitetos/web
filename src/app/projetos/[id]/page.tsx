import { notFound } from "next/navigation";
import { ImageGallery, ProjectDescription } from "@/components";
import { projectDetails } from "@/data";

type Params = Promise<{
  id: string;
}>;

interface ProjectPageProps {
  params: Params;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectDetails.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Projeto não encontrado | Caroline Andrusko",
    };
  }

  return {
    title: `${project.title} | Caroline Andrusko`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectDetails.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-28 sm:pt-36 pb-8">
      <div className="container mx-auto">
        <div className="pb-12 sm:pb-20">
          <h1 className="text-2xl sm:text-3xl text-stone-600 text-center pb-8 sm:pb-16 tracking-wide">
            {project.title}
          </h1>
          <ProjectDescription
            details={{
              location: project.location,
              status: project.status,
              projectYear: project.projectYear,
              constructionYear: project.constructionYear,
              photographer: project.photographer,
              description: project.description,
            }}
          />
        </div>
        <ImageGallery images={project.images} projectTitle={project.title} />
      </div>
    </main>
  );
}
