import { HiArrowNarrowRight, HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import img from '../../../assets/joy.jpeg'
import './Home.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
    return (
        <div name='home' className='w-full h-full py-28 lg:pt-64 lg:pb-56 px-4 lg:px-16 flex flex-col-reverse md:flex-row items-center'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto pe-7 flex flex-col justify-center h-full pt-8 md:pt-0'>
                <p className='text-pink-600 text-xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    JOY PURKAYSTHA
                </h1>
                <div className='wrapper inline-flex mt-3 text-xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#8892b0] overflow-hidden'>
                    <h2 className='static-text'>
                        I'm a
                    </h2>
                    <ul className='dynamic-text text-red-600 ml-2 sm:ml-2 md:ml-3 lg:ml-4 overflow-hidden h-[35px] sm:h-[40px] md:h-[50px] lg:h-[90px] leading-[27px] sm:leading-[40px] md:leading-[43px] lg:leading-[50px]'>
                        <li className='relative top-0'><span className='relative'>Full-Stack Developer.</span></li>
                    </ul>
                </div>
                <div className='flex items-center gap-8 mt-6 lg:hidden'>
                    <a className='text-gray-300'
                        href='/'
                    > <FaLinkedin size={30} />
                    </a>
                    <a className=' text-gray-300' href='https://github.com/Joy041' >
                         <FaGithub size={30} /> </a>
                    <a className='text-gray-300' href='mailto:joypurkaystha0@gmail.com'
                    ><HiOutlineMail size={30} /></a>
                </div>
                {/* <h1>Check out my work</h1> */}
                <div>
                    <button className='text-white group border-2 px-6 py-3 mt-8 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        <Link to={"work"} smooth={true} duration={500}>View Work</Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={img} alt="" className='box m' />
            </div>
        </div>
    );
};

export default Home;