"use client";

import React from "react";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/916389709762?text=Hi%20MirexTech,%20I%20am%20interested%20in%20your%20services!";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Contact MirexTech on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75 pointer-events-none" />
      {/* Custom Vector WhatsApp SVG Icon */}
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        className="w-6 h-6 relative z-10"
      >
        <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.459 3.479 1.332 4.992L2 22l5.178-1.358a9.928 9.928 0 004.834 1.258h.005c5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm5.836 14.199c-.24.675-1.397 1.278-1.928 1.353-.473.067-.936.142-3.037-.683-2.684-1.054-4.398-3.79-4.532-3.97-.13-.178-1.077-1.433-1.077-2.736 0-1.303.682-1.942.923-2.213.24-.271.533-.338.71-.338.178 0 .356.004.512.013.16.009.373-.062.583.444.218.528.747 1.821.813 1.954.067.133.111.289.022.466-.089.178-.133.311-.267.467-.133.156-.28.347-.399.467-.133.133-.271.28-.116.547.155.267.689 1.133 1.476 1.831.996.884 1.831 1.156 2.098 1.289.267.133.422.111.578-.067.156-.178.667-.778.844-1.044.178-.267.356-.222.597-.133.24.089 1.52.716 1.787.849.267.133.444.2.511.311.067.111.067.644-.173 1.319z" />
      </svg>
      <span className="absolute left-14 bottom-3 bg-gray-900 text-white text-xs px-2.5 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
