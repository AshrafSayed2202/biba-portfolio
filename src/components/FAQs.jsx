import React, { useState } from 'react';
import Header from '../ui/Header';

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
        <section className='content-contain mt-[100px] !overflow-visible max-h-screen'>
            <Header title={'Frequently Asked Questions'} />
            <h3 className='text-[42px] font-[500] leading-[42px] text-center mb-[15px]'>
                Your Top <span>Questions</span> answered.
            </h3>
            <p className='text-[16px] font-[400] text-[#C4C4C4] text-center mb-[30px]'>
                Got questions before kicking things off? I've got you covered.
            </p>
            <div className='flex flex-col gap-4 mx-auto relative'>
                <span className='absolute w-[50%] h-[50%] rounded-full bg-[#41a4c57e] blur-[200px] top-[50%] left-[75%] translate-x-[-50%] translate-y-[-50%] z-[-1]' />

                {faqs.map((faq, index) => (
                    <button key={index} className='border rounded-[24px] border-[#ffffff1a] py-[18px] px-[20px] bg-[#ffffff0a] filter-blur-8' onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                        <div
                            className='flex justify-between items-center w-full text-left'
                        >
                            <span className='text-[18px] font-[500]'>{faq.question}</span>
                            <span className='text-[24px] font-[300]'>
                                {activeIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className='pb-4 text-[16px] font-[400] text-[#ffffffcc] text-left mt-[28px]'>
                                {faq.answer}
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default FAQs;