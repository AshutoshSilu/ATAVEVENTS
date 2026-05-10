import { Injectable, signal } from '@angular/core';
import { CarouselSlide, EventItem, Testimonial } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventDataService {
  private readonly eventsSignal = signal<EventItem[]>([
    {
      id: 1,
      title: 'Live Singing Show',
      category: 'Singing',
      description: 'Soulful vocal performances, stage lighting, and audience-first production for unforgettable evenings.',
      date: '22 Jun 2026',
      location: 'Ahmedabad Arena',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
      accent: 'from-rose-500 to-orange-400'
    },
    {
      id: 2,
      title: 'Karaoke Show',
      category: 'Singing',
      description: 'Interactive karaoke lounges with host-led activities, crystal-clear sound, and custom playlists.',
      date: '05 Jul 2026',
      location: 'Skyline Club',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80',
      accent: 'from-fuchsia-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Garba Night',
      category: 'Celebrations',
      description: 'Traditional rhythms, premium decor, curated artists, and energetic crowd experiences.',
      date: '18 Oct 2026',
      location: 'Riverside Grounds',
      image: 'https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=900&q=80',
      accent: 'from-amber-400 to-red-500'
    },
    {
      id: 4,
      title: 'Holi Celebrations',
      category: 'Celebrations',
      description: 'Color zones, rain dance, celebrity DJs, food courts, and safe family-friendly arrangements.',
      date: '03 Mar 2027',
      location: 'Celebration Lawns',
      image: 'https://images.unsplash.com/photo-1554232456-8727aae0cfa4?auto=format&fit=crop&w=900&q=80',
      accent: 'from-cyan-400 to-violet-500'
    },
    {
      id: 5,
      title: 'New Year Celebrations',
      category: 'Celebrations',
      description: 'Countdown stages, VIP lounges, fireworks, premium hospitality, and all-night entertainment.',
      date: '31 Dec 2026',
      location: 'Grand Sapphire Hotel',
      image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=900&q=80',
      accent: 'from-purple-500 to-yellow-400'
    },
    {
      id: 6,
      title: 'Corporate Events',
      category: 'Events',
      description: 'Brand launches, conferences, team offsites, award nights, and end-to-end event operations.',
      date: '14 Aug 2026',
      location: 'Convention Center',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80',
      accent: 'from-blue-500 to-cyan-400'
    },
    {
      id: 7,
      title: 'Live DJ',
      category: 'Events',
      description: 'High-energy DJ nights with LED walls, pro audio, lighting rigs, and crowd-safe layouts.',
      date: '29 Aug 2026',
      location: 'Neon Warehouse',
      image: 'https://images.unsplash.com/photo-1571266028243-d220c9c3b31a?auto=format&fit=crop&w=900&q=80',
      accent: 'from-indigo-500 to-fuchsia-500'
    },
    {
      id: 8,
      title: 'Live Dance Events',
      category: 'Events',
      description: 'Choreographed showcases, cultural dance productions, and immersive performance design.',
      date: '16 Sep 2026',
      location: 'City Performing Hall',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=80',
      accent: 'from-teal-400 to-emerald-500'
    },
    {
      id: 9,
      title: 'Marriage Events',
      category: 'Events',
      description: 'Luxury wedding planning, artist management, decor concepts, logistics, and guest hospitality.',
      date: '10 Dec 2026',
      location: 'Royal Orchid Palace',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
      accent: 'from-rose-400 to-violet-500'
    }
  ]);

  readonly carouselSlides: CarouselSlide[] = [
    {
      title: 'Cultural Events',
      tagline: 'Tradition with a premium stage presence.',
      description: 'From Garba nights to festive showcases, we craft culturally rich moments with modern production quality.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
      badge: 'Festive Experiences'
    },
    {
      title: 'Corporate Events',
      tagline: 'Impress teams, clients, and leadership.',
      description: 'Launches, conferences, offsites, and award nights managed with strategy, polish, and precision.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      badge: 'Brand Moments'
    },
    {
      title: 'DJ Nights',
      tagline: 'Bass, lights, energy, and flawless flow.',
      description: 'We combine elite artists, immersive lighting, and crowd-friendly layouts for electric nightlife.',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80',
      badge: 'Nightlife Production'
    },
    {
      title: 'Live Shows',
      tagline: 'Designed for applause and lasting memories.',
      description: 'Concerts, dance productions, celebrity shows, and audience engagement built end-to-end.',
      image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=80',
      badge: 'Stage Excellence'
    }
  ];

  readonly testimonials: Testimonial[] = [
    {
      name: 'Riya Shah',
      role: 'Brand Manager',
      quote: 'AtAv Events transformed our product launch into a premium experience with zero chaos and incredible attention to detail.',
      rating: 5
    },
    {
      name: 'Karan Mehta',
      role: 'Wedding Client',
      quote: 'The team made our wedding celebration feel luxurious, personal, and perfectly coordinated from start to finish.',
      rating: 5
    },
    {
      name: 'Anaya Patel',
      role: 'Festival Organizer',
      quote: 'Their stage design, artist coordination, and crowd management gave our Garba night the wow factor it needed.',
      rating: 5
    }
  ];

  getEvents(): EventItem[] {
    return this.eventsSignal();
  }

  getFeaturedEvents(): EventItem[] {
    return this.eventsSignal().slice(0, 4);
  }

  getCategories(): string[] {
    return [...new Set(this.eventsSignal().map((event) => event.category))];
  }
}
