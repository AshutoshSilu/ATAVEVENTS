export interface EventItem {
  id: number;
  title: string;
  category: 'Singing' | 'Celebrations' | 'Events';
  description: string;
  date: string;
  location: string;
  image: string;
  accent: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface CarouselSlide {
  title: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
}
