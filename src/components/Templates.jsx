import React from 'react'
import Header from '../ui/Header'
import avatar from '../assests/images/templatesAvatar.png'
import cubes from '../assests/images/templatesCubes.png'
import { motion } from 'framer-motion'

const Templates = () => {
    return (
        <section className='relative w-screen min-h-screen' >
            <div className='content-contain pt-[100px]'>
                <Header title={"Templates"} />
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    viewport={{ once: true }}
                    className='text-[16px] font-[400] text-[#C4C4C4] text-center'>COMING SOON</motion.p>
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.3, delay: 1.7 }}
                    viewport={{ once: true }}
                    src={avatar} alt="Avatar" className='h-[480px] mx-auto' />
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.3, delay: 1.7 }}
                    viewport={{ once: true }}
                    src={cubes} alt="Cubes" className='absolute left-[5%] top-[5%] z-[-1] w-[40%] rotate-[-152deg]' />
            </div>
        </section>
    )
}

export default Templates