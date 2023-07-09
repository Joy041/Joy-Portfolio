import { FaDownload } from 'react-icons/fa';
import img from '../../../assets/joy21.jpg'

const About = () => {


    return (
        <div name='about' className='w-full h-full lg:pt-10 pb-28 lg:pb-44  text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div>
                    <div className='pb-12 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-20 px-4 py-4'>
                    <div >
                        <img src={img} alt="" className='rounded-xl w-full h-full' />
                    </div>
                    <div>
                        <p className='text-2xl font-bold pb-3'>
                            Hi. I'm Joy Purkaystha, nice to meet you. Please take a look around.
                        </p>
                        <p>
                            I am a passionate and dedicated full stack developer with expertise in HTML, CSS, JavaScript, React, Express, MongoDB, Firebase, Tailwind CSS, and Bootstrap. With my skills, I can create fully responsive and dynamic websites that engage and captivate users. I am always eager to learn new technologies and stay updated with the latest trends in web development. My goal is to deliver high-quality, efficient, and user-friendly solutions to meet client needs.
                        </p>
                        <h1 className='border-b-4 border-pink-600 w-9 mt-3 text-xl font-semibold'>Education</h1>
                        <div>
                            <ul>
                                <li className='mt-3'><span className='text-pink-600'>Web development course</span> <br /> &gt; I'm done my web development course in Programming hero.    (31/12/2022 - 15/06/2023)</li>
                            </ul>
                            <ul>
                                <li className='mt-3'><span className='text-pink-600'>Bachelor Degree</span> <br /> &gt; I am doing by bachelor of arts in political science at Ananda Mohan College, Mymensingh from 2022 to 2025.</li>
                            </ul>
                        </div>
                        <a href="/src/assets/Joy purkaystha resume.pdf" download><button className='btn bg-pink-600 border-0 mt-10'>Download Resume <FaDownload /></button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;