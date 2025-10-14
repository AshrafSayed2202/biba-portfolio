import React from 'react'
import Header from '../ui/Header'
import avatar from '../assests/images/templatesAvatar.png'
import cubes from '../assests/images/templatesCubes.png'
const Templates = () => {
    return (
        <section className='relative w-screen min-h-screen' >
            <div className='content-contain pt-[100px]'>
                <Header title={"Templates"} />
                <p className='text-[16px] font-[400] text-[#C4C4C4] text-center'>COMING SOON</p>
                <img src={avatar} alt="Avatar" className='h-[480px] mx-auto' />
                <img src={cubes} alt="Cubes" className='absolute left-[5%] top-[5%] z-[-1] w-[40%] rotate-[-152deg]' />
            </div>
        </section>
    )
}

export default Templates