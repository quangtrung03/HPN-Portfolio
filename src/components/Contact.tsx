'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Social Links */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Connect with me</p>
          <div className="flex justify-center gap-8">
            <a 
              href="https://github.com/hophinhat" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all"
              title="GitHub"
            >
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/gingin2703/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all"
              title="Facebook"
            >
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
