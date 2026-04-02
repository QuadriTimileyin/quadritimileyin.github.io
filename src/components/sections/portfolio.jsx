import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowRightUpLine } from '@remixicon/react'
import { projectsData } from '../../utlits/fackData/projectData'
import SlideUp from '../../utlits/animations/slideUp';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

// Fixed category order: Mobile first
const categoryOrder = [
    "All",
    "Mobile Applications",
    "Web Applications",
    "Web Dashboards",
    "CI/CD & Deployment Automation",
];

const Portfolio = ({ className }) => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');

    const handleCategoryClick = (item) => {
        setCategory(item)
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
    }

    // Only show categories that exist in data
    const existingCategories = new Set(projectsData.map(p => p.category));
    const filteredCategory = categoryOrder.filter(
        c => c === "All" || existingCategories.has(c)
    );

    const filteredProjects = category === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === category);

    return (
        <section id="portfolio" className={`projects-area ${className || ''}`}>
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <h2>Works &amp; Projects</h2>
                                    <p>
                                        30+ production-grade applications across fintech, mobility,
                                        logistics, and SaaS.
                                    </p>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <SlideUp>
                        <ul className="project-filter filter-btns-one justify-content-left pb-15">
                            {filteredCategory.map((item, id) => (
                                <li
                                    key={id}
                                    onClick={() => handleCategoryClick(item)}
                                    className={item === category ? "current" : ""}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SlideUp>
                    <div className="row project-masonry-active overflow-hidden">
                        {filteredProjects.map(({ category, id, src, title, technologies }) => (
                            <Card
                                key={id}
                                id={id}
                                category={category}
                                src={src}
                                title={title}
                                technologies={technologies}
                                animationClass={animationClass}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio

const Card = ({ category, title, src, technologies, animationClass, id }) => {
    return (
        <div className={`col-lg-4 col-md-6 item ${animationClass}`}>
            <SlideUp delay={id}>
                <div className="project-item style-two">
                    <div className="project-image">
                        <img src={src} alt={title} />
                        <Link to={`/single-project/${id}`} className="details-btn">
                            <RiArrowRightUpLine />
                        </Link>
                    </div>
                    <div className="project-content">
                        <span className="sub-title">{category}</span>
                        <h3>{title}</h3>
                        <div className="card-tech-list">
                            {technologies.slice(0, 3).map((t, i) => (
                                <span key={i} className="tech-badge tech-badge--sm">{t}</span>
                            ))}
                            {technologies.length > 3 && (
                                <span className="tech-badge tech-badge--sm tech-badge--more">
                                    +{technologies.length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}
