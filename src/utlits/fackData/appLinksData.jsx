import work_16 from "../../assets/images/projects/16.png";
import jpPartner1 from "../../assets/images/projects/justparkwell-partner1.png";
import ondgoFeatured from "../../assets/images/projects/ondgo-featured.png";
import fsqFeatured from "../../assets/images/projects/fsq-featured.png";

// Featured apps shown in the hero showcase (above the fold)
export const featuredApps = [
  {
    id: 1,
    name: "JustParkwell",
    tagline: "Multi-Country Smart Parking",
    image: work_16,
    bullets: [
      "4-country platform (NG, US, CA, SN) with Stripe + Paystack multi-gateway payments",
      "Hybrid Riverpod + GetX architecture, Google Maps with polyline directions & QR ticketing",
    ],
    tech: ["Flutter", "Riverpod", "GetX", "Stripe", "Paystack"],
    appStore: "https://apps.apple.com/in/app/justparkwell/id1596602474",
    playStore: "https://play.google.com/store/apps/details?id=ng.parkwell.user",
    projectId: 16,
  },
  {
    id: 2,
    name: "JustParkwell Partner",
    tagline: "B2B Park Management",
    image: jpPartner1,
    bullets: [
      "NFC tag read/write/debit for parking enforcement & validation",
      "Wallet & payout system, associate staff controls, multi-language (EN/FR)",
    ],
    tech: ["Flutter", "GetX", "NFC", "Firebase"],
    appStore: "https://apps.apple.com/in/app/justparkwell-partner/id1620877263",
    playStore: "https://play.google.com/store/apps/details?id=com.parkwell.partner",
    projectId: 18,
  },
  {
    id: 3,
    name: "onDgo",
    tagline: "Fintech Super App",
    image: ondgoFeatured,
    bullets: [
      "15+ services: wallets, flights (Crane + Videcom), bills, P2P transfers",
      "Riverpod code-gen, Freezed models, biometric auth, Sentry monitoring",
    ],
    tech: ["Flutter", "Riverpod", "Freezed", "Dio", "Sentry"],
    appStore: "https://apps.apple.com/in/app/ondgo/id1631542716",
    playStore: "https://play.google.com/store/search?q=ondgo&c=apps",
    projectId: 28,
  },
  {
    id: 4,
    name: "Foursquare Convention",
    tagline: "Event Platform",
    image: fsqFeatured,
    bullets: [
      "Expo SDK 53 + React 19, Redux Toolkit with offline persistence",
      "Remita payment via WebView, YouTube live streaming, QR event registration",
    ],
    tech: ["React Native", "Expo", "Redux Toolkit", "NativeWind"],
    playStore: "https://play.google.com/store/apps/details?id=com.justparkwell.foursquareappng",
    projectId: 11,
  },
];

// All app store links for the header Linktree dropdown
export const allAppLinks = [
  {
    id: 1,
    name: "JustParkwell",
    appStore: "https://apps.apple.com/in/app/justparkwell/id1596602474",
    playStore: "https://play.google.com/store/apps/details?id=ng.parkwell.user",
  },
  {
    id: 2,
    name: "JustParkwell Partner",
    appStore: "https://apps.apple.com/in/app/justparkwell-partner/id1620877263",
    playStore: "https://play.google.com/store/apps/details?id=com.parkwell.partner",
  },
  {
    id: 3,
    name: "CityPark",
    playStore: "https://play.google.com/store/apps/details?id=ng.citypark.user",
  },
  {
    id: 4,
    name: "CityPark Partner",
    playStore: "https://play.google.com/store/apps/details?id=com.citypark.partner",
  },
  {
    id: 5,
    name: "Crafflux",
    playStore: "https://play.google.com/store/apps/details?id=com.crafflux.user",
  },
  {
    id: 6,
    name: "Crafflux Artisan",
    playStore: "https://play.google.com/store/apps/details?id=com.crafflux.provider",
  },
  {
    id: 7,
    name: "Niply",
    playStore: "https://play.google.com/store/apps/details?id=com.niply.app",
  },
  {
    id: 8,
    name: "Ondgo",
    appStore: "https://apps.apple.com/in/app/ondgo/id1631542716",
    playStore: "https://play.google.com/store/search?q=ondgo&c=apps",
  },
  {
    id: 9,
    name: "Foursquare Convention",
    playStore: "https://play.google.com/store/apps/details?id=com.justparkwell.foursquareappng",
  },
  {
    id: 10,
    name: "WareFlow One",
    appStore: "https://apps.apple.com/in/app/wareflow-one/id6739953782",
  },
];
