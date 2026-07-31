// Re-export all data types from data files
export type {
  Project,
  ServiceItem,
  ServiceCategory,
  BlogPost,
  JobOpening,
  FAQItem,
  Industry,
  Testimonial,
  NavLink,
} from '@/data';

// Additional application-specific types can be defined here if needed

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PricingPlan {
  id: string;
  titleKey: string;
  descKey: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}