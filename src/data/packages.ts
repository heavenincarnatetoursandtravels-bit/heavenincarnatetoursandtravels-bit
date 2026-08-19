export type Package = {
  id: string;
  title: string;
  duration: string;
  destinations: string;
  highlights: string[];
  startingPrice: string;
  image: string;
  imageAlt?: string;
  seoTitle?: string;
  primaryKeyword?: string;
  featured: boolean;
};

export const packagesData: Package[] = [
  {
    id: "kerala-escape",
    title: "Kerala Escape",
    duration: "5 Days / 4 Nights",
    destinations: "Munnar • Thekkady • Alleppey",
    highlights: ["Tea Gardens", "Wildlife Sanctuary", "Houseboat Stay"],
    startingPrice: "On Request",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Kerala backwaters holiday package",
    seoTitle: "Kerala Tour Packages from Chennai | Heaven Incarnate",
    primaryKeyword: "Kerala Tour Packages from Chennai",
    featured: true,
  },
  {
    id: "kashmir-paradise",
    title: "Kashmir Paradise",
    duration: "6 Days / 5 Nights",
    destinations: "Srinagar • Gulmarg • Pahalgam",
    highlights: ["Dal Lake Shikara", "Gondola Ride", "Saffron Fields"],
    startingPrice: "On Request",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Kashmir paradise tour package",
    seoTitle: "Kashmir Tour Packages from Chennai | Heaven Incarnate",
    primaryKeyword: "Kashmir Tour Packages from Chennai",
    featured: true,
  },
  {
    id: "goa-getaway",
    title: "Goa Getaway",
    duration: "4 Days / 3 Nights",
    destinations: "North Goa • South Goa",
    highlights: ["Beaches", "Leisure", "Sightseeing"],
    startingPrice: "On Request",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Goa beach holiday package",
    seoTitle: "Goa Tour Packages from Chennai | Heaven Incarnate",
    primaryKeyword: "Goa Tour Packages from Chennai",
    featured: true,
  },
  {
    id: "ooty-kodaikanal",
    title: "Ooty & Kodaikanal",
    duration: "5 Days / 4 Nights",
    destinations: "Ooty • Kodaikanal",
    highlights: ["Nature", "Hills", "Sightseeing"],
    startingPrice: "On Request",
    image: "https://images.unsplash.com/photo-1596423735880-5f2a689b903e?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Ooty and Kodaikanal hill station tour package",
    seoTitle: "Kodaikanal Tour Packages from Chennai | Heaven Incarnate",
    primaryKeyword: "Kodaikanal Tour Packages from Chennai",
    featured: true,
  }
];
