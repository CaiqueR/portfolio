import * as motion from "motion/react-client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center md:justify-start">
      <motion.a
        href="https://github.com/CaiqueR"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGithub />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/caiquer"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaLinkedin />
      </motion.a>
    </div>
  );
}
