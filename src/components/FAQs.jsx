import React, { useState } from 'react';
import Header from '../ui/Header';
import avatar from '../assests/images/FaqsAvatar.png'
import avatar2 from '../assests/images/FaqsAvatar2.png'
import { motion } from 'framer-motion'

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    // Sample FAQs; replace with your actual questions and answers
    const faqs = [
        {
            question: 'What Programs do you design in?',
            answer: 'Most requests are designed using Figma, Framer, Adobe Illustrator, and Adobe Photoshop.',
        },
        {
            question: 'What is your design and development process like?',
            answer: 'I follow a thorough process, starting with understanding project goals, conducting research, creating concepts, and refining designs through iterations. Client feedback is crucial, and I keep them informed at every stage.',
        },
        {
            question: 'What is the typical timeline for a project?',
            answer: 'Timelines vary based on project complexity. I provide clear schedules during the initial consultation. Factors like project size and revisions can affect timelines, but I aim for timely delivery.',
        },
        {
            question: 'Is there a limit to how many requests I can have?',
            answer: "Nope! When we say unlimited, we mean unlimited. Once you've subscribed, you can add as many design requests to your queue as you'd like and they'll be delivered one by one.",
        },
        {
            question: "What if I don't like the design?",
            answer: "No worries! We'll continue to revise the design until you're 100% satisfied.",
        },
        {
            question: "Are there any refunds if I don't like the service?",
            answer: 'Due to the high-quality nature of the work, there will be no refunds issued.',
        },
    ];
    return (
        <section className='bg-[#020F15] w-screen flex justify-center !overflow-visible'>
            <div className='content-contain py-[60px] sm:py-[80px] md:py-[100px]'>
                <Header title={'Frequently Asked Questions'} />
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    className='text-[20px] sm:text-[34px] md:text-[42px] font-[500] leading-[28px] sm:leading-[34px] md:leading-[42px] text-center mb-[15px]'>
                    Your Top <span className='instrument-serif-regular-italic'>Questions</span> answered.
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    viewport={{ once: true }}
                    className='text-[14px] sm:text-[15px] md:text-[16px] font-[400] text-[#C4C4C4] text-center mb-[100px] sm:mb-[25px] md:mb-[30px]'>
                    Got questions before kicking things off? I've got you covered.
                </motion.p>
                <div className='flex flex-col gap-4 mx-auto relative max-w-[800px] sm:max-w-[1000px] md:max-w-[1200px]'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        viewport={{ once: true }}
                    >
                        <img src={avatar} alt="avatar" className={`absolute top-0 right-0 translate-y-[-100%] duration-300 w-[80px] sm:w-[96px] md:w-[112px] ${activeIndex !== null ? 'opacity-0' : ''}`} />
                        <img src={avatar2} alt="avatar" className={`absolute top-0 left-0 translate-y-[-100%] duration-300 w-[80px] sm:w-[96px] md:w-[112px] ${activeIndex === null ? 'opacity-0' : ''}`} />
                    </motion.div>
                    <span className='absolute w-[50%] h-[50%] rounded-full bg-[#41a4c57e] blur-[200px] top-[50%] left-[75%] translate-x-[-50%] translate-y-[-50%] z-[-1]' />
                    {faqs.map((faq, index) => (
                        <motion.button
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: (index + 1) * 0.2 }}
                            viewport={{ once: true }}
                            key={index} className='border rounded-[16px] sm:rounded-[20px] md:rounded-[24px] border-[#ffffff1a] py-[12px] sm:py-[15px] md:py-[18px] px-[14px] sm:px-[18px] md:px-[20px] bg-[#ffffff0a] filter-blur-8' onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                            <div
                                className='flex justify-between items-center w-full text-left'
                            >
                                <span className='text-[14px] sm:text-[16px] md:text-[18px] font-[500]'>{faq.question}</span>
                                <span className='text-[18px] sm:text-[20px] md:text-[24px] font-[300]'>
                                    {activeIndex === index ? '-' : '+'}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className='pb-4 text-[14px] sm:text-[15px] md:text-[16px] font-[400] text-[#ffffffcc] text-left mt-[18px] sm:mt-[24px] md:mt-[28px]'>
                                    {faq.answer}
                                </div>
                            )}
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;