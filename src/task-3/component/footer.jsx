import React from "react";
import { PiYoutubeLogoFill, PiInstagramLogoFill, PiWhatsappLogoFill, PiTwitterLogoFill } from 'react-icons/pi'


const Footers = () => {
  return (
    <section id="contact">
      <footer id="contact" className="w-full bg-dark-purple py-16 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between mx-auto md:gap-0 gap-3">
          <div className="py-2 order-1">
            <h1 className="text-3xl font-extrabold text-white">Na<span className="text-yellow-500">mora</span></h1>
          </div>
          <div className=" text-white/60 order-3 md:order-2">
            © Copyright Technical Test
          </div>
          <div className="order-2 md:order-3 ">
            <ul className="flex gap-7 text-white ">
              <a href="https://www.instagram.com/rizkiwnf/"><PiInstagramLogoFill size={30} /></a>
              <a href="https://www.instagram.com/rizkiwnf/"><PiTwitterLogoFill size={30} /></a>
              <a href="https://wa.me/6285731544494/"><PiWhatsappLogoFill size={30} /></a>
              <a href="https://youtube.com/"><PiYoutubeLogoFill size={30} /></a>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
}
export default Footers;