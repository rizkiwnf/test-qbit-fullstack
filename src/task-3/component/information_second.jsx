import React from "react";
import Design1 from '../../asset/images/information/design1.jpg'
import Design2 from '../../asset/images/information/design2.jpg'
import Design3 from '../../asset/images/information/design3.png'
import { clear } from "@testing-library/user-event/dist/clear";

const InformationSecond = () => {
    return (
        <section id="information-second">
            <div id="information-second" className="mx-auto justify-center flex items-strech my-[6%] -z-10 relative">
                <div className="container -z-99">
                    <h1 className="text-center text-3xl md:text-5xl xl:text-6xl font-extrabold text-dark-purple">Produk Na<span className="text-yellow-500">mora</span></h1>
                    {/* Image 1 */}
                    <div className=" flex flex-col md:flex-row justify-between mx-4 xl:mx-[10%] items-center gap-7 xl:gap-10  mt-[7%]">
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
                            </div>
                        </div>
                    </div>
                    {/* Image 2 */}
                    <div className=" flex flex-col md:flex-row-reverse justify-between mx-4 xl:mx-[10%] items-center gap-7 xl:gap-10  mt-[7%]">
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
                            </div>
                        </div>
                    </div>
                    {/* Image 3 */}
                    <div className=" flex flex-col md:flex-row justify-between mx-4 xl:mx-[10%] items-center gap-7 xl:gap-10  mt-[7%]">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InformationSecond;