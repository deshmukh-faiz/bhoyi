import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import logo from "../assets/cara.png";
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';


const MobileNav = () => {
    return (
        <div className='mobNavMainPrant '>

            <div className="navbar">
                <div className='flex gap-40'>

                    <Link to="/">
                        <img src="12371612_4976428__1_-removebg-preview.png" className="w-32" />
                    </Link>

                    <Link to={"/cart"}>
                        <FaShoppingBag className=' text-xl' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MobileNav