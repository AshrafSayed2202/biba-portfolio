import React from 'react'
import Header from '../ui/Header'
import web from '../assests/images/web.png'
import MainBtn from '../ui/MainBtn'
import project from '../assests/images/LandingProject.png'
import avatar from '../assests/images/LandingAvatar.png'
import roundedText from '../assests/images/RoundedText.png'
import butterfly from '../assests/images/Butterfly.png'
import { motion } from 'framer-motion'
const Landing = ({ setIsModalOpen }) => {
    return (
        <section className='!max-h-screen !overflow-hidden relative'>
            <div className='content-contain pt-[100px]'>
                <img src={web} alt="web" className='absolute left-0 top-0 z-[-1]' />
                <Header title={<p>Design that's simply <br /> out of this world.</p>} classNames='!text-[82px] leading-[84px] font-[500] text-wrap mb-4' />
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}
                    className='text-[20px] font-[400] text-center opacity-80 mb-6'
                >
                    Bold, memorable websites and apps for startups ready to shine.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 2 }}
                    viewport={{ once: true }}
                    className='flex justify-center mb-[38px]'>
                    <MainBtn text="Explore" theme='white' handler={() => setIsModalOpen(true)} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 2 }}
                    viewport={{ once: true }}
                    className='size-[100px] mx-auto relative'>
                    <img src={roundedText} alt="rounded text" className='absolute w-full animate-[spin-reverse_10s_linear_infinite]' />
                    <img src={butterfly} alt="butterfly" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
                </motion.div>
                <div className='relative'>
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 2 }}
                        viewport={{ once: true }}
                        src={avatar} alt="avatar" className='absolute top-[65px] right-[15%] translate-y-[-100%] w-[250px]' />

                    <motion.img
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        viewport={{ once: true }}
                        src={project} alt="project" className='w-[70%] mx-auto mb-[50px] object-contain' />
                </div>
            </div>
            <div className='absolute w-full h-[100px] bg-gradient-to-b from-transparent to-[#090909] bottom-0' />
        </section>
    )
}

export default Landing