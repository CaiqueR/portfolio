import Image from "next/image";
import * as motion from "motion/react-client";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.li
      layoutId={`project-card-${project.title}`}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full cursor-pointer"
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.2 },
      }}
      onClick={() => onSelect(project)}
    >
      <motion.div variants={contentVariants}>
        <motion.div
          layoutId={`project-image-${project.title}`}
          className="relative h-48"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="p-6">
          <motion.h3
            layoutId={`project-title-${project.title}`}
            className="text-xl font-bold mb-2"
          >
            {project.title}
          </motion.h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.li>
  );
}
