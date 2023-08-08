import React from "react";
import Design1 from '../../asset/images/information/design1.jpg'
import Design2 from '../../asset/images/information/design2.jpg'
import Design3 from '../../asset/images/information/design3.png'

const InformationSecond = () => {
    return (
        <div className="mx-auto justify-center flex items-strech my-[6%]">
            <div className="container">
                <h1 className="text-center text-3xl md:text-5xl xl:text-6xl font-extrabold text-dark-purple">Produk Na<span className="text-yellow-500">mora</span></h1>
                {/* Image 1 */}
                <div className="flex flex-col md:flex-row justify-between mx-4 xl:mx-[10%] items-center gap-7 xl:gap-10  mt-[7%]">
                    <div className="sm:w-[300px] lg:w-[365px] xl:w-[465px] bg-yellow-300 rounded-3xl -z-10">
                        <img src={Design1} alt="" className="rounded-3xl border-4 border-white" />
                    </div>
                    <div className="md:mt-[5%] lg:mt-0 text-justify md:text-left">
                        <h2 className="mb-4 text-2xl font-bold text-dark-purple">
                            Keripik Jagung
                        </h2>
                        <p className="sm:w-[450px] md:w-[380px] lg:w-[565px]">Na<span className="text-yellow-500">mora</span> memiliki bermacam-macam jenis keripik salah satunya adalah keripik jagung yang dibaluri rasa balado</p>
                        <div className="relative my-5 w-auto -z-10 ">
                            <button className="py-3 px-12 md:px-16 text-white bg-dark-purple rounded-full">Cek Details</button>
                            {/* <div className="absolute top-3 left-[42%] lg:left-[33%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M5.20874 13.5H16.3787L11.4987 18.38C11.1087 18.77 11.1087 19.41 11.4987 19.8C11.8887 20.19 12.5187 20.19 12.9087 19.8L19.4987 13.21C19.8887 12.82 19.8887 12.19 19.4987 11.8L12.9187 5.19996C12.7319 5.0127 12.4783 4.90747 12.2137 4.90747C11.9492 4.90747 11.6956 5.0127 11.5087 5.19996C11.1187 5.58996 11.1187 6.21996 11.5087 6.60996L16.3787 11.5H5.20874C4.65874 11.5 4.20874 11.95 4.20874 12.5C4.20874 13.05 4.65874 13.5 5.20874 13.5Z" fill="#7676B2" />
                                </svg>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* Image 2 */}
                <div className="flex flex-col md:flex-row-reverse justify-between mx-4 xl:mx-[10%] items-center gap-7 xl:gap-10  mt-[7%]">
                    <div className="sm:w-[300px] lg:w-[365px] xl:w-[465px] bg-yellow-300 rounded-3xl -z-10">
                        <img src={Design2} alt="" className="rounded-3xl border-4 border-white" />
                    </div>
                    <div className="md:mt-[5%] lg:mt-0 text-justify md:text-right">
                        <h2 className="mb-4 text-2xl font-bold text-dark-purple">
                            Keripik Pisang Asin
                        </h2>
                        <p className="sm:w-[450px] md:w-[420px] lg:w-[565px]">Jika sebelumnya terbuat dari sayur, maka keripik ini terbuat dari pisang yang dibaluri oleh rasa asin, namun keripik pisang ini sama sekali tidak menggunakan msg, jadi dijamin sehatnya</p>
                        <div className="relative my-5 w-auto -z-10 ">
                            <button className="py-3 px-12 md:px-16 text-white bg-dark-purple  rounded-full">Cek Details</button>
                            {/* <div className="absolute top-3 right-[53%] sm:left-[42%] md:left-[90%] lg:right-[3%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M5.20874 13.5H16.3787L11.4987 18.38C11.1087 18.77 11.1087 19.41 11.4987 19.8C11.8887 20.19 12.5187 20.19 12.9087 19.8L19.4987 13.21C19.8887 12.82 19.8887 12.19 19.4987 11.8L12.9187 5.19996C12.7319 5.0127 12.4783 4.90747 12.2137 4.90747C11.9492 4.90747 11.6956 5.0127 11.5087 5.19996C11.1187 5.58996 11.1187 6.21996 11.5087 6.60996L16.3787 11.5H5.20874C4.65874 11.5 4.20874 11.95 4.20874 12.5C4.20874 13.05 4.65874 13.5 5.20874 13.5Z" fill="#7676B2" />
                                </svg>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* Image 3 */}
                <div className="flex flex-col md:flex-row justify-between mx-4 xl:mx-[10%] items-center gap-7 xl:gap-10  mt-[7%]">
                    <div className="sm:w-[300px] lg:w-[365px] xl:w-[465px] bg-yellow-300 rounded-3xl -z-10">
                        <img src={Design3} alt="" className="rounded-3xl border-4 border-white" />
                    </div>
                    <div className="md:mt-[5%] lg:mt-0 text-justify md:text-left">
                        <h2 className="mb-4 text-2xl font-bold text-dark-purple">
                            Keripik Pisang Coklat
                        </h2>
                        <p className="sm:w-[450px] md:w-[380px] lg:w-[565px]">Jika sebelumnya terbuat dari keripik pisang memiliki rasa yang asin, maka keripik kali ini memiliki cita rasa manis. Dengan baluran coklat tentu keripik pisang ini merupakan keripik best seller</p>
                        <div className="relative my-5 w-auto -z-10 ">
                            <button className="py-3 px-12 md:px-16 text-white bg-dark-purple  rounded-full">Cek Details</button>
                            {/* <div className="absolute top-3 left-[42%] lg:left-[33%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M5.20874 13.5H16.3787L11.4987 18.38C11.1087 18.77 11.1087 19.41 11.4987 19.8C11.8887 20.19 12.5187 20.19 12.9087 19.8L19.4987 13.21C19.8887 12.82 19.8887 12.19 19.4987 11.8L12.9187 5.19996C12.7319 5.0127 12.4783 4.90747 12.2137 4.90747C11.9492 4.90747 11.6956 5.0127 11.5087 5.19996C11.1187 5.58996 11.1187 6.21996 11.5087 6.60996L16.3787 11.5H5.20874C4.65874 11.5 4.20874 11.95 4.20874 12.5C4.20874 13.05 4.65874 13.5 5.20874 13.5Z" fill="#7676B2" />
                                </svg>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InformationSecond;