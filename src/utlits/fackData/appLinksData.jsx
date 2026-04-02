import work_16 from "../../assets/images/projects/16.png";
import jpPartner1 from "../../assets/images/projects/justparkwell-partner1.png";
import work_20 from "../../assets/images/projects/20.png";
import work_24 from "../../assets/images/projects/24.png";

// Featured apps shown in the hero showcase (above the fold)
export const featuredApps = [
  {
    id: 1,
    name: "JustParkwell",
    tagline: "AI-Powered Smart Parking",
    image: work_16,
    bullets: [
      "Real-time parking booking & enforcement across 3 countries",
      "Custom Google Maps SDK integration with geofencing & live tracking",
    ],
    tech: ["Flutter", "Laravel", "Google Maps SDK", "BLoC"],
    appStore: "https://apps.apple.com/in/app/justparkwell/id1596602474",
    playStore: "https://play.google.com/store/apps/details?id=ng.parkwell.user",
    projectId: 16,
  },
  {
    id: 2,
    name: "JustParkwell Partner",
    tagline: "Parking Facility Management",
    image: jpPartner1,
    bullets: [
      "Digitize parking operations with real-time bookings & revenue tracking",
      "Slot management, staff controls, and monetization tools for lot owners",
    ],
    tech: ["Flutter", "Laravel", "Firebase", "Shorebird"],
    appStore: "https://apps.apple.com/in/app/justparkwell-partner/id1620877263",
    playStore: "https://play.google.com/store/apps/details?id=com.parkwell.partner",
    projectId: 18,
  },
  {
    id: 3,
    name: "Crafflux",
    tagline: "On-Demand Artisan Services",
    image: work_24,
    bullets: [
      "Book trusted artisans with real-time availability & in-app chat",
      "Paystack integration processing 10M+ monthly transactions",
    ],
    tech: ["Flutter", "Laravel", "Firebase", "Paystack"],
    playStore: "https://play.google.com/store/apps/details?id=com.crafflux.user",
    projectId: 24,
  },
  {
    id: 4,
    name: "CityPark",
    tagline: "Smart City Parking",
    image: work_20,
    bullets: [
      "Government-grade parking platform for cities and citizens",
      "Enforcement workflows, zone management, and live occupancy data",
    ],
    tech: ["Flutter", "Laravel", "Google Maps SDK"],
    playStore: "https://play.google.com/store/apps/details?id=ng.citypark.user",
    projectId: 20,
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
