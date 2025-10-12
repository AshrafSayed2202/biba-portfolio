import React from 'react'
import CheckMark from '../assests/svgs/CheckMark'

const ServiceCard = ({ title, description }) => {
    return (
        <div
            className='min-h-[245px]  rounded-[8px] bg-[linear-gradient(150deg,_#474747_0%,_transparent_50%)]'
        >
            <div className='w-[calc(100%-2px)] h-[calc(100%-2px)] mx-auto my-[1px] flex flex-col rounded-[8px] bg-[#050505]'>
                <div className='w-full h-full flex flex-col justify-center gap-[10px] px-[30px] rounded-[8px] py-[20px] bg-[linear-gradient(0deg,_rgba(255,255,255,0.01)_0%,_rgba(255,255,255,0.01)_100%),_radial-gradient(50%_50%_at_50%_100%,_rgba(26,145,185,0.30)_0%,_rgba(26,145,185,0.00)_100%)]'>
                    <CheckMark />
                    <div className="flex flex-col px-[40px]">
                        <h2 className='text-[23px] font-[500] mb-2'>{title}</h2>
                        <p className='text-[16px] font-normal text-[#CCC]'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard