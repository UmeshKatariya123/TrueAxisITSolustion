import React from 'react';

  const defaultContent = {
    title: 'Welcome to TrueAxis IT Solution',
    description: 'We develop modern, high-performance websites with complete frontend and backend development. Clean design, secure backend, and scalable solutions.',
    link: '#services',
    image: ''
  };

const Hero = React.memo(({ content }) => {
  // Always use default content to prevent any blinking/flashing
  // If you want to use API content, update defaultContent to match your API
  const heroData = defaultContent;

  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-blue-300 text-sm font-semibold tracking-wide uppercase">Modern Web Development Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              <span className="block">{heroData.title.split(' ').slice(0, -2).join(' ')}</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                {heroData.title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl leading-relaxed font-normal transition-opacity duration-300">
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={heroData.link}
                className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="/lets-talk"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-transparent border-2 border-white/30 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:shadow-xl transform hover:scale-105"
              >
                Let's Talk
              </a>
            </div>

          </div>

          {/* Right Column - Image or Visual Element */}
          <div className="relative hidden lg:block">
            {heroData.image ? (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src={heroData.image}
                  alt={heroData.title}
                  loading="lazy"
                  className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-xl border border-white/10 rounded-2xl p-12 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-500/30 rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-4 bg-white/20 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-white/10 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-cyan-500/30 rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-4 bg-white/20 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-white/10 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-purple-500/30 rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-4 bg-white/20 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-white/10 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;

