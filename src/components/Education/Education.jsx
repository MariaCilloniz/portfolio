import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import classNames from 'classnames';
import './Education.scss';

function Education() {
    const [activePanel, setActivePanel] = useState('panel1');

    const educationItems = [
        {
            id: 'panel1',
            title: 'Master Degree Graphic Design',
            content: {
                col1: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
                col2: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
            }
        },
        {
            id: 'panel2',
            title: 'Bachelor Degree of Computer Science',
            content: {
                text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
                list: [
                    'Separated they live in Bookmarksgrove right',
                    'Separated they live in Bookmarksgrove right'
                ]
            }
        },
        {
            id: 'panel3',
            title: 'Diploma in Information Technology',
            content: {
                text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
            }
        }
    ];

    const togglePanel = (panelId) => {
        setActivePanel(activePanel === panelId ? null : panelId);
    };

    return (
        <section id="education" className="education" data-section="education">
            <div className="education__content">
                <div className="section-header">
                    <span className="section-header__meta">Whre did I learn?</span>
                    <h2 className="section-header__title">Education</h2>
                </div>

                <div className="education__accordion">
                    {educationItems.map((item) => (
                        <div
                            key={item.id}
                            className={classNames('education__panel', {
                                'education__panel--active': activePanel === item.id
                            })}
                        >
                            <button
                                className="education__panel-header"
                                onClick={() => togglePanel(item.id)}
                                aria-expanded={activePanel === item.id}
                            >
                                <h4 className="education__panel-title">{item.title}</h4>
                                <motion.div
                                    className="education__panel-icon"
                                    animate={{ rotate: activePanel === item.id ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activePanel === item.id && (
                                    <motion.div
                                        className="education__panel-content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="education__panel-body">
                                            {item.content.col1 && item.content.col2 ? (
                                                <div className="education__panel-columns">
                                                    <div className="education__panel-column">
                                                        <p>{item.content.col1}</p>
                                                    </div>
                                                    <div className="education__panel-column">
                                                        <p>{item.content.col2}</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <p>{item.content.text}</p>
                                                    {item.content.list && (
                                                        <ul className="education__panel-list">
                                                            {item.content.list.map((listItem, index) => (
                                                                <li key={index}>{listItem}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

