import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants";

const About = () => {
    return (
      <div className="border-b border-neutral-900 pb-4 text-center">
        <h2 className="my-20 text-4xl">About
            <span className="text-neutral-500"> Me
            </span>
        </h2>
        <div className="flex flex-wrap gap-20">
            <div className="w-full lg:w-1/3 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl"  src={aboutImg} alt="about"/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-3 max-w-xl py-5 text-lg tracking-tighter text-justify">
                    <div>
                        {ABOUT_TEXT.split("\n").map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>

                    </p>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default About;
  