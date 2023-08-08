import React, { useState } from "react";
import { CgMenuRight, CgCloseO } from 'react-icons/cg'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="fixed w-full bg-white">
            <div className="mx-4 z-2 py-5">
                <div className="text-white items-center flex justify-between bg-dark-purple max-w-[1140px] mx-auto px-5 sm:px-12 rounded-full h-16 gap-4">
                <h1 className="text-xl md:text-3xl font-extrabold text-white">Na<span className="text-yellow-500">mora</span></h1>
                    <ul className="hidden md:flex gap-8">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="information">Information</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div onClick={handleNav} className="block md:hidden">
                        {!nav ?  <CgMenuRight size={25} /> : <CgCloseO size={25} />}
                    </div>
                    <div className={!nav ? 'fixed left-[-100%] top-0 w-[50%] border-r-gray-50 h-full ease-in-out duration-500' : 'fixed md:hidden left-0 top-0 w-[50%] border-r-gray-50 h-full bg-young-purple ease-in-out duration-500 z-50'} >
                        <h1 className="w-full text-2xl font-extrabold mx-6 my-4">Na<span className="text-yellow-500">mora</span></h1>
                        <ul className="p-4 uppercase">
                            <li className="p-2 border-b border-white">Home</li>
                            <li className="p-2 border-b border-white">About</li>
                            <li className="p-2 border-b border-white">Information</li>
                            <li className="p-2">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Navbar;