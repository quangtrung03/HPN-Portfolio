'use client'

import { useEffect, useState } from 'react'

export default function Projects() {
  const images = [
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

  // Split into 2 columns: 4 images and 5 images
  const column1 = images.slice(0, 4) // Images 1-4
  const column2 = images.slice(4, 9) // Images 5-9

  return (
    <section id="projects" className="py-16 px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Sản phẩm dự án</h2>
          <a 
            href="/projects" 
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium mt-2"
          >
            Xem tất cả
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Carousel Columns */}
        <div className="grid md:grid-cols-2 gap-4 max-h-[500px]">
          {/* Column 1 - Scroll Up */}
          <div className="relative h-[500px] overflow-hidden rounded-lg">
            <div className="animate-scroll-up space-y-3 will-change-transform">
              {/* Duplicate for infinite scroll */}
              {[...column1, ...column1, ...column1].map((img, idx) => (
                <div 
                  key={`col1-${idx}`}
                  className="relative group rounded-lg overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all"
                >
                  <img 
                    src={img} 
                    alt={`Project ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-base font-bold mb-1">Project {(idx % 4) + 1}</h3>
                      <p className="text-xs text-gray-300">Design Work</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Scroll Down */}
          <div className="relative h-[500px] overflow-hidden rounded-lg">
            <div className="animate-scroll-down space-y-3 will-change-transform">
              {/* Duplicate for infinite scroll */}
              {[...column2, ...column2, ...column2].map((img, idx) => (
                <div 
                  key={`col2-${idx}`}
                  className="relative group rounded-lg overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all"
                >
                  <img 
                    src={img} 
                    alt={`Project ${idx + 5}`}
                    loading="lazy"
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-base font-bold mb-1">Project {(idx % 5) + 5}</h3>
                   
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
