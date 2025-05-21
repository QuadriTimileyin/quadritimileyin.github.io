import { RiCodeSSlashFill, RiSmartphoneFill, RiCloudLine } from '@remixicon/react';
import React from 'react';
import SlideUp from '../../utlits/animations/slideUp';

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Quality Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card
                            id={1}
                            icon={<RiCodeSSlashFill size={60} />}
                            title={"Website & Web App Development"}
                            description={"Modern, responsive websites and dynamic web apps with APIs, dashboards, and backend integrations."}
                        />
                        <Card
                            id={2}
                            icon={<RiSmartphoneFill size={60} />}
                            title={"Mobile App Development"}
                            description={"Cross-platform mobile apps built with React Native for performance and scalability."}
                        />
                        <Card
                            id={3}
                            icon={<RiCloudLine size={60} />}
                            title={"DevOps & Cloud Infrastructure"}
                            description={"Automated CI/CD pipelines, cloud deployments (AWS/GCP/Azure), Docker, Kubernetes & monitoring setup."}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    );
};
