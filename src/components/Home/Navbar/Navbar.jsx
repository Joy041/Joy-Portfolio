import {
    FaDownload,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {


    const navItem = <div className='lg:flex items-center md:text-white'>
        <li><Link to={'home'} className='text-xl hover:text-pink-600' smooth = {true} duration = {500}>Home</Link></li>
        <li><Link to={'about'} className='text-xl hover:text-pink-600' smooth = {true} duration = {500}>About</Link></li>
        <li><Link to={'skills'} className='text-xl hover:text-pink-600' smooth = {true} duration = {500}>Skills</Link></li>
        <li><Link to={'services'} className='text-xl hover:text-pink-600' smooth = {true} duration = {500}>Services</Link></li>
        <li><Link to={'work'} className='text-xl hover:text-pink-600' smooth = {true} duration = {500}>Work</Link></li>
        <li><Link to={'contact'} className='text-xl hover:text-pink-600 me-4' smooth = {true} duration = {500}>Contact</Link></li>
        <div><a href="/src/assets/Joy purkaystha resume.pdf" download><button className='btn bg-pink-600 border-0'>Download Resume <FaDownload className='hidden md:visible' /></button></a></div>
    </div>

    return (
        <div className="navbar bg-gray-900 web-font fixed z-10 opacity-100 w-full h-[80px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-white">Joy.dev</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>

            {/* Social media icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-around items-center w-full text-gray-300'
                            href='/'
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-around items-center w-full text-gray-300'
                            href='https://github.com/Joy041'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                            className='flex justify-around items-center w-full text-gray-300'
                            href='mailto:joypurkaystha0@gmail.com'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;