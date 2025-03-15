import logo from "../assets/aadyaLogo.png";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-5 w-12 rounded-lg" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/aadya-singh-85a9b2275/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/aa-d-ya" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/aa.d.ya/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/Aady_a1" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
