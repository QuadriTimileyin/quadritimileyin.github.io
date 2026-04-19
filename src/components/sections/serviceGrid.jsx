import { RiCodeSSlashFill, RiSmartphoneFill, RiCloudLine } from '@remixicon/react';
import React from 'react';
import SlideUp from '../../utlits/animations/slideUp';

const ServiceGrid = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container-main">
                <SlideUp>
                    <div className="mb-14">
                        <span className="text-accent text-sm font-medium uppercase tracking-wider">What I do</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">Quality Services</h2>
                    </div>
                </SlideUp>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card id={1} icon={<RiSmartphoneFill size={24} />} title="Mobile App Development" description="Cross-platform iOS & Android apps with Flutter (Riverpod, GetX) and React Native (Expo, Redux Toolkit). NFC integration, offline-first storage, biometric auth, and App/Play Store deployment." />
                    <Card id={2} icon={<RiCodeSSlashFill size={24} />} title="Web Apps & Dashboards" description="React + Next.js admin dashboards and customer portals with Redux Toolkit, i18n (EN/FR), PrimeReact tables, chart analytics, Google Maps, and role-based access control." />
                    <Card id={3} icon={<RiCloudLine size={24} />} title="Backend & DevOps" description="FastAPI + SQLAlchemy and Laravel REST APIs with Celery task queues, Redis caching, multi-payment webhooks, Docker deployments, and GitHub Actions CI/CD." />
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;

const Card = ({ icon, title, description, id }) => {
    const num = String(id).padStart(2, '0');
    return (
        <SlideUp delay={id}>
            <div className="group bg-surface border border-border rounded-xl p-6 hover:border-accent/20 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-5">
                    <div className="p-2.5 bg-elevated border border-border rounded-lg text-accent group-hover:border-accent/30 transition-colors">
                        {icon}
                    </div>
                    <span className="text-4xl font-bold text-border group-hover:text-accent/15 transition-colors select-none tabular-nums leading-none">
                        {num}
                    </span>
                </div>
                <h4 className="text-base font-semibold text-text-primary mb-2">{title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
            </div>
        </SlideUp>
    );
};
