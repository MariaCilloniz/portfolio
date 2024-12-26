import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Contact.scss';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace this with actual functionality if needed.
        alert('Message sent!');
    };

    const contactInfo = [
        {
            icon: <Mail />,
            value: 'info@domain.com',
            link: 'mailto:info@domain.com'
        },
        {
            icon: <MapPin />,
            value: '198 West 21th Street, Suite 721 New York NY 10016'
        },
        {
            icon: <Phone />,
            value: '+123 456 7890',
            link: 'tel:+1234567890'
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
                    {/* Contact Information */}
                    <div className="contact__info">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="contact__info-item">
                                <div className="contact__info-icon">{item.icon}</div>
                                <div className="contact__info-content">
                                    {item.link ? (
                                        <a href={item.link}>{item.value}</a>
                                    ) : (
                                        <p>{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="contact__form-container">
                        <form onSubmit={handleSubmit} className="contact__form">
                            <div className="form__group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                />
                            </div>
                            <div className="form__group">
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows="7"
                                    required
                                />
                            </div>
                            <button type="submit" className="button button--primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;