import { FaWhatsapp } from 'react-icons/fa';

const phoneNumber = '+916389709762';

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 z-40 p-4 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </a>
  );
}