import React from 'react'
import Header from '../ui/Header'
import avatar from '../assests/images/templatesAvatar.png'
import cubes from '../assests/images/templatesCubes.png'
import { motion } from 'framer-motion'

const Templates = () => {
    return (
        <section className='relative w-screen sm:min-h-screen flex justify-center items-center'
            style={{ height: 'auto', minHeight: 'unset' }} >
            <div className='content-contain pt-[60px] sm:pt-[80px] md:pt-[100px] !h-[500px]'>
                <Header title={"Templates"} />
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    viewport={{ once: true }}
                    className='text-[14px] sm:text-[15px] md:text-[16px] font-[400] text-[#C4C4C4] text-center'>COMING SOON</motion.p>
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.3, delay: 1.7 }}
                    viewport={{ once: true }}
                    src={avatar} alt="Avatar" className='h-[300px] sm:h-[400px] md:h-[480px] mx-auto' />
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.3, delay: 1.7 }}
                    viewport={{ once: true }}
                    src={cubes} alt="Cubes" className='hidden sm:block absolute left-[0%] top-[30%] w-[40%] sm:w-[50%] md:w-[40%] rotate-[-152deg]' />
            </div>
        </section>
    )
}

export default Templates