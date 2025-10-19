import React, { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'
import Header from '../ui/Header'
import web from '../assests/images/web.png'
import avatar from '../assests/images/AboutAvatar.png'
import { motion } from 'framer-motion'
const AnimatedNumber = ({ target, start }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (start) {
            const controls = animate(0, target, {
                duration: 2,
                ease: 'easeOut',
                onUpdate: (latest) => {
                    if (ref.current) {
                        ref.current.textContent = Math.floor(latest) + '+';
                    }
                }
            });
            return () => controls.stop();
        }
    }, [start, target]);

    return (
        <div
            className='text-[96px] leading-[132px] font-bold bg-gradient-to-r from-[#00BFFF] to-[#105871] bg-clip-text text-transparent'
            ref={ref}
        >
            0+
        </div>
    );
};

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (isInView) {
            setStart(true);
        }
    }, [isInView]);

    return (
        <section className='content-contain pt-[100px]'>
            <img src={web} alt="web" className='absolute rotate-180 left-0 bottom-0 z-[-1]' />
            <div className='flex items-center justify-center'>
                <Header title={"About Me"} />
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.5 }}
                    viewport={{ once: true }}
                    src={avatar} alt="avatar" className='w-[112px]'
                />
            </div>
            <div className='flex gap-5 mt-[80px]'>
                <div className='flex flex-col gap-8'>
                    <motion.h3
                        initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='text-[50px] font-[500] leading-[55px]'>
                        Hey there! I'm Habiba -Your creative <br />
                        UI/UX Designer and  Framer Developer.
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, x: -130 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true }}
                        className='text-[20px] font-[400] leading-[27px] opacity-80 max-w-[80%]'>
                        Let's face it, traditional web design is exhausting pricey, confusing, and painfully slow. That's why I've dedicated myself to making stunning, professional websites easy and accessible for everyone. No jargon, no headaches just clean, impactful designs that help your brand confidently stand out.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -110 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        viewport={{ once: true }}
                        className='text-[20px] font-[400] leading-[27px] opacity-80 max-w-[80%]'>
                        I truly believe every business deserves a great online presence, and I'm here to help yours win hearts (and clicks)."
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    ref={ref} className='flex flex-col gap-2'>
                    <div className='flex gap-[50px] items-center justify-between'>
                        <AnimatedNumber target={6} start={start} />
                        <div className='text-[32px] leading-[27px] opacity-70 text-nowrap text-right flex-1'>
                            Years of exp
                        </div>
                    </div>
                    <div className='flex gap-[50px] items-center'>
                        <AnimatedNumber target={150} start={start} />
                        <div className='text-[32px] leading-[27px] opacity-70 text-nowrap text-right flex-1'>
                            Projects
                        </div>
                    </div>
                    <div className='flex gap-[50px] items-center'>
                        <AnimatedNumber target={340} start={start} />
                        <div className='text-[32px] leading-[27px] opacity-70 text-nowrap text-right flex-1'>
                            Templates
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About