import React from 'react'
import CheckMark from '../assests/svgs/CheckMark'

const ServiceCard = ({ title, description }) => {
    return (
        <div
            className='border min-h-[245px] justify-center border-[#474747] px-[30px] py-[20px] rounded-[8px] flex flex-col gap-[10px] bg-[linear-gradient(0deg,_rgba(255,255,255,0.01)_0%,_rgba(255,255,255,0.01)_100%),_radial-gradient(50%_50%_at_50%_100%,_rgba(26,145,185,0.30)_0%,_rgba(26,145,185,0.00)_100%)]'
        >
            <CheckMark />
            <div className="flex flex-col px-[40px]">
                <h2 className='text-[23px] font-[500] mb-2'>{title}</h2>
                <p className='text-[16px] font-normal text-[#CCC]'>{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard