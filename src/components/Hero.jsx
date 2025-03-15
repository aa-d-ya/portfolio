import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/aadyaProfile.png";
import { motion } from "framer-motion";

const container=(delay)=>({
  hidden: {x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5 ,delay}
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Aadya Singh.
            </motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                Software Developer
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {HERO_CONTENT}
            </motion.p>

            <motion.a  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{duration:0.2, delay:1.8}}
                href="/myResume.pdf" 
                download="Aadya_Singh_Resume.pdf"
                className="relative mt-6 mb-5 flex items-center justify-center overflow-hidden rounded-lg border border-gray-600 px-8 py-3 text-lg font-medium text-gray-300 transition-all duration-300 hover:text-white"
                >
                <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#00d4ff] via-[#090979] to-[#8600b3] opacity-10 transition-all duration-300 hover:opacity-20"></span>
                <span className="relative z-10 flex items-center gap-2">
                <svg
                    className="h-5 w-5 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12v4m0 0v4m0-4h16m-8-4l4 4m-4-4l-4 4m8-12H8"
                    ></path>
                </svg>
                Resume
                </span>
                </motion.a>

          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{x:100, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1, delay:1.5}}

            src={profilePic} alt="Aadya Singh" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
