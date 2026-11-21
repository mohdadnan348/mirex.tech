export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
  rating: number;
}

// Keep this collection empty until approved, attributable customer feedback is supplied.
export const testimonials: Testimonial[] = [];
