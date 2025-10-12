import React from 'react'
import Header from '../ui/Header'

const About = () => {
    return (
        <section className='content-contain mt-[100px]'>
            <Header title={"About Me"} />
            <div className='flex gap-5 mt-[80px]'>
                <div className='flex flex-col gap-8'>
                    <h3 className='text-[50px] font-[500] leading-[55px]'>
                        Hey there! I'm Habiba -Your creative <br />
                        UI/UX Designer and  Framer Developer.
                    </h3>
                    <p className='text-[20px] font-[400] leading-[27px] opacity-80 max-w-[80%]'>
                        Let's face it, traditional web design is exhausting pricey, confusing, and painfully slow. That's why I've dedicated myself to making stunning, professional websites easy and accessible for everyone. No jargon, no headaches just clean, impactful designs that help your brand confidently stand out.
                    </p>
                    <p className='text-[20px] font-[400] leading-[27px] opacity-80 max-w-[80%]'>
                        I truly believe every business deserves a great online presence, and I'm here to help yours win hearts (and clicks)."
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-[50px] items-center justify-between'>
                        <div className='text-[96px] leading-[132px] font-bold bg-gradient-to-r from-[#00BFFF] to-[#105871] bg-clip-text text-transparent'>
                            6+
                        </div>
                        <div className='text-[32px] leading-[27px] opacity-70 text-nowrap text-right flex-1'>
                            Years of exp
                        </div>
                    </div>
                    <div className='flex gap-[50px] items-center'>
                        <div className='text-[96px] leading-[132px] font-bold bg-gradient-to-r from-[#00BFFF] to-[#105871] bg-clip-text text-transparent'>
                            150+
                        </div>
                        <div className='text-[32px] leading-[27px] opacity-70 text-nowrap text-right flex-1'>
                            Projects
                        </div>
                    </div>
                    <div className='flex gap-[50px] items-center'>
                        <div className='text-[96px] leading-[132px] font-bold bg-gradient-to-r from-[#00BFFF] to-[#105871] bg-clip-text text-transparent'>
                            340+
                        </div>
                        <div className='text-[32px] leading-[27px] opacity-70 text-nowrap text-right flex-1'>
                            Templates
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About