import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import img from '../../images/about/alamin.jpg'

const Aboutme = () => {
    const [about, setAbout] = useState([])
    // console.log(about)
    useEffect( () => {
        fetch('http://localhost:5000/about')
        .then(res => res.json())
        .then(data => {
            setAbout(data)
        })
    },[])
    const handelAbout = adata => {
        console.log(adata)
    }
    return (
        <div className="py-16 shadow-lg">
            <div className="flex justify-end mx-10">
                <Link onClick={()=> handelAbout(about)} className="btn btn-sm" to="">Edit</Link>
            </div>
            <div className="flex lg:flex-row">
                <div className="w-1/2 relative">
                    <img className="m-auto w-1/2 rounded " src={img} alt="" />
                </div>
                <div className="w-1/2 text-white">
                    <h1 className="text-5xl my-5 font-bold text-orange-600">About me</h1>
                    <h1 className="text-2xl font-semibold">{about[0].name}</h1>
                    <p>Phone: {about[0].phone}</p>
                    <p>Address: {about[0].address}</p>
                    <p>Email: {about[0].email}</p>
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