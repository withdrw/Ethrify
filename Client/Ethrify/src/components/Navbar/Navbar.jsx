// import { AiOutlineClose } from 'react-icons/ai';
// import { IoIosMenu } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import logo from "/logo.jpg";
import { useState } from "react";
import "./Navbar.css";



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleAlert = () => {
        alert('Feature is currently in progress')
    }
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };


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
          <button onClick={handleAlert} className="navbar-buttons">
            <a>Transactions</a>
          </button>
        </li>
        <li>
          <button onClick={handleAlert} className="navbar-buttons">
            <a>Wallets</a>
          </button>
        </li>
      </ul>
      <div className="navbar-login">
        <button className="navbar-btn">
            <BsPersonCircle onClick={toggleMenu} />
        </button>
        {showMenu && (
          <div className="dropdown-content">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
              <button type="submit">Login</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
