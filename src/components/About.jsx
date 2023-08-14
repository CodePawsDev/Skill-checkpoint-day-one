import React from "react";

const About = () => {
    const shortIntroduction = "Fueled by limitless curiosity, I enjoy exploring new technologies, gaining fresh insights, and crafting user-focused solutions. By merging my expertise in psychology with technical skills, my aim is to simplify and enhance life. Sharing insights and innovations with the community is where my heart lies, empowering me to make a positive impact in the tech world."

    return (
        <div name="about" className="w-full h-screen bg-[#be123c] text-white flex flex-col justify-center items-center">
            <section className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mt-6">
                <div className="pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-black">
                        About
                    </p>
                </div>
            </section>
            <section className="max-w-[1000px] grid sm:grid-cols-2 gap-8 px-4 mb-6">
                <div className="text-2xl font-bold sm:text-4xl">
                    <p>Former clinical psychologist turned full-stack developer</p>
                </div>
                <div>
                    <p className="text-lg">{shortIntroduction}</p>
                </div>
            </section>                   
        </div>
    )
}

export default About;