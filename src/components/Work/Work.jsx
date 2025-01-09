import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Share2, Heart } from 'lucide-react';
import './Work.scss';

function Work() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [visibleCount, setVisibleCount] = useState(3);

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
            stats: { views: 50, likes: 4 },
            url: 'https://github.com/MariaCilloniz/Capstone-frontend'
        },
        {
            id: 2,
            title: 'Meta Safe',
            category: 'apps',
            image: '/images/img-2.jpg',
            type: 'App',
            stats: { views: 15, likes: 3 },
            url: 'https://github.com/MariaCilloniz/Meta-Safe'
        },
        {
            id: 3,
            title: 'InStock',
            category: 'web',
            image: '/images/Instock.jpg',
            type: 'Web Design/App',
            stats: { views: 15, likes: 3 },
            url: 'https://github.com/MariaCilloniz/Instock'
        },
        {
            id: 4,
            title: 'Brainflix',
            category: 'web',
            image: '/images/brainflix.jpg',
            type: 'Web Design/App',
            stats: { views: 15, likes: 3 },
            url: 'https://brainflix-application.netlify.app/'
        },
        {
            id: 5,
            title: 'Daily Dashboard',
            category: 'web',
            image: '/images/img-3.jpg',
            type: 'Web Design/App',
            stats: { views: 10, likes: 1 },
            url: 'https://github.com/MariaCilloniz/daily-dash'
        },
        {
            id: 6,
            title: 'Cocktail Party',
            category: 'apps',
            image: '/images/img-4.jpg',
            type: 'Web Design/App',
            stats: { views: 17, likes: 1 },
            url: 'https://github.com/MariaCilloniz/CocktailParty-first-hackathon'
        },
        {
            id: 7,
            title: 'Bandsite',
            category: 'web',
            image: '/images/bandsite.jpg',
            type: 'Web Design',
            stats: { views: 3, likes: 1 },
            url: 'https://github.com/MariaCilloniz/maria-cilloniz-bandsite'
        },
        {
            id: 8,
            title: 'Birthday Card',
            category: 'graphic',
            image: '/images/siena.jpg',
            type: 'Graphic Design',
            stats: { views: 1, likes: 1 },
            url: '/images/siena.jpg'
        },
        {
            id: 9,
            title: 'Birthday Party Invitation',
            category: 'graphic',
            image: '/images/mexicanparty.jpg',
            type: 'Graphic Design',
            stats: { views: 1, likes: 1 },
            url: '/images/mexicanparty.jpg'
        },
        {
            id: 10,
            title: 'Birthday PS Invitation',
            category: 'graphic',
            image: '/images/pandero.jpg',
            type: 'Graphic Design',
            stats: { views: 2, likes: 0 },
            url: '/images/pandero.jpg' 
        },
        {
            id: 11,
            title: 'Dinner Invitation',
            category: 'graphic',
            image: '/images/lonche.jpg',
            type: 'Graphic Design',
            stats: { views: 7, likes: 1 },
            url: '/images/lonche.jpg'
        },
        {
            id: 12,
            title: 'Baptism Invitation',
            category: 'graphic',
            image: '/images/baptism.jpg',
            type: 'Graphic Design',
            stats: { views: 1, likes: 1 },
            url: '/images/baptism.jpg'
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMore = visibleCount < filteredProjects.length;

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };
    const handleFilterChange = (filterId) => {
        setActiveFilter(filterId);
        setVisibleCount(3);
    };

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
                            onClick={() => handleFilterChange(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="work__grid">
                    <AnimatePresence>
                        {visibleProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="work__item"
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="work__item-link"
                                >
                                    <div
                                        className="work__item-image"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    >
                                        <div className="work__item-overlay">
                                            <div className="work__item-content">
                                                <h3>{project.title}</h3>
                                                <span>{project.type}</span>
                                                <div className="work__item-stats">
                                                    <button onClick={(e) => e.preventDefault()}>
                                                        <Share2 size={16} />
                                                    </button>
                                                    <button onClick={(e) => e.preventDefault()}>
                                                        <Eye size={16} />
                                                        <span>{project.stats.views}</span>
                                                    </button>
                                                    <button onClick={(e) => e.preventDefault()}>
                                                        <Heart size={16} />
                                                        <span>{project.stats.likes}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {hasMore && (
                    <div className="work__load-more">
                        <motion.button
                            className="button button--primary"
                            onClick={handleLoadMore}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Load more
                        </motion.button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Work;