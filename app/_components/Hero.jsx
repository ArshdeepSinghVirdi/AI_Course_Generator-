"use client"

import React, { useState, useEffect } from "react";
import Features from "./Features";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Light Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-50/30 to-orange-100/30 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.1)_0%,transparent_50%)] animate-pulse" />
      </div>

      {/* Light Particle System */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full animate-particle-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center min-h-screen">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <div className="animate-slideDown">
            <h1 className="text-4xl font-extrabold sm:text-6xl md:text-7xl leading-tight">
              <span className="text-gray-800 block mb-4">AI Course Generator</span>
              <span className="block font-extrabold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                Custom Learning Paths, Powered by AI
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mt-8 text-xl text-gray-600 sm:text-2xl leading-relaxed animate-slideUp max-w-3xl mx-auto" style={{ animationDelay: '300ms' }}>
            Unlock personalized education with AI-driven course creation. Tailor
            your learning journey to fit your unique goals and pace.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fadeIn" style={{ animationDelay: '600ms' }}>
            {['AI-Powered', 'Personalized', 'Free to Use', '24/7 Support'].map((feature, index) => (
              <div 
                key={feature}
                className="px-4 py-2 bg-white/80 backdrop-blur-lg rounded-full text-gray-700 text-sm font-medium border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300 animate-scaleIn"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 animate-slideUp" style={{ animationDelay: '1000ms' }}>
            <a
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl shadow-lg hover:shadow-purple-500/25 transform transition-all duration-300 hover:scale-105 overflow-hidden"
              href="/dashboard"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative flex items-center space-x-2">
                <span>Get Started</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            
            <button
              onClick={toggleDialog}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 border-2 border-gray-300 rounded-xl backdrop-blur-lg hover:bg-gray-50 hover:border-gray-400 transform transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gray-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative flex items-center space-x-2">
                <span>Learn More</span>
                <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fadeIn" style={{ animationDelay: '1200ms' }}>
            {[
              { number: '1K+', label: 'Students', color: 'text-orange-500' },
              { number: '500+', label: 'Courses', color: 'text-orange-500' },
              { number: '24/7', label: 'Support', color: 'text-purple-600' },
              { number: '100%', label: 'Free', color: 'text-purple-600' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group animate-scaleIn" style={{ animationDelay: `${1400 + index * 100}ms` }}>
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} group-hover:text-orange-600 transition-colors duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-500 mt-2 group-hover:text-gray-600 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 animate-fadeIn">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleDialog} />
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-4 transform animate-scaleIn border border-gray-200">
            <button
              onClick={toggleDialog}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Welcome to CourseSphere
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At CourseSphere, we believe in revolutionizing the way you learn. With our AI-powered course generator, we offer a seamless and customized educational experience tailored to your unique goals and pace.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {[
                { title: 'AI-Powered Personalization', desc: 'Curated learning paths based on your goals.' },
                { title: 'Endless Customization', desc: 'Modify course content and topics to suit your needs.' },
                { title: '24/7 Support', desc: 'Get help whenever you need it.' },
                { title: 'Free to Use', desc: 'Enjoy all features without hidden charges.' }
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800">{item.title}:</strong>
                    <span className="text-gray-600 ml-2">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Click <strong className="text-orange-600">Get Started</strong> to begin your personalized learning experience today!
              </p>
              <button 
                onClick={toggleDialog}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Let's Begin!
              </button>
            </div>
          </div>
        </div>
      )}

      <Features />
    </section>
  );
};

export default Hero;