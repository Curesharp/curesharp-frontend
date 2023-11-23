import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import Brand from '@/components/shared/Brand'

const Footer = () => {
  return (
    <footer className="bg-zinc-900 flex md:flex-row flex-col justify-between items-start px-20 py-10">
      <div className="h-full flex mt-auto">
        <div className="w-[220px]">
        <Brand variant="white"/>
        </div>
      </div>


      <div className="flex gap-6 pb-5 md:flex-col ">
        <FaInstagram className="text-white text-2xl cursor-pointer hover:text-yellow-600 transition" />
        <FaTwitter className="text-white text-2xl cursor-pointer hover:text-blue-600 transition" />
        <FaLinkedin className="text-white text-2xl cursor-pointer hover:text-blue-600 transition" />
        <FaYoutube className="text-white text-2xl cursor-pointer hover:text-red-600 transition" />
      </div>
    </footer>
  );
};

export default Footer;
