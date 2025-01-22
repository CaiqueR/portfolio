import Image from "next/image";
import * as motion from "motion/react-client";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 15,
  mass: 1,
  velocity: 1.5,
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.li
      layoutId={`project-card-${project.title}`}
      className="relative group cursor-pointer"
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        rotateY: 5,
        transition: springTransition,
      }}
      onClick={() => onSelect(project)}
    >
      {/* Card content */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full transform-gpu"
        variants={contentVariants}
      >
        {/* Hover gradient overlay */}
        <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <motion.div
          layoutId={`project-image-${project.title}`}
          className="relative h-48"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <div className="p-6 relative">
          <motion.h3
            layoutId={`project-title-${project.title}`}
            className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            {project.title}
          </motion.h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.description}
          </p>

          {/* View details text */}
          <motion.span
            className="text-sm text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            View details →
          </motion.span>
        </div>
      </motion.div>
    </motion.li>
  );
}
