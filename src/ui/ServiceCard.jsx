import React from 'react'
import CheckMark from '../assests/svgs/CheckMark'
import { motion } from 'framer-motion'
const ServiceCard = ({ delayKey, title, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: (delayKey + 1) * 0.3 }}
            viewport={{ once: true }}
            className='min-h-[180px] sm:min-h-[210px] md:min-h-[245px] rounded-[8px] bg-[linear-gradient(150deg,_#474747_0%,_transparent_50%)]'
        >
            <div className='w-[calc(100%-2px)] h-[calc(100%-2px)] mx-auto my-[1px] flex flex-col rounded-[8px] bg-[#050505]'>
                <div className='w-full h-full flex flex-col justify-center gap-[10px] px-[20px] sm:px-[25px] md:px-[30px] rounded-[8px] py-[15px] sm:py-[18px] md:py-[20px] bg-[linear-gradient(0deg,_rgba(255,255,255,0.01)_0%,_rgba(255,255,255,0.01)_100%),_radial-gradient(50%_50%_at_50%_100%,_rgba(26,145,185,0.30)_0%,_rgba(26,145,185,0.00)_100%)]'>
                    <CheckMark />
                    <div className="flex flex-col px-[20px] sm:px-[30px] md:px-[40px]">
                        <h2 className='text-[18px] sm:text-[20px] md:text-[23px] font-[500] mb-2'>{title}</h2>
                        <p className='text-[14px] sm:text-[15px] md:text-[16px] font-normal text-[#CCC]'>{description}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ServiceCard