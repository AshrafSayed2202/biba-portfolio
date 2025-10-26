import React from 'react'
import Header from '../ui/Header'
import PricingCard from '../ui/PricingCard'
import avatar from '../assests/images/PricingAvatar.png'
import { motion } from 'framer-motion'

const Pricing = ({ setIsModalOpen = () => { } }) => {
    const [prices] = React.useState([
        { title: 'Custom', price: 0, description: "Need a tailored offer? Let's talk.", list: ["1 Hour Call", "Tailored to Your Project Scope", "Remote"] },
        { title: 'Mentorship Plan', price: 200, description: "Ideal for beginners shifting to a UI/UX career with personal guidance.", list: [" 1:1 Weekly Session (1.5 hrs)", "Personalized Assignments", "Portfolio & Feedback Support"] },
        { title: 'Part Time', price: 900, description: "Perfect for small projects or trial collaborations with maximum flexibility.", list: ["4 Hours / Day", "Ongoing Design Support", "Remote"] },
        { title: 'Full Time', price: 1800, description: "Best for businesses or dedicated individuals ready to elevate their productivity through personalized, full-time support.", list: ["8 Hours / Day", "Priority Support & Fast Turnaround", "Remote"] }
    ])
    return (
        <section className='content-contain pt-[60px] sm:pt-[80px] md:pt-[100px] !h-auto' style={{ maxHeight: 'unset' }}>
            <div className='relative w-fit mx-auto'>
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    viewport={{ once: true }}
                    src={avatar} alt="avatar" className='absolute right-0 bottom-0 translate-x-[100%] w-[80px] sm:w-[100px] md:w-auto hidden sm:block' />
                <Header title={"Pricing"} />
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    className='text-[20px] sm:text-[34px] md:text-[42px] font-[500] leading-[28px] sm:leading-[34px] md:leading-[42px] text-center mb-[15px]'>
                    Transparent pricing, zero <span className='instrument-serif-regular-italic'>surprises.</span>
                    <img

                        src={avatar} alt="avatar" className='inline w-[80px] sm:w-[100px] md:w-auto mt-[12px] sm:hidden' />
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    viewport={{ once: true }}
                    className='text-[14px] sm:text-[15px] md:text-[16px] font-[400] text-[#C4C4C4] text-center'>Select the perfect plan to stay organized, productive, and in full control.</motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
                viewport={{ once: true }}
                className='grid grid-cols-1 sm:grid-cols-4 gap-[20px] sm:gap-0 mt-[20px] sm:mt-[30px] md:mt-[40px] pb-[60px] sm:pb-[80px] md:pb-[100px] relative'>
                {prices.map((item, index) => <PricingCard setIsModalOpen={setIsModalOpen} key={index} {...item} />)}
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    viewport={{ once: true }}
                    className='absolute w-[50%] h-[50%] rounded-full bg-[#41a4c57e] blur-[200px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none' />
            </motion.div>
        </section>
    )
}

export default Pricing