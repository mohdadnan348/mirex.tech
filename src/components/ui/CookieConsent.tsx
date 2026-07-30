"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("mirex-cookies-consent");
    if (!consent) {
      // Small timeout to show banner after page hydrations
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("mirex-cookies-consent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-50 animate-slide-up">
      <div className="p-6 rounded-2xl glass-panel bg-background-light/95 dark:bg-background-dark/95 border border-violet-500/20 shadow-2xl flex flex-col gap-4">
        <div>
          <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Cookie Preferences</h5>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            We use cookies to improve user experience, analyze site usage, and support our SMM marketing metrics. By clicking &quot;Accept All&quot;, you consent to our terms.
          </p>
        </div>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => setShowBanner(false)}
            className="px-4 py-2 text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            Decline
          </button>
          <Button onClick={handleAccept} size="sm">
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}
