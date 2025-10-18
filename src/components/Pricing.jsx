import React from 'react'
import Header from '../ui/Header'
import PricingCard from '../ui/PricingCard'
import avatar from '../assests/images/PricingAvatar.png'

const Pricing = ({ setIsModalOpen = () => { } }) => {
    return (
        <section className='content-contain pt-[100px] !max-h-none'>
            <div className='relative w-fit mx-auto'>
                <img src={avatar} alt="avatar" className='absolute right-0 bottom-0 translate-x-[100%]' />
                <Header title={"Pricing"} />
                <h3 className='text-[42px] font-[500] leading-[42px] text-center mb-[15px]'>
                    Transparent pricing, zero <span>surprises.</span>
                </h3>
                <p className='text-[16px] font-[400] text-[#C4C4C4] text-center'>Select the perfect plan to stay organized, productive, and in full control.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[42px] mt-[40px] md:max-w-[60%] mx-auto pb-[100px] relative'>
                <span className='absolute w-[50%] h-[50%] rounded-full bg-[#41a4c57e] blur-[200px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]' />
                <PricingCard setIsModalOpen={setIsModalOpen} title='Custom' price={0} description="Need a tailored offer? Let's talk." list={["1 Hour Call", "Tailored to Your Project Scope", "Remote"]} />
                <PricingCard setIsModalOpen={setIsModalOpen} title='Project Based' price={200} description="Ideal for beginners shifting to a UI/UX career with personal guidance." list={[" 1:1 Weekly Session (1.5 hrs)", "Personalized Assignments", "Portfolio & Feedback Support"]} />
                <PricingCard setIsModalOpen={setIsModalOpen} title='Part Time' price={900} description="Perfect for small projects or trial collaborations with maximum flexibility." list={["4 Hours / Day", "Ongoing Design Support", "Remote"]} />
                <PricingCard setIsModalOpen={setIsModalOpen} title='Full Time' price={1800} description="Best for businesses or dedicated individuals ready to elevate their productivity through personalized, full-time support." list={["8 Hours / Day", "Priority Support & Fast Turnaround", "Remote"]} />
            </div>
        </section>
    )
}

export default Pricing