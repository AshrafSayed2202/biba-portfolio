import React from 'react'
import Header from '../ui/Header'
import PricingCard from '../ui/PricingCard'
import avatar from '../assests/images/PricingAvatar.png'
import { motion } from 'framer-motion'

const Pricing = ({ setIsModalOpen = () => { } }) => {
    const [prices] = React.useState([
        { title: 'Custom', price: 0, description: "Need a tailored offer? Let's talk.", list: ["1 Hour Call", "Tailored to Your Project Scope", "Remote"] },
        { title: 'Project Based', price: 200, description: "Ideal for beginners shifting to a UI/UX career with personal guidance.", list: [" 1:1 Weekly Session (1.5 hrs)", "Personalized Assignments", "Portfolio & Feedback Support"] },
        { title: 'Part Time', price: 900, description: "Perfect for small projects or trial collaborations with maximum flexibility.", list: ["4 Hours / Day", "Ongoing Design Support", "Remote"] },
        { title: 'Full Time', price: 1800, description: "Best for businesses or dedicated individuals ready to elevate their productivity through personalized, full-time support.", list: ["8 Hours / Day", "Priority Support & Fast Turnaround", "Remote"] }
    ])
    return (
        <section className='content-contain pt-[100px] !max-h-none'>
            <div className='relative w-fit mx-auto'>
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    viewport={{ once: true }}
                    src={avatar} alt="avatar" className='absolute right-0 bottom-0 translate-x-[100%]' />
                <Header title={"Pricing"} />
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    className='text-[42px] font-[500] leading-[42px] text-center mb-[15px]'>
                    Transparent pricing, zero <span className='instrument-serif-regular-italic'>surprises.</span>
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    viewport={{ once: true }}
                    className='text-[16px] font-[400] text-[#C4C4C4] text-center'>Select the perfect plan to stay organized, productive, and in full control.</motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
                viewport={{ once: true }}
                className='grid grid-cols-1 md:grid-cols-2 gap-[42px] mt-[40px] md:max-w-[60%] mx-auto pb-[100px] relative'>
                <span className='absolute w-[50%] h-[50%] rounded-full bg-[#41a4c57e] blur-[200px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]' />
                {prices.map((item, index) => <PricingCard setIsModalOpen={setIsModalOpen} key={index} {...item} />)}
            </motion.div>
        </section>
    )
}

export default Pricing