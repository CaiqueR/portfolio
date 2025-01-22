import Image from "next/image";
import * as motion from "motion/react-client";
import { SocialLinks } from "@/components/SocialLinks";
import { ScrollIndicator } from "@/components/ScrollIndicator";

export function HeroSection() {
  return (
    <motion.section
      className="h-screen flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/me.jpeg"
            alt="Caique Ribeiro"
            width={300}
            height={300}
            className="rounded-full shadow-xl"
            priority
          />
        </motion.div>

        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Caique Ribeiro de Oliveira
          </h1>
          <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
            Full Stack Developer
          </p>
          <SocialLinks />
        </motion.div>
      </div>
      <ScrollIndicator />
    </motion.section>
  );
}
