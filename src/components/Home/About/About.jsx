import { FaDownload } from 'react-icons/fa';
import img from '../../../assets/joy.jpeg'

const About = () => {


    return (
        <div name='about' className='w-full h-full lg:pt-10 lg:pb-28 bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div>
                    <div className='pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-20 px-4 py-4'>
                    <div >
                        <img src={img} alt="" className='rounded-xl' />
                    </div>
                    <div>
                        <p className='text-4xl font-bold pb-3'>
                            Hi. I'm Joy Purkaystha, nice to meet you. Please take a look around.
                        </p>
                        <p>
                            I am passionate about building excellent software that improves
                            the lives of those around me. I specialize in creating software
                            for clients ranging from individuals and small-businesses all the
                            way to large enterprise corporations. What would you do if you had
                            a software expert available at your fingertips?
                        </p>
                        <h1 className='border-b-4 border-pink-600 w-9 mt-3 text-xl font-semibold'>Education</h1>
                        <div>
                            <ul>
                                <li className='mt-3'><span className='text-pink-600'>Web development course</span> <br /> &gt; I'm done my web development course in Programming hero.</li>
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