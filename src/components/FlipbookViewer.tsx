'use client'

import { useState, useEffect } from 'react'

type FlipbookViewerProps = {
  images?: string[]
  pdfUrl?: string
  title?: string
  onClose: () => void
}

export default function FlipbookViewer({ images, pdfUrl, title, onClose }: FlipbookViewerProps) {
  const [currentPage, setCurrentPage] = useState(0) // Đây là index của "spread" (2 trang mở)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next')
  const [pdfPages, setPdfPages] = useState<string[]>([])
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set())

  const totalPages = images ? images.length : pdfPages.length
  const displayPages = images || pdfPages

  // Preload ảnh trước và sau trang hiện tại
  useEffect(() => {
    if (images) {
      const preloadImages = [
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2
      ].filter(i => i >= 0 && i < images.length)

      preloadImages.forEach(index => {
        if (!imagesLoaded.has(index)) {
          const img = new Image()
          img.src = images[index]
          img.onload = () => {
            setImagesLoaded(prev => new Set(prev).add(index))
          }
        }
      })
    }
  }, [currentPage, images])

  // Chuyển đổi PDF thành ảnh (dùng iframe với scroll)
  useEffect(() => {
    if (pdfUrl && !images) {
      // Nếu là PDF, tạo mảng pages giả để hiển thị
      // Thực tế PDF sẽ được render qua iframe với scroll
      setPdfPages([pdfUrl])
    }
  }, [pdfUrl, images])

  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setFlipDirection('next')
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setIsFlipping(false)
      }, 800)
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection('prev')
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setIsFlipping(false)
      }, 800)
    }
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage()
      if (e.key === 'ArrowLeft') prevPage()
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentPage, totalPages, isFlipping])

  // Tính toán trang trái và phải
  // Trang 0: chỉ hiển thị bìa bên phải
  // Trang 1: trái là mặt sau của bìa, phải là trang 2
  // Trang 2: trái là trang 2, phải là trang 3
  const leftPageIndex = currentPage === 0 ? null : currentPage - 1
  const rightPageIndex = currentPage

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl font-light w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full transition-all z-10"
        onClick={onClose}
      >
        ×
      </button>

      {title && (
        <div className="absolute top-6 left-6 text-white text-xl font-bold z-10">
          {title}
        </div>
      )}

      <div className="relative w-full max-w-6xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
        {/* Book container với perspective 3D */}
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ perspective: '2500px' }}
        >
          {/* Sách mở (2 trang) */}
          <div className="relative w-full h-full max-w-5xl flex gap-2">
            {/* Trang trái */}
            <div className="relative w-1/2 h-full" style={{ perspective: '2500px' }}>
              {leftPageIndex !== null && (
                <div 
                  className="absolute inset-0 bg-white rounded-l-lg shadow-2xl overflow-hidden transition-opacity duration-300"
                  style={{
                    transformOrigin: 'right center',
                    transform: 'rotateY(-1.5deg)',
                    boxShadow: '-8px 0 25px rgba(0,0,0,0.4), inset 3px 0 10px rgba(0,0,0,0.1)',
                    opacity: isFlipping && flipDirection === 'prev' ? 0.5 : 1
                  }}
                >
                  {pdfUrl ? (
                    <iframe
                      src={`${pdfUrl}#page=${leftPageIndex + 1}`}
                      className="w-full h-full rounded-l-lg"
                      style={{ pointerEvents: 'none' }}
                    />
                  ) : (
                    <img
                      src={displayPages[leftPageIndex]}
                      alt={`Page ${leftPageIndex + 1}`}
                      className="w-full h-full object-contain p-6"
                      loading="eager"
                    />
                  )}
                  <div className="absolute bottom-6 right-8 text-gray-500 text-sm font-medium">
                    {leftPageIndex + 1}
                  </div>
                </div>
              )}
            </div>

            {/* Trang phải với hiệu ứng lật */}
            <div className="relative w-1/2 h-full" style={{ perspective: '2500px' }}>
              {/* Trang bên dưới - sẽ lộ ra khi lật */}
              {rightPageIndex !== null && rightPageIndex + 1 < totalPages && (
                <div 
                  className="absolute inset-0 bg-white rounded-r-lg shadow-2xl overflow-hidden"
                  style={{
                    transformOrigin: 'left center',
                    transform: 'rotateY(1.5deg)',
                    boxShadow: '8px 0 25px rgba(0,0,0,0.4), inset -3px 0 10px rgba(0,0,0,0.1)',
                    zIndex: 1
                  }}
                >
                  {pdfUrl ? (
                    <iframe
                      src={`${pdfUrl}#page=${rightPageIndex + 2}`}
                      className="w-full h-full rounded-r-lg"
                      style={{ pointerEvents: 'none' }}
                    />
                  ) : (
                    <img
                      src={displayPages[rightPageIndex + 1]}
                      alt={`Page ${rightPageIndex + 2}`}
                      className="w-full h-full object-contain p-6"
                      loading="eager"
                    />
                  )}
                  <div className="absolute bottom-6 left-8 text-gray-500 text-sm font-medium">
                    {rightPageIndex + 2}
                  </div>
                </div>
              )}

              {/* Trang hiện tại - có 2 mặt như tờ giấy thật */}
              {rightPageIndex !== null && (
                <div 
                  className={`absolute inset-0 bg-white rounded-r-lg shadow-2xl overflow-hidden ${
                    isFlipping && flipDirection === 'next' ? 'animate-page-flip-next' : ''
                  } ${
                    isFlipping && flipDirection === 'prev' ? 'animate-page-flip-prev' : ''
                  }`}
                  style={{
                    transformOrigin: 'left center',
                    transform: isFlipping ? undefined : 'rotateY(1.5deg)',
                    boxShadow: '8px 0 25px rgba(0,0,0,0.4), inset -3px 0 10px rgba(0,0,0,0.1)',
                    transformStyle: 'preserve-3d',
                    zIndex: isFlipping ? 10 : 5
                  }}
                >
                  {/* Mặt TRƯỚC của tờ giấy (nhìn từ phía phải) */}
                  <div 
                    className="absolute inset-0 bg-white rounded-r-lg overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {pdfUrl ? (
                      <iframe
                        src={`${pdfUrl}#page=${rightPageIndex + 1}`}
                        className="w-full h-full rounded-r-lg"
                        style={{ pointerEvents: 'none' }}
                      />
                    ) : (
                      <img
                        src={displayPages[rightPageIndex]}
                        alt={`Page ${rightPageIndex + 1}`}
                        className="w-full h-full object-contain p-6"
                        loading="eager"
                      />
                    )}
                    <div className="absolute bottom-6 left-8 text-gray-500 text-sm font-medium">
                      {rightPageIndex + 1}
                    </div>
                  </div>

                  {/* Mặt SAU của tờ giấy (khi lật sẽ thấy) */}
                  <div 
                    className="absolute inset-0 rounded-r-lg overflow-hidden"
                    style={{
                      transform: 'rotateY(180deg)',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <div 
                      className="absolute inset-0 bg-white"
                      style={{
                        transform: 'scaleX(-1)',
                        transformOrigin: 'center'
                      }}
                    >
                      {rightPageIndex > 0 && pdfUrl ? (
                        <iframe
                          src={`${pdfUrl}#page=${rightPageIndex}`}
                          className="w-full h-full rounded-r-lg"
                          style={{ pointerEvents: 'none' }}
                        />
                      ) : rightPageIndex > 0 && displayPages[rightPageIndex - 1] ? (
                        <>
                          <img
                            src={displayPages[rightPageIndex - 1]}
                            alt={`Page ${rightPageIndex} back`}
                            className="w-full h-full object-contain p-6"
                            loading="eager"
                          />
                          <div className="absolute bottom-6 left-8 text-gray-500 text-sm font-medium">
                            {rightPageIndex}
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-r from-gray-50 to-gray-100" />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Đường gấp giữa sách */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-r from-black/20 via-black/10 to-black/20 pointer-events-none" />
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0 || isFlipping}
          className={`absolute -left-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-purple-500/80 backdrop-blur-sm hover:bg-purple-600 transition-all flex items-center justify-center shadow-lg ${
            currentPage === 0 || isFlipping ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110'
          }`}
        >
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage >= totalPages - 1 || isFlipping}
          className={`absolute -right-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-purple-500/80 backdrop-blur-sm hover:bg-purple-600 transition-all flex items-center justify-center shadow-lg ${
            currentPage >= totalPages - 1 || isFlipping ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110'
          }`}
        >
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Page counter */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full text-white text-base font-medium shadow-lg">
          Trang {currentPage + 1} / {totalPages}
        </div>

        {/* Keyboard hints */}
        <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 text-white/60 text-sm">
          Dùng phím ← → hoặc click nút để lật trang
        </div>
      </div>
    </div>
  )
}
