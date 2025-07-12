'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] w-full border-t border-[#2a2a2a] px-6 py-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        {/* Back Button */}
        <button className="w-full sm:w-auto border border-[#fbbf24] text-white font-medium px-6 py-3 rounded-full hover:bg-[#fbbf24] hover:text-black transition duration-300">
          Back
        </button>

        {/* Next Button */}
        <button className="w-full sm:w-auto bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition duration-300">
          Next <span className="ml-1">{'>>'}</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
