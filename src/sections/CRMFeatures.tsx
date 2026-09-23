import { motion } from 'framer-motion';
import {
  Users,
  UserRoundSearch,
  TrendingUp,
  FileText,
  Receipt,
  Package,
  ListTodo,
  PhoneCall,
  BarChart3,
  MessageCircle,
  Mail,
  CreditCard,
  ShieldCheck,
  FileCheck2,
  Bell,
  Settings2,
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Customer Management',
    description:
      'Centralize customer profiles, contact details, history, activities and important business information.',
  },
  {
    icon: UserRoundSearch,
    title: 'Lead Management',
    description:
      'Capture, organize and track leads from enquiry to conversion with a structured sales workflow.',
  },
  {
    icon: TrendingUp,
    title: 'Sales Pipeline',
    description:
      'Track opportunities, sales stages, follow-ups and deals so your team always knows what comes next.',
  },
  {
    icon: FileText,
    title: 'Quotation Management',
    description:
      'Create, manage and track professional quotations according to your products, services and business rules.',
  },
  {
    icon: Receipt,
    title: 'Invoice & Billing',
    description:
      'Manage invoices, billing information, payment status and transaction history from one place.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description:
      'Track products, stock levels, stock movement and inventory information according to your workflow.',
  },
  {
    icon: ListTodo,
    title: 'Tasks & Follow-ups',
    description:
      'Assign tasks, schedule follow-ups and keep your team organized with centralized activity management.',
  },
  {
    icon: PhoneCall,
    title: 'Communication',
    description:
      'Keep customer communication and business activities organized for better team coordination.',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    description:
      'Get meaningful business insights through dashboards, reports, performance metrics and analytics.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    description:
      'Connect supported WhatsApp workflows to communicate with customers and manage business interactions.',
  },
  {
    icon: Mail,
    title: 'Email Integration',
    description:
      'Connect email communication with your CRM workflow for organized customer and business communication.',
  },
  {
    icon: CreditCard,
    title: 'Payment Management',
    description:
      'Track payment information, outstanding amounts, transaction status and business collections.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-Based Access',
    description:
      'Control what admins, managers, sales teams and staff can access within your CRM.',
  },
  {
    icon: FileCheck2,
    title: 'Document Management',
    description:
      'Keep business documents organized and accessible within relevant customer and operational workflows.',
  },
  {
    icon: Bell,
    title: 'Notifications',
    description:
      'Keep teams informed about important tasks, follow-ups, activities and business updates.',
  },
  {
    icon: Settings2,
    title: 'Custom Modules',
    description:
      'Add custom fields, modules and workflows according to your specific business requirements.',
  },
];

export default function CRMFeatures() {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-[-10%] w-[350px] h-[350px] rounded-full bg-violet-500/5 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full glass border border-violet-400/20 text-xs font-medium text-violet-400 uppercase tracking-wider">
            Powerful CRM Features
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="gradient-text">
              Everything Your Business Needs
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            From leads and customers to sales, billing, communication and
            analytics — build the CRM around the way your business operates.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-12 md:mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                <div className="relative h-full glass rounded-2xl border border-white/10 p-5 md:p-6 group-hover:border-cyan-400/20 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/10 to-violet-500/10 border border-white/5 flex items-center justify-center group-hover:border-cyan-400/20 transition-colors">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-base md:text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Customization Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-10 md:mt-14"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-violet-500/5 to-cyan-400/5 rounded-3xl blur-xl" />

          <div className="relative glass rounded-3xl border border-cyan-400/10 p-6 md:p-8 text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 border border-cyan-400/20 flex items-center justify-center">
              <Settings2 className="w-6 h-6 text-cyan-400" />
            </div>

            <h3 className="mt-5 text-xl md:text-2xl font-bold">
              Need Something More Specific?
            </h3>

            <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed">
              Your business may need features that are not available in a
              standard CRM. We can create custom modules, fields, workflows
              and integrations according to your requirements.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-5">
              {[
                'Custom Modules',
                'Custom Workflows',
                'Custom Fields',
                'API Integrations',
                'Business Automation',
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full text-xs border border-white/10 bg-white/[0.02] text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}