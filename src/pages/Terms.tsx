import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service – MirexTech</title>
        <meta name="description" content="Terms of service for using MirexTech's website and services." />
      </Helmet>
      <section className="py-20 px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none">
            <p><strong>Last updated:</strong> July 2026</p>
            <p>
              Welcome to MirexTech. By using our website and services, you agree to comply with and be bound by the following terms and conditions.
            </p>
            <h2>Use of Our Services</h2>
            <p>
              You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account and password.
            </p>
            <h2>Intellectual Property</h2>
            <p>
              All content, logos, designs, and software on this website are the property of MirexTech and are protected by copyright and trademark laws.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              MirexTech is not liable for any damages arising from the use of our services, including but not limited to direct, indirect, incidental, or consequential damages.
            </p>
            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Kanpur, Uttar Pradesh.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}