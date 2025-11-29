'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Loading from '@/components/Loading'

export default function AllProjectsPage() {
  // Định nghĩa các folder và ảnh tương ứng
  const folders = {
    'Poster': {
      path: '/images/poster/',
      images: ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']
    },
    'Cháiñước': {
      path: '/images/chainuoc/',
      images: [
        'z7275516064311_4c4c8d5f0d50d23c811501e6e8915f09.jpg',
        'z7275516116124_375fe6493b79710dfc57cd3626acb8bc.jpg',
        'z7275516169197_882559cb219ddb33175d605c68d3343c.jpg',
        'z7275516223833_00aff4b6f9df5e33cb6e046018923e67.jpg',
        'z7275516277823_9cbd3ae1785a864db094619be637c732.jpg',
        'z7275516384986_cf87057063a767386ff47772072ce18d.jpg',
        'z7275516437501_cb26d3a7b0e95d88ee3bd28f7a009f2a.jpg',
        'z7275516545107_90404162acfddc2012f28f23b7597bd2.jpg'
      ]
    },
    'Category 3': {
      path: '/images/category3/',
      images: []
    },
    'Category 4': {
      path: '/images/category4/',
      images: []
    },
    'Category 5': {
      path: '/images/category5/',
      images: []
    },
    'Category 6': {
      path: '/images/category6/',
      images: []
    },
    'Category 7': {
      path: '/images/category7/',
      images: []
    },
    'Category 8': {
      path: '/images/category8/',
      images: []
    },
  }

  const [selectedFolder, setSelectedFolder] = useState<keyof typeof folders>('Poster')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const currentFolder = folders[selectedFolder]
  const images = currentFolder.images.map(img => currentFolder.path + img)

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0a0a1f] to-[#0a0a0f] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Header */}
      <div className="relative z-10 pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại trang chủ
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Toàn bộ các dự án thiết kế của tôi
          </p>

          {/* Folder Selection Buttons */}
          <div className="flex flex-wrap gap-3">
            {Object.keys(folders).map((folderName) => (
              <button
                key={folderName}
                onClick={() => setSelectedFolder(folderName as keyof typeof folders)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFolder === folderName
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30 scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {folderName}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 px-6 pb-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer bg-black/20 backdrop-blur-sm"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Project ${idx + 1}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2">Project {idx + 1}</h3>
                    <p className="text-sm text-gray-300">Click để xem chi tiết</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl font-light w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full transition-all"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
