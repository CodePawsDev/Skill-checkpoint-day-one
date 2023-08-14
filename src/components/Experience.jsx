import React from "react"; 
import { experiences } from "../data/experience";

const Experience = () => {

    const renderedExperience = experiences.map((exp) => {
        return (
            <div key={exp.name} className="shadow-md shadow-[#6c6f74] hover:scale-110 duration:500 pt-4 cursor-pointer rounded-md">
                <img className="w-20 mx-auto" src={exp.img} alt={exp.name + " icon"}/>
                <p className="my-4 font-bold">{exp.name}</p>
            </div>
        )
    })

    return (              
        <div name="experience" className="w-full h-auto sm:h-screen bg-[#fff]">
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-4 pt-[90px] flex flex-col jusify-center w-full h-full">
                <section>
                    <p className="text-4xl font-bold inline border-b-4 border-rose-700">Experience</p>
                    <p className="py-4 text-2xl">These are the technology I've worked with</p>
                </section>
                <section className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
                    {renderedExperience}                    
                </section>
            </div>
        </div>
    )
}

export default Experience;