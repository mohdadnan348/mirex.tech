import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – MirexTech</title>
        <meta name="description" content="Privacy policy of MirexTech – how we collect, use, and protect your personal information." />
      </Helmet>
      <section className="py-20 px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p><strong>Last updated:</strong> July 2026</p>
            <p>
              MirexTech ("we", "us", "our") respects your privacy and is committed to protecting your personal data.
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
            <h2>Information We Collect</h2>
            <p>
              We collect personal data that you voluntarily provide to us through our contact forms, newsletters, or consultations.
              This may include your name, email address, phone number, and any other information you choose to provide.
            </p>
            <h2>How We Use Your Information</h2>
            <p>
              We use your information to respond to your inquiries, provide services, send marketing communications (with your consent),
              and improve our website and offerings.
            </p>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
            <h2>Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal data. Contact us at privacy@mirextech.com for any requests.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}