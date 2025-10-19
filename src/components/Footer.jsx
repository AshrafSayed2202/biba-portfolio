import React from 'react'
import bg from '../assests/images/footerbg.jpg'
import avatar from '../assests/images/footerAvatar.png'
import MainBtn from '../ui/MainBtn'
import { motion } from 'framer-motion'

const Footer = ({ setIsModalOpen = () => { } }) => {
    return (
        <section className='content-contain pt-[60px] sm:pt-[80px] md:pt-[100px]'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: true }}
                className='p-[40px] sm:p-[60px] md:p-[100px] filter-blur-2 rounded-[24px] relative overflow-hidden flex flex-col sm:flex-row gap-5 max-w-[1200px] mx-auto mb-[40px] sm:mb-[50px] md:mb-[60px]'>
                <img src={bg} alt="bg" className='absolute left-0 top-0 z-[-1] rounded-[24px] w-full h-full object-cover' />
                <div className='absolute left-0 top-0 z-[-1] rounded-[24px] size-full object-cover shadow-[0_0_28px_2px_rgba(255,255,255,0.20)_inset]' />
                <div className='flex flex-col gap-6'>
                    <h1 className='font-bold text-[36px] sm:text-[46px] md:text-[58px] leading-[44px] sm:leading-[56px] md:leading-[70px]'>Ready to bring your dream project to life?</h1>
                    <p className='text-[18px] sm:text-[20px] md:text-[24px]'>Let's transform your ideas into stunning reality. Contact me today, and let's build something remarkable together</p>
                    <MainBtn text="let's talk" handler={() => setIsModalOpen(true)} classNames={'text-[14px] sm:text-[16px] md:text-[18px] font-bold max-w-[280px]'} />
                </div>
                <div>
                    <img src={avatar} alt="avatar" className='max-w-[240px] sm:max-w-[300px] md:max-w-[380px] w-full' />
                </div>
            </motion.div>
            <div className='max-w-[1200px] mx-auto py-4 px-4 sm:px-6 md:px-10 text-[#626262] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1 }}
                    viewport={{ once: true }}
                >Habiba© 2025 .All Rights Reserved</motion.span>
                <div className='flex items-center gap-3 sm:gap-4 md:gap-5 font-bold'>
                    <motion.a
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.3 }}
                        viewport={{ once: true }}
                        href="https://www.linkedin.com/in/habiba-ehab-ux-designer" target='_blank' className='hover:text-[#1A91B9] duration-300'>LinkedIn</motion.a>
                    <motion.a
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.6 }}
                        viewport={{ once: true }}
                        href="https://www.behance.net/he45" target='_blank' className='hover:text-[#1A91B9] duration-300'>Behance</motion.a>
                </div>
            </div>
        </section>
    )
}

export default Footer