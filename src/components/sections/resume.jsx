import { RiBookLine } from '@remixicon/react';
import React from 'react';
import SlideUp from '../../utlits/animations/slideUp';
import {
    RiFlutterFill,
    RiReactjsLine,
    RiVuejsLine,
    RiNodejsLine,
    RiStackFill,
    RiGitBranchLine,
    RiSmartphoneLine,
    RiGlobalLine
} from "react-icons/ri";
import { SiNextdotjs, SiLaravel, SiFirebase, SiTailwindcss } from "react-icons/si";

const TechIcon = ({ tech }) => {
    const icons = {
        flutter: <RiFlutterFill className="text-blue-400" title="Flutter" />,
        react: <RiReactjsLine className="text-sky-400" title="React" />,
        nextjs: <SiNextdotjs className="text-text-primary" title="Next.js" />,
        laravel: <SiLaravel className="text-red-500" title="Laravel" />,
        vue: <RiVuejsLine className="text-emerald-500" title="Vue.js" />,
        node: <RiNodejsLine className="text-green-500" title="Node.js" />,
        firebase: <SiFirebase className="text-amber-400" title="Firebase" />,
        tailwind: <SiTailwindcss className="text-cyan-400" title="TailwindCSS" />,
        mobile: <RiSmartphoneLine className="text-purple-400" title="Mobile" />,
        web: <RiGlobalLine className="text-blue-400" title="Web" />,
        cicd: <RiGitBranchLine className="text-gray-400" title="CI/CD" />,
    };
    return icons[tech.toLowerCase()] || <RiStackFill />;
};

