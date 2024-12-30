import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin} from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

function Contact() {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [formState, setFormState] = useState({
        from_name: '',
        email: '',
        subject: '',
        message: ''
    });

    const validateForm = () => {
        const newErrors = {};
        
        if (!formState.from_name.trim()) {
            newErrors.from_name = 'Please enter your name';
        }

        if (!formState.email.trim()) {
            newErrors.email = 'Please enter your email';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formState.subject.trim()) {
            newErrors.subject = 'Please enter a subject';
        }

        if (!formState.message.trim()) {
            newErrors.message = 'Please enter a message';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setLoading(true);

        const templateParams = {
            from_name: formState.from_name,
            email: formState.email,
            subject: formState.subject,
            message: formState.message,
            reply_to: formState.email 
        };

        try {
            await emailjs.send(
                'service_89pmlb8', 
                'template_aekdyjq', 
                templateParams,
                'C6WVnCIEbfAHvufTP' 
            );

            setFormState({
                from_name: '',
                email: '',
                subject: '',
                message: ''
            });
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: <Mail />,
            value: 'majocilloniz@gmail.com',
            link: 'mailto:majocilloniz@gmail.com'
        },
        {
            icon: <Github />,
            value: 'MariaCilloniz',
            link: 'https://github.com/MariaCilloniz'
        },
        {
            icon: <Linkedin />,
            value: 'Maria Jose Cilloniz',
            link: 'https://www.linkedin.com/in/mariajosecilloniz'
        }
    ];

    return (
        <section id="contact" className="contact">
            <div className="contact__content">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-header__meta">Get in Touch</span>
                    <h2 className="section-header__title">Contact</h2>
                </motion.div>

                <div className="contact__grid">
                    <div className="contact__info">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="contact__info-item">
                                <div className="contact__info-icon">{item.icon}</div>
                                <div className="contact__info-content">
                                    <a 
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.value}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="contact__form-container">
                        <form onSubmit={handleSubmit} className="contact__form">
                            <div className="form__group">
                                <input
                                    type="text"
                                    name="from_name"
                                    value={formState.from_name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className={errors.from_name ? 'error' : ''}
                                />
                                {errors.from_name && (
                                    <span className="error-message">{errors.from_name}</span>
                                )}
                            </div>
                            <div className="form__group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className={errors.email ? 'error' : ''}
                                />
                                {errors.email && (
                                    <span className="error-message">{errors.email}</span>
                                )}
                            </div>
                            <div className="form__group">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className={errors.subject ? 'error' : ''}
                                />
                                {errors.subject && (
                                    <span className="error-message">{errors.subject}</span>
                                )}
                            </div>
                            <div className="form__group">
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows="7"
                                    className={errors.message ? 'error' : ''}
                                />
                                {errors.message && (
                                    <span className="error-message">{errors.message}</span>
                                )}
                            </div>
                            <button 
                                type="submit" 
                                className="button button--primary"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;