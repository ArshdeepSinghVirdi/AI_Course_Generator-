"use client"
import React, { useEffect } from 'react';
import { BookOpen, Settings, Lock } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const features = [
    {
      title: "24/7 Support",
      description: "Contact us 24 hours a day, 7 days a week",
      Icon: BookOpen,
      color: "from-blue-500 to-purple-600",
      delay: "0ms"
    },
    {
      title: "Customizable",
      description: "Components are easily customized and extendable",
      Icon: Settings,
      color: "from-green-500 to-teal-600",
      delay: "200ms"
    },
    {
      title: "Free to Use",
      description: "Every component and plugin is well documented",
      Icon: Lock,
      color: "from-orange-500 to-red-600",
      delay: "400ms"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Light Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-purple-50 to-orange-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:30px_30px] animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-particle-float opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent px-2 sm:px-0">Why Choose CourseSphere?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of personalized learning with our cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 text-gray-800 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white hover:shadow-xl border border-gray-200 animate-slideUp"
              style={{
                animationDelay: feature.delay
              }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />
              <div className="relative z-10">
                {/* Icon with Animated Background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-6 shadow-lg`}>
                  <feature.Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`} />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeIn" style={{ animationDelay: '800ms' }}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 backdrop-blur-lg rounded-full px-6 py-3 border border-orange-200">
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse" />
            <span className="text-orange-700 font-medium">Ready to transform your learning experience?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;