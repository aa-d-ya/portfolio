import { motion } from "framer-motion";

const Contact = () => {
    return (
      <div className="border-b border-neutral-900 pb-20 font-[Inter]">
        
        <motion.h2 
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:0.5}}
        className="my-10 text-center text-4xl font-bold tracking-wide text-gray-200">
          Let’s Connect
        </motion.h2>

        <div className="text-center text-lg text-gray-400">
          <motion.p 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}
          className="my-4 font-light">
            📍 Bangalore, India
          </motion.p>

          <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
          className="my-4 font-light">
            🚀 Open for collaborations & cool projects
          </motion.p>
  
          {/* Button Animation */}
          <motion.a 
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.8 }}
            transition={{ duration: 0.2, delay: 0 }}
            href="mailto:aadyas72@gmail.com"
            className="relative mt-6 inline-flex w-auto items-center justify-center overflow-hidden rounded-lg border border-gray-600 px-6 py-3 text-lg font-medium text-gray-300 transition-all duration-300 hover:text-white 
            before:absolute before:inset-0 before:h-full before:w-full before:scale-110 before:bg-gradient-to-r before:from-[#00d4ff] before:via-[#090979] before:to-[#8600b3] before:opacity-10 before:transition-all before:duration-300 hover:before:opacity-30 
            after:absolute after:inset-0 after:h-full after:w-full after:scale-125 after:bg-[radial-gradient(circle,_rgba(0,212,255,0.2)_0%,_rgba(9,9,121,0)_50%)] after:transition-all after:duration-500 hover:after:scale-150"
          >
            <span className="relative z-10 flex items-center gap-2 px-2">
              <svg
                className="h-5 w-5 animate-glow"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              Initiate Contact
            </span>
          </motion.a>
        </div>
      </div>
    );
};

export default Contact;
