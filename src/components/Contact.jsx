import React from "react";

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-[#fff] flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/1dea783b-c320-4ad8-a3b8-3c90bc097677" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-2">
                    <p className="text-4xl font-bold inline border-b-4 border-rose-700">Contact</p>
                    <p className="py-4 text-lg">Submit the form below or shoot me an email at <b>isripen@gmail.com</b></p>
                </div>
                <input className="border-2 border-rose-800 p-2" type="text" placeholder="Name" name="name"/>
                <input className="my-4 p-2 border-2 border-rose-800 " type="text" placeholder="Email" name="email"/>
                <textarea className="border-2 border-rose-800 p-2" name="message" rows="10" placeholder="message"></textarea>
                <button className="border-2 border-rose-800 hover:bg-rose-700 hover:text-white px-4 py-3 my-8 mx-auto flex items-center ">Submit</button>
            </form>
        </div>
    )
}

export default Contact;