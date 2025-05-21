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
      flutter: <RiFlutterFill className="text-blue-500" title="Flutter" />,
      react: <RiReactjsLine className="text-blue-400" title="React" />,
      nextjs: <SiNextdotjs className="text-black dark:text-white" title="Next.js" />,
      laravel: <SiLaravel className="text-red-500" title="Laravel" />,
      vue: <RiVuejsLine className="text-green-500" title="Vue.js" />,
      node: <RiNodejsLine className="text-green-600" title="Node.js" />,
      firebase: <SiFirebase className="text-yellow-500" title="Firebase" />,
      tailwind: <SiTailwindcss className="text-cyan-400" title="TailwindCSS" />,
      mobile: <RiSmartphoneLine className="text-purple-500" title="Mobile" />,
      web: <RiGlobalLine className="text-blue-600" title="Web" />,
      cicd: <RiGitBranchLine className="text-gray-500" title="CI/CD" />,
    };
  
    return icons[tech.toLowerCase()] || <RiStackFill />;
  };

  
const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* EXPERIENCE */}
                        <div className="col-xl-6 col-md-6">
  <div className="single-resume">
    <h2>Experience</h2>
    <div className="experience-list">
      {/* JustParkwell */}
      <Card 
  year="June 2022 - Present" 
  title="Senior Software Engineer / Tech Lead" 
  institution="JustParkwell"
  tech={["flutter", "nextjs"]}
  achievements={[
    "Scaled mobile ecosystem by migrating Ionic→Flutter, slashing crash rates by 60% and elevating Play Store rating to 4.6★",
    "Drove international expansion via real-time maps (Mapbox/Google Maps API), unlocking 12 new markets with 40% surge in global usage",
    "Engineered Next.js/Laravel web platforms achieving 25% faster loads and 30% higher retention across 3 dashboards",
    "Implemented CI/CD pipelines (GitHub Actions/Xcode Cloud) cutting deployment time by 60% and Shorebird hotfixes reducing patch time by 90%",
    "Boosted engagement 40% via Firebase push notifications and AI parking predictions (35% faster searches)"
  ]}

/>

      {/* Paymita Fintech */}
      <Card 
        year="Jan 2025 - March 2025" 
        title="Senior Flutter Developer (Contract)" 
        institution="Paymita Fintech"
        achievements={[
          "Architected secure fintech app (Flutter) with Face ID biometric authentication using local_auth package",
          "Implemented virtual card issuance and wallet system with <100ms transaction speeds ",
          "Built P2P transfers with QR scanning (mobile_scanner) and deep linking",
          "Developed KYC compliance flow with document scanning (image_picker + image_cropper)",
        ]}
      />

      {/* Foodpreneurs Hub */}
      <Card 
  year="Nov 2024 - Jan 2025" 
  title="Senior React Developer (Contract)" 
  institution="Foodpreneurs Hub"
  achievements={[
    "Led development of full-stack LMS platform (Next.js 14/Contentful) serving 5,000+ food entrepreneurs",
    "Implemented Stripe/Paystack payment integration with 99.9% uptime for course enrollments",
    "Built admin dashboard for video management (AWS S3) and real-time course analytics",
    "Architected video streaming system with progress tracking and adaptive bitrate playback",
    "Reduced UI development time 50% by implementing TailwindCSS and component library",
    "Optimized performance: 35% faster page loads via ISR and code-splitting"
  ]}
/>
      {/* Crafflux */}
      <Card 
  year="Oct 2024 - Dec 2024" 
  title="Senior Flutter Developer (Contract)" 
  institution="Crafflux"
  achievements={[
    "Built dual-platform artisan ecosystem: Consumer booking app + Artisan management app (Flutter)",
    "Implemented photo verification system for job completion before payment release",
    "Developed real-time booking tracking with Firebase Firestore and WebSockets",
    "Reduced Firebase API costs by 35% through query optimization and caching strategies",
    "Created earnings dashboard with withdrawal system (Paystack/Bank transfer integration)",
    "Optimized app performance: 25% size reduction via asset optimization and code splitting"
  ]}
