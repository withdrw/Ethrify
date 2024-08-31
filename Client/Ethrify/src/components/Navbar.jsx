import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../public/logo.jpg';

const Navbar = () => {
    return (
        <nav className='w-full flex md:justify-center justify-between'>
            <div className='justify-center '>
                <AiOutlineClose>
                    
                </AiOutlineClose>
                    <img src={logo} alt="logo">
                    </img>
                <h1>
                    This is the navbar !
                </h1>
            </div>

        </nav>
     )
}

export default Navbar;
