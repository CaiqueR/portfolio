import Image from "next/image";
import * as motion from "motion/react-client";
import { SocialLinks } from "@/components/SocialLinks";
import { ScrollIndicator } from "@/components/ScrollIndicator";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
      duration: 1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      delay: 0.4,
    },
  },
};

export function HeroSection() {
  return (
    <motion.section
      className="h-screen flex items-center justify-center relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/2 relative group"
          variants={imageVariants}
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 15 },
          }}
        >
          <motion.div
            className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <Image
            src="/me.jpeg"
            alt="Caique Ribeiro"
            width={300}
            height={300}
            className="rounded-full shadow-xl relative"
            priority
          />
        </motion.div>

        <motion.div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            variants={textVariants}
          >
            Caique Ribeiro de Oliveira
          </motion.h1>
          <motion.p
            className="text-xl mb-6 text-gray-600 dark:text-gray-300"
            variants={subtitleVariants}
          >
            Full Stack Developer
          </motion.p>
          <motion.div
            variants={textVariants}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.6 },
            }}
          >
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/10 to-purple-50/10 dark:from-blue-900/10 dark:to-purple-900/10" />
      </motion.div>

      <ScrollIndicator />
    </motion.section>
  );
}
