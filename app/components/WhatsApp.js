// WhatsApp click-to-chat. Number in international format, no spaces or leading zero.
export const WHATSAPP_NUMBER = '447570978359';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Mike, I found you on justblamemike.com and I'd like to chat about my business."
)}`;

export function WhatsAppIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.54 2 2.08 6.46 2.08 11.96c0 1.76.46 3.47 1.33 4.98L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.23h.01c5.5 0 9.96-4.46 9.96-9.96A9.96 9.96 0 0 0 12.04 2Zm0 18.18h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.09.81.83-3.01-.2-.31a8.24 8.24 0 0 1-1.26-4.38c0-4.56 3.71-8.27 8.28-8.27a8.27 8.27 0 0 1 8.26 8.28c0 4.56-3.71 8.27-8.26 8.27Z" />
    </svg>
  );
}

// Floating button, bottom-right on every page
export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Mike on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 flex items-center gap-2 rounded-full pl-4 pr-5 py-3.5 font-bold text-sm text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      style={{ background: '#1fa855', zIndex: 9000 }}
    >
      <WhatsAppIcon size={24} />
      <span className="hidden sm:inline">Message me</span>
    </a>
  );
}
