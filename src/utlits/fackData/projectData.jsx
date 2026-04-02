import work_1 from "../../assets/images/projects/1.png";
import work_2 from "../../assets/images/projects/2.png";
import work_3 from "../../assets/images/projects/3.png";
import work_4 from "../../assets/images/projects/4.png";
import work_5 from "../../assets/images/projects/5.png";
import work_6 from "../../assets/images/projects/6.png";
import work_7 from "../../assets/images/projects/7.png";
import work_8 from "../../assets/images/projects/8.png";
import work_9 from "../../assets/images/projects/9.png";
import work_10 from "../../assets/images/projects/10.png";
import work_11 from "../../assets/images/projects/11.png";
import work_12 from "../../assets/images/projects/12.png";
import work_13 from "../../assets/images/projects/13.jpeg";
import work_14 from "../../assets/images/projects/14.png";
import work_15 from "../../assets/images/projects/15.jpeg";
import work_16 from "../../assets/images/projects/16.png";
import work_17 from "../../assets/images/projects/17.jpeg";
import work_18 from "../../assets/images/projects/18.png";
import work_19 from "../../assets/images/projects/19.jpeg";
import work_20 from "../../assets/images/projects/20.png";
import work_21 from "../../assets/images/projects/21.jpeg";
import work_22 from "../../assets/images/projects/22.png";
import work_23 from "../../assets/images/projects/23.jpeg";
import work_24 from "../../assets/images/projects/24.png";
import work_25 from "../../assets/images/projects/25.png";
import work_26 from "../../assets/images/projects/26.png";
import work_27 from "../../assets/images/projects/27.png";
import work_28 from "../../assets/images/projects/28.png";
import work_29 from "../../assets/images/projects/29.jpeg";
import work_30 from "../../assets/images/projects/30.png";
import work_31 from "../../assets/images/projects/31.jpeg";
import work_32 from "../../assets/images/projects/32.jpeg";
import work_33 from "../../assets/images/projects/33.jpeg";
import work_34 from "../../assets/images/projects/34.jpeg";
import work_35 from "../../assets/images/projects/35.png";

// JustParkwell Partner gallery
import jpPartner1 from "../../assets/images/projects/justparkwell-partner1.png";
import jpPartner2 from "../../assets/images/projects/justparkwell-partner2.png";
import jpPartner3 from "../../assets/images/projects/justparkwell-partner3.png";
import jpPartner4 from "../../assets/images/projects/justparkwell-partner4.png";
import jpPartner5 from "../../assets/images/projects/justparkwell-partner5.png";
import jpPartner6 from "../../assets/images/projects/justparkwell-partner6.png";
import jpPartner7 from "../../assets/images/projects/justparkwell-partner7.png";

// Niply gallery
import niply1 from "../../assets/images/projects/niply-1.png";
import niply2 from "../../assets/images/projects/niply-2.png";
import niply3 from "../../assets/images/projects/niply-3.png";
import niply4 from "../../assets/images/projects/niply-4.png";
import niply5 from "../../assets/images/projects/niply-5.png";
import niply6 from "../../assets/images/projects/niply-6.png";

// Ondgo gallery
import ondgoFeatured from "../../assets/images/projects/ondgo-featured.png";
import ondgo1 from "../../assets/images/projects/ondgo-1.png";
import ondgo2 from "../../assets/images/projects/ondgo-2.png";

// Foursquare Convention gallery
import fsqFeatured from "../../assets/images/projects/fsq-featured.png";
import foursquare1 from "../../assets/images/projects/foursquare-1.png";
import foursquare2 from "../../assets/images/projects/foursquare-2.png";
import foursquare3 from "../../assets/images/projects/foursquare-3.png";
import foursquare4 from "../../assets/images/projects/foursquare-4.png";
import foursquare5 from "../../assets/images/projects/foursquare-5.png";

