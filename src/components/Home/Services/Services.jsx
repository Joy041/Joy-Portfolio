import { GiLaptop } from 'react-icons/gi';
import { VscCode } from 'react-icons/vsc';
import { SiConvertio } from 'react-icons/si';
import { AiOutlineMobile } from 'react-icons/ai';
import './Services.css'

const Services = () => {
    return (

        <div className="service-line relative max-w-[1200px]  mx-auto pb-28 lg:pb-44" name='services'>
            <p className='text-4xl font-bold border-b-4 w-36 border-pink-600 mx-auto text-white mb-16'>Services</p>
                <div className="con left-con" data-aos="fade-right" data-aos-duration="1500">
                    <div className="img"><GiLaptop className='w-9 h-9 bg-white text-sky-600 rounded-full py-2' /></div>
                    <div className='text-box' >
                        <h1 className='text-xl md:text-4xl font-bold mb-3'>Full Stack Website</h1>
                        <p>With my expertise in MERN stack development, i leverage MongoDB, Express, React, Node.js, Firebase, react-router-dom and others  to craft seamless, user-friendly, and responsive web interfaces. My end-to-end solutions ensure a fully immersive experience, bringing your vision to life.</p>
                        <span className='h-0 w-0 absolute top-5 z-10 border-t-[15px]  border-t-transparent border-b-[15px] border-b-transparent border-l-[15px] border-l-white right-[-15px] arrow'></span>
                    </div>
                </div>

                <div className="con right-con" data-aos="fade-left" data-aos-duration="1500">
                    <div className="img"><VscCode className='w-9 h-9 bg-white text-sky-600 rounded-full py-2' /></div>
                    <div className='text-box' >
                        <h1 className='text-xl md:text-4xl font-bold mb-3'>E-Commerce Website</h1>
                        <p>In addition to my MERN stack expertise, i'm excel in integrating eCommerce payment gateways like Stripe, offering custom product templates, and much more. My comprehensive solutions empower businesses to create seamless online shopping experiences with ease and efficiency.</p>
                        <span className='h-0 w-0 absolute top-5 z-10 border-t-[15px]  border-t-transparent border-b-[15px] border-b-transparent border-r-[15px] border-l-white left-[-15px] arrow'></span>
                    </div>
                </div>

                <div className="con left-con" data-aos="fade-right" data-aos-duration="1500">
                    <div className="img"><SiConvertio className='w-9 h-9 bg-white text-sky-600 rounded-full py-2' /></div>
                    <div className='text-box'>
                        <h1 className='text-xl md:text-4xl font-bold mb-3'>Convert UI/UX to Website</h1>
                        <p>Transforming Figma, Xd, and Photoshop designs into a beautiful website with html, css, javaScript, react, mongoDB, Tanstack quary and optimized functionality.</p>
                        <span className='h-0 w-0 absolute top-5 z-10 border-t-[15px]  border-t-transparent border-b-[15px] border-b-transparent border-l-[15px] border-l-white right-[-15px] arrow'></span>
                    </div>
                </div>

                <div className="con right-con" data-aos="fade-left" data-aos-duration="1500">
                    <div className="img"><AiOutlineMobile className='w-9 h-9 bg-white text-sky-600 rounded-full py-2' /></div>
                    <div className='text-box'>
                        <h1 className='text-xl md:text-4xl font-bold mb-3'>Mobile Responsive</h1>
                        <p>I can make captivating and mobile-responsive websites using CSS and popular frameworks like Bootstrap and TailwindCSS.</p>
                        <span className='h-0 w-0 absolute top-5 z-10 border-t-[15px]  border-t-transparent border-b-[15px] border-b-transparent border-r-[15px] border-l-white left-[-15px] arrow'></span>
                    </div>
                </div>

        </div>

    );
};

export default Services;