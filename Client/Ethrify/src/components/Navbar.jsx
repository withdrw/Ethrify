import logo from "../../public/logo.jpg";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="w-full flex md:justify-center justify-between">
      <div className="justify-center ">
        <img className="w-36" src={logo} alt="logo"></img>
        <h1 className="">This is the navbar !</h1>
      </div>
    </nav>
  );
};

export default Navbar;
