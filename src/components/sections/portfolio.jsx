import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowRightUpLine, RiEyeLine } from '@remixicon/react'
import { projectsData } from '../../utlits/fackData/projectData'
import SlideUp from '../../utlits/animations/slideUp';

const categoryOrder = [
    "All",
    "Mobile Applications",
    "Web Applications",
    "Web Dashboards",
    "CI/CD & Deployment Automation",
];

const Portfolio = ({ className }) => {
    const [category, setCategory] = useState('All');
    const [hoveredId, setHoveredId] = useState(null);

    const existingCategories = new Set(projectsData.map(p => p.category));
    const filteredCategory = categoryOrder.filter(
        c => c === "All" || existingCategories.has(c)
    );

    const filteredProjects = category === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === category);

    return (
        <section className={`py-20 md:py-32 relative overflow-hidden ${className || ''}`}>
            {/* Background decorations */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="container-main relative z-10">
                <SlideUp>
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                            Portfolio
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
                            Featured Projects
                        </h2>
                        <div className="flex items-center justify-center gap-3 mt-4">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
                            <p className="text-text-secondary text-lg">
                                <span className="text-accent font-bold tabular-nums">{filteredProjects.length}</span> production applications
                            </p>
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
                        </div>
                    </div>
                </SlideUp>
                
                <SlideUp>
                    <div className="flex flex-wrap gap-3 mb-12 justify-center">
                        {filteredCategory.map((item, id) => (
                            <button
                                key={id}
                                onClick={() => setCategory(item)}
                                className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                                    item === category
                                        ? 'bg-accent text-white shadow-lg shadow-accent/30 scale-105'
                                        : 'bg-elevated/80 text-text-secondary border border-border/50 hover:text-text-primary hover:border-accent/30 hover:bg-elevated'
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </SlideUp>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map(({ category, id, src, title, technologies }) => (
                        <Card 
                            key={id} 
                            id={id} 
                            category={category} 
                            src={src} 
                            title={title} 
                            technologies={technologies}
                            isHovered={hoveredId === id}
                            onHover={() => setHoveredId(id)}
                            onLeave={() => setHoveredId(null)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio

const Card = ({ category, title, src, technologies, id, isHovered, onHover, onLeave }) => {
    return (
        <SlideUp delay={id * 0.05}>
            <div 
                className="group h-full bg-surface/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
            >
                <div className="relative aspect-[4/3] overflow-hidden bg-elevated">
                    <img 
                        src={src} 
                        alt={title} 
                        className={`w-full h-full object-cover transition-all duration-700 ${
                            isHovered ? 'scale-110 brightness-75' : 'scale-100'
                        }`} 
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent transition-opacity duration-300 ${
                        isHovered ? 'opacity-90' : 'opacity-0'
                    }`} />
                    
                    {/* View project button */}
                    <Link
                        to={`/single-project/${id}`}
                        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-300 ${
                            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                    >
                        <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-white shadow-xl shadow-accent/30 group-hover:scale-110 transition-transform">
                            <RiEyeLine size={24} />
                        </div>
                        <span className="text-white font-semibold text-sm">View Project</span>
                    </Link>
                </div>
                
                <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] uppercase tracking-wider text-accent font-semibold px-2 py-1 bg-accent/10 rounded">
                            {category}
                        </span>
                        <RiArrowRightUpLine 
                            size={18} 
                            className={`text-text-muted transition-all duration-300 ${
                                isHovered ? 'text-accent translate-x-1 -translate-y-1' : ''
                            }`} 
                        />
                    </div>
                    
                    <h3 className="text-base font-bold text-text-primary mt-2 line-clamp-2 group-hover:text-accent transition-colors">
                        {title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-1.5 mt-3">
                        {technologies.slice(0, 4).map((t, i) => (
                            <span 
                                key={i} 
                                className="px-2.5 py-1 text-[10px] font-medium rounded-lg bg-elevated/80 text-text-secondary border border-border/50 hover:border-accent/30 hover:text-text-primary transition-colors"
                            >
                                {t}
                            </span>
                        ))}
                        {technologies.length > 4 && (
                            <span className="px-2.5 py-1 text-[10px] font-semibold rounded-lg bg-accent/10 text-accent border border-accent/20">
                                +{technologies.length - 4} more
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </SlideUp>
    )
}
