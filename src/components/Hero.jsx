import React from 'react';
import left_side_img from '../assets/left-side.png';

const Hero = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className=" mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={left_side_img}
            alt="Real Estate Tech"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-[500px] z-10 relative">
          <h2 className="text-sm text-gray-500 tracking-widest uppercase mb-2">
            Close With Confidence
          </h2>
          <h1 className="text-4xl md:text-4xl font-bold mb-6">
            AI assisted title and escrow onchain for real estate.
          </h1>
          <p className="text-gray-300 mb-8 text-[17px] leading-relaxed">
            Propy AI reduces human work by 40%. Deeds are recorded onchain to avoid fraud. Get full transparency on your home purchase 24/7, leveraging blockchain technology and AI to revolutionize closing transactions, ensuring unparalleled transparency and security.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 text-white px-10 py-3 text-base rounded hover:bg-blue-600 transition">
              GET STARTED
            </button>
            <button className="bg-white text-blue-500 px-10 py-3 text-base rounded hover:bg-gray-100 transition">
              BOOK A DEMO
            </button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[url('/usa-circuit-bg.svg')] bg-no-repeat bg-left bg-cover opacity-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
