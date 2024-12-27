import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Share2, Heart } from 'lucide-react';
import './Work.scss';

function Work() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'apps', label: 'Apps' },
        { id: 'web', label: 'Web Design' },
        { id: 'graphic', label: 'Graphic Design' },
        { id: 'software', label: 'Software' },
    ];

    const projects = [
        {
            id: 1,
            title: 'ReddiAudiTool',
            category: 'apps',
            image: '/images/img-1.jpg',
            type: 'App',
            stats: { views: 100, likes: 4 },
        },
        {
            id: 2,
            title: 'Work 02',
            category: 'graphic',
            image: '/images/img-2.jpg',
            type: 'Animation',
            stats: { views: 100, likes: 49 },
        },
        {
            id: 3,
            title: 'Work 03',
            category: 'software',
            image: '/images/img-3.jpg',
            type: 'Illustration',
            stats: { views: 100, likes: 49 },
        },
        {
            id: 4,
            title: 'Work 04',
            category: 'apps',
            image: '/images/img-4.jpg',
            type: 'Application',
            stats: { views: 100, likes: 49 },
        },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="work" className="work" data-section="work">
            <div className="work__content">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-header__meta">My Work</span>
                    <h2 className="section-header__title">Recent Work</h2>
                </motion.div>

                <div className="work__filters">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            className={`work__filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="work__grid">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="work__item"
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div
                                    className="work__item-image"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                >
                                    <div className="work__item-overlay">
                                        <div className="work__item-content">
                                            <h3><a href="#">{project.title}</a></h3>
                                            <span>{project.type}</span>
                                            <div className="work__item-stats">
                                                <button>
                                                    <Share2 size={16} />
                                                </button>
                                                <button>
                                                    <Eye size={16} />
                                                    <span>{project.stats.views}</span>
                                                </button>
                                                <button>
                                                    <Heart size={16} />
                                                    <span>{project.stats.likes}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="work__load-more">
                    <button className="button button--primary">
                        Load more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Work;