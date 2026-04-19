import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RiArrowLeftLine, RiArrowRightUpLine } from '@remixicon/react';
import { getProjectById } from '../utlits/fackData/projectData';
import SlideUp from '../utlits/animations/slideUp';

const SingleProject = () => {
    const { id } = useParams();
    const project = getProjectById(parseInt(id));
    const [activeImage, setActiveImage] = useState(0);

    if (!project) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-text-primary">Project not found</h2>
                <Link to="/works" className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors">
                    <RiArrowLeftLine size={14} /> Back to Works
                </Link>
            </div>
        );
    }

    return (
        <div className="py-20 md:py-28">
            <div className="container-main">
                <SlideUp>
                    <div className="flex items-center gap-3 mb-4">
                        <Link to="/works" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors">
                            <RiArrowLeftLine size={16} /> All Projects
                        </Link>
                        <span className="px-2.5 py-0.5 text-[11px] uppercase tracking-wider bg-accent/10 text-accent rounded-full">{project.category}</span>
                    </div>
                </SlideUp>

                <SlideUp>
                    <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8">{project.title}</h1>
                </SlideUp>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-3/5">
                        <SlideUp>
                            <div className="rounded-xl overflow-hidden bg-elevated border border-border">
                                <img
                                    src={project.gallery ? project.gallery[activeImage] : project.src}
                                    alt={project.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {project.gallery && project.gallery.length > 1 && (
                                <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                                    {project.gallery.map((img, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveImage(i)}
                                            className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                                                i === activeImage ? 'border-accent' : 'border-border hover:border-text-muted/30'
                                            }`}
                                        >
                                            <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </SlideUp>
                    </div>
                    <div className="lg:w-2/5">
                        <SlideUp>
                            <div className="bg-surface border border-border rounded-xl p-6 space-y-6">
                                <div>
                                    <h4 className="text-xs uppercase tracking-wider text-text-muted mb-2">About</h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">{project.description}</p>
                                </div>

                                <div>
                                    <h4 className="text-xs uppercase tracking-wider text-text-muted mb-2">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="px-2.5 py-1 text-xs rounded bg-elevated text-text-secondary border border-border">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                {project.url && (
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-text-muted mb-2">Live URL</h4>
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                                        >
                                            {project.url.replace('https://', '')} <RiArrowRightUpLine size={14} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
