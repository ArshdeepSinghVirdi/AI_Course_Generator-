"use client"
import React from 'react';
import { BookOpen, Settings, Lock } from 'lucide-react';
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Features = () => {
     useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        });
      }, []);
  const features = [
    {
      title: "24/7 Support",
      description: "Contact us 24 hours a day, 7 days a week",
      Icon: BookOpen
    },
    {
      title: "Customizable",
      description: "Components are easily customized and extendable",
      Icon: Settings
    },
    {
      title: "Free to Use",
      description: "Every component and plugin is well documented",
      Icon: Lock
    }
  ];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-purple-900/50 to-slate-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="2000" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/20 animate-slideUp border border-white/10"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <feature.Icon className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;