import React from 'react'
import profile from "../../assets/images/about/profile.png"
import { RiFlutterFill, RiMailSendLine, RiReactjsLine, RiServerLine, RiSparklingLine } from '@remixicon/react'
import { Link } from 'react-router-dom'
import SlideUp from '../../utlits/animations/slideUp'

const Summery = () => {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="container-main relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <SlideUp>
                        <div className="relative">
                            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden bg-elevated border border-border/50 shrink-0 shadow-2xl">
                                <img src={profile} alt="Timileyin Quadri" className="w-full h-full object-cover" />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-accent text-white rounded-2xl shadow-xl shadow-accent/20 border border-accent-hover">
                                <div className="flex items-center gap-2">
                                    <RiSparklingLine size={18} />
                                    <span className="font-semibold text-lg">8+ Years</span>
                                </div>
                            </div>
                        </div>
                    </SlideUp>
                    <SlideUp>
                        <div className="flex-1">
                            <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                                About Me
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary leading-tight">
                                Timileyin <span className="text-text-muted">(Timmy)</span> Quadri
                            </h1>
                            <p className="text-2xl text-accent font-semibold mt-2">Senior Mobile Engineer</p>
                            <p className="text-text-secondary text-lg mt-6 leading-relaxed">
                                I architect <strong className="text-text-primary">production mobile & web platforms</strong> with Flutter, React Native, and modern web stacks. Specializing in multi-tenant SaaS, fintech, and smart mobility — shipping cross-platform apps across 4 countries with multi-payment gateway integration and real-time features.
                            </p>

                            <div className="space-y-4 mt-8">
                                <div className="group flex items-start gap-4 p-4 rounded-xl bg-elevated/50 border border-border/50 hover:border-accent/30 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                                        <RiFlutterFill className="text-accent" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-text-primary font-semibold mb-1">Mobile Engineering</h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            Flutter (Riverpod, GetX, Freezed) & React Native (Expo, Redux Toolkit, RTK Query, NativeWind). NFC read/write, biometric auth, offline-first with Hive.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="group flex items-start gap-4 p-4 rounded-xl bg-elevated/50 border border-border/50 hover:border-accent/30 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                                        <RiReactjsLine className="text-accent" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-text-primary font-semibold mb-1">Web & Backend</h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            React + Next.js dashboards, FastAPI + SQLAlchemy + Celery backends, Laravel + Sanctum APIs. Multi-payment (Stripe/Paystack/Wave/Remita).
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="group flex items-start gap-4 p-4 rounded-xl bg-elevated/50 border border-border/50 hover:border-accent/30 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                                        <RiServerLine className="text-accent" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-text-primary font-semibold mb-1">DevOps & Delivery</h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            Shorebird OTA patches, EAS Build, Xcode Cloud, GitHub Actions CI/CD, Docker deployments, Sentry monitoring.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-text-secondary text-lg mt-8 leading-relaxed">
                                Built multi-country platforms (Nigeria, US, Canada, Senegal) with role-based access for 6 user types, wallet systems with financial transaction auditing, and automated CI/CD pipelines. <span className="text-text-primary font-semibold">30+ shipped products</span> serving thousands of users.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-8">
                                <Link 
                                    to="/contact" 
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-105"
                                >
                                    Get In Touch <RiMailSendLine size={18} />
                                </Link>
                                <Link 
                                    to="/works" 
                                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border hover:border-accent text-text-primary rounded-xl font-semibold transition-all hover:bg-accent/5"
                                >
                                    View Projects
                                </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-6 mt-10 p-6 bg-gradient-to-br from-elevated via-elevated/80 to-elevated/60 border border-border/60 rounded-2xl shadow-xl">
                                {[['8+', 'Years'], ['30+', 'Projects'], ['4', 'Countries']].map(([value, label]) => (
                                    <div key={label} className="text-center">
                                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-text-primary to-accent tabular-nums">{value}</div>
                                        <div className="text-xs text-text-muted mt-1.5 uppercase tracking-wider">{label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SlideUp>
                </div>
            </div>
        </section>
    )
}

export default Summery
