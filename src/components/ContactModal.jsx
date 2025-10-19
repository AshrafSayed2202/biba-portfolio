import React, { useState } from 'react';
import MainBtn from '../ui/MainBtn';
import { motion } from 'framer-motion';
const ContactModal = ({ isOpen, onClose, title = "Get in touch with us", text = "Have questions or need A solutions? Let us know by filling out the form, and we'll be in touch!" }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        plan: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        try {
            const response = await fetch('https://formspree.io/f/xnqelrkz', {
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
                setTimeout(onClose, 2000); // Close modal after 2 seconds
            } else {
                setStatus('Error submitting form. Please try again.');
            }
        } catch (error) {
            setStatus('Error: ' + error.message);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-[#000000] p-8 rounded-lg border border-[#474747] shadow-lg max-w-[80vw] w-[650px] relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 size-6 text-[24px] flex justify-center items-center text-gray-500 hover:text-gray-700"
                >
                    &times;
                </button>
                <h2 className="text-[50px] font-bold mb-4">{title}</h2>
                <p className="mb-[70px] text-[#ccc] text-[18px]">{text}</p>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="firstName" className='mb-2 block'>
                                First Name
                                <span className='text-red-500'> *</span>
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id='firstName'
                                placeholder="John"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="px-4 py-3 border border-[#414141] rounded-lg w-full outline-none bg-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className='mb-2 block'>
                                Last Name
                                <span className='text-red-500'> *</span>
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id='lastName'
                                placeholder="Doe"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="px-4 py-3 border border-[#414141] rounded-lg w-full outline-none bg-transparent"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="phone" className='mb-2 block'>
                                Phone Number
                                <span className='text-red-500'> *</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id='phone'
                                placeholder="123456789"
                                value={formData.phone}
                                onChange={handleChange}
                                className="px-4 py-3 border border-[#414141] rounded-lg w-full outline-none bg-transparent"

                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className='mb-2 block'>
                                Email
                                <span className='text-red-500'> *</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id='email'
                                placeholder="habiba@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="px-4 py-3 border border-[#414141] rounded-lg w-full outline-none bg-transparent"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">

                    </div>
                    <div className="mb-4">
                        <label htmlFor="plan" className='mb-2 block'>
                            Choose a Plan
                            <span className='text-red-500'> *</span>
                        </label>
                        <select
                            name="plan"
                            id='plan'
                            value={formData.plan}
                            onChange={handleChange}
                            className="px-4 py-3 border border-[#414141] rounded-lg w-full outline-none bg-transparent"
                            required
                        >
                            <option value="" className='bg-[#000000]'>--select a plan--</option>
                            <option value="basic" className='bg-[#000000]'>Basic</option>
                            <option value="premium" className='bg-[#000000]'>Premium</option>
                            <option value="enterprise" className='bg-[#000000]'>Enterprise</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className='mb-2 block'>
                            How can we help?
                            <span className='text-red-500'> *</span>
                        </label>
                        <textarea
                            name="message"
                            id='message'
                            placeholder="You can write what you want to help you here ..."
                            value={formData.message}
                            onChange={handleChange}
                            className="px-4 py-3 border border-[#414141] rounded-lg w-full outline-none bg-transparent h-32"
                            required
                        />
                    </div>
                    <MainBtn text="Let's Talk" handler={handleSubmit} theme="blue" classNames={'!w-full'} />
                </form>
                {status && <p className="mt-4 text-center">{status}</p>}
            </motion.div>
        </div>
    );
};

export default ContactModal;