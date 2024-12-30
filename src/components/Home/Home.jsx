import React from 'react'
import { motion } from 'framer-motion';
import './Home.scss';;
import heroImage from '/images/output.png'; 

function Hero() {
    const handleNavClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };
    return (
        <section id="home" className="hero" data-section="home">
            <div className="hero__slider">
                <div 
                    className="hero__slide"
                    style={{ backgroundImage: `url(${heroImage})` }} 
                >
                    <motion.div
                        className="hero__content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Hi! I'm Maria</h1>
                        <h2>Full Stack Developer</h2>
                        <motion.button
                            className="button button--primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleNavClick('about')}
                        >
                            Get to know me
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default Hero
