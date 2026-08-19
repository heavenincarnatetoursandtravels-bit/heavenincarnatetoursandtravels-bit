export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  icon: string; // We'll map this to a Lucide icon component in the UI
  features: string[];
};

export const servicesData: Service[] = [
  {
    id: "hotel-reservations",
    title: "Hotel Reservations",
    shortDescription: "Find suitable and comfortable accommodation based on your destination, travel dates, preferences, and requirements.",
    icon: "Building2",
    features: [
      "Comfortable accommodation options",
      "Destination-based hotel selection",
      "Support with reservation coordination"
    ]
  },
  {
    id: "holiday-packages",
    title: "Holiday Packages",
    shortDescription: "Explore exciting destinations with thoughtfully planned packages covering accommodation, sightseeing, transportation, and other essential arrangements.",
    icon: "Map",
    features: [
      "Customized holiday itineraries",
      "Domestic tour packages",
      "Accommodation and transportation coordination"
    ]
  },
  {
    id: "transportation-services",
    title: "Transportation Services",
    shortDescription: "Travel conveniently with dependable transportation arrangements for local sightseeing, outstation journeys, airport transfers, and group travel.",
    icon: "Car",
    features: [
      "Local and outstation transportation",
      "Tour transportation arrangements",
      "Bus booking assistance"
    ]
  },
  {
    id: "group-tours",
    title: "Group Tours",
    shortDescription: "Enjoy organized group travel with customized itineraries, accommodation, transportation, sightseeing, and other travel arrangements.",
    icon: "Users",
    features: [
      "Family and group tour planning",
      "Group transportation coordination",
      "Customized group itineraries"
    ]
  },
  {
    id: "corporate-travel",
    title: "Corporate Travel Solutions",
    shortDescription: "Simplify business travel with professional arrangements tailored to your organization's accommodation, transportation, and travel requirements.",
    icon: "Briefcase",
    features: [
      "Corporate travel planning",
      "Business trip coordination",
      "Hotel and transportation arrangements"
    ]
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    shortDescription: "Enjoy convenient airport pickup and drop-off arrangements for a smooth and hassle-free start or end to your journey.",
    icon: "Car", // Assuming Car is okay for this, maybe Plane would be better but let's reuse Car or Map.
    features: [
      "Airport pickup arrangements",
      "Airport drop-off arrangements",
      "Pre-planned transfer coordination"
    ]
  }
];
