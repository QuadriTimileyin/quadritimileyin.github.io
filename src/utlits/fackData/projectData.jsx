import work_3 from "../../assets/images/projects/3.png";
import work_4 from "../../assets/images/projects/4.png";
import work_5 from "../../assets/images/projects/5.png";
import work_6 from "../../assets/images/projects/6.png";
import work_8 from "../../assets/images/projects/8.png";
import work_9 from "../../assets/images/projects/9.png";
import work_10 from "../../assets/images/projects/10.png";
import work_12 from "../../assets/images/projects/12.png";
import work_13 from "../../assets/images/projects/13.jpeg";
import work_14 from "../../assets/images/projects/14.png";
import work_15 from "../../assets/images/projects/15.jpeg";
import work_16 from "../../assets/images/projects/16.png";
import work_17 from "../../assets/images/projects/17.jpeg";
import work_19 from "../../assets/images/projects/19.jpeg";
import work_20 from "../../assets/images/projects/20.png";
import work_21 from "../../assets/images/projects/21.jpeg";
import work_22 from "../../assets/images/projects/22.png";
import work_23 from "../../assets/images/projects/23.jpeg";
import work_24 from "../../assets/images/projects/24.png";
import work_25 from "../../assets/images/projects/25.png";
import work_26 from "../../assets/images/projects/26.png";
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
  // MOBILE APPLICATIONS
  // =============================================
  {
    id: 16,
    src: work_16,
    category: "Mobile Applications",
    title: "JustParkwell",
    description: "Multi-country parking platform (Nigeria, US, Canada, Senegal) with hybrid Riverpod + GetX state management, Google Maps with polyline directions & geofencing, multi-gateway payments (Stripe + Paystack), QR code ticketing, and live chat via Tawk.to. Supports 4 currencies (NGN/USD/CAD/XOF).",
    technologies: ["Flutter", "Riverpod", "GetX", "Google Maps", "Stripe", "Paystack", "Firebase"],
  },
  {
    id: 18,
    src: jpPartner1,
    gallery: [jpPartner1, jpPartner2, jpPartner3, jpPartner4, jpPartner5, jpPartner6, jpPartner7],
    category: "Mobile Applications",
    title: "JustParkwell Partner",
    description: "B2B park management app with NFC tag read/write/debit for parking enforcement, GetX-driven architecture with Dio HTTP client, calendar-based booking management, wallet & payout system, associate staff controls, and multi-language support (EN/FR). Dark theme support.",
    technologies: ["Flutter", "GetX", "Dio", "NFC", "Firebase", "Shorebird"],
  },
  {
    id: 28,
    src: ondgoFeatured,
    gallery: [ondgoFeatured, ondgo1, ondgo2],
    category: "Mobile Applications",
    title: "onDgo",
    description: "Fintech super app with 15+ services including wallets, flight booking (Crane + Videcom vendors), bill payments, and P2P transfers. Built with hooks_riverpod code generation, Freezed models, Dio with Hive-backed cache interceptor, biometric auth via local_auth, 3-minute session timeout, and Sentry monitoring.",
    technologies: ["Flutter", "Riverpod", "Freezed", "Dio", "Hive", "Sentry"],
  },
  {
    id: 11,
    src: fsqFeatured,
    gallery: [fsqFeatured, foursquare1, foursquare2, foursquare3, foursquare4, foursquare5],
    category: "Mobile Applications",
    title: "Foursquare Convention",
    description: "High-traffic church convention app built on Expo SDK 53 + React 19. Redux Toolkit with Redux Persist for offline state, NativeWind styling, Remita payment integration via WebView, YouTube live streaming, QR code event registration, and expo-notifications for real-time push.",
    technologies: ["React Native", "Expo", "Redux Toolkit", "NativeWind", "Remita"],
  },
  {
    id: 36,
    src: work_35,
    category: "Mobile Applications",
    title: "CCDL Real Estate",
    description: "Real estate marketplace on Expo SDK 54 + React 19 with Feature-Sliced Design architecture. RTK Query for data, NativeWind styling, react-hook-form + zod validation, WebSocket real-time updates via socket.io, Google Maps property search, Gorhom bottom sheets, and Shopify FlashList for performance.",
    technologies: ["React Native", "Expo 54", "RTK Query", "NativeWind", "WebSocket", "Zod"],
  },
  {
    id: 20,
    src: work_20,
    category: "Mobile Applications",
    title: "CityPark",
    description: "Government-grade smart city parking app for municipalities and citizens. Zone-based enforcement workflows, live occupancy monitoring, and real-time map interface.",
    technologies: ["Flutter", "Google Maps", "Laravel"],
  },
  {
    id: 22,
    src: work_22,
    category: "Mobile Applications",
    title: "CityPark Partner",
    description: "Operator-facing app for the CityPark municipal network. Parking zone management, enforcement actions, and revenue tracking on mobile.",
    technologies: ["Flutter", "Laravel"],
  },
  {
    id: 24,
    src: work_24,
    category: "Mobile Applications",
    title: "Crafflux",
    description: "On-demand artisan booking platform with real-time availability, in-app chat, photo verification for job completion before payment release, and Paystack-integrated earnings system.",
    technologies: ["Flutter", "Firebase", "Paystack", "WebSockets"],
  },
  {
    id: 26,
    src: work_26,
    category: "Mobile Applications",
    title: "Crafflux Artisan App",
    description: "Companion app for artisans — receive bookings, manage schedules, track earnings with withdrawal to bank via Paystack, and communicate with customers in real time via Firebase Cloud Messaging.",
    technologies: ["Flutter", "Firebase", "FCM"],
  },
  {
    id: 14,
    src: work_14,
    category: "Mobile Applications",
    title: "TastyTokens",
    description: "NFC loyalty platform for 150+ restaurants. Offline-first architecture with Hive for rewards tracking, Mixpanel analytics for campaign optimization, Intercom chat support, and 98% NFC scan success rate across 50+ device models.",
    technologies: ["Flutter", "NFC", "Hive", "Mixpanel", "Firebase"],
  },
  {
    id: 27,
    src: niply1,
    gallery: [niply1, niply2, niply3, niply4, niply5, niply6],
    category: "Mobile Applications",
    title: "Niply Fintech",
    description: "Payment and gifting platform with Dio networking, JWT auth, phone verification, airtime/data purchase, virtual card issuance, bill payments, and invoice generation. Shimmer loading states and liquid swipe onboarding.",
    technologies: ["Flutter", "Dio", "JWT", "Shimmer"],
  },
  {
    id: 12,
    src: work_12,
    category: "Mobile Applications",
    title: "WareFlow One",
    description: "Inventory management app with barcode scanning workflow reducing check time by 60%, subscription tiers via StoreKit & Stripe, and offline sync with Hive + Firebase.",
    technologies: ["Flutter", "MLKit", "Hive", "StoreKit", "Stripe"],
  },
  {
    id: 5,
    src: work_5,
    category: "Mobile Applications",
    title: "Formelo",
    description: "Mobile-first form builder with real-time sync, drag-and-drop field ordering, and Firebase backend for data persistence.",
    technologies: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: 6,
    src: work_6,
    category: "Mobile Applications",
    title: "Ticket Booking App",
    description: "Event and movie ticket booking app with real-time seat selection grid, Redux state management, and Node.js API backend.",
    technologies: ["React Native", "Redux", "Node.js"],
  },

  // =============================================
  // WEB APPLICATIONS & DASHBOARDS
  // =============================================
  {
    id: 17,
    src: work_17,
    category: "Web Applications",
    title: "JustParkwell Admin Dashboard",
    description: "Multi-country admin platform (React 18 + Vite) with Redux Toolkit (16 slices), role-based access (superadmin/country_superadmin/admin), PrimeReact data tables, 3 chart libraries (ApexCharts, Chart.js, Recharts), Google Maps, PDF export with jsPDF, and QR code management.",
    technologies: ["React", "Redux Toolkit", "Tailwind", "PrimeReact", "Vite"],
  },
  {
    id: 19,
    src: work_19,
    category: "Web Applications",
    title: "JustParkwell Partner Dashboard",
    description: "B2B partner dashboard (React 18 + Vite) with Redux Toolkit (21 slices), JWT token refresh interceptor, multi-payment (Paystack + Stripe), i18n (EN/FR), Firebase social login, Senegal-specific clamping tickets, onboarding flow, and Cloudinary image uploads.",
    technologies: ["React", "Redux Toolkit", "Tailwind", "i18next", "Stripe", "Paystack"],
  },
  {
    id: 37,
    src: work_17,
    category: "Web Applications",
    title: "JustParkwell User Web",
    description: "Customer-facing parking web app (React 18 + Vite 6) with Redux Toolkit + React Query dual state, multi-payment (Paystack/Stripe/Wave), IP-based country auto-detection, Contentful CMS blog, WebSocket real-time updates, Sentry monitoring, and i18n (EN/FR).",
    technologies: ["React", "Redux Toolkit", "React Query", "Tailwind", "Sentry"],
  },
  {
    id: 38,
    src: work_17,
    category: "Web Applications",
    title: "JustParkwell FastAPI Backend",
    description: "Production backend (FastAPI + SQLAlchemy 2) serving all JustParkwell clients. Multi-tenant country-scoped architecture, Celery + Redis task queue, multi-payment gateway (Stripe/Paystack/Wave) with webhook verification, wallet system with financial transactions, role-based access (6 roles), and Alembic migrations.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "Celery", "Redis", "PostgreSQL"],
  },
  {
    id: 21,
    src: work_21,
    category: "Web Applications",
    title: "CityPark Web",
    description: "Municipal parking admin dashboard for city authorities — zone analytics, enforcement monitoring, and occupancy reporting.",
    technologies: ["Next.js", "Laravel"],
  },
  {
    id: 23,
    src: work_23,
    category: "Web Applications",
    title: "CityPark Partner Web",
    description: "Web management panel for CityPark operating partners with booking management and revenue tracking.",
    technologies: ["Next.js", "Laravel"],
  },
  {
    id: 25,
    src: work_25,
    category: "Web Applications",
    title: "Crafflux Admin Dashboard",
    description: "Admin platform for managing artisan bookings, earnings, user moderation, and platform-wide analytics.",
    technologies: ["Next.js", "Laravel"],
  },
  {
    id: 15,
    src: work_15,
    category: "Web Applications",
    title: "TastyTokens Web & Admin",
    description: "Marketing site, admin dashboard, and Contentful-powered blog for the TastyTokens loyalty platform.",
    technologies: ["Next.js", "Contentful", "React"],
  },
  {
    id: 13,
    src: work_13,
    category: "Web Applications",
    title: "Ticketloope",
    description: "Event ticketing platform with role-based dashboards for organizers and attendees, real-time e-ticket generation with QR codes, and SSR for SEO.",
    technologies: ["Next.js", "React", "TailwindCSS"],
  },
  {
    id: 29,
    src: work_29,
    category: "Web Applications",
    title: "FoodpreneursHub LMS",
    description: "Learning management system (Next.js 15 + React 19 + TypeScript) with Zustand + React Query state, Radix UI component library, react-hook-form + Zod validation, FFmpeg video processing, Paystack payments, Google OAuth via next-auth, and ApexCharts analytics.",
    technologies: ["Next.js 15", "TypeScript", "Zustand", "Radix UI", "Paystack"],
  },
  {
    id: 39,
    src: work_29,
    category: "Web Applications",
    title: "Foursquare Convention API",
    description: "Laravel 11 REST API serving mobile and admin clients. Sanctum token auth, PostgreSQL with custom boolean trait (9 models), dual payment integration (Paystack + Remita RRR), Cloudinary image management, custom Mailtrap transport, and 7 Artisan commands.",
    technologies: ["Laravel 11", "PostgreSQL", "Sanctum", "Paystack", "Pest PHP"],
  },
  {
    id: 30,
    src: work_30,
    category: "Web Applications",
    title: "BL E-commerce",
    description: "E-commerce platform with product catalog, cart system, and secure Stripe checkout integration.",
    technologies: ["Next.js", "React", "Stripe"],
  },
  {
    id: 8,
    src: work_8,
    category: "Web Applications",
    title: "WareFlow Dashboard",
    description: "Warehouse management dashboard (Next.js 14 + TypeScript) with Zustand + React Query, ReactFlow diagram builder, dual map support (Google + Leaflet), TanStack Table, 4 chart libraries, drag-and-drop via dnd-kit, rich text editing (CKEditor + Quill), and i18n (EN/BN/AR).",
    technologies: ["Next.js 14", "TypeScript", "Zustand", "ReactFlow", "TanStack"],
  },
  {
    id: 3,
    src: work_3,
    category: "Web Applications",
    title: "Education Platform",
    description: "E-learning platform with interactive courses, quizzes, and Firebase-backed real-time data.",
    technologies: ["Angular", "Firebase", "TypeScript"],
  },
  {
    id: 4,
    src: work_4,
    category: "Web Applications",
    title: "Orangevfx Website",
    description: "Portfolio website for a VFX production studio with video showcases and project galleries.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    src: work_9,
    category: "Web Applications",
    title: "Parastatal Website",
    description: "Government parastatal website for public services with PHP backend and MySQL database.",
    technologies: ["PHP", "Bootstrap", "MySQL"],
  },
  {
    id: 10,
    src: work_10,
    category: "Web Applications",
    title: "Inventory Management System",
    description: "Web-based inventory tracking system with analytics dashboard, Express REST API, and PostgreSQL data layer.",
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
    description: "CI/CD pipelines using Shorebird for Flutter OTA hotfixes (90% faster patch delivery), Xcode Cloud for iOS builds, Apple Transporter for App Store uploads, and EAS Build for Expo apps.",
    technologies: ["Shorebird", "Xcode Cloud", "EAS Build", "Transporter"],
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
    description: "Automated deployment pipeline for Next.js static export to shared hosting using GitHub Actions.",
    technologies: ["Next.js", "GitHub Actions", "FTP"],
    url: "https://ideosphere.africa"
  },
  {
    id: 33,
    src: work_33,
    category: "CI/CD & Deployment Automation",
    title: "TheCorporation Website",
    description: "CI/CD for Gatsby site with automated cPanel deployment triggered on push to main.",
    technologies: ["Gatsby", "GitHub Actions", "FTP"],
    url: "https://thecorporation.africa"
  },
  {
    id: 34,
    src: work_34,
    category: "CI/CD & Deployment Automation",
    title: "Digitalesque Website",
    description: "Automated Gatsby static site deployment via GitHub Actions and FTP.",
    technologies: ["Gatsby", "GitHub Actions", "FTP"],
    url: "https://digitalesque.africa"
  },
];

export const getProjectById = (id) => projectsData.find(project => project.id === id);
