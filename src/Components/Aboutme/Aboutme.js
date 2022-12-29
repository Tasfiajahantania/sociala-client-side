import React from "react";
import img from '../../images/about/alamin.jpg'

const Aboutme = () => {
    return (
        <div className="hero bg-white py-16 shadow-lg">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 relative">
                    <img className="m-auto w-1/2 rounded " src={img} alt="/" />
                </div>
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold text-orange-600">About me</h1>
                    <h1 className="text-2xl font-semibold">I'm MD Alamin </h1>
                    <p className="py-6 text-black">
                        I am a professional photographer, I have been involved in this work
                        for the last 10 years, I work as a photographer in various events,
                        my main objective is to satisfy the client.
                    </p>
                    <p>Contact Me: mdalaminpramanik84@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;