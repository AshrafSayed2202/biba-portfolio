import React, { useState, useRef } from 'react';
import MainBtn from '../ui/MainBtn';
import { motion } from 'framer-motion';
import Avatar from '../assests/images/contactAvatar.png'
import { FaAngleDown } from "react-icons/fa";

const ContactModal = ({ isOpen, onClose, title = "Get in touch with us", text = "Have questions or need A solutions? Let us know by filling out the form, and we'll be in touch!", defaultSelect = '' }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        plan: defaultSelect,
        message: '',
    });

    const [status, setStatus] = useState('');

    const formRef = useRef(null);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formRef.current.reportValidity()) {
            setStatus('Please fill out all required fields.');
            return;
        }

        setStatus('Submitting...');
        // https://formspree.io/f/xnqelrkz'
        try {
            const response = await fetch('https://formspree.io/f/mdkzrzpo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Form submitted successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    plan: '',
                    message: '',
                });
                setTimeout(onClose, 2000);
            } else {
                setStatus('Error submitting form. Please try again.');
            }
        } catch (error) {
            setStatus('Error: ' + error.message);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 px-4 sm:px-6 lg:px-8 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-[#000000] p-4 sm:p-6 lg:p-8 rounded-lg border border-[#474747] shadow-lg w-full max-w-[90vw] sm:max-w-[80vw] lg:max-w-[650px] relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 size-10 text-[36px] sm:text-[48px] flex justify-center items-center text-gray-500 hover:text-gray-700"
                >
                    &times;
                </button>
                <h2 className="text-2xl sm:text-3xl lg:text-[50px] font-bold mb-4 text-center sm:text-left">{title}</h2>
                <p className="mb-6 sm:mb-10 lg:mb-[70px] text-[#ccc] text-sm sm:text-base lg:text-[18px] text-center sm:text-left">{text}</p>
                <form ref={formRef}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
                        <div className="relative">
                            <label htmlFor="firstName" className="mb-2 flex justify-between items-end">
                                <div className="text-sm sm:text-base">
                                    First Name
                                    <span className="text-red-500"> *</span>
                                </div>
                                <img src={Avatar} alt="Avatar" className="absolute right-0 sm:right-[25%] hidden sm:block" />
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="John"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="px-3 sm:px-4 py-2 sm:py-3 border border-[#414141] rounded-lg w-full outline-none bg-transparent text-sm sm:text-base"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="mb-2 block text-sm sm:text-base">
                                Last Name
                                <span className="text-red-500"> *</span>
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Doe"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="px-3 sm:px-4 py-2 sm:py-3 border border-[#414141] rounded-lg w-full outline-none bg-transparent text-sm sm:text-base"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
                        <div>
                            <label htmlFor="phone" className="mb-2 block text-sm sm:text-base">
                                Phone Number
                                <span className="text-red-500"> *</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="123456789"
                                value={formData.phone}
                                onChange={handleChange}
                                className="px-3 sm:px-4 py-2 sm:py-3 border border-[#414141] rounded-lg w-full outline-none bg-transparent text-sm sm:text-base"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm sm:text-base">
                                Email
                                <span className="text-red-500"> *</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="habiba@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="px-3 sm:px-4 py-2 sm:py-3 border border-[#414141] rounded-lg w-full outline-none bg-transparent text-sm sm:text-base"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="plan" className="mb-2 block text-sm sm:text-base">
                            Choose a Plan
                            <span className="text-red-500"> *</span>
                        </label>
                        <FaAngleDown className='absolute text-white text-2xl bottom-2 sm:bottom-3 right-3 z-10' />
                        <select
                            name="plan"
                            id="plan"
                            value={formData.plan}
                            onChange={handleChange}
                            className="px-3 sm:px-4 py-2 sm:py-3 border appearance-none border-[#414141] cursor-pointer rounded-lg w-full outline-none bg-transparent text-sm sm:text-base "
                            required
                        >
                            <option value="" className="bg-[#000000]">--select a plan--</option>
                            <option value="custom" className="bg-[#000000]">Custom</option>
                            <option value="mentorship-plan" className="bg-[#000000]">Mentorship Plan</option>
                            <option value="part-time" className="bg-[#000000]">Part Time</option>
                            <option value="full-time" className="bg-[#000000]">Full Time</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="mb-2 block text-sm sm:text-base">
                            How can we help?
                            <span className="text-red-500"> *</span>
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="You can write what you want to help you here ..."
                            value={formData.message}
                            onChange={handleChange}
                            className="px-3 sm:px-4 py-2 sm:py-3 border border-[#414141] rounded-lg w-full outline-none bg-transparent h-24 sm:h-32 text-sm sm:text-base"
                            required
                        />
                    </div>
                    <MainBtn text="Let's Talk" handler={handleSubmit} theme="blue" classNames="w-full !py-4" />
                </form>
                {status && <p className="mt-4 text-center text-sm sm:text-base">{status}</p>}
            </motion.div>
        </div>
    );
};

export default ContactModal;