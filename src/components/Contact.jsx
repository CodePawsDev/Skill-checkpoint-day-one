import React from "react";

const Contact = () => {
    return (
        <div name="contact" className="w-full h-auto sm:h-screen bg-[#fff] flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/1dea783b-c320-4ad8-a3b8-3c90bc097677" className="flex flex-col max-w-[600px] w-full pt-[90px]">
                <div className="pb-2">
                    <p className="text-4xl font-bold inline border-b-4 border-rose-700">Contact</p>
                    <p className="py-4 text-lg">Submit the form below or shoot me an email at <b>isripen@gmail.com</b></p>
                </div>
                <label htmlFor="name" className="font-bold">Name</label>
                <input className="border-2 border-rose-800 p-2 my-2" type="text" placeholder="Name" name="name" id="name"/>
                <label htmlFor="email" className="font-bold">Email</label>
                <input className="border-2 border-rose-800 p-2 my-2" type="text" placeholder="Email" name="email" id="email"/>
                <label htmlFor="message" className="font-bold">Message</label>
                <textarea className="border-2 border-rose-800 p-2 my-2" name="message" rows="10" placeholder="Message" id="message"></textarea>
                <button className="rounded-full border-2 border-rose-800 hover:bg-rose-700 hover:text-white px-6 py-3 my-8 mx-auto font-semibold">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
