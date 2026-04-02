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
            <div className="single-project-page-design">
                <div className="container text-center">
                    <h2>Project not found</h2>
                    <Link to="/works" className="theme-btn" style={{ marginTop: '20px', display: 'inline-block' }}>
                        <RiArrowLeftLine size={14} /> Back to Works
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="single-project-page-design">
            <div className="container">
                <SlideUp>
                    <div className="sp-header">
                        <Link to="/works" className="sp-back-link">
                            <RiArrowLeftLine size={16} /> All Projects
                        </Link>
                        <span className="sp-category-badge">{project.category}</span>
                    </div>
                </SlideUp>

                <SlideUp>
                    <h1 className="sp-title">{project.title}</h1>
                </SlideUp>

                <div className="row sp-layout">
                    <div className="col-lg-7">
                        <SlideUp>
                            <div className="sp-image-container">
                                <img
                                    src={project.gallery ? project.gallery[activeImage] : project.src}
                                    alt={project.title}
                                />
                            </div>
                            {project.gallery && project.gallery.length > 1 && (
                                <div className="sp-gallery-thumbs">
                                    {project.gallery.map((img, i) => (
                                        <button
                                            key={i}
                                            className={`sp-thumb${i === activeImage ? ' sp-thumb--active' : ''}`}
                                            onClick={() => setActiveImage(i)}
                                        >
                                            <img src={img} alt={`${project.title} screenshot ${i + 1}`} />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </SlideUp>
                    </div>
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="sp-details-card">
                                <div className="sp-section">
                                    <h4 className="sp-label">About</h4>
                                    <p className="sp-description">{project.description}</p>
                                </div>

                                <div className="sp-section">
                                    <h4 className="sp-label">Tech Stack</h4>
                                    <div className="sp-tech-list">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                {project.url && (
                                    <div className="sp-section">
                                        <h4 className="sp-label">Live URL</h4>
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="sp-live-link"
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
