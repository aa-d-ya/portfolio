import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiDocker } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration, delay) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay,
    },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
       className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0, x:-100}}
       transition={{duration:1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        {/* React Icon */}
        <motion.div
          variants={iconVariants(2.5, 0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Node.js Icon */}
        <motion.div
          variants={iconVariants(3, 0.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-400" />
        </motion.div>

        {/* Spring Boot Icon */}
        <motion.div
          variants={iconVariants(2.8, 0.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSpringboot className="text-7xl text-green-600" />
        </motion.div>

        {/* Tailwind CSS Icon */}
        <motion.div
          variants={iconVariants(3.2, 0.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
        </motion.div>

        {/* Java Icon */}
        <motion.div
          variants={iconVariants(2.6, 0.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-7xl text-red-500" />
        </motion.div>

        {/* Docker Icon */}
        <motion.div
          variants={iconVariants(3.5, 0.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDocker className="text-7xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
