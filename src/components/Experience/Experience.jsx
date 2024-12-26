import React from 'react';
import { motion } from 'framer-motion';
import { Pencil } from 'lucide-react';
import './Experience.scss';

function Experience() {
    const experiences = [
        {
            title: "Full Stack Developer",
            company: "Company Name",
            period: "2017-2018",
            description: "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
            color: "color-1",
            animateFrom: "left"
        },
        {
            title: "Front End Developer at Google",
            company: "Google",
            period: "2017-2018",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            color: "color-2",
            animateFrom: "right"
        },
        {
            title: "System Analyst",
            company: "Company Name",
            period: "2017-2018",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            color: "color-3",
            animateFrom: "left"
        },
        {
            title: "Creative Designer",
            company: "Company Name",
            period: "2017-2018",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            color: "color-4",
            animateFrom: "right"
        }
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
                        <Pencil size={20} />
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