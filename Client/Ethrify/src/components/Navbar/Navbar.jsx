import { AiOutlineClose } from 'react-icons/ai';
import { IoIosMenu } from "react-icons/io";
import logo from '/logo.jpg';
import { useState } from 'react';

const NavbarItem = ({ title, classProps}) => {
    return (
        <li className={`${classProps}`} >
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className='w-full flex md:justify-center justify-between'>
            <div className='md:flex-[0.5] justify-center '>
                <img className='logo' src={logo} alt="logo"/>
            </div>
            <ul>
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index)=>(
                    <NavbarItem key={item+index} title={item} />
                ))}
            </ul>
            <div className="menu-container">
                {!toggleMenu && (
                    <IoIosMenu className="menu-icon" onClick={() => setToggleMenu(true)} />
                )}
                {toggleMenu && (
                    <ul className="menu-list">
                        <li className="menu-close-icon">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Market", "Exchange", "Tutorials", "Wallets"].map(
                            (item, index) => <NavBarItem key={item + index} title={item} classprops="menu-item" />,
                        )}
                    </ul>
                )}
            </div>

        </nav>
     )
}

export default Navbar;
