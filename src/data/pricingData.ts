export interface PricingPlan {
  id: string;
  name: string;
  summary: string;
  priceLabel: string;
  inclusions: string[];
  note: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Website',
    summary: 'A focused online presence for a new or small business.',
    priceLabel: 'Custom quotation',
    inclusions: ['Discovery and page structure', 'Responsive website design', 'Contact or enquiry form', 'Basic on-page SEO setup', 'Launch handover'],
    note: 'Final scope depends on page count, content and integrations.'
  },
  {
    id: 'business',
    name: 'Business Website',
    summary: 'A richer website for businesses that need more content and lead pathways.',
    priceLabel: 'Custom quotation',
    inclusions: ['Everything in Starter', 'Additional service or product pages', 'Lead capture and conversion sections', 'Analytics setup when access is provided', 'Agreed post-launch support'],
    note: 'Content production, paid tools and third-party subscriptions are scoped separately.'
  },
  {
    id: 'premium',
    name: 'Premium Website',
    summary: 'A richer digital experience for brands with complex content, integrations or custom journeys.',
    priceLabel: 'Custom quotation',
    inclusions: ['Everything in Business Website', 'Advanced page layouts and interactions', 'Custom forms or integrations', 'Performance and accessibility review', 'Launch and handover support'],
    note: 'Third-party licences, hosting and ongoing content work are scoped separately.'
  },
  {
    id: 'custom',
    name: 'Custom Software / ERP / CRM',
    summary: 'A tailored application built around your operations and user roles.',
    priceLabel: 'Discovery-led quotation',
    inclusions: ['Requirements and workflow mapping', 'Architecture and database planning', 'Role-based modules and dashboards', 'API and integration planning', 'Testing and deployment support'],
    note: 'Mobile applications and complex integrations are estimated after discovery.'
  },
  {
    id: 'mobile',
    name: 'Mobile Applications',
    summary: 'Cross-platform mobile apps planned around your users, features and backend services.',
    priceLabel: 'Discovery-led quotation',
    inclusions: ['Feature and user-flow planning', 'Cross-platform application development', 'API and authentication integration', 'Testing on agreed devices', 'Release preparation and handover'],
    note: 'Store accounts, paid services and post-launch maintenance are scoped separately.'
  }
];
