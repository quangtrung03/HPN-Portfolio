'use client'

import { useEffect, useState } from 'react'

const Loading = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500) // Delay for fade out animation
    }, 3000) // Show loading for 3 seconds

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center opacity-0 transition-opacity duration-500 pointer-events-none">
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="flex flex-col items-center space-y-8">
        {/* Gem Animation */}
        <div className="relative gem-container">
          <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200" className="gem-svg">
            <g style={{ order: -1 }}>
              <polygon
                transform="rotate(45 100 100)"
                strokeWidth="1"
                stroke="#3b82f6"
                fill="none"
                points="70,70 148,50 130,130 50,150"
                id="bounce"
              />
              <polygon
                transform="rotate(45 100 100)"
                strokeWidth="1"
                stroke="#3b82f6"
                fill="none"
                points="70,70 148,50 130,130 50,150"
                id="bounce2"
              />
              <polygon
                transform="rotate(45 100 100)"
                strokeWidth="2"
                stroke=""
                fill="#414750"
                points="70,70 150,50 130,130 50,150"
              />
              <polygon
                strokeWidth="2"
                stroke=""
                fill="url(#gradiente)"
                points="100,70 150,100 100,130 50,100"
              />
              <defs>
                <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente">
                  <stop style={{ stopColor: '#1e2026', stopOpacity: 1 }} offset="20%" />
                  <stop style={{ stopColor: '#414750', stopOpacity: 1 }} offset="60%" />
                </linearGradient>
              </defs>
              <polygon
                transform="translate(20, 31)"
                strokeWidth="2"
                stroke=""
                fill="#3b82f6"
                points="80,50 80,75 80,99 40,75"
              />
              <polygon
                transform="translate(20, 31)"
                strokeWidth="2"
                stroke=""
                fill="url(#gradiente2)"
                points="40,-40 80,-40 80,99 40,75"
              />
              <defs>
                <linearGradient y2="100%" x2="0%" y1="-17%" x1="10%" id="gradiente2">
                  <stop style={{ stopColor: '#3b82f600', stopOpacity: 1 }} offset="20%" />
                  <stop
                    style={{ stopColor: '#3b82f654', stopOpacity: 1 }}
                    offset="100%"
                    id="animatedStop"
                  />
                </linearGradient>
              </defs>
              <polygon
                transform="rotate(180 100 100) translate(20, 20)"
                strokeWidth="2"
                stroke=""
                fill="#3b82f6"
                points="80,50 80,75 80,99 40,75"
              />
              <polygon
                transform="rotate(0 100 100) translate(60, 20)"
                strokeWidth="2"
                stroke=""
                fill="url(#gradiente3)"
                points="40,-40 80,-40 80,85 40,110.2"
              />
              <defs>
                <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente3">
                  <stop style={{ stopColor: '#3b82f600', stopOpacity: 1 }} offset="20%" />
                  <stop
                    style={{ stopColor: '#3b82f654', stopOpacity: 1 }}
                    offset="100%"
                    id="animatedStop2"
                  />
                </linearGradient>
              </defs>
              <polygon
                transform="rotate(45 100 100) translate(80, 95)"
                strokeWidth="2"
                stroke=""
                fill="#dbeafe"
                points="5,0 5,5 0,5 0,0"
                id="particles1"
              />
              <polygon
                transform="rotate(45 100 100) translate(80, 55)"
                strokeWidth="2"
                stroke=""
                fill="#93c5fd"
                points="6,0 6,6 0,6 0,0"
                id="particles2"
              />
              <polygon
                transform="rotate(45 100 100) translate(70, 80)"
                strokeWidth="2"
                stroke=""
                fill="#fff"
                points="2,0 2,2 0,2 0,0"
                id="particles3"
              />
              <polygon
                strokeWidth="2"
                stroke=""
                fill="#292d34"
                points="29.5,99.8 100,142 100,172 29.5,130"
              />
              <polygon
                transform="translate(50, 92)"
                strokeWidth="2"
                stroke=""
                fill="#1f2127"
                points="50,50 120.5,8 120.5,35 50,80"
              />
            </g>
          </svg>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2 animate-pulse">
            Đang tải...
          </h2>
          <p className="text-blue-300 text-lg animate-bounce">Đang tải đợi xíu nhéeee</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-gem {
          0%, 100% {
            translate: 0px 36px;
          }
          50% {
            translate: 0px 46px;
          }
        }
        
        @keyframes bounce2-gem {
          0%, 100% {
            translate: 0px 46px;
          }
          50% {
            translate: 0px 56px;
          }
        }

        @keyframes umbral {
          0% {
            stop-color: #3b82f62e;
          }
          50% {
            stop-color: rgba(59, 130, 246, 0.519);
          }
          100% {
            stop-color: #3b82f62e;
          }
        }
        
        @keyframes particles-float {
          0%, 100% {
            translate: 0px 16px;
          }
          50% {
            translate: 0px 6px;
          }
        }
        
        #particles1, #particles2, #particles3 {
          animation: particles-float 4s ease-in-out infinite;
        }
        
        #animatedStop, #animatedStop2 {
          animation: umbral 4s infinite;
        }
        
        #bounce {
          animation: bounce-gem 4s ease-in-out infinite;
          translate: 0px 36px;
        }
        
        #bounce2 {
          animation: bounce2-gem 4s ease-in-out infinite;
          translate: 0px 46px;
          animation-delay: 0.5s;
        }
        
        .gem-container {
          animation: float 3s ease-in-out infinite;
        }

        .gem-svg {
          filter: drop-shadow(0 10px 20px rgba(59, 130, 246, 0.4)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.2));
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default Loading
