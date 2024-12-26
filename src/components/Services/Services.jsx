import React from 'react';
import { Brain, Users, Code, Database, LineChart, Shield } from 'lucide-react';
import './Services.scss';

function Services() {
  const services = [
    {
      icon: <Brain />,
      title: 'ANALYTICAL THINKING',
      description: 'Philosophy background bringing strong logical reasoning and complex problem-solving skills to software development',
      iconClass: 'service-card__icon--1'
    },
    {
      icon: <Code />,
      title: 'SOFTWARE ENGINEERING',
      description: 'Full stack development with focus on creating innovative solutions and improving online communities',
      iconClass: 'service-card__icon--2'
    },
    {
      icon: <Users />,
      title: 'TRAINING & DEVELOPMENT',
      description: 'Experience in designing and implementing training programs, enhancing team effectiveness through tech-based solutions',
      iconClass: 'service-card__icon--3'
    },
    {
      icon: <Database />,
      title: 'SYSTEM OPTIMIZATION',
      description: 'Proven track record in streamlining operations and implementing automated solutions for improved efficiency',
      iconClass: 'service-card__icon--4'
    },
    {
      icon: <LineChart />,
      title: 'DATA-DRIVEN SOLUTIONS',
      description: 'Expertise in utilizing data insights to optimize performance and drive operational improvements',
      iconClass: 'service-card__icon--5'
    },
    {
      icon: <Shield />,
      title: 'ETHICAL AI DEVELOPMENT',
      description: 'Interest in applying philosophical insights to develop innovative and responsible AI technologies',
      iconClass: 'service-card__icon--6'
    }
  ];

  return (
    <section id="services" className="services" data-section="services">
      <div className="services__content">
        <div className="section-header">
          <span className="section-header__meta">What have I done?</span>
          <h2 className="section-header__title">HERE IS SOME OF MY EXPERTISE</h2>
        </div>
        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className={`service-card__icon ${service.iconClass}`}>
                {service.icon}
              </span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;