const Resume = () => {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="container-main relative z-10">
                <SlideUp>
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                            Career Journey
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
                            Experience & Education
                        </h2>
                        <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
                            8+ years of building impactful products across industries
                        </p>
                    </div>
                </SlideUp>
                
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* EXPERIENCE - Takes 2 columns */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                                <RiStackFill size={24} className="text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-primary">Work Experience</h3>
                        </div>
                        <div className="space-y-0">
                            <Card
                                year="June 2022 - Present"
                                title="Senior Flutter Developer & Tech Lead"
                                institution="JustParkwell"
                                tech={["flutter", "react", "nextjs"]}
                                achievements={[
                                    "Lead multi-country parking platform (NG, US, CA, SN) — 2 Flutter apps (Riverpod + GetX), 3 React web dashboards (Redux Toolkit, 16+ slices), FastAPI + SQLAlchemy backend with Celery/Redis",
                                    "Architected hybrid Riverpod + GetX state management, NFC tag read/write/debit for parking enforcement, multi-payment integration (Stripe, Paystack, Wave) with webhook verification",
                                    "Built wallet system with financial transactions, 6-role RBAC, country-scoped multi-tenancy, and Alembic migrations on PostgreSQL",
                                    "Implemented CI/CD: Shorebird OTA patches (90% faster), Xcode Cloud iOS builds, GitHub Actions, Docker deployments",
                                    "Shipped partner dashboard with i18n (EN/FR), JWT token refresh interceptor, Cloudinary uploads, and Senegal-specific clamping features"
                                ]}
                            />
                            <Card
                                year="Aug 2025 - March 2026"
                                title="Senior Mobile Engineer (Contract)"
                                institution="CCDL Mobile"
                                tech={["react", "mobile"]}
                                achievements={[
                                    "Architected real estate marketplace on Expo SDK 54 + React 19 with strict Feature-Sliced Design (app → features → shared)",
                                    "Built RTK Query data layer with NativeWind styling, react-hook-form + zod validation, and WebSocket real-time updates via socket.io",
                                    "Integrated Shopify FlashList for performance, Gorhom bottom sheets, and expo-image caching",
                                ]}
                            />
                            <Card
                                year="April 2025 - July 2025"
                                title="Senior Mobile & Backend Engineer (Contract)"
                                institution="Foursquare Convention"
                                tech={["react", "laravel"]}
                                achievements={[
                                    "Built Expo SDK 53 + React 19 event app with Redux Toolkit (16 slices), Redux Persist for offline state, and NativeWind styling",
                                    "Developed Laravel 11 REST API with Sanctum auth, PostgreSQL (custom boolean trait for 9 models), dual payment (Paystack + Remita RRR)",
                                    "Implemented Cloudinary image management, custom Mailtrap email transport, expo-notifications push, and YouTube live streaming",
                                ]}
                            />
                            <Card
                                year="Jan 2025 - March 2025"
                                title="Senior Flutter Developer (Contract)"
                                institution="Paymita Fintech"
                                tech={["flutter"]}
                                achievements={[
                                    "Architected fintech app (Flutter) with Face ID / fingerprint biometric auth via local_auth",
                                    "Built virtual card issuance, wallet system, and P2P transfers with QR scanning (mobile_scanner)",
                                    "Implemented deep linking, PIN-based transaction flows, and secure token storage",
                                ]}
                            />
                            <Card
                                year="Nov 2024 - Jan 2025"
                                title="Senior React Developer (Contract)"
                                institution="Foodpreneurs Hub"
                                tech={["nextjs", "react"]}
                                achievements={[
                                    "Built LMS + admin dashboard on Next.js 15 + React 19 + TypeScript with Zustand + React Query state management",
                                    "Implemented Radix UI component library, react-hook-form + Zod validation, and ApexCharts analytics",
                                    "Integrated Paystack payments, Google OAuth via next-auth, FFmpeg video processing, and multi-language support",
                                ]}
                            />
                            <Card
                                year="Oct 2024 - Dec 2024"
                                title="Senior Flutter Developer (Contract)"
                                institution="Crafflux"
                                tech={["flutter", "firebase"]}
                                achievements={[
                                    "Built dual-platform artisan ecosystem: Consumer booking app + Artisan management app (Flutter)",
                                    "Implemented photo verification for job completion before payment release, real-time booking tracking with Firestore",
                                    "Created earnings dashboard with Paystack/bank transfer withdrawals and Firebase query caching",
                                ]}
                            />
                            <Card
                                year="May 2024 - Aug 2024"
                                title="Senior Full-Stack Developer (Flutter/Next.js)"
                                institution="TastyTokens"
                                tech={["flutter", "nextjs"]}
                                achievements={[
                                    "Built NFC loyalty platform (Flutter) with Hive for offline rewards tracking and NFC tag scanning",
                                    "Integrated Mixpanel analytics and Intercom in-app chat for user engagement",
                                    "Built Next.js merchant dashboard for campaign management and restaurant onboarding",
                                ]}
                            />
                            <Card
                                year="Sept 2023 - Feb 2024"
                                title="Senior Full-Stack Developer (Flutter & Next.js)"
                                institution="WareFlow One"
                                tech={["flutter", "nextjs"]}
                                achievements={[
                                    "Built Flutter mobile app with MLKit barcode scanning + Next.js 14 dashboard (TypeScript, Zustand, React Query)",
                                    "Dashboard features: ReactFlow diagram builder, TanStack Table, dnd-kit drag-and-drop, dual maps (Google + Leaflet), i18n (EN/BN/AR)",
                                    "Implemented Stripe/Paystack subscriptions via StoreKit, offline sync with Hive + Firebase",
                                ]}
                            />
                            <Card
                                year="Jun 2023 - Dec 2023"
                                title="Senior Frontend Developer (React)"
                                institution="Ticketloope"
                                tech={["nextjs", "react"]}
                                achievements={[
                                    "Built event creation and booking platform with Next.js SSR, dynamic routing, and role-based organizer/attendee dashboards",
                                    "Implemented QR-based e-ticket generation post-payment with secure API integrations",
                                    "Created reusable component library and custom hooks for consistent UI patterns",
                                ]}
                            />
                            <Card
                                year="Apr 2023 - Oct 2023"
                                title="Senior Flutter Developer"
                                institution="Niply Fintech"
                                tech={["flutter"]}
                                achievements={[
                                    "Built payment & gifting platform with Dio networking, JWT auth, phone verification, and shimmer loading states",
                                    "Implemented airtime/data purchase, virtual card issuance, bill payments, and invoice generation",
                                    "Designed liquid swipe onboarding and secure PIN-based transaction flows",
                                ]}
                            />
                            <Card
                                year="Dec 2019 - Dec 2020"
                                title="Frontend & Mobile Developer (Flutter)"
                                institution="Admoni Inc."
                                tech={["flutter", "web"]}
                                achievements={[
                                    "Built Flutter rewards app with ad-viewing interface and incentive tracking",
                                    "Developed responsive web admin dashboard for campaign management",
                                ]}
                            />
                            <Card
                                year="Jan 2018 - May 2022"
                                title="Frontend & Mobile Engineer"
                                institution="Bypenth Softwares"
                                tech={["flutter", "react"]}
                                achievements={[
                                    "Delivered 15+ web and mobile projects across React and Flutter",
                                    "Modernized legacy codebases, introduced CI/CD pipelines and code review workflows",
                                    "Mentored junior developers in React and Flutter best practices",
                                ]}
                            />
                        </div>
                    </div>

                    {/* EDUCATION & CERTIFICATIONS */}
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                                <RiBookLine size={24} className="text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-primary">Education</h3>
                        </div>
                        
                        <div className="p-6 bg-elevated/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-accent/30 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                    <RiBookLine size={24} className="text-accent" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-text-primary">
                                        BSc. in Computer Science
                                    </h4>
                                    <p className="text-text-secondary mt-1 leading-relaxed">
                                        Tai Solarin Federal University of Education, Nigeria
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {['Algorithms', 'Data Structures', 'Software Engineering', 'Databases'].map((subject, i) => (
                                            <span 
                                                key={i}
                                                className="px-3 py-1 text-xs font-medium rounded-lg bg-surface text-text-secondary border border-border/50"
                                            >
                                                {subject}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Stats Card */}
                        <div className="mt-6 p-6 bg-gradient-to-br from-accent/5 to-blue-500/5 border border-border/50 rounded-2xl">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-text-primary to-accent tabular-nums">
                                        8+
                                    </div>
                                    <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">
                                        Years Exp
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-text-primary to-accent tabular-nums">
                                        30+
                                    </div>
                                    <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">
                                        Projects
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;

const Card = ({ year, title, institution, achievements, tech }) => {
    return (
        <SlideUp>
            <div className="relative pl-10 pb-10 border-l-2 border-border/50 last:pb-0 group hover:border-accent/50 transition-all duration-300">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 -translate-x-[9px] w-4 h-4 rounded-full bg-surface border-2 border-accent group-hover:bg-accent group-hover:scale-125 transition-all duration-300 shadow-lg shadow-accent/20" />
                
                {/* Glowing effect on hover */}
                <div className="absolute left-0 top-2 -translate-x-[9px] w-4 h-4 rounded-full bg-accent opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300" />
                
                <div className="p-5 bg-elevated/50 backdrop-blur-sm border border-border/50 rounded-xl group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/5 transition-all duration-300">
                    {year && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded-full mb-3">
                            {year}
                        </div>
                    )}
                    
                    <h4 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors">
                        {title}
                    </h4>
                    
                    <span className="text-sm text-text-secondary font-medium">
                        {institution}
                    </span>
                    
                    {tech && (
                        <div className="flex gap-2 mt-3">
                            {tech.map((t, i) => (
                                <span key={i} className="text-xl">
                                    <TechIcon tech={t} />
                                </span>
                            ))}
                        </div>
                    )}
                    
                    {achievements && (
                        <ul className="mt-4 space-y-2">
                            {achievements.map((item, i) => (
                                <li key={i} className="text-xs text-text-secondary leading-relaxed flex gap-2">
                                    <span className="text-accent shrink-0 mt-0.5 font-bold">›</span>
                                    <span className="flex-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </SlideUp>
    );
};
