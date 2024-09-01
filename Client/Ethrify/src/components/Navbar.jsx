import { AiOutlineClose } from 'react-icons/ai';
import logo from '/logo.jpg';

const NavbarItem = ({ title, classProps}) => {
    return (
        <li className={`${classProps}`} >
            {title}
        </li>
    )
}

const Navbar = () => {
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
        </nav>
     )
}

export default Navbar;
