import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Project } from "@/types";

const projects: Project[] = [
  {
    title: "Caique Shoes",
    description:
      "An e-commerce platform for sneakers built with React, Redux and TypeScript.",
    image: "/caique-shoes.png",
    repo: "https://github.com/CaiqueR/caique-shoes",
  },
  {
    title: "Chammas",
    description:
      "A landing page for Chammas Engenharia built with Next.js and TypeScript.",
    image: "/chammas.png",
    repo: "https://github.com/CaiqueR/chammas",
  },
  {
    title: "Movie Theater",
    description:
      "A cinema application showcasing movies from an API using React.",
    image: "/movie-theater.png",
    repo: "https://github.com/CaiqueR/movie-theater",
  },
  {
    title: "Pizza Joint",
    description:
      "An interactive pizza ordering app with smooth Framer Motion animations.",
    image: "/pizza-joint.png",
    repo: "https://github.com/CaiqueR/pizzajoint",
  },
  {
    title: "Tesla Clone",
    description:
      "A Tesla interface clone built with React and Styled Components.",
    image: "/tesla-clone.png",
    repo: "https://github.com/CaiqueR/tesla-clone",
  },
  {
    title: "Twitter Clone",
    description: "A Twitter interface clone built with Next.js and SCSS.",
    image: "/twitter-clone.png",
    repo: "https://github.com/CaiqueR/twitter",
  },
  {
    title: "Wildbeast",
    description:
      "A responsive grid layout website about wolves and wild animals.",
    image: "/wildbeast.png",
    repo: "https://github.com/CaiqueR/wildbeast",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ProjectsSection projects={projects} />
    </div>
  );
}
