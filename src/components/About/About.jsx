import React from 'react'
import { motion } from 'framer-motion';
import { Lightbulb, Globe, Database, Smartphone } from 'lucide-react';
import './About.scss'

function About() {
    const services = [
        {
            icon: <Lightbulb size={36} />,
            title: "Web Development",
            color: "#4A90E2", 
            bgColor: "rgba(74, 144, 226, 0.1)"
        },
        {
            icon: <Globe size={36} />,
            title: "Graphic Design",
            color: "#E667B0", 
            bgColor: "rgba(230, 103, 176, 0.1)"
        },
        {
            icon: <Database size={36} />,
            title: "Software",
            color: "#50E3C2", 
            bgColor: "rgba(80, 227, 194, 0.1)"
        },
    ];

    return (
        <section id="about" className="about" data-section="about">
            <div className="about__content">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="section-header__meta">About me</span>
                    <h2 className="section-header__title">Who Am I?</h2>
                </motion.div>
                <div className="about__text">
                    <p><strong>I'm Maria</strong> a philosopher turned developer... While these might seem like two totally different career paths, they share a fundamental thing: problem-solving. Philosophy taught me to analyze complex problems critically while coding gave me the actual tools to build concrete solutions. </p>
                </div>
                <div className="about__services">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-box"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                borderColor: service.color
                            }}
                        >
                            <div 
                                className="service-box__icon"
                                style={{ 
                                    color: service.color,
                                    background: service.bgColor
                                }}
                            >
                                {service.icon}
                            </div>
                            <h3 className="service-box__title">{service.title}</h3>
                            <div 
                                className="service-box__line" 
                                style={{ backgroundColor: service.color }}
                            ></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About