import React from 'react'
import { motion } from 'framer-motion';
import { Coffee, Layout, Users, Briefcase } from 'lucide-react';
import { useInView } from 'framer-motion';
import './Counter.scss';

function Counter() {
    const counters = [
        { icon: <Coffee size={32} />, value: 309, label: "Cups of coffee", color: "primary" },
        { icon: <Layout size={32} />, value: 356, label: "Projects", color: "secondary" },
        { icon: <Users size={32} />, value: 30, label: "Clients", color: "tertiary" },
        { icon: <Briefcase size={32} />, value: 10, label: "Partners", color: "quaternary" }
    ];

    const CounterItem = ({ icon, value, label, delay }) => {
        const ref = React.useRef(null);
        const isInView = useInView(ref, { once: true });
        const [count, setCount] = React.useState(0);

        React.useEffect(() => {
            if (isInView) {
                const duration = 2000; 
                const steps = 50;
                const increment = value / steps;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= value) {
                        setCount(value);
                        clearInterval(timer);
                    } else {
                        setCount(Math.floor(current));
                    }
                }, duration / steps);

                return () => clearInterval(timer);
            }
        }, [isInView, value]);

        return (
            <motion.div
                ref={ref}
                className="counter__item"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay }}
            >
                <div className="counter__icon">
                    {icon}
                </div>
                <div className="counter__value">{count}</div>
                <div className="counter__label">{label}</div>
            </motion.div>
        );
    };

    return (
        <section className="counter" style={{
            backgroundImage: "url('/images/cover_bg_1.jpg')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className="counter__overlay"></div>
            <div className="counter__content">
                <div className="counter__grid">
                    {counters.map((counter, index) => (
                        <CounterItem
                            key={index}
                            {...counter}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Counter;