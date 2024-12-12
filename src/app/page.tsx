import { Hero, HomeProjectGrid } from "@/components";
import { featuredProjects } from "@/data";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <HomeProjectGrid projects={featuredProjects} />
    </main>
  );
}
