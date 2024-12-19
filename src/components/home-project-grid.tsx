import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import HomeProjectImage from "./home-project-image";

interface HomeProjectGridProps {
  projects: Project[];
}

export function HomeProjectGrid({ projects }: HomeProjectGridProps) {
  if (!projects || projects.length < 5) return null;

  return (
    <div className="px-2 pt-2 pb-2 space-y-2">
      {/* 1st row - 3 items on large screens */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 mb-2">
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <Link href={`/projetos/${projects[0].id}`} className="group">
            <HomeProjectImage project={projects[0]} />
          </Link>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <Link href={`/projetos/${projects[1].id}`} className="group">
            <HomeProjectImage project={projects[1]} />
          </Link>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Link href={`/projetos/${projects[2].id}`} className="group">
            <HomeProjectImage project={projects[2]} />
          </Link>
        </div>
      </div>

      {/* 2nd row - 2 items spanning full width on large screens */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="col-span-1">
          <Link href={`/projetos/${projects[3].id}`} className="group">
            <HomeProjectImage project={projects[3]} />
          </Link>
        </div>
        <div className="col-span-1">
          <Link href={`/projetos/${projects[4].id}`} className="group">
            <HomeProjectImage project={projects[4]} />
          </Link>
        </div>
      </div>

      {/* 3rd row - 3 items on large screens */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 mb-2">
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <Link href={`/projetos/${projects[5].id}`} className="group">
            <HomeProjectImage project={projects[5]} />
          </Link>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <Link href={`/projetos/${projects[6].id}`} className="group">
            <HomeProjectImage project={projects[6]} />
          </Link>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Link href={`/projetos/${projects[7].id}`} className="group">
            <HomeProjectImage project={projects[7]} />
          </Link>
        </div>
      </div>

      {/* 4th row - 2 items spanning full width on large screens */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="col-span-1">
          <Link href={`/projetos/${projects[8].id}`} className="group">
            <HomeProjectImage project={projects[8]} />
          </Link>
        </div>
        <div className="col-span-1">
          <Link href={`/projetos/${projects[9].id}`} className="group">
            <HomeProjectImage project={projects[9]} />
          </Link>
        </div>
      </div>
    </div>
  );
}
