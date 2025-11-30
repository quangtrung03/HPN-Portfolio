'use client'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Greeting */}
        <p className="text-purple-400 text-lg md:text-xl mb-4 animate-fade-in">
          Portfolio
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-slide-up leading-[1.3]">
          Hồ Phi Nhật
        </h1>

        {/* Role */}
        <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-slide-up animation-delay-200 leading-[1.6]">
          Digital Art & Design
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
          Là một sinh viên chuyên ngành thiết kế mỹ thuật số. 
          Đam mê sáng tạo những trải nghiệm thị giác độc đáo và tìm kiếm cảm hứng từ nghệ thuật đương đại.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-600">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-medium hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all"
          >
            Xem dự án
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/5 hover:border-white/40 transition-all"
          >
            Liên hệ tôi
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
