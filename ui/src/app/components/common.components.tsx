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
    <nav className="navbar navbar-light bg-light justify-content-center">
      <a href="#" className="navbar-brand">Celebrity Person Classifier</a>
    </nav>
  )
}