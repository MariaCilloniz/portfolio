import React, {useState, useEffect} from 'react';
import heroImage from '/images/output.png';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';
import './Aside.scss';

function Aside({ isOpen, toggleSidebar }) {
    const [activeSection, setActiveSection] = useState('home');
    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'skills', label: 'Skills' },
        { id: 'work', label: 'Work' },
        { id: 'education', label: 'Education' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' }
    ];

const socialLinks = [
        { icon: <Linkedin size={20} />, url: '#', label: 'LinkedIn' }
    ];
    
    useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200; // Offset for better detection

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
        handleScroll(); // Initial check

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
                {/* Profile Section */}
                <div className="aside__profile">
                    <div 
                        className="aside__profile-img" 
                        style={{ backgroundImage: `url(${heroImage})` }} 
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
    
                {/* Navigation */}
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
    
                {/* Footer remains the same */}
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