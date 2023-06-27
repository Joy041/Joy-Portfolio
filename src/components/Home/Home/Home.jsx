import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import img from '../../../assets/joy.jpeg'
import './Home.css'

const Home = () => {
    return (
        <div name='home' className='w-full h-full py-28 lg:py-64 px-4 lg:px-16 bg-[#0a192f] flex flex-col-reverse md:flex-row items-center'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto pe-7 flex flex-col justify-center h-full pt-8 md:pt-0'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    JOY PURKAYSTHA
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                    I'm a Full Stack Developer.
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I'm a full-stack developer specializing in building (and occasionally
                    designing) exceptional digital experiences. Currently, I'm focused on
                    building responsive full-stack web applications.
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        <Link to={"contact"} smooth = {true} duration = {500}>View Work</Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={img} alt="" className='box m'  />
            </div>
        </div>
    );
};

export default Home;