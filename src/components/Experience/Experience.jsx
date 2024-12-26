import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';;
import './Experience.scss';

function Experience() {
    const experiences = [
        {
            title: "Team Trainer - Customer Service",
            company: "Whole Foods Market",
            period: "JUL 2019 - OCT 2024",
            description: "Lead the design and implementation of training programs using internal LMS, to ensure the integration of new team members, enhancing onboarding workflows, and improving operational efficiency. Manage and maintain a database of training records, utilizing Cornerstone to automate tracking and reporting. Provide both technical and soft skills coaching to team members.",
            color: "color-1",
            animateFrom: "left"
        },
        {
            title: "Administrative Assistant",
            company: "La Burreria",
            period: "JAN 2018 - JUNE 2019",
            description: "Incorporate the use of Zenda HR software to streamline employee scheduling, resulting in improved team productivity. Optimize inventory control and supplier orders by developing an automated stock monitoring system in Excel. Manage financial operations and boost customer engagement through social media strategies.",
            color: "color-2",
            animateFrom: "right"
        },
        {
            title: "Sales Assistant",
            company: "Gina y Michell Alimentos",
            period: "JAN 2017 - JAN 2018",
            description: "Optimized customer experience by promptly responding to inquiries, efficiently handling transactions, restocking and organizing product displays, and ensuring smooth store operations.",
            color: "color-3",
            animateFrom: "left"
        },
    ];

    const TimelineEntry = ({ experience, index }) => {
        const { title, company, period, description, color, animateFrom } = experience;

        return (
            <motion.article
                className="timeline__entry"
                initial={{ opacity: 0, x: animateFrom === 'left' ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <div className="timeline__entry-inner">
                    <div className={`timeline__icon ${color}`}>
                        <Briefcase size={20} />
                    </div>

                    <div className="timeline__label">
                        <h2>
                            {title} <span>{period}</span>
                        </h2>
                        <p>{description}</p>
                    </div>
                </div>
            </motion.article>
        );
    };

    return (
        <section id="experience" className="experience" data-section="experience">
            <div className="experience__content">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-header__meta">Experience</span>
                    <h2 className="section-header__title">Work Experience</h2>
                </motion.div>

                <div className="timeline">
                    {experiences.map((experience, index) => (
                        <TimelineEntry
                            key={index}
                            experience={experience}
                            index={index}
                        />
                    ))}

                    <motion.article
                        className="timeline__entry timeline__entry--start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: experiences.length * 0.2 }}
                    >
                        <div className="timeline__entry-inner">
                            <div className="timeline__icon timeline__icon--start" />
                        </div>
                    </motion.article>
                </div>
            </div>
        </section>
    );
};

export default Experience;