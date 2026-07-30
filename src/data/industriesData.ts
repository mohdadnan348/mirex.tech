export interface Industry {
  name: string;
  description: string;
  iconName: string; // Lucide icon mapping name
}

export const industries: Industry[] = [
  {
    name: "Healthcare",
    description: "Custom Patient portals, telemedicine portals, and secure cloud storage complying with data protection.",
    iconName: "Activity"
  },
  {
    name: "Education",
    description: "School ERP systems, student trackers, result generators, and React Native mobile portals.",
    iconName: "GraduationCap"
  },
  {
    name: "Restaurant",
    description: "Digital QR menus, automated POS integrations, client reservations, and WhatsApp alerts.",
    iconName: "Utensils"
  },
  {
    name: "Real Estate",
    description: "High-end interactive property galleries, filtering systems, and direct agent booking systems.",
    iconName: "Home"
  },
  {
    name: "Travel & Tourism",
    description: "Automated booking managers, itinerary calculators, and reviews directories.",
    iconName: "Compass"
  },
  {
    name: "Finance",
    description: "Secure ledger tracking dashboards, automated invoicing, and role-based client portals.",
    iconName: "Landmark"
  },
  {
    name: "Retail & E-commerce",
    description: "Custom storefronts with advanced search, cart hydrations, and EmailJS checkout inquiries.",
    iconName: "ShoppingBag"
  }
];
