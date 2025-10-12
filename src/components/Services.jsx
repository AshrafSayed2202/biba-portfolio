import React from 'react'
import Header from '../ui/Header'
import ServiceCard from '../ui/ServiceCard'

const Services = () => {
    return (
        <section className='bg-[#020F15] w-screen flex justify-center overflow-hidden'>
            <div className='content-contain pt-[100px] '>
                <Header title={"Services"} />
                <h3 className='text-[42px] font-[500] leading-[42px] text-center mb-[15px]'>
                    Congrats—you've found a design partner <br />
                    ready to supercharge your brand.
                </h3>
                <p className='text-[20px] font-[400] leading-[27px] max-w-[800px] mx-auto opacity-80 text-center'>
                    Curious how I'll help your business thrive online? Here's a peek at my creative toolkit. From sleek websites to standout apps, I've got all your UX/UI needs covered."
                </p>
                <div className='mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-[80px]'>
                    <ServiceCard title="UI design" description="Visually stunning, intuitive interfaces that captivate users and elevate your brand identity." />
                    <ServiceCard title="UX design" description="User-focused experiences shaped by thoughtful research and proven methodologies." />
                    <ServiceCard title="UX research" description="Deep user insights and validation that drive smarter, user-friendly design decisions." />
                    <ServiceCard title="Discovery workshops" description="Interactive sessions designed to clarify project goals and user needs, laying a strong foundation for success." />
                    <ServiceCard title="Website design" description="Striking, easy-to-navigate websites designed to communicate clearly and convert effectively." />
                    <ServiceCard title="Framer development" description="High-fidelity, animated web experiences brought to life with powerful, interactive Framer prototypes." />
                </div>
            </div>
        </section>
    )
}

export default Services