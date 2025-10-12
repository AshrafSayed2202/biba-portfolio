import React from 'react'
import Header from '../ui/Header'

const Landing = () => {
    return (
        <section className='content-contain mt-[100px]'>
            <Header title={<p>Design that's simply <br /> out of this world.</p>} classNames='!text-[82px] leading-[84px] font-[500] text-wrap' />
        </section>
    )
}

export default Landing