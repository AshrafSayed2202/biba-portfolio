import React from 'react'
import Header from '../ui/Header'
import web from '../assests/images/web.png'
import MainBtn from '../ui/MainBtn'
import project from '../assests/images/LandingProject.png'
import avatar from '../assests/images/LandingAvatar.png'
import roundedText from '../assests/images/RoundedText.png'
import butterfly from '../assests/images/Butterfly.png'
const Landing = ({ setIsModalOpen }) => {
    return (
        <section className='!max-h-screen !overflow-hidden relative'>
            <div className='content-contain pt-[100px]'>
                <img src={web} alt="web" className='absolute left-0 top-0 z-[-1]' />
                <Header title={<p>Design that's simply <br /> out of this world.</p>} classNames='!text-[82px] leading-[84px] font-[500] text-wrap mb-4' />
                <p className='text-[20px] font-[400] text-center opacity-80 mb-6'>Bold, memorable websites and apps for startups ready to shine.</p>
                <div className='flex justify-center mb-[38px]'>
                    <MainBtn text="Explore" theme='white' handler={() => setIsModalOpen(true)} />
                </div>
                <div className='size-[100px] mx-auto relative'>
                    <img src={roundedText} alt="rounded text" className='absolute w-full animate-[spin_10s_linear_infinite]' />
                    <img src={butterfly} alt="butterfly" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
                </div>
                <div className='relative'>
                    <img src={avatar} alt="avatar" className='absolute top-[65px] right-[15%] translate-y-[-100%] w-[250px]' />

                    <img src={project} alt="project" className='w-[70%] mx-auto mb-[50px] object-contain' />
                </div>
            </div>
            <div className='absolute w-full h-[100px] bg-gradient-to-b from-transparent to-[#090909] bottom-0' />
        </section>
    )
}

export default Landing