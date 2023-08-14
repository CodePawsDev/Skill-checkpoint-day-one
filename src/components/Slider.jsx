import { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import { projects } from "../data/projects";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleGoToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    // Show new project every 3 second
    useEffect(() => {
        const interval = setInterval(() => {
            // Calculate the next slide index, looping back to 0 when reaching the end
            const nextIndex = (currentIndex + 1) % projects.length;
            setCurrentIndex(nextIndex);
        }, 3000); 

        return () => clearInterval(interval); // Cleanup function to clear the interval when the component unmounts
    }, [currentIndex]);

    const renderedshowProjects = projects.map((project, index) => {
        return (<div 
                    key={index} 
                    className="text-3xl cursor-pointer"
                    onClick={() => handleGoToSlide(index)}
                >
                    <RxDotFilled className={currentIndex === index ? "text-rose-700" : "text-gray-400"}/>
                </div>)
    })

    return (
        <section className="max-w-[550px] w-full m-auto">
            <div
                    style={{ backgroundImage: `url(${projects[currentIndex].img})` }}
                    className="shadow-lg shadow-[#040c16] container rounded-2xl content-div"
            >           
            </div>
            <div className="flex justify-center py-6">
                {renderedshowProjects}
            </div>
        </section>
    )
}

export default Slider;