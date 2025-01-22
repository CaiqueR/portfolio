"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import { SocialLinks } from "@/components/SocialLinks";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { useEffect, useState } from "react";

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

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Problem Solver",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="h-screen flex items-center justify-center relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl"
            style={{
              background: `radial-gradient(circle, ${
                i === 0 ? "#60A5FA" : i === 1 ? "#A78BFA" : "#34D399"
              }, transparent)`,
              width: "40%",
              height: "40%",
              left: `${i * 30}%`,
              top: `${(i * 40) % 60}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 z-10">
        <motion.div
          className="md:w-1/2 relative group"
          variants={imageVariants}
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 15 },
          }}
        >
          {/* Glowing effect behind image */}
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
          {/* Rotating border effect */}
          <motion.div
            className="absolute -inset-4 rounded-full border-2 border-blue-500/30 dark:border-blue-400/30"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
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
          <motion.div
            className="h-8 overflow-hidden"
            variants={subtitleVariants}
          >
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300"
              animate={{ y: -roleIndex * 32 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            >
              {roles.map((role) => (
                <span key={role} className="block h-8">
                  {role}
                </span>
              ))}
            </motion.p>
          </motion.div>
          <motion.div
            variants={textVariants}
            className="mt-6"
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

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/10 via-purple-50/10 to-transparent dark:from-blue-900/10 dark:via-purple-900/10 dark:to-transparent" />
      </motion.div>

      <ScrollIndicator />
    </motion.section>
  );
}
