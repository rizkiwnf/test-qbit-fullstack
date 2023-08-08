import React from "react";
import Icon1 from './../../asset/images/information/basket.svg'
import Icon2 from './../../asset/images/information/checklist.svg'
import Icon3 from './../../asset/images/information/hand.svg'

const InformationFirst = () => {
    return (
        <div id="information-first" className="bg-dark-purple my-10 -z-10 relative">
            <div className="bg-white p-3 mx-[15%] h-[100%] xl:h-[90%] relative top-[-100px] lg:top-[-15%] rounded-3xl shadow-2xl pb-10 lg:pb-7">
                <h2 className="text-center py-4 font-extrabold text-dark-purple text-2xl capitalize">Apa Saja Kelebihan Na<span className="text-yellow-500">mora</span></h2>
                <div className="flex flex-col lg:flex-row px-0 md:px-12 pt-8 lg:px-9  lg:pt-20 gap-6 sm:gap-6 lg:gap-12">
                    <div className="bg-young-purple w-full lg:w-[30%] p-5 relative rounded-2xl shadow-xl text-white">
                        <div className="w-20 md:w-24 absolute top-[25%] -left-12 md:top-[5%] md:-left-10 lg:-top-16 lg:left-20 border-4 rounded-full border-white">
                            <img src={Icon2} alt="" />
                        </div>
                        <div className="ml-4 md:ml-16 lg:ml-0">
                            <h4 className="text-left lg:text-center lg:mt-5 mb-3 font-bold">Teruji Kualitasnya</h4>
                            <p className="text-sm text-justify">
                                Melalui mesih-mesin yang canggih, kualitas dari Na<span className="text-yellow-500">mora</span> dapat dipastikan bagusnya
                            </p>
                        </div>
                    </div>
                    <div className="bg-young-purple w-full lg:w-[30%] p-5 relative rounded-2xl shadow-xl text-white">
                        <div className="w-20 md:w-24 absolute top-[25%] md:top-[5%] -right-12 md:-right-10 lg:-top-16 lg:left-20 lg:right-0 border-4 rounded-full border-white">
                            <img src={Icon1} alt="" />
                        </div>
                        <div className="mr-4 md:mr-16 lg:mr-0">
                            <h4 className="text-right lg:text-center lg:mt-5 mb-3 font-bold">Murah Dikantong</h4>
                            <p className="text-sm text-right lg:text-justify">
                                Karena diambil dari petani aslinya langsung, harga Na<span className="text-yellow-500">mora</span> dijamin masuk dikantong
                            </p>
                        </div>
                    </div>
                    <div className="bg-young-purple w-full lg:w-[30%] p-5 relative rounded-2xl shadow-xl text-white">
                        <div className="w-20 md:w-24 absolute top-[25%] -left-12 md:top-[5%] md:-left-10 lg:-top-16 lg:left-20 border-4 rounded-full border-white">
                            <img src={Icon3} alt="" />
                        </div>
                        <div className="ml-4 md:ml-16 lg:ml-0">
                            <h4 className="text-left lg:text-center lg:mt-5 mb-3 font-bold">Dari Tangan Pertama</h4>
                            <p className="text-sm text-justify">
                            Na<span className="text-yellow-500">mora</span> merupakan produk yang dihasilkan dari tangan pertama.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default InformationFirst;