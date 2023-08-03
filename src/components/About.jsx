import React from "react";

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#be123c] text-white">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-black">
                            About
                        </p>
                    </div>
                    <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="text-2xl font-bold sm:text-4xl">
                            <p>Hi, I'm Rungsipohn, nice to meet you. Please take a look around!</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis reprehenderit officiis harum accusamus ea similique deserunt laudantium quis. Dolores nesciunt laudantium pariatur repudiandae. Rerum pariatur doloremque quisquam quasi officia sapiente.</p>
                        </div>
                    </div>                   
                 
                </div>
            </div>
    )
}

export default About;