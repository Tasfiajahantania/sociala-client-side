import React from "react";
import { Link } from "react-router-dom";
import img from '../../images/about/alamin.jpg'

const Aboutme = () => {
    return (
        <div className="py-16 shadow-lg">
            <div className="flex justify-end mx-10">
                <Link className="btn btn-sm" to="">Edit</Link>
            </div>
            <div className="flex lg:flex-row">
                <div className="w-1/2 relative">
                    <img className="m-auto w-1/2 rounded " src={img} alt="" />
                </div>
                <div className="w-1/2 text-white">
                    <h1 className="text-5xl my-5 font-bold text-orange-600">About me</h1>
                    <h1 className="text-2xl font-semibold">MD Alamin </h1>
                    <p>Phone: +8801797045737</p>
                    <p>Address: Tangail, Bangladesh</p>
                    <p>Email: mdalaminpramanik84@gmail.com</p>
                    <p className="py-6 ">
                        I am a professional web Developer, I have been involved in this work
                        for the last 2 years,<br /> I work as a web devloper in various place,
                        my main objective is to satisfy the client.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Aboutme;