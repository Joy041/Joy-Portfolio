import { useEffect, useState } from "react";



const Work = () => {
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch('website.json')
            .then(res => res.json())
            .then(data => {
                setProject(data)
            })
    }, [])

    return (
        <div name='work' className='w-full md:h-full text-gray-300 pb-28 lg:pb-44'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 mx-aut text-center'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'> Check out some of my recent work</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Gird Item */}
                    {project.map((item, index) => (
                        <div
                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100">
                                <span className="text-2xl font bold text-white tracking-wider ">
                                    {item.name}
                                </span>
                                <div className="pt-3 text-center ">
                                    {/* eslint-disable-next-line */}
                                    <a href={item.client} target="_blank">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Client Code</button>
                                    </a>
                                    {
                                        item.server && <><a href={item.server} target="_blank" rel="noopener noreferrer">
                                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Server Code</button>
                                        </a></>
                                    }
                                    {/* eslint-disable-next-line */}
                                    <a href={item.live} target="_blank">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"> Live </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
};

export default Work;