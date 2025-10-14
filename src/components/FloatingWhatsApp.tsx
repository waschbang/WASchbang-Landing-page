const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-4 right-3 sm:right-6 z-50">
      <a
        href="https://wa.me/919999999999?text=Hi%20Schbang%2C%20I%27d%20like%20to%20chat"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="block"
      >
        <div className="w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp-dark transition-transform hover:scale-105 shadow-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor" aria-hidden>
            <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.1 1.6 5.89L0 24l6.28-1.64A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22a9.94 9.94 0 0 1-5.07-1.39l-.36-.21-3.73.97.99-3.63-.24-.37A9.94 9.94 0 0 1 2 12C2 6.49 6.49 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.51-4.49 10-10 10Zm5.63-7.64c-.31-.16-1.82-.9-2.1-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.96 1.2-.18.2-.36.23-.67.08-.31-.16-1.29-.48-2.46-1.53-.91-.8-1.53-1.79-1.71-2.1-.18-.31 0-.48.13-.64.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5l-.58-.01c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.47 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.1 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.82-.74 2.08-1.45.26-.71.26-1.32.18-1.45-.08-.13-.28-.2-.58-.36Z" />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
