import React, { useState } from "react";
import { CgMenuRight, CgCloseO } from 'react-icons/cg'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="fixed w-full">
            <div className="mx-4 z-2 py-5">
                <div className="text-white items-center flex justify-between bg-dark-purple max-w-[1140px] mx-auto px-12 rounded-full h-16 gap-4">
                    <h1 className="w-full text-2xl font-extrabold">REACT <span className="text-indigo-600	">.</span></h1>
                    <ul className="hidden md:flex gap-8">
                        <li>Home</li>
                        <li>About</li>
                        <li>Information</li>
                        <li>Contact</li>
                    </ul>
                    <div onClick={handleNav} className="block md:hidden">
                        {!nav ? <CgCloseO size={25} /> : <CgMenuRight size={25} />}
                    </div>
                    <div className={!nav ? 'fixed md:hidden left-0 top-0 w-[50%] border-r-gray-50 h-full bg-young-purple ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-[50%] border-r-gray-50 h-full ease-in-out duration-500'}>
                        <h1 className="w-full text-2xl font-extrabold mx-6 my-4">REACT<span className="text-indigo-900 text-3xl">.</span></h1>
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