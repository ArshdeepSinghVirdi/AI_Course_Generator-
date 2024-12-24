"use client";
import React, { useState, useEffect } from "react";
import Features from "./Features";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-90" />
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center min-h-screen">
        <div className="mx-auto max-w-xl text-center">
          <div className="animate-slideDown">
            <h1 data-aos="fade-down" data-aos-delay="200" className="text-3xl font-extrabold sm:text-5xl">
              <span data-aos="fade-up" data-aos-delay="200" className="text-white">AI Course Generator</span>
              <strong className="mt-2 block font-extrabold text-orange-400">
                Custom Learning Paths, Powered by AI
              </strong>
            </h1>
          </div>

          <p className="mt-4 text-gray-200 sm:text-xl/relaxed animate-slideDown animation-delay-200">
            Unlock personalized education with AI-driven course creation. Tailor
            your learning journey to fit your unique goals and pace.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-slideDown animation-delay-300">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 active:bg-orange-700 transition-all duration-200 hover:scale-105 sm:w-auto"
              href="/dashboard"
            >
              Get Started
            </a>
            <button
              onClick={toggleDialog}
              className="block w-full rounded border-2 border-white px-12 py-3 text-sm font-medium text-white shadow hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white active:bg-white/20 transition-all duration-200 hover:scale-105 sm:w-auto"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleDialog} />
          <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
            <button
              onClick={toggleDialog}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Welcome to CourseSphere</h2>
            <p className="text-gray-700 mb-4">
              At CourseSphere, we believe in revolutionizing the way you learn. With our AI-powered course generator, we offer a seamless and customized educational experience tailored to your unique goals and pace.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li><strong>AI-Powered Personalization:</strong> Curated learning paths based on your goals.</li>
              <li><strong>Endless Customization:</strong> Modify course content and topics to suit your needs.</li>
              <li><strong>24/7 Support:</strong> Get help whenever you need it.</li>
              <li><strong>Free to Use:</strong> Enjoy all features without hidden charges.</li>
            </ul>
            <p className="text-gray-700">Click <strong>Get Started</strong> to begin your personalized learning experience today!</p>
          </div>
        </div>
      )}

      <Features />
    </section>
  );
};

export default Hero;
