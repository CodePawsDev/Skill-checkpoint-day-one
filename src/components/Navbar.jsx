import React, { useState } from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github-contact.png";
import { Link } from "react-scroll";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = [
        {name: "Home", destination: "home"},
        {name: "About", destination: "about"},
        {name: "Experience", destination: "experience"},
        {name: "Portfolio", destination: "portfolio"},
        {name: "Contact", destination: "contact"}
    ];

    const renderedFullScreenLink = links.map((link) => {
            return (
                <li key={link.name}>
                    <Link to={link.destination} smooth={true} duration={500}>
                        {link.name}
                    </Link>
                </li>
            )
        })

    const renderedMobile = links.map((link) => {
        return (
            <li className="py-6 text-3xl font-bold text-white" key={link.name}>
                <Link to={link.destination} smooth={true} duration={500} onClick={() => setOpen(!open)}>
                    {link.name}
                </Link>
            </li>
        )
    })

    const contacts = [
        {name: "LinkedIn", img: Linkedin , destination: "www.linkedin.com/in/r-sripen" },
        {name: "GitHub", img: Github, destination: "https://github.com/CodePawsDev" },
    ];

    const renderedContact = contacts.map((contact) => {
        return (
            <li key={contact.name} className="w-[190px] h-[120px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-black">
                <a className="flex justify-between items-center w-full text-white" href={contact.destination}>
                    <div className="flex items-center justify-center flex-grow">{contact.name}</div>                        
                    <img className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]" src={contact.img} alt={contact.name + " icon"} />               
                </a>
            </li>
        )
    })
    
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fff]">
            <h1 className="font-bold text-3xl">CodePaws<span className="text-rose-700">Dev</span></h1>

            {/* Full-screen Menu bar */}
            <ul className="hidden md:flex font-bold text-xl">
                {renderedFullScreenLink}
            </ul>

            {/* Hamburger */}
            <div onClick={() => setOpen(!open)} className="md:hidden z-20">
                { !open ? <FaBars size={30} /> : <FaTimes size={30} />}
            </div>

            {/* mobile view */}
            <ul className={!open ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#be123c] flex flex-col justify-center items-center'}>
                {renderedMobile}
            </ul>


            {/* side contact bar */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>{renderedContact}</ul>
            </div>
        </div>
    )
}

export default Navbar;