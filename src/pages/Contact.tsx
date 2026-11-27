import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { useState } from 'react';
import emailjs from 'emailjs-com';

type FormStatus = 'idle' | 'success' | 'error';

const contactParams = new URLSearchParams(window.location.search);
const initialForm = {
  name: '', email: '', phone: '', company: '',
  service: contactParams.get('service') || '',
  budget: contactParams.get('budget') || '',
  message: contactParams.get('message') || '',
  preferredContact: 'WhatsApp',
};

const inputClass = 'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-cyan-500';
const labelClass = 'mb-1.5 block text-sm font-medium';

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [website, setWebsite] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (website) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) || formData.phone.replace(/\D/g, '').length < 10) {
      setStatus('error');
      return;
    }
    setIsSubmitting(true);
    setStatus('idle');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Project enquiry – ${formData.service || 'MirexTech'}`);
      const body = encodeURIComponent([
        `Name: ${formData.name}`, `Email: ${formData.email}`, `Phone: ${formData.phone}`,
        `Company: ${formData.company}`, `Service: ${formData.service}`, `Budget: ${formData.budget}`,
        `Preferred contact: ${formData.preferredContact}`, '', formData.message,
      ].join('\\n'));
      window.location.href = `mailto:hello.mirextech@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      setStatus('success');
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        preferred_contact: formData.preferredContact,
        subject: `New project enquiry${formData.company ? ` — ${formData.company}` : ''}`,
        message: formData.message,
        reply_to: formData.email,
      }, publicKey);
      setStatus('success');
      setFormData(initialForm);
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact MirexTech | Discuss Your Software Project</title>
        <meta name="description" content="Talk to MirexTech about website development, custom software, ERP/CRM, mobile apps and AI automation. Share your project requirements and request a quotation." />
        <link rel="canonical" href="https://mirextech.in/contact" />
      </Helmet>
      <section className="mx-auto max-w-6xl px-4 py-24 md:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-500">Start a conversation</p>
          <motion.h1 initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="mb-5 text-4xl font-bold md:text-6xl">
            Tell us what you want to build.
          </motion.h1>
          <p className="max-w-2xl text-muted-foreground">
            Share a little about your business and project. We’ll review the details and get back to you using your preferred contact method.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <GlassCard className="p-5 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
                <label htmlFor="website">Leave this field empty</label>
                <input id="website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className={labelClass} htmlFor="name">Full name *</label><input id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass} autoComplete="name" required /></div>
                <div><label className={labelClass} htmlFor="email">Business email *</label><input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className={inputClass} autoComplete="email" required /></div>
                <div><label className={labelClass} htmlFor="phone">Phone / WhatsApp *</label><input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass} autoComplete="tel" required /></div>
                <div><label className={labelClass} htmlFor="company">Company name</label><input id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} autoComplete="organization" /></div>
                <div><label className={labelClass} htmlFor="service">Service required *</label><select id="service" name="service" value={formData.service} onChange={handleChange} className={inputClass} required><option value="">Select a service</option>{formData.service && !['Website Development','E-commerce Development','Custom Software','Mobile App Development','ERP / CRM','AI Chatbot / Automation','API Integration','SEO / Digital Marketing','UI/UX Design','Maintenance & Support','Other'].includes(formData.service) && <option value={formData.service}>{formData.service}</option>}{['Website Development' ,'E-commerce Development','Custom Software','Mobile App Development','ERP / CRM','AI Chatbot / Automation','API Integration','SEO / Digital Marketing','UI/UX Design','Maintenance & Support','Other'].map((item) => <option key={item}>{item}</option>)}</select></div>
                <div><label className={labelClass} htmlFor="budget">Estimated project budget</label><select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={inputClass}><option value="">Choose a range</option>{['Below ₹25,000','₹25,000–₹50,000','₹50,000–₹1,00,000','₹1,00,000–₹3,00,000','₹3,00,000+','Need guidance'].map((item) => <option key={item}>{item}</option>)}</select></div>
              </div>
              <div><label className={labelClass} htmlFor="message">Project description *</label><textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className={inputClass} placeholder="What are you trying to build? Include key features, users, or any reference links." required /></div>
              <div><label className={labelClass} htmlFor="preferredContact">Preferred contact method</label><select id="preferredContact" name="preferredContact" value={formData.preferredContact} onChange={handleChange} className={inputClass}><option>WhatsApp</option><option>Phone call</option><option>Email</option></select></div>
              <AnimatedButton type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending enquiry…' : 'Send project enquiry'}
              </AnimatedButton>
              {status === 'success' && <p role="status" className="text-sm text-green-500">Your enquiry is ready. If your email app opened, please send the prefilled message. Thank you.</p>}
              {status === 'error' && <p role="alert" className="text-sm text-red-500">We couldn’t send your enquiry. Please try again or contact us directly by WhatsApp or email.</p>}
              <p className="text-xs text-muted-foreground">Your details are used to respond to this project enquiry. Please do not include passwords or sensitive personal information.</p>
            </form>
          </GlassCard>

          <div className="space-y-4">
            <GlassCard className="p-6"><div className="flex items-start gap-4"><Mail className="mt-1 h-5 w-5 text-cyan-500" /><div><p className="font-semibold">Email</p><a className="text-sm text-muted-foreground" href="mailto:hello.mirextech@gmail.com">hello.mirextech@gmail.com</a></div></div></GlassCard>
            <GlassCard className="p-6"><div className="flex items-start gap-4"><Phone className="mt-1 h-5 w-5 text-cyan-500" /><div><p className="font-semibold">Phone</p><a className="text-sm text-muted-foreground" href="tel:+919336176580">+91 9336176580</a></div></div></GlassCard>
            <GlassCard className="p-6"><div className="flex items-start gap-4"><MapPin className="mt-1 h-5 w-5 text-cyan-500" /><div><p className="font-semibold">Location</p><p className="text-sm text-muted-foreground">Kanpur, Uttar Pradesh, India</p></div></div></GlassCard>
            <GlassCard className="p-6"><div className="flex items-start gap-4"><MessageCircle className="mt-1 h-5 w-5 text-green-500" /><div><p className="font-semibold">Prefer WhatsApp?</p><p className="mb-3 text-sm text-muted-foreground">Message us directly to discuss your requirements.</p><a className="text-sm font-semibold text-green-500" href="https://wa.me/919336176580?text=Hello%20MirexTech%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">Chat on WhatsApp ↗</a></div></div></GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}
