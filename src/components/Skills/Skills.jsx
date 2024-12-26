import React from 'react';
import './Skills.scss';

function Skills() {
    const skills = [
        { name: 'React/Express', percentage: 85, class: 'react' },
        { name: 'Javascript', percentage: 85, class: 'js' },
        { name: 'HTML5', percentage: 90, class: 'html' },
        { name: 'Node', percentage: 85, class: 'node' },
        { name: 'CSS/SCSS', percentage: 90, class: 'css' },
        { name: 'MySQL', percentage: 80, class: 'mysql' }
    ];

    return (
        <section id="skills" className="skills" data-section="skills">
            <div className="skills__content">
                <div className="section-header">
                <span className="section-header__meta">What can I do?</span>
                    <h2 className="section-header__title">My Skills</h2>
                </div>
                <div className="skills__grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill">
                            <div className="skill__header">
                                <h3 className="skill__name">{skill.name}</h3>
                                <div className="skill__percentage" style={{ color: skill.color }}>
                                    {skill.percentage}%
                                </div>
                            </div>
                            <div className="skill__progress">
                                <div
                                    className={`skill__fill skill__fill--${skill.class}`}
                                    style={{ width: `${skill.percentage}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        );
    }
    
    export default Skills;