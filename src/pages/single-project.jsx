import React from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../utlits/fackData/projectData';

const SingleProject = () => {
    const { id } = useParams();
    const project = getProjectById(parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>{project.category}</p>
                        <h1>{project.title}</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <img src={project.src} alt={project.title} />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left">
                            <div className="single-info">
                                <p>Category</p>
                                <h3>{project.category}</h3>
                            </div>
                            <div className="single-info">
                                <p>Technologies</p>
                                <h3>{project.technologies.join(', ')}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="single-project-page-right">
                            <h2>Description</h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;