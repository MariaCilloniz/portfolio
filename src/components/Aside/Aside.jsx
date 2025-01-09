import React, { useState, useEffect } from 'react';
import heroImage from '/images/output.png';
import {
    Linkedin,
    Github,
    FileUser,
} from 'lucide-react';
import './Aside.scss';

function Aside({ isOpen, toggleSidebar }) {
    const [activeSection, setActiveSection] = useState('home');
    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'skills', label: 'Skills' },
        { id: 'work', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' }
    ];

    const handleCVDownload = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = '/assets/cv/Maria_Cilloniz_CV.pdf';
        link.download = 'Maria_Cilloniz_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const socialLinks = [
        {
            icon: <Github size={20} />,
            url: 'https://github.com/MariaCilloniz',
            label: 'GitHub',
            isExternal: true
        },
        {
            icon: <Linkedin size={20} />,
            url: 'https://www.linkedin.com/in/mariajosecilloniz',
            label: 'LinkedIn',
            isExternal: true
        },
        {
            icon: <FileUser size={20} />,
            url: '/assets/cv/Maria_Jose_Cilloniz_CV.pdf',
            label: 'CV',
            isDownload: true
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200; 

            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        if (window.innerWidth < 768) {
            toggleSidebar();
        }
    };

    return (
        <aside className={`aside ${isOpen ? 'aside--open' : ''}`}>
            <div className="aside__content">
                <div className="aside__profile">
                    <div
                        className="aside__profile-img"
                        style={{ backgroundImage: `url(${heroImage})` }}
                        onClick={() => handleNavClick('home')}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleNavClick('home');
                            }
                        }}
                    />
                    <h1 className="aside__profile-name">
                        <a href="#home" onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('home');
                        }}>Maria Cilloniz</a>
                    </h1>
                    <span className="aside__profile-position">
                        <a href="#about" onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('about');
                        }}>Software Engineer</a> in Vancouver
                    </span>
                </div>

                <nav className="aside__nav">
                    <ul className="aside__nav-list">
                        {menuItems.map((item) => (
                            <li key={item.id} className="aside__nav-item">
                                <button
                                    onClick={() => handleNavClick(item.id)}
                                    className={`aside__nav-link ${activeSection === item.id ? 'active' : ''}`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="aside__footer">
                    <p className="aside__footer-copyright">
                        <small>
                            Let's connect!
                        </small>
                    </p>

                    <ul className="aside__social">
                        {socialLinks.map((social, index) => (
                            <li key={index} className="aside__social-item">
                                <a
                                    href={social.url}
                                    className="aside__social-link"
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={social.isDownload ? handleCVDownload : undefined}
                                >
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Aside;