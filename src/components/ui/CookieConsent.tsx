import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedButton } from './AnimatedButton';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  const decline = () => {
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 glass border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your experience. By continuing, you agree to our privacy policy.
            </p>
            <div className="flex gap-3">
              <AnimatedButton variant="outline" size="sm" onClick={decline}>
                Decline
              </AnimatedButton>
              <AnimatedButton size="sm" onClick={accept}>
                Accept
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}