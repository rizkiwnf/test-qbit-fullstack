import React from "react";
import imgumkm from './../../asset/images/home/6922108.jpg'

const Banner = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row max-w-[1440px] mx-auto pt-32 lg:pt-[10%] justify-around items-center">
            <div className="text-dark-purple max-w-[563px] px-16 md:px-0 lg:pl-[130px]">
                <h1 className="text-[42px] font-extrabold pb-[16px] leading-tight">Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className="flex gap-4 items-center">
                    {/* <div className="flex relative mt-5">
                        <div className="absolute right-5 top-3.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M5.20874 13.5H16.3787L11.4987 18.38C11.1087 18.77 11.1087 19.41 11.4987 19.8C11.8887 20.19 12.5187 20.19 12.9087 19.8L19.4987 13.21C19.8887 12.82 19.8887 12.19 19.4987 11.8L12.9187 5.19996C12.7319 5.0127 12.4783 4.90747 12.2137 4.90747C11.9492 4.90747 11.6956 5.0127 11.5087 5.19996C11.1187 5.58996 11.1187 6.21996 11.5087 6.60996L16.3787 11.5H5.20874C4.65874 11.5 4.20874 11.95 4.20874 12.5C4.20874 13.05 4.65874 13.5 5.20874 13.5Z" fill="#7676B2" />
                            </svg>
                        </div>
                        <input class="h-12 border-2 rounded-full px-5 leading-tight focus:outline-none focus:bg-white focus:border-young-purple text-gray-400 focus:text-gray-700 ease-in-out duration-300" type="text" placeholder="email" />
                    </div> */}
                    <button className="bg-young-purple py-3 w-52 mt-6 rounded-full text-white hover:ease-in-out duration-200 hover:bg-dark-purple">Get Started</button>
                    <button className="bg-young-purple py-3 w-52 mt-6 rounded-full text-white hover:ease-in-out duration-200 hover:bg-dark-purple">Get Started</button>
                </div>
            </div>
            <div className="">
                <img src={imgumkm} alt="umkm images" className="w-[550px] mr-[90px]" />
            </div>
        </div>
    )
}
export default Banner;