import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hero-pattern bg-cover bg-center text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <img src="/next.svg" alt="Morningside" className="h-8" />
          <div className="text-center">
            <div className="text-white-500">
              <span className="mr-2 text-white-500">📍</span> Address
              <p className="text-green-300">Nairobi, Kenya</p>
            </div>
            <div className="mt-2 text-white-500">
              <span className="mr-2 text-white-600">✉️</span> Contact
              <p className="text-green-300">info@siekay.ai</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-right">
          <a href="/privacy-policy" className="text-green-300 hover:underline">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/terms-of-service" className="text-green-300 hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;