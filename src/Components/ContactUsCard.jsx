import React, { useState } from 'react';
import BackgroundImage from "../assets/CardBox.png";

export const ContactUsCard = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set isSubmitting to true

        try {
            const response = await fetch('https://thehonestco.in/texol/mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Form submission successful
                alert('Form submitted successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form data
            } else {
                // Form submission failed
                const errorData = await response.json();
                setSubmitError(errorData.message);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError('An error occurred while submitting the form. Please try again later.');
        }

        setIsSubmitting(false); // Set isSubmitting back to false
    };

    return (
        <div className="p-5 md:p-10 md:w-4/5 md:mx-36 flex flex-col md:flex-row justify-between items-center mx-4 my-8 rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BackgroundImage})`, height: 'auto', minHeight: '25rem' }}>
            <div className="text-white w-full md:w-1/2 md:pl-10 mt-10 md:mt-0">
                <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold">
                    Avocado ipsum dolor meat.
                </h2>
                <p className="mt-2 text-base md:text-lg md:mb-14">
                    Pizza ipsum dolor meat lovers buffalo. Cheese anchovies large
                    large tomato fresh. Bianca personal roll pizza meat meatball.
                </p>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-2/5 space-y-4 mt-6 md:mt-0">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-transparent border-b-2 border-white text-white px-2 md:px-4 py-2 focus:outline-none"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent border-b-2 border-white text-white px-2 md:px-4 py-2 focus:outline-none"
                />
                <input
                    type="text"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-transparent border-b-2 border-white text-white px-2 md:px-4 py-2 focus:outline-none"
                />
                {submitError && <div className="text-red-600">{submitError}</div>}
                <button
                    type="submit"
                    disabled={isSubmitting} // Disable the button when isSubmitting is true
                    className="border-2 border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-green-600 transition duration-300"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};
