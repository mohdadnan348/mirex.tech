export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "CEO",
    company: "TechStart ERP Solutions",
    quote: "MirexTech built our entire ERP system in just 4 weeks. The custom AI integration they introduced has cut down our operational tracking costs by 30%. Highly recommended!",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Founder",
    company: "GlamUp Aylish Salon",
    quote: "The salon management application they developed doubled our client slot bookings. Their team also runs our social media marketing campaigns, bringing in quality localized leads.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Director",
    company: "HomeDecor India",
    quote: "Our wooden furniture business got a massive local SEO boost. Thanks to their structured schema optimization, we are ranking on Google's first page for 20+ competitive search keywords.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
  }
];