import React from 'react';
import SlideUp from '../../utlits/animations/slideUp';
import {
    RiFlutterFill,
    RiReactjsLine,
    RiNodejsLine,
    RiDatabase2Line,
    RiGitBranchLine,
    RiCodeSSlashLine,
} from '@remixicon/react';
import { 
    SiNextdotjs, 
    SiTypescript, 
    SiPython, 
    SiFastapi, 
    SiLaravel,
    SiPostgresql,
    SiRedis,
    SiDocker,
    SiFirebase,
    SiTailwindcss,
    SiGithubactions,
    SiStripe,
} from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Mobile Development',
            icon: <RiFlutterFill size={28} className="text-blue-400" />,
            skills: [
                { name: 'Flutter', icon: <RiFlutterFill size={20} />, level: 95 },
                { name: 'React Native', icon: <RiReactjsLine size={20} />, level: 90 },
                { name: 'Expo', icon: <RiCodeSSlashLine size={20} />, level: 90 },
                { name: 'Riverpod', icon: <RiFlutterFill size={20} />, level: 90 },
                { name: 'Redux Toolkit', icon: <RiReactjsLine size={20} />, level: 85 },
            ]
        },
        {
            title: 'Frontend & Web',
            icon: <RiReactjsLine size={28} className="text-sky-400" />,
            skills: [
                { name: 'React', icon: <RiReactjsLine size={20} />, level: 95 },
                { name: 'Next.js', icon: <SiNextdotjs size={20} />, level: 90 },
                { name: 'TypeScript', icon: <SiTypescript size={20} />, level: 90 },
                { name: 'TailwindCSS', icon: <SiTailwindcss size={20} />, level: 95 },
                { name: 'Vite', icon: <RiReactjsLine size={20} />, level: 85 },
            ]
        },
        {
            title: 'Backend & APIs',
            icon: <RiNodejsLine size={28} className="text-green-500" />,
            skills: [
                { name: 'FastAPI', icon: <SiFastapi size={20} />, level: 90 },
                { name: 'Python', icon: <SiPython size={20} />, level: 85 },
                { name: 'Laravel', icon: <SiLaravel size={20} />, level: 80 },
                { name: 'Node.js', icon: <RiNodejsLine size={20} />, level: 75 },
                { name: 'REST APIs', icon: <RiCodeSSlashLine size={20} />, level: 95 },
            ]
        },
        {
            title: 'Database & Infra',
            icon: <RiDatabase2Line size={28} className="text-purple-400" />,
            skills: [
                { name: 'PostgreSQL', icon: <SiPostgresql size={20} />, level: 90 },
                { name: 'Redis', icon: <SiRedis size={20} />, level: 80 },
                { name: 'Firebase', icon: <SiFirebase size={20} />, level: 85 },
                { name: 'Docker', icon: <SiDocker size={20} />, level: 80 },
                { name: 'AWS/GCP', icon: <RiDatabase2Line size={20} />, level: 75 },
            ]
        },
        {
            title: 'DevOps & Tools',
            icon: <RiGitBranchLine size={28} className="text-orange-400" />,
            skills: [
                { name: 'GitHub Actions', icon: <SiGithubactions size={20} />, level: 90 },
                { name: 'EAS Build', icon: <RiCodeSSlashLine size={20} />, level: 85 },
                { name: 'Xcode Cloud', icon: <RiCodeSSlashLine size={20} />, level: 80 },
                { name: 'Shorebird', icon: <RiCodeSSlashLine size={20} />, level: 85 },
                { name: 'Git', icon: <RiGitBranchLine size={20} />, level: 95 },
            ]
        },
        {
            title: 'Integrations',
            icon: <SiStripe size={28} className="text-blue-500" />,
            skills: [
                { name: 'Stripe', icon: <SiStripe size={20} />, level: 90 },
                { name: 'Paystack', icon: <RiCodeSSlashLine size={20} />, level: 90 },
                { name: 'WebSockets', icon: <RiCodeSSlashLine size={20} />, level: 85 },
                { name: 'NFC', icon: <RiCodeSSlashLine size={20} />, level: 85 },
                { name: 'Biometrics', icon: <RiCodeSSlashLine size={20} />, level: 85 },
            ]
        },
    ];

    return (
        <section className="py-20 md:py-32 relative overflow-hidden bg-surface/50">
            {/* Background decorations */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="container-main relative z-10">
                <SlideUp>
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                            Technical Expertise
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
                            Skills & Technologies
                        </h2>
                        <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
                            8+ years of hands-on experience with modern tech stacks
                        </p>
                    </div>
                </SlideUp>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <SlideUp key={idx} delay={idx * 0.1}>
                            <div className="group h-full p-6 bg-elevated/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-text-primary">
                                        {category.title}
                                    </h3>
                                </div>
                                
                                <div className="space-y-4">
                                    {category.skills.map((skill, i) => (
                                        <div key={i}>
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-text-muted">{skill.icon}</span>
                                                    <span className="text-sm font-medium text-text-secondary">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                                <span className="text-xs font-semibold text-accent tabular-nums">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-gradient-to-r from-accent to-accent-hover rounded-full transition-all duration-1000 ease-out"
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SlideUp>
                    ))}
                </div>

                <SlideUp delay={0.6}>
                    <div className="mt-12 p-8 bg-gradient-to-br from-accent/5 to-blue-500/5 border border-border/50 rounded-2xl text-center">
                        <p className="text-text-secondary text-lg leading-relaxed max-w-3xl mx-auto">
                            <span className="text-text-primary font-semibold">Specialized in building</span> production-grade mobile and web applications with modern architectures, clean code practices, and comprehensive testing. Experienced in leading technical teams and establishing development workflows.
                        </p>
                    </div>
                </SlideUp>
            </div>
        </section>
    );
};

export default Skills;
