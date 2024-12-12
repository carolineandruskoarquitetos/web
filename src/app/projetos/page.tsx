import { notFound } from "next/navigation";
import { ProjectGrid } from "@/components/project-grid";
import { Category } from "@/types";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface ProjectsPageProps {
  searchParams: SearchParams;
}

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const { categoria } = await searchParams;
  const validCategory = categoria as Category;

  // If category is provided but invalid, show 404
  if (validCategory && !Object.values(Category).includes(validCategory)) {
    notFound();
  }

  return (
    <main className="w-full pt-16 px-5 mb-8 min-h-[calc(100vh-4rem)]">
      {validCategory ? (
        <>
          <ProjectGrid category={validCategory} />
        </>
      ) : (
        <>
          <h1 className="py-6 text-center text-4xl font-black uppercase tracking-tighter ">
            PORTFOLIO
          </h1>
          <ProjectGrid />
        </>
      )}
    </main>
  );
}
