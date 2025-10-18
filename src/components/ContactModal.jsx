import React, { useState } from 'react';
import MainBtn from '../ui/MainBtn';

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
            <div className="bg-[#000000] p-8 rounded-lg border border-[#474747] shadow-lg max-w-md w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="mb-6">{text}</p>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <select
                            name="plan"
                            value={formData.plan}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        >
                            <option value="">Choose a Plan</option>
                            <option value="basic">Basic</option>
                            <option value="premium">Premium</option>
                            <option value="enterprise">Enterprise</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <textarea
                            name="message"
                            placeholder="How can we help?"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded h-32"
                            required
                        />
                    </div>
                    <MainBtn text="Let's Talk" handler={handleSubmit} theme="blue" classNames={'!w-full'} />
                </form>
                {status && <p className="mt-4 text-center">{status}</p>}
            </div>
        </div>
    );
};

export default ContactModal;