import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { texts } from '@/data/translationData';

export default function Contact() {
  const { contact } = texts;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact MirexTech – Get a Free Consultation</title>
        <meta name="description" content="Contact MirexTech for AI-powered software, web development, and digital marketing solutions." />
      </Helmet>
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
          >
            {contact.title}
          </motion.h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">{contact.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{contact.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{contact.subject}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{contact.message}</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <AnimatedButton type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Sending...' : contact.send}
                </AnimatedButton>
                {status === 'success' && (
                  <p className="text-green-400 text-sm">{contact.success}</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm">{contact.error}</p>
                )}
              </form>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <GlassCard className="p-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p>
                    <a href="mailto:hello.mirextech@gmail.com" className="hover:text-cyan-400 transition-colors">
                      hello.mirextech@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-violet-400" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p>
                    <a href="tel:+916389709762" className="hover:text-violet-400 transition-colors">
                      +91 63897 09762
                    </a>
                  </p>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-pink-400" />
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p>Kanpur, Uttar Pradesh, India</p>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-semibold mb-2">Book a Free Consultation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule a call with our team to discuss your project.
              </p>
              <a href="tel:+916389709762" className="block">
                <AnimatedButton variant="outline" className="w-full">
                  {contact.meeting}
                </AnimatedButton>
              </a>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}