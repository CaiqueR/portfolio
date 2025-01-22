import * as motion from "motion/react-client";
import { FaChevronDown } from "react-icons/fa";

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [0, 10, 10, 20],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <p className="text-sm mb-2 text-gray-600 dark:text-gray-300">
        Scroll to see my projects
      </p>
      <FaChevronDown className="mx-auto text-2xl text-gray-600 dark:text-gray-300" />
    </motion.div>
  );
}
