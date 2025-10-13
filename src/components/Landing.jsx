import React from 'react'
import Header from '../ui/Header'
import web from '../assests/images/web.png'
const Landing = () => {
    return (
        <section className='content-contain mt-[100px]'>
            <img src={web} alt="web" className='absolute left-0 top-0 z-[-1]' />
            <Header title={<p>Design that's simply <br /> out of this world.</p>} classNames='!text-[82px] leading-[84px] font-[500] text-wrap' />
        </section>
    )
}

export default Landing