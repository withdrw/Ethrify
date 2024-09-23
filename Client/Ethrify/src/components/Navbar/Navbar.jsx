// import { AiOutlineClose } from 'react-icons/ai';
// import { IoIosMenu } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import logo from "/logo.jpg";
import { useState } from "react";
import "./Navbar.css";



const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const handleAlert = () => {
        alert('Feature is currently in progress')
    }
      const handleLoginClick = () => {
        setShowDropdown(!showDropdown);
      };
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar-container">
      <div className="main-image">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <ul className="navbar-list">
        <li>
          <button onClick={handleAlert} className="navbar-buttons">
            <a>Market</a>
          </button>
        </li>
        <li>
          <button onClick={handleAlert} className="navbar-buttons">
            <a>Exchange</a>
          </button>
        </li>
        <li>
          <button

            className="navbar-buttons"
          >
            <a>Transactions</a>
          </button>
        </li>
        <li>
          <button

            className="navbar-buttons"
          >
            <a>Wallets</a>
          </button>
        </li>
      </ul>
      <div className="navbar-login">
        <button className="navbar-login">
          <p className="login-class">Login</p>
          <BsPersonCircle />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
