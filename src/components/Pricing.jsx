import React from 'react'
import Header from '../ui/Header'
import PricingCard from '../ui/PricingCard'

const Pricing = () => {
    return (
        <section className='content-contain mt-[100px] !max-h-none'>
            <Header title={"Pricing"} />
            <h3 className='text-[42px] font-[500] leading-[42px] text-center mb-[15px]'>
                Transparent pricing, zero <span>surprises.</span>
            </h3>
            <p className='text-[16px] font-[400] text-[#C4C4C4] text-center'>Select the perfect plan to stay organized, productive, and in full control.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[42px] mt-[40px] md:max-w-[60%] mx-auto pb-[100px] relative'>
                <span className='absolute w-[50%] h-[50%] rounded-full bg-[#41a4c57e] blur-[200px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]' />
                <PricingCard title='Custom' price={0} description="Need a tailored offer? Let's talk." list={["1 Hour Call", "Includes the unlimited plan", "Remote"]} />
                <PricingCard title='Project Based' price={900} description="Ideal for individual projects and freelancers launching their journey." list={["4 Hours / Day", "Includes the unlimited plan", "Remote"]} />
                <PricingCard title='Part Time' price={1200} description="Perfect for small projects or trial collaborations with maximum flexibility." list={["4 Hours / Day", "Includes the unlimited plan", "Remote"]} />
                <PricingCard title='Full Time' price={2400} description="Best for businesses or dedicated individuals ready to elevate their productivity through personalized, full-time support." list={["8 Hours / Day", "Includes the unlimited plan", "Remote"]} />
            </div>
        </section>
    )
}

export default Pricing