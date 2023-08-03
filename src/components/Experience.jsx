import React from "react"; 
import htmlImg from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Python from "../assets/python.png";
import Github from "../assets/github.png";


const Experience = () => {
    const experiences = [
        {name: "HTML", img: htmlImg},
        {name: "CSS", img: Css},
        {name: "JavaScript", img: Javascript},
        {name: "React", img: reactImg},
        {name: "Tailwind", img: Tailwind},
        {name: "Python", img: Python},
        {name: "GitHub", img: Github}
    ];

    const renderedExperience = experiences.map((exp) => {
        return (
            <div key={exp.name} className="shadow-md shadow-[#040c16] hover:scale-110 duration:500 pt-4 cursor-pointer">
                <img className="w-20 mx-auto" src={exp.img} alt={exp.name + " icon"}/>
                <p className="my-4 font-bold">{exp.name}</p>
            </div>
        )
    })

    return (              
        <div name="experience" className="w-full h-screen bg-[#fff]">
            {/* container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col jusify-center w-full h-full">
                <div className="mt-20">
                    <p className="text-4xl font-bold inline border-b-4 border-rose-700">Experience</p>
                    <p className="py-4 text-2xl">These are the technology I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
                    {renderedExperience}                    
                </div>
            </div>
        </div>
    )
}

export default Experience;