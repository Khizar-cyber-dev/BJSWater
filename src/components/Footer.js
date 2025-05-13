import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaPinterest, FaXTwitter } from "react-icons/fa6";
import img from "../assets/images/wave.svg";
import { Element } from "react-scroll";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Element name="footer">
      <div
        className="relative w-full bg-sky-500 md:bg-transparent mt-10 md:mt-0"
        id="footer"
      >
        <img
          src={img}
          alt="wave"
          className="w-full object-cover absolute bottom-0 z-0 hidden md:block h-[950px]"
        />

        <div className="relative z-10 w-full">
          <div className="flex flex-col md:flex-row justify-around items-start px-10 py-4 auto gap-5 md:gap-0">
            {/* Menu */}
            <div>
              <h3 className="header font-bold text-white">
                <span className="text-blue-300 font-bold mr-2 hidden md:inline">|</span>
                Menu
              </h3>
              <ul className="text-white text-md ml-2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>

            {/* Contact US */}
            <div className="flex flex-col gap-2 md:gap-5 items-start">
              <div>
                <h3 className="header font-bold text-white">
                  <span className="text-blue-300 font-bold mr-2 hidden md:inline">|</span>
                  Contact Us
                </h3>
                <ul className="text-white text-md ml-2">
                  <li>Tulspura Diyal House</li>
                  <li>Call us: +92 334 230 1234</li>
                </ul>
              </div>

              {/* Social Media */}
              {/* Social Media */}
              <div className="mt-6 md:mt-1">
                <h3 className="header font-bold text-white">
                  <span className="text-blue-300 font-bold mr-2 hidden md:inline">|</span>
                  Social Media
                </h3>
                <ul className="flex flex-wrap gap-1 mt-2 ml-2">
                  <li>
                    <a
                      href="https://www.facebook.com/bjswater"
                      className="flex items-center rounded-full bg-white p-1 text-blue-600"
                    >
                      <FaFacebookF className="text-base" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/bjswater/"
                      className="flex items-center rounded-full bg-white p-1 text-pink-600"
                    >
                      <FaInstagram className="text-base" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/bjswater/"
                      className="flex items-center rounded-full bg-white p-1 text-red-600"
                    >
                      <FaYoutube className="text-base" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.whatsapp.com/channel/0029Vaps4haBvvsel7Cmqr1M"
                      className="flex items-center rounded-full bg-green-300 p-1 text-white"
                    >
                      <IoLogoWhatsapp className="text-base" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/bjswater/"
                      className="flex items-center rounded-full bg-white p-1 text-black"
                    >
                      <AiFillTikTok className="text-base" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com/bjswater/"
                      className="flex items-center rounded-full bg-white p-1 text-red-700"
                    >
                      <FaPinterest className="text-base" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/bjswater/"
                      className="flex items-center rounded-full bg-white p-1 text-blue-700"
                    >
                      <FaLinkedin className="text-base" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/bjswater/"
                      className="flex items-center rounded-full bg-white p-1 text-black"
                    >
                      <FaXTwitter className="text-base" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Subscribe For NewsLetter */}
            <div>
              <h3 className="header font-bold text-white">
                <span className="text-blue-300 font-bold mr-2 hidden md:inline">|</span>
                Subscribe For NewsLetter
              </h3>
              <div className="mt-5">
                <form action="#" className="relative">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="bg-white w-[250px] p-3 rounded-3xl truncate overflow-hidden text-sm border-0"
                  />
                  <button
                    type="submit"
                    className="bg-blue-300 text-white p-2 h-full  rounded-3xl absolute right-0 top-0"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-[90%] ml-[5%] h-[1px] bg-gray-300 relative my-2 text-white" />
        <p className="relative text-center text-white text-sm pb-2">
          Copyright &copy; {year} All rights reserved.
        </p>
      </div>
    </Element>
  );
};

export default Footer;
