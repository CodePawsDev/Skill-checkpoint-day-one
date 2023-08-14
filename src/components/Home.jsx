import React from "react";
import ProfilePic from "../assets/profile-pic.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";


const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#fff]">
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col items-center justify-center h-full md:flex-row">
                <section className="flex flex-col justify-center h-full mt-[100px] md:mt-0">
                    <p className="text-2xl text-black sm:text-4xl">Hi, my name is</p>
                    <h1 className="text-3xl py-2 sm:text-7xl font-bold">Rungsipohn Sripen</h1>
                    <h2 className="text-2xl py-2 sm:text-5xl font-bold">I'm a <span className="text-rose-700">Full Stack Developer.</span></h2>
                    <p className="py-4 max-w-[700px] text-2xl">Nice to meet you. Please take a look around!</p>
                    <div>
                        <Link to="portfolio" smooth={true} duration={500}>
                            <button className="text-black font-bold group border-4 rounded-xl border-rose-700 px-6 py-3 my-2 flex items-center hover:bg-rose-700 hover:text-white">
                                View Work
                                <span className="ml-2 group-hover:rotate-90 duration-300"><HiArrowNarrowRight/></span>
                            </button>
                        </Link>
                    </div>
                </section>
                <section className="hidden md:flex">
                    <img src={ProfilePic} alt="profile picture" className="mx-auto w-2/3 md:w-2/3 rounded-2xl"/>
                </section>
            </div>
        </div>     
    )
}

export default Home;