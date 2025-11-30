'use client'

import { useState } from 'react'

export default function Posters() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const posters = [
    '/images/poster/1.jpeg',
    '/images/poster/2.jpeg',
    '/images/poster/3.jpeg',
    '/images/poster/4.jpeg',
    '/images/poster/5.jpeg',
    '/images/poster/6.jpg',
    '/images/poster/7.jpg',
    '/images/poster/8.jpg',
    '/images/poster/9.jpg',
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posters.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posters.length) % posters.length)
  }

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Poster</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Image Frame */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 overflow-hidden">
            <div className="aspect-[3/4] relative overflow-hidden rounded-xl">
              <img
                src={posters[currentIndex]}
                alt={`Poster ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Counter */}
            <div className="text-center mt-4 text-gray-400">
              {currentIndex + 1} / {posters.length}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all group"
            aria-label="Previous poster"
          >
            <svg 
              className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all group"
            aria-label="Next poster"
          >
            <svg 
              className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnails / Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {posters.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'bg-purple-500 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to poster ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
