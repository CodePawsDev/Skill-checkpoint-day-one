import React from "react";
import Example1 from "../assets/example1.jpg";
import Example2 from "../assets/example2.jpg";
import Example3 from "../assets/example3.jpg";
import Example4 from "../assets/example4.jpg";
import Example5 from "../assets/example5.jpg";
import Example6 from "../assets/example6.jpg";

const Portfolio = () => {
    const projects = [
        {name: "Example 1", img: Example1, refDemo: "", refCode: "" },
        {name: "Example 2", img: Example2, refDemo: "", refCode: "" },
        {name: "Example 3", img: Example3, refDemo: "", refCode: "" },
        {name: "Example 4", img: Example4, refDemo: "", refCode: "" },
        {name: "Example 5", img: Example5, refDemo: "", refCode: "" },
        {name: "Example 6", img: Example6, refDemo: "", refCode: "" },
    ]

    const renderedProjects = projects.map((project, index) => {
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
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-rose-900 text-white font-bold text-lg">
                                        Demo
                                    </button>
                                </a>
                                <a href={project.refCode}>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-rose-900 text-white font-bold text-lg">
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
        <div name="portfolio" className="w-full h-auto bg-[#be123c] text-white">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <section className="pb-8 mt-[100px]">
                    <p className="text-4xl font-bold inline border-b-4 border-black">Portfolio</p>
                    <p className="py-6 text-xl">Check out some of my recent work</p>
                </section>

                {/* container */}
                <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {renderedProjects}                 
                </section>
            </div>
        </div>
    )
}

export default Portfolio;