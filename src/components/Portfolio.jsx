import React from "react";
import { projects } from "../data/projects";

const Portfolio = () => {

    const renderedProjects = projects.map((project, index) => {

        const btnStyle = "text-center rounded-lg px-4 py-3 m-2 bg-rose-900 text-white font-bold text-lg";
        
        return (
                // grid-item
                <div className="group" key={index}>
                    <div
                    style={{ backgroundImage: `url(${project.img})` }}
                    className="shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto content-div group"
                >
                    {/* hover effect */}
                        <div className="group-hover:opacity-100 opacity-0 rounded-md group-hover:bg-gray-200 transition-colors w-full h-full pt-14">
                            <section className="text-4xl font-bold text-black tracking-wider text-center">
                                {project.name}
                            </section>
                            <section className="pt-8 text-center">
                                <a href={project.refDemo}>
                                    <button className={btnStyle}>
                                        Demo
                                    </button>
                                </a>
                                <a href={project.refCode}>
                                    <button className={btnStyle}>
                                        Code
                                    </button>
                                </a>
                            </section>
                        </div>
                        
                    </div>
                </div>
        )
    })

    return (
        <div name="portfolio" className="w-full h-auto sm:h-screen bg-[#be123c] text-white">
            <div className="max-w-[1000px] mx-auto px-4 pt-[90px] flex flex-col justify-center w-full h-full">
                <section className="pb-4">
                    <p className="text-4xl font-bold inline border-b-4 border-black">Portfolio</p>
                    <p className="py-4 sm:py-6 text-xl">Check out some of my recent work</p>
                </section>

                {/* container */}
                <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                    {renderedProjects}                 
                </section>
            </div>
        </div>
    )
}

export default Portfolio;