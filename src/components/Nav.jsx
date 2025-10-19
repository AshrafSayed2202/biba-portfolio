import React, { useState, useEffect } from 'react';
import MainBtn from "../ui/MainBtn";
import { motion } from "framer-motion";

const Nav = ({ setIsModalOpen = () => { } }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="filter-blur-3 content-contain fixed top-5 left-0 right-0 z-50 flex h-[60px] sm:h-[70px] w-full items-center justify-between p-2 bg-[rgba(255,255,255,0.05)] rounded-[16px]"
            >
                <div className="flex gap-[20px] sm:gap-[60px] md:gap-[90px] items-center ml-[10px] sm:ml-[15px] md:ml-[22px]">
                    <span className="text-[20px] sm:text-[24px] md:text-[28px] chewy-regular">Habiba</span>
                    <ul className="hidden md:flex gap-[20px] sm:gap-[30px] md:gap-[40px] items-center text-[14px] sm:text-[16px] md:text-[18px] text-[#E4E4E4]">
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#landing">Home</a>
                        </li>
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#about">About</a>
                        </li>
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#services">Services</a>
                        </li>
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#pricing">Pricing</a>
                        </li>
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#faqs">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center mr-[10px] sm:mr-[15px] md:mr-[22px]">
                    <MainBtn
                        text="CONTACT US"
                        classNames={'hidden md:block !px-[20px] sm:!px-[25px] md:!px-[33px] !py-[10px] sm:!py-[12px] md:!py-[16px] !text-[12px] sm:!text-[14px] md:!text-[15px]'}
                        handler={() => setIsModalOpen(true)}
                    />
                    <div
                        className="md:hidden cursor-pointer"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <div className='flex flex-col gap-1.5 w-6 sm:w-8 h-6 sm:h-8 justify-center'>
                            <span className='bg-[#E4E4E4] h-0.5 w-full rounded'></span>
                            <span className='bg-[#E4E4E4] h-0.5 w-full rounded'></span>
                            <span className='bg-[#E4E4E4] h-0.5 w-full rounded'></span>
                        </div>
                    </div>
                </div>
            </motion.nav>
            {isMenuOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="fixed top-0 right-0 w-full sm:w-[75%] md:w-[50%] h-full bg-[#090909e3] filter-blur-3 z-[60] flex flex-col items-center justify-center"
                >
                    <div
                        className="absolute top-5 right-[10px] sm:right-[15px] md:right-[22px] cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className='relative w-6 sm:w-8 h-6 sm:h-8'>
                            <span className='absolute bg-[#E4E4E4] h-0.5 w-full rounded top-1/2 left-0 -translate-y-1/2 rotate-45'></span>
                            <span className='absolute bg-[#E4E4E4] h-0.5 w-full rounded top-1/2 left-0 -translate-y-1/2 -rotate-45'></span>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px] items-center text-[18px] sm:text-[22px] md:text-[24px] text-[#E4E4E4]">
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#landing" onClick={() => setIsMenuOpen(false)}>Home</a>
                        </li>
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                        </li>
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                        </li>
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#pricing" onClick={() => setIsModalOpen(false)}>Pricing</a>
                        </li>
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#faqs" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                        </li>
                    </ul>
                    <div className="mt-[40px] sm:mt-[50px] md:mt-[60px]">
                        <MainBtn
                            text="CONTACT US"
                            classNames={'!px-[20px] sm:!px-[25px] md:!px-[33px] !py-[10px] sm:!py-[12px] md:!py-[16px] !text-[12px] sm:!text-[14px] md:!text-[15px]'}
                            handler={() => {
                                setIsMenuOpen(false);
                                setIsModalOpen(true);
                            }}
                        />
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Nav;