export const projectsData = [
  // =============================================
  // MOBILE APPLICATIONS (first, highest priority)
  // =============================================
  {
    id: 16,
    src: work_16,
    category: "Mobile Applications",
    title: "JustParkwell",
    description: "A smart, AI-powered parking management platform supporting on-demand bookings and automated enforcement across 3 countries. Features real-time map interface with custom Google Maps SDK markers and geofencing for parking validation.",
    technologies: ["Flutter", "Laravel", "Google Maps SDK", "BLoC", "Shorebird"],
  },
  {
    id: 18,
    src: jpPartner1,
    gallery: [jpPartner1, jpPartner2, jpPartner3, jpPartner4, jpPartner5, jpPartner6, jpPartner7],
    category: "Mobile Applications",
    title: "JustParkwell Partner",
    description: "Empowers businesses, lot owners, and facilities to digitize their parking operations. Manage bookings, monitor occupancy, and monetize parking spaces in real time with staff controls and analytics.",
    technologies: ["Flutter", "Laravel", "Firebase", "Shorebird"],
  },
  {
    id: 20,
    src: work_20,
    category: "Mobile Applications",
    title: "CityPark",
    description: "Government-grade smart city parking application for municipalities and citizens. Enforcement workflows, zone management, and live occupancy monitoring.",
    technologies: ["Flutter", "Laravel", "Google Maps SDK"],
  },
  {
    id: 22,
    src: work_22,
    category: "Mobile Applications",
    title: "CityPark Partner",
    description: "Mobile app for partner operators under the CityPark network. Manage parking zones, enforcement, and revenue tracking on the go.",
    technologies: ["Flutter", "Laravel"],
  },
  {
    id: 24,
    src: work_24,
    category: "Mobile Applications",
    title: "Crafflux",
    description: "On-demand artisan services platform. Book trusted handymen with real-time availability, in-app chat, and Paystack integration processing 10M+ monthly transactions.",
    technologies: ["Flutter", "Laravel", "Firebase", "Paystack"],
  },
  {
    id: 26,
    src: work_26,
    category: "Mobile Applications",
    title: "Crafflux Artisan App",
    description: "Companion app for artisans to receive bookings, manage schedules, track earnings, and communicate with customers in real time.",
    technologies: ["Flutter", "Firebase", "FCM"],
  },
  {
    id: 14,
    src: work_14,
    category: "Mobile Applications",
    title: "TastyTokens",
    description: "NFC-integrated loyalty platform for restaurants. Optimized NFC scan latency to <500ms, offline-first architecture with Hive, and Mixpanel analytics improving campaign conversion by 35%.",
    technologies: ["Flutter", "Firebase", "Mixpanel", "NFC", "Hive"],
  },
  {
    id: 27,
    src: niply1,
    gallery: [niply1, niply2, niply3, niply4, niply5, niply6],
    category: "Mobile Applications",
    title: "Niply Fintech",
    description: "B2B platform for automated invoicing, digital receipts, and real-time payment tracking. Refactored to modular Riverpod architecture improving feature delivery velocity by 40%.",
    technologies: ["Flutter", "Riverpod", "Stripe", "Paystack"],
  },
  {
    id: 12,
    src: work_12,
    category: "Mobile Applications",
    title: "WareFlow One",
    description: "Inventory management app with custom MLKit barcode scanning improving check speed by 60%. Subscription tiers via StoreKit & Stripe, offline sync with Hive + Firebase.",
    technologies: ["Flutter", "MLKit", "Hive", "StoreKit", "Stripe"],
  },
  {
    id: 28,
    src: ondgoFeatured,
    gallery: [ondgoFeatured, ondgo1, ondgo2],
    category: "Mobile Applications",
    title: "Ondgo",
    description: "Cross-platform mobile application available on both iOS and Android app stores.",
    technologies: ["Flutter", "Dart"],
  },
  {
    id: 11,
    src: fsqFeatured,
    gallery: [fsqFeatured, foursquare1, foursquare2, foursquare3, foursquare4, foursquare5],
    category: "Mobile Applications",
    title: "Foursquare Convention",
    description: "High-traffic event platform with real-time schedules, live updates, and rich media. Optimized API caching strategies to support large-scale attendee traffic during live events.",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
  },
  {
    id: 5,
    src: work_5,
    category: "Mobile Applications",
    title: "Formelo",
    description: "A mobile-first platform for creating and managing forms with real-time sync.",
    technologies: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: 6,
    src: work_6,
    category: "Mobile Applications",
    title: "Ticket Booking App",
    description: "A mobile app for booking tickets for events and movies with real-time seat selection.",
    technologies: ["React Native", "Redux", "Node.js"],
  },

  // =============================================
  // WEB APPLICATIONS
  // =============================================
  {
    id: 17,
    src: work_17,
    category: "Web Applications",
    title: "JustParkwell Web Dashboard",
    description: "All-in-one platform for managing parking operations. Live dashboard, AI-powered analytics, digital ticketing, and full payment tracking for cities, businesses, and operators.",
    technologies: ["Next.js", "Laravel", "TailwindCSS"],
  },
  {
    id: 19,
    src: work_19,
    category: "Web Applications",
    title: "JustParkwell Partner Web",
    description: "Dashboard for parking lot owners and property managers to oversee operations at scale — bookings, revenue tracking, slot control, and staff management.",
    technologies: ["Next.js", "Laravel", "TailwindCSS"],
  },
  {
    id: 21,
    src: work_21,
    category: "Web Applications",
    title: "CityPark Web",
    description: "Web dashboard for city authorities to monitor parking activity, enforcement, and zone analytics.",
    technologies: ["Next.js", "Laravel"],
  },
  {
    id: 23,
    src: work_23,
    category: "Web Applications",
    title: "CityPark Partner Web",
    description: "Web-based management panel for CityPark operating partners.",
    technologies: ["Next.js", "Laravel"],
  },
  {
    id: 25,
    src: work_25,
    category: "Web Applications",
    title: "Crafflux Admin Dashboard",
    description: "Web-based dashboard for managing artisan bookings, earnings, users, and platform analytics.",
    technologies: ["Next.js", "Laravel"],
  },
  {
    id: 15,
    src: work_15,
    category: "Web Applications",
    title: "TastyTokens Web & Admin",
    description: "Website, admin dashboard, and blog for the TastyTokens loyalty platform.",
    technologies: ["Next.js", "Contentful", "React"],
  },
  {
    id: 13,
    src: work_13,
    category: "Web Applications",
    title: "Ticketloope",
    description: "Web-based event ticketing platform for seamless discovery, purchase, and management of event tickets.",
    technologies: ["Next.js", "React", "TailwindCSS"],
  },
  {
    id: 29,
    src: work_29,
    category: "Web Applications",
    title: "FoodpreneursHub LMS",
    description: "Learning management system for food entrepreneurs with structured courses and admin tools.",
    technologies: ["Next.js", "TailwindCSS", "Contentful"],
  },
  {
    id: 30,
    src: work_30,
    category: "Web Applications",
    title: "BL E-commerce",
    description: "E-commerce shoe shopping platform with modern UI and secure Stripe checkout.",
    technologies: ["Next.js", "React", "Stripe"],
  },
  {
    id: 3,
    src: work_3,
    category: "Web Applications",
    title: "Education Platform",
    description: "An e-learning platform with interactive courses and quizzes.",
    technologies: ["Angular", "Firebase", "TypeScript"],
  },
  {
    id: 4,
    src: work_4,
    category: "Web Applications",
    title: "Orangevfx Website",
    description: "A portfolio website for showcasing VFX projects.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    src: work_9,
    category: "Web Applications",
    title: "Parastatal Website",
    description: "A government parastatal website for public services.",
    technologies: ["PHP", "Bootstrap", "MySQL"],
  },

  // =============================================
  // WEB DASHBOARDS
  // =============================================
  {
    id: 8,
    src: work_8,
    category: "Web Dashboards",
    title: "WareFlow One Dashboard",
    description: "Web dashboard for managing warehouse inventory and logistics operations.",
    technologies: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    id: 10,
    src: work_10,
    category: "Web Dashboards",
    title: "Inventory Management System",
    description: "A web-based system for tracking and managing inventory with analytics.",
    technologies: ["React", "Express", "PostgreSQL"],
  },

  // =============================================
  // CI/CD & DEPLOYMENT AUTOMATION
  // =============================================
  {
    id: 35,
    src: work_35,
    category: "CI/CD & Deployment Automation",
    title: "Flutter Mobile App Deployments",
    description: "CI/CD pipelines using Shorebird for Flutter hotfixes and Xcode Cloud for iOS builds. Apple Transporter for App Store uploads and TestFlight distribution.",
    technologies: ["Flutter", "Shorebird", "Xcode Cloud", "Transporter"],
  },
  {
    id: 1,
    src: work_1,
    category: "CI/CD & Deployment Automation",
    title: "Enaira Project",
    description: "A blockchain-based digital currency project with automated deployment pipelines.",
    technologies: ["Blockchain", "DevOps", "Docker"],
  },
  {
    id: 2,
    src: work_2,
    category: "CI/CD & Deployment Automation",
    title: "Travel Website",
    description: "A responsive travel booking platform with real-time availability and CI/CD pipeline.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 7,
    src: work_7,
    category: "CI/CD & Deployment Automation",
    title: "Web Application Deployment",
    description: "Automated CI/CD pipeline for deploying web applications to cloud infrastructure.",
    technologies: ["Jenkins", "Kubernetes", "AWS"],
  },
  {
    id: 31,
    src: work_31,
    category: "CI/CD & Deployment Automation",
    title: "Austere Africa Website",
    description: "GitHub Actions pipeline for auto-deploying a Next.js static site to cPanel via FTP with optimized asset handling.",
    technologies: ["Next.js", "GitHub Actions", "FTP", "cPanel"],
  },
  {
    id: 32,
    src: work_32,
    category: "CI/CD & Deployment Automation",
    title: "Ideosphere Africa Website",
    description: "GitHub Actions deployment pipeline for Next.js static export to shared hosting using FTP.",
    technologies: ["Next.js", "GitHub Actions", "FTP"],
    url: "https://ideosphere.africa"
  },
  {
    id: 33,
    src: work_33,
    category: "CI/CD & Deployment Automation",
    title: "TheCorporation Website",
    description: "CI/CD for Gatsby site with automated cPanel deployment using GitHub Actions.",
    technologies: ["Gatsby", "Yarn", "GitHub Actions", "FTP"],
    url: "https://thecorporation.africa"
  },
  {
    id: 34,
    src: work_34,
    category: "CI/CD & Deployment Automation",
    title: "Digitalesque Website",
    description: "CI/CD setup for Gatsby static site using GitHub Actions and FTP deployment.",
    technologies: ["Gatsby", "GitHub Actions", "FTP"],
    url: "https://digitalesque.africa"
  },
];

export const getProjectById = (id) => projectsData.find(project => project.id === id);
