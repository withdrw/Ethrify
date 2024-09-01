import { AiOutlineClose } from 'react-icons/ai';
import { IoIosMenu } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import logo from '/logo.jpg';
import { useState } from 'react';
import './Navbar.css'

const NavbarItem = ({ title, classProps}) => {
    return (
        <li className='props' >
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='navbar-container'>
            <div className='main-image'>
                <img className='logo' src={logo} alt="logo"/>
            </div>
            <ul className='navbar-list'>
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index)=>(
                    <NavbarItem key={item+index} title={item} />
                ))}
            </ul>
            <div className='navbar-login'>
                <button className='navbar-login'>
                    <p className='login-class'>
                        Login
                    </p>
                    <BsPersonCircle/>
                </button>
            </div>
        </div>
     )
}

export default Navbar;
