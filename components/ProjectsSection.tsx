"use client";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDetail } from "@/components/ProjectDetail";
import { Project } from "@/types";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface ProjectsSectionProps {
  projects: Project[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section className="py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.ul
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </motion.ul>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
