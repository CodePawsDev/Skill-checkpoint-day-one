import React from "react";
import ProfilePic from "../assets/profile-pic.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";


const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#fff]">
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col items-center justify-center h-full md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <p className="text-2xl text-black sm:text-4xl">Hi, my name is</p>
                    <h1 className="text-3xl py-2 sm:text-7xl font-bold">Rungsipohn Sripen</h1>
                    <h2 className="text-2xl py-2 sm:text-5xl font-bold">I'm a <span className="text-rose-700">Full Stack Developer.</span></h2>
                    <p className="py-4 max-w-[700px] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus sed libero, accusantium ex iste fugit provident magni autem ipsum temporibus, consequatur explicabo, totam id a! Perferendis ea quaerat sunt!</p>
                    <div>
                        <Link to="portfolio" smooth={true} duration={500}>
                            <button className="text-black font-bold group border-2 px-6 py-3 my-2 flex items-center hover:bg-rose-700 hover:text-white">
                                View Work
                                <span className="ml-2 group-hover:rotate-90 duration-300"><HiArrowNarrowRight/></span>
                            </button>
                        </Link>
                        
                    </div>
                </div>
                <div className="ml-10 mb-20">
                    <img src={ProfilePic} alt="profile picture" className="mx-auto w-2/3 md:w-full rounded-3xl"/>
                </div>
            </div>
        </div>     
    )
}

export default Home;