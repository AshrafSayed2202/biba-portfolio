import React from 'react'
import Header from '../ui/Header'
import ServiceCard from '../ui/ServiceCard'
import avatar from '../assests/images/ServicesAvatar.png'
import { motion } from 'framer-motion'
const Services = () => {
    const [services] = React.useState([
        { title: "UI design", description: "Visually stunning, intuitive interfaces that captivate users and elevate your brand identity." },
        { title: "UX design", description: "User-focused experiences shaped by thoughtful research and proven methodologies." },
        { title: "UX research", description: "Deep user insights and validation that drive smarter, user-friendly design decisions." },
        { title: "Discovery workshops", description: "Interactive sessions designed to clarify project goals and user needs, laying a strong foundation for success." },
        { title: "Website design", description: "Striking, easy-to-navigate websites designed to communicate clearly and convert effectively." },
        { title: "Framer development", description: "High-fidelity, animated web experiences brought to life with powerful, interactive Framer prototypes." },
    ])
    return (
        <section className='bg-[#020F15] w-screen flex justify-center overflow-hidden'>
            <div className='content-contain pt-[100px] '>
                <Header title={"Services"} />
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    className='text-[42px] font-[500] leading-[42px] text-center mb-[15px]'>
                    Congrats—you've found a design partner <br />
                    ready to supercharge your brand.
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    viewport={{ once: true }}
                    className='text-[20px] font-[400] leading-[27px] max-w-[800px] mx-auto opacity-80 text-center'>
                    Curious how I'll help your business thrive online? Here's a peek at my creative toolkit. From sleek websites to standout apps, I've got all your UX/UI needs covered."
                </motion.p>
                <div className='mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-[80px] relative'>
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        viewport={{ once: true }}
                        src={avatar} alt="avatar" className='absolute top-0 left-0 translate-y-[-100%] w-[112px]' />
                    {services.map((service, index) =>
                        <ServiceCard
                            delayKey={index} key={index} title={service.title} description={service.description} />
                    )}
                </div>
            </div>
        </section >
    )
}

export default Services