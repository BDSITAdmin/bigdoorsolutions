import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const ContactForm = () => {
    const [result, setResult] = useState("");
    const [errors, setErrors] = useState({});

    // Validation function
    const validateForm = (formData) => {
        const errors = {};
        const fullName = formData.get("fullName");
        const email = formData.get("email");
        const message = formData.get("message");

        // Full Name Validation
        if (!fullName) {
            errors.fullName = "Full name is required";
        } else if (!/^[A-Za-z ]+$/.test(fullName)) {
            errors.fullName = "Full name must contain only alphabets and spaces";
        } else if (fullName.length < 3) {
            errors.fullName = "Full name must have at least 3 characters";
        }

        // Email Validation
        if (!email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
        }

        // Message Validation
        if (!message) {
            errors.message = "Message is required";
        }

        return errors;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        setResult("Sending...");

        formData.append("access_key", "c94adcca-b3d2-4abc-b145-240ddcf1b7bd");

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setResult("Please fix the errors.");
            return;
        }

        setErrors({}); // Clear any previous errors

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            openSuccessMessage(); // Open success message in new tab
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    // Function to open the success message in a new tab
    const openSuccessMessage = () => {
        const successWindow = window.open("", "_blank");
        successWindow.document.write(`
            <html>
                <head>
                    <title>Success</title>
                    <script src="https://cdn.tailwindcss.com"></script>
                </head>
                <body class="flex items-center justify-center h-screen bg-green-50">
                    <div class="p-8 bg-white rounded-lg shadow-md text-center border-2 border-green-500">
                        <h2 class="text-2xl font-semibold text-green-600">🎉 Success!</h2>
                        <p class="text-lg text-gray-700 mt-2">
                            Your form has been submitted successfully.
                        </p>
                        <p class="text-sm text-gray-500 mt-1">
                            Thank you for reaching out to us! We will get back to you soon.
                        </p>
                        <button
                            class="mt-6 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                            onclick="window.close();"
                        >
                            Close Tab
                        </button>
                    </div>
                </body>
            </html>
        `);
    };

    return (
        <form onSubmit={onSubmit} className="max-w-md p-4 mx-auto">
            <div className="mb-4">
                <div className="flex items-center p-2 border rounded-md ">
                    <FaUser className="mr-2 " />
                    <input
                        type="text"
                        name="fullName"
                        className="w-full bg-transparent outline-none"
                        placeholder="Full Name"
                    />
                </div>
                {errors.fullName && (
                    <p className="text-sm text-red-500">{errors.fullName}</p>
                )}
            </div>

            <div className="mb-4">
                <div className="flex items-center p-2 border rounded-md">
                    <FaEnvelope className="mr-2 " />
                    <input
                        type="email"
                        name="email"
                        className="w-full bg-transparent outline-none"
                        placeholder="Email Address"
                    />
                </div>
                {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                )}
            </div>

            <div className="mb-4">
                <div className="flex items-start p-2 border rounded-md ">
                    <FaCommentDots className="mt-2 mr-2" />
                    <textarea
                        name="message"
                        className="w-full bg-transparent outline-none"
                        placeholder="Message"
                        rows="4"
                    ></textarea>
                </div>
                {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full py-3 font-medium text-white transition bg-blue-500 rounded-md hover:bg-blue-700"
            >
                Send Message <span className="ml-2">→</span>
            </button>

            <p className="mt-4 text-xs text-gray-500">
                *Any details shared through this form shall remain private to Bigdoor Solutions and will not be disclosed to any third party or external company.
            </p>

            <span className="block mt-4 text-gray-600">{result}</span>
        </form>
    );
};

export default ContactForm;
