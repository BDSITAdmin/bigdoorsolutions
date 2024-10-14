import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const ContactForm = () => {
    // State to store form input values
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    // State to manage form submission and validation errors
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate form fields
    const validate = () => {
        let tempErrors = {};
        if (!formData.fullName) tempErrors.fullName = "Full Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
        if (!formData.message) tempErrors.message = "Message is required";
        return tempErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        // If there are no validation errors, process the form data
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form Submitted Successfully", formData);
            setIsSubmitted(true);

            // Reset form
            setFormData({ fullName: '', email: '', message: '' });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className=''>
                <div className="mb-4">
                    <div className="flex items-center p-2 border rounded-md bg-SeaGreen">
                        <FaUser className="mr-2 text-Azure" />
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full bg-transparent outline-none border-SeaGreen"
                            placeholder="Full Name"
                        />
                    </div>
                    {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
                </div>

                <div className="mb-4">
                    <div className="flex items-center p-2 border rounded-md bg-SeaGreen">
                        <FaEnvelope className="mr-2 text-Azure" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-transparent outline-none border-SeaGreen"
                            placeholder="Email Address"
                        />
                    </div>
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="mb-4">
                    <div className="flex items-start p-2 border rounded-md bg-SeaGreen">
                        <FaCommentDots className="mt-2 mr-2 text-Azure" />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-transparent outline-none"
                            placeholder="Message"
                            rows="4"
                        ></textarea>
                    </div>
                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full py-3 font-medium text-white transition duration-300 rounded-md bg-BleuDe hover:bg-blue-700"
                >
                    Send Message <span className="ml-2">→</span>
                </button>

                {isSubmitted && <p className="mt-4 text-sm text-green-500">Message sent successfully!</p>}

                <p className="text-gray-500 text-[12px] font-normal mt-4">
                    *Any details shared through this form shall remain private to Bigdoor Solutions and will not be disclosed to any third party or external company.
                </p>
            </form>
        </>
    );
};

export default ContactForm;
