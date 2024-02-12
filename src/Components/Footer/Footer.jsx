import React from 'react'
import footerLogo from "../../assets/img/website/logo.png";
import Banner from "../../assets/img/website/logo.png";
import { FaGithub, FaSkype } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

import {
    FaFacebook,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

function Footer() {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
            <div className='my-12 flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 space-y-8'>
                    <a href="" className='text-2xl font-semibold flex items-center space-x-3 text-primary'><img src={footerLogo} alt="" className='w-18 h-14 inline-block items-center' /> <span className='text-white'>Ema-Johan</span>
                    </a>
                    <p className='md:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos magnam adipisci quisquam nihil labore sapiente possimus dignissimos illo corrupti.</p>
                    <div>
                        <input type="email" name='email' id='email' placeholder='Your email' className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none' />
                        <input type="submit" value="Subscribe" className='px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all' />
                    </div>
                </div>

                <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div className='space-y-5 mt-5'>
                        <h4 className='text-xl'>Platform</h4>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300'>Overview</a>
                            <a href="/" className='block hover:text-gray-300'>Features</a>
                            <a href="/" className='block hover:text-gray-300'>About</a>
                            <a href="/" className='block hover:text-gray-300'>Pricing</a>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Help</h4>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300'>how does it works?</a>
                            <a href="/" className='block hover:text-gray-300'>where to ask question?</a>
                            <a href="/" className='block hover:text-gray-300'>How to play?</a>
                            <a href="/" className='block hover:text-gray-300'>What is needed for this?</a>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Contacts</h4>
                        <ul className='space-y-3'>
                            <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt className='text-xl'/>
                                <p>+8801720438804</p>
                            </div>
                            <div className="flex items-center gap-3">
                            <HiOutlineMail className='text-xl' />
                                <p>maruf2446@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>Mymensingh, Dhaka, Bangladesh</p>
                            </div>
                        </ul>
                        <div className='flex items-center gap-4'>
                            <a href="http://www.facebook.com/iskmaruf/" target="_blank">
                                <FaFacebook className='text-4xl cursor-pointer' />
                            </a>

                            <a href="http://wa.me/+8801720438804" target="_blank">
                                <FaWhatsapp className='text-4xl cursor-pointer' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                <p className='lg:text-xl'>Designed and Developed by  © <span className=' text-xl lg:text-3xl'><a href="http://www.facebook.com/iskmaruf/" target="_blank" rel="noopener noreferrer">ISK MARUF</a></span>
                </p>
                <div className='flex items-center space-x-5'>
                    <a href="http://www.facebook.com/iskmaruf/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className='text-4xl cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                    </a>
                    <a href="http://github.com/maruf2446" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='text-4xl cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                    </a>
                    <a href="http://www.linkedin.com/in/isk-maruf-7b2986180/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='text-4xl cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                    </a>
                    <a href="http://wa.me/+8801720438804" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className='text-4xl cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                    </a>
                    <a href="http://join.skype.com/invite/vItjPXcCX4fk?chat" target="_blank" rel="noopener noreferrer">
                        <FaSkype className='text-4xl cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer