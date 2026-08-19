export type Testimonial = {
  id: string;
  name: string;
  rating: number;
  review: string;
  destination?: string;
};

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Placeholder Customer 1",
    rating: 5,
    review: "Heaven Incarnate organized an incredible trip to Kerala for our family. Everything from the hotels to the transportation was seamless. Highly recommend their services!",
    destination: "Kerala Tour"
  },
  {
    id: "t2",
    name: "Placeholder Customer 2",
    rating: 5,
    review: "Our corporate offsite in Goa was perfectly managed by the team. They handled flights, accommodation, and event logistics flawlessly.",
    destination: "Corporate Travel"
  },
  {
    id: "t3",
    name: "Placeholder Customer 3",
    rating: 5,
    review: "We booked our honeymoon to Kashmir with Heaven Incarnate. The personalized itinerary and 24/7 support made our trip completely stress-free and memorable.",
    destination: "Kashmir Paradise"
  }
];
