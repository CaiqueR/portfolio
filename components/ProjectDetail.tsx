import * as motion from "motion/react-client";
import Image from "next/image";
import { Project } from "@/types";
import { FaGithub, FaTimes } from "react-icons/fa";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        layoutId={`project-card-${project.title}`}
        className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          layoutId={`project-image-${project.title}`}
          className="relative h-64"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div className="p-8">
          <motion.h2
            layoutId={`project-title-${project.title}`}
            className="text-2xl font-bold mb-4"
          >
            {project.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 mb-6"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <motion.a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-xl" />
              View Repository
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.button
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTimes className="text-xl" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
