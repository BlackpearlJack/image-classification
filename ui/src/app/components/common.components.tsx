import { FaBell, FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

interface ButtonProps {
  title: string;
  link: string;
  className?: string;
}

export const AppButton = ({ title, link, className, ...props }: ButtonProps) => {
    return (
      <a href={link} className={`bg-primaryColor-500 inline-block py-3 px-6 uppercase text-base md:text-lg rounded-md shadow-2xl shadow-accentColor-500 hover:scale-105 ${className}`} {...props}>
        {title}
      </a>
    );
  };

export const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost btn-circle">
            {/* <TiThMenu className="text-black" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a href="" className="">Home</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a href="" className="btn btn-ghost text-xl">CelebrityImageRecognition</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <FaSearch />
        </button>
        <button className="btn btn-ghost-circle">
          <div className="indicator">
          <FaBell />
          <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </nav>
  )
}