/>

      {/* TastyTokens */}
      <Card 
  year="May 2024 - Aug 2024" 
  title="Senior Full-Stack Developer (Flutter/Next.js)" 
  institution="TastyTokens"
  achievements={[
    "Led development of NFC loyalty platform (Flutter) serving 150+ restaurants",
    "Implemented Hive for offline rewards tracking → 99.9% uptime",
    "Integrated Mixpanel analytics → 35% higher campaign conversions via data-driven optimizations",
    "Reduced support tickets 30% with Intercom chat and automated FAQs",
    "Built Next.js merchant dashboard ",
    "Achieved 98% NFC scan success rate across 50+ device models"
  ]}
/>
      {/* WareFlow AI */}
      <Card 
  year="Sept 2023 - Feb 2024" 
  title="Senior Full-Stack Developer (Flutter & Next.js)" 
  institution="WareFlow AI"
  achievements={[
    "Built end-to-end inventory platform: Flutter mobile app + Next.js dashboard",
    "Implemented Stripe and paystack subscriptions",
    "Reduced inventory check time 60% via barcode scanning workflow",
    "Developed real-time analytics (Next.js/Tailwind) → 45% fewer stockouts",
   
  ]}
/>

      {/* Ticketloope */}
      <Card 
  year="Jun 2023 - Dec 2023" 
  title="Senior Frontend Developer (React)" 
  institution="Ticketloope"
  achievements={[
    "Developed responsive event creation and booking flows using Next.js and React.",
    "Built role-based dashboards for event organizers and attendees.",
    "Implemented real-time e-ticket generation with QR code support after payment.",
    "Integrated with APIs for secure payment and ticket delivery.",
    "Utilized SSR and dynamic routing in Next.js to boost performance and SEO.",
    "Created reusable UI components and custom hooks to streamline development."
  ]}
/>


      {/* Older Roles (Condensed) */}
      <Card 
  year="Apr 2023 - Oct 2023" 
  title="Senior Full-Stack Developer (Flutter & Next.js)" 
  institution="Niply Fintech"
  achievements={[
    "Built Flutter/Next.js fintech platform ",
    "Created real-time financial dashboards ",
    "Achieved 99.99% uptime and zero fraud via biometric security",
  ]}
/>
<Card 
  year="Dec 2019 - Dec 2020" 
  title="Frontend & Mobile Developer (Flutter)" 
  institution="Admoni Inc."
  achievements={[
    "Built Flutter reward app",
    "Designed ad-viewing interface → 30% higher completion rates",
    "Developed responsive web dashboard",
   
  ]}
/>

<Card 
  year="Jan 2018 - May 2022" 
  title="Frontend & Mobile Engineer" 
  institution="Bypenth Softwares"
  achievements={[
    "Delivered 15+ web/mobile projects (React/Flutter)",
    "Modernized legacy systems → 75% fewer bugs",
    "Implemented CI/CD pipelines → 3x faster deployments",
    "Mentored junior developers in React/Flutter"
  ]}
/>
    </div>
  </div>
</div>

                        {/* EDUCATION */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={''} title={'BSc. in Computer Science'} institution={'Tai Solarin University'} />
                           
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

const Card = ({ year, title, institution, achievements,tech }) => {
    return (
      <SlideUp>
        <div className="resume-item">
          <div className="icon">
            <RiBookLine />
          </div>
          <div className="content">
            <span className="years">{year}</span>
            <h4>{title}</h4>
            <span className="company">{institution}</span>
               {/* Tech icons row */}
          {tech && (
            <div className="tech-icons flex gap-2 mt-2">
              {tech.map((t, i) => (
                <span key={i} className="text-lg">
                  <TechIcon tech={t} />
                </span>
              ))}
            </div>
          )}

            {/* Add achievements if provided */}
            {achievements && (
              <ul className="achievements mt-2 pl-5 list-disc">
                {achievements.map((item, i) => (
                  <li key={i} className="text-sm opacity-80">{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </SlideUp>
    );
  };
