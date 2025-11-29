'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

// Shooting Star
class ShootingStar {
  x: number = 0
  y: number = 0
  length: number = 0
  speed: number = 0
  opacity: number = 0
  angle: number = 0
  color: string = ''

  constructor(canvas: HTMLCanvasElement) {
    this.reset(canvas)
    this.y = Math.random() * canvas.height * 0.6 // Only in top 60%
  }

  reset(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width
    this.y = -50
    this.length = 60 + Math.random() * 80
    this.speed = 1 + Math.random() * 2
    this.opacity = 0.8 + Math.random() * 0.2
    this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5
    
    // Random colors: purple or blue
    const colors = [
      'rgb(139, 92, 246)',
      'rgb(168, 85, 247)',
      'rgb(59, 130, 246)',
      'rgb(96, 165, 250)',
    ]
    this.color = colors[Math.floor(Math.random() * colors.length)]
  }

  update(canvas: HTMLCanvasElement) {
    this.x += Math.cos(this.angle) * this.speed
    this.y += Math.sin(this.angle) * this.speed
    this.opacity -= 0.003

    if (this.y > canvas.height * 0.67 || this.x > canvas.width || this.opacity <= 0) {
      this.reset(canvas)
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    
    const gradient = ctx.createLinearGradient(
      this.x,
      this.y,
      this.x - Math.cos(this.angle) * this.length,
      this.y - Math.sin(this.angle) * this.length
    )
    
    gradient.addColorStop(0, this.color.replace('rgb', 'rgba').replace(')', `, ${this.opacity})`))
    gradient.addColorStop(1, this.color.replace('rgb', 'rgba').replace(')', ', 0)'))

    ctx.strokeStyle = gradient
    ctx.lineWidth = 2
    ctx.lineCap = 'round'
    
    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(
      this.x - Math.cos(this.angle) * this.length,
      this.y - Math.sin(this.angle) * this.length
    )
    ctx.stroke()

    // Glow effect
    ctx.shadowBlur = 15
    ctx.shadowColor = this.color
    ctx.stroke()

    ctx.restore()
  }
}

// Static Star
class Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
  angle: number
  distance: number
  centerX: number
  centerY: number

  constructor(canvas: HTMLCanvasElement) {
    this.centerX = canvas.width / 2
    this.centerY = canvas.height * 0.33
    this.angle = Math.random() * Math.PI * 2
    this.distance = Math.random() * Math.max(canvas.width, canvas.height * 0.67)
    this.x = this.centerX + Math.cos(this.angle) * this.distance
    this.y = this.centerY + Math.sin(this.angle) * this.distance
    this.size = 0.5 + Math.random() * 1.5
    this.opacity = 0.3 + Math.random() * 0.7
    this.twinkleSpeed = 0.01 + Math.random() * 0.02
    this.twinklePhase = Math.random() * Math.PI * 2
  }

  update(rotationSpeed: number) {
    this.twinklePhase += this.twinkleSpeed
    this.angle += rotationSpeed
    this.x = this.centerX + Math.cos(this.angle) * this.distance
    this.y = this.centerY + Math.sin(this.angle) * this.distance
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.y >= ctx.canvas.height * 0.67) return // Don't draw stars below water line
    
    const twinkle = 0.5 + Math.sin(this.twinklePhase) * 0.5
    const currentOpacity = this.opacity * twinkle

    ctx.save()
    ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`
    ctx.shadowBlur = 3
    ctx.shadowColor = 'white'
    
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    
    ctx.restore()
  }

  updateCenter(canvas: HTMLCanvasElement) {
    this.centerX = canvas.width / 2
    this.centerY = canvas.height * 0.33
  }
}

// Water Ripple with 3D effect
class WaterRipple {
  x: number
  y: number
  radius: number
  maxRadius: number
  opacity: number
  speed: number
  rings: number
  isClickRipple: boolean

  constructor(canvas: HTMLCanvasElement, x?: number, y?: number, isClick: boolean = false) {
    if (x !== undefined && y !== undefined) {
      this.x = x
      this.y = y
      this.isClickRipple = isClick
    } else {
      this.x = Math.random() * canvas.width
      this.y = canvas.height * 0.67 + Math.random() * canvas.height * 0.33
      this.isClickRipple = false
    }
    
    this.radius = 0
    this.maxRadius = isClick ? 150 + Math.random() * 100 : 30 + Math.random() * 50
    this.opacity = isClick ? 0.8 : 0.3
    this.speed = isClick ? 2 : 0.5 + Math.random() * 0.5
    this.rings = isClick ? 3 : 1
  }

  update() {
    this.radius += this.speed
    this.opacity -= this.isClickRipple ? 0.01 : 0.005
    this.speed *= 0.98 // Deceleration for more natural effect
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    
    if (this.isClickRipple) {
      // Draw multiple concentric rings for 3D effect
      for (let i = 0; i < this.rings; i++) {
        const ringRadius = this.radius - (i * 30)
        if (ringRadius > 0) {
          const ringOpacity = this.opacity * (1 - i / this.rings) * 0.7
          
          // Outer glow
          ctx.strokeStyle = `rgba(96, 165, 250, ${ringOpacity * 0.4})`
          ctx.lineWidth = 6
          ctx.shadowBlur = 15
          ctx.shadowColor = 'rgba(59, 130, 246, 0.8)'
          ctx.beginPath()
          ctx.arc(this.x, this.y, ringRadius, 0, Math.PI * 2)
          ctx.stroke()
          
          // Main ring with gradient
          const gradient = ctx.createRadialGradient(this.x, this.y, ringRadius - 5, this.x, this.y, ringRadius + 5)
          gradient.addColorStop(0, `rgba(139, 92, 246, ${ringOpacity})`)
          gradient.addColorStop(0.5, `rgba(59, 130, 246, ${ringOpacity * 0.8})`)
          gradient.addColorStop(1, `rgba(96, 165, 250, ${ringOpacity * 0.4})`)
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = 3
          ctx.shadowBlur = 8
          ctx.beginPath()
          ctx.arc(this.x, this.y, ringRadius, 0, Math.PI * 2)
          ctx.stroke()
          
          // Inner highlight
          ctx.strokeStyle = `rgba(255, 255, 255, ${ringOpacity * 0.3})`
          ctx.lineWidth = 1
          ctx.shadowBlur = 0
          ctx.beginPath()
          ctx.arc(this.x, this.y, ringRadius - 2, 0, Math.PI * 2)
          ctx.stroke()
        }
      }
      
      // Center splash effect
      if (this.radius < 30) {
        const splashOpacity = this.opacity * (1 - this.radius / 30)
        const splashGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, 20)
        splashGradient.addColorStop(0, `rgba(255, 255, 255, ${splashOpacity * 0.8})`)
        splashGradient.addColorStop(0.5, `rgba(96, 165, 250, ${splashOpacity * 0.6})`)
        splashGradient.addColorStop(1, 'rgba(59, 130, 246, 0)')
        
        ctx.fillStyle = splashGradient
        ctx.shadowBlur = 20
        ctx.shadowColor = 'rgba(59, 130, 246, 0.8)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, 20 - (this.radius / 30) * 10, 0, Math.PI * 2)
        ctx.fill()
      }
    } else {
      // Simple ripple for ambient effect
      ctx.strokeStyle = `rgba(139, 92, 246, ${this.opacity})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.stroke()
    }
    
    ctx.restore()
  }

  isDead() {
    return this.opacity <= 0 || this.radius >= this.maxRadius
  }
}

// 3D Water Surface Component
function Water3D() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; time: number; id: number }>>([])
  const rippleIdRef = useRef(0)

  useEffect(() => {
    if (!meshRef.current) return

    const geometry = meshRef.current.geometry as THREE.PlaneGeometry
    const positionAttribute = geometry.attributes.position
    const originalPositions = new Float32Array(positionAttribute.array)

    let animationId: number

    const animate = () => {
      const positions = positionAttribute.array as Float32Array
      const time = Date.now() * 0.001

      // Reset to original positions
      for (let i = 0; i < positions.length; i++) {
        positions[i] = originalPositions[i]
      }

      // Apply ripple effects
      ripples.forEach((ripple) => {
        const rippleAge = time - ripple.time
        if (rippleAge > 3) return // Remove old ripples

        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i]
          const y = positions[i + 1]

          const dx = x - ripple.x
          const dy = y - ripple.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          const waveRadius = rippleAge * 2 // Wave propagation speed
          const waveWidth = 0.5

          if (distance < waveRadius + waveWidth && distance > waveRadius - waveWidth) {
            const intensity = Math.exp(-rippleAge * 1.5) // Decay over time
            const wave = Math.sin((distance - waveRadius) * 10) * intensity * 0.3
            positions[i + 2] += wave
          }

          // Inner displacement
          if (distance < waveRadius) {
            const innerIntensity = Math.exp(-rippleAge * 2) * (1 - distance / waveRadius)
            positions[i + 2] += Math.sin(time * 2 + distance * 5) * innerIntensity * 0.1
          }
        }
      })

      positionAttribute.needsUpdate = true
      geometry.computeVertexNormals()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [ripples])

  const handleClick = (event: any) => {
    const point = event.point
    const newRipple = {
      x: point.x,
      y: point.y,
      time: Date.now() * 0.001,
      id: rippleIdRef.current++
    }
    
    setRipples(prev => [...prev.filter(r => Date.now() * 0.001 - r.time < 3), newRipple])
  }

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2, 0]}
      onClick={handleClick}
    >
      <planeGeometry args={[20, 20, 100, 100]} />
      <meshStandardMaterial
        color="#0a1929"
        metalness={0.8}
        roughness={0.2}
        side={THREE.DoubleSide}
        transparent
        opacity={0.9}
      />
    </mesh>
  )
}

export default function BackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Initialize elements
    const shootingStars: ShootingStar[] = []
    const stars: Star[] = []
    const ripples: WaterRipple[] = []

    // Create shooting stars
    for (let i = 0; i < 8; i++) {
      shootingStars.push(new ShootingStar(canvas))
    }

    // Create static stars
    for (let i = 0; i < 200; i++) {
      stars.push(new Star(canvas))
    }

    let rippleTimer = 0

    const animate = () => {
      // Sky gradient
      const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.67)
      skyGradient.addColorStop(0, '#0a0a1f')
      skyGradient.addColorStop(0.5, '#1a0a2e')
      skyGradient.addColorStop(1, '#16213e')
      ctx.fillStyle = skyGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.67)

      // Water gradient
      const waterGradient = ctx.createLinearGradient(0, canvas.height * 0.67, 0, canvas.height)
      waterGradient.addColorStop(0, '#0f3460')
      waterGradient.addColorStop(0.5, '#0a1929')
      waterGradient.addColorStop(1, '#020617')
      ctx.fillStyle = waterGradient
      ctx.fillRect(0, canvas.height * 0.67, canvas.width, canvas.height * 0.33)

      // Water horizon line with glow
      ctx.save()
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)'
      ctx.lineWidth = 2
      ctx.shadowBlur = 10
      ctx.shadowColor = 'rgba(139, 92, 246, 0.5)'
      ctx.beginPath()
      ctx.moveTo(0, canvas.height * 0.67)
      ctx.lineTo(canvas.width, canvas.height * 0.67)
      ctx.stroke()
      ctx.restore()

      // Update and draw static stars with rotation
      const rotationSpeed = 0.0003 // Slow rotation following sky orbit
      stars.forEach(star => {
        star.update(rotationSpeed)
        star.draw(ctx)
        
        // Reflection in water
        if (star.y < canvas.height * 0.67 && star.y > 0) {
          ctx.save()
          ctx.globalAlpha = 0.3
          const reflectY = canvas.height * 0.67 + (canvas.height * 0.67 - star.y) * 0.5
          const twinkle = 0.5 + Math.sin(star.twinklePhase) * 0.5
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle * 0.3})`
          ctx.beginPath()
          ctx.arc(star.x, reflectY, star.size * 0.8, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      })

      // Update and draw shooting stars
      shootingStars.forEach(star => {
        star.update(canvas)
        star.draw(ctx)
        
        // Enhanced reflection in water - always visible
        if (star.y < canvas.height * 0.67) {
          ctx.save()
          
          // Calculate reflection position
          const reflectY = canvas.height * 0.67 + (canvas.height * 0.67 - star.y) * 0.5
          
          // Opacity based on star's current opacity and distance
          const distanceRatio = star.y / (canvas.height * 0.67)
          const baseReflectionOpacity = star.opacity * 0.6
          const reflectionOpacity = baseReflectionOpacity * Math.max(0.3, distanceRatio)
          
          const gradient = ctx.createLinearGradient(
            star.x,
            reflectY,
            star.x - Math.cos(star.angle) * star.length * 0.7,
            reflectY + Math.sin(star.angle) * star.length * 0.7
          )
          gradient.addColorStop(0, star.color.replace('rgb', 'rgba').replace(')', `, ${reflectionOpacity})`))
          gradient.addColorStop(1, star.color.replace('rgb', 'rgba').replace(')', ', 0)'))
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = 2
          ctx.shadowBlur = 12
          ctx.shadowColor = star.color
          
          ctx.beginPath()
          ctx.moveTo(star.x, reflectY)
          ctx.lineTo(
            star.x - Math.cos(star.angle) * star.length * 0.7,
            reflectY + Math.sin(star.angle) * star.length * 0.7
          )
          ctx.stroke()
          ctx.restore()
        }
      })

      // Create water ripples periodically
      rippleTimer++
      if (rippleTimer > 60) {
        ripples.push(new WaterRipple(canvas))
        rippleTimer = 0
      }

      // Update and draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].update()
        ripples[i].draw(ctx)
        
        if (ripples[i].isDead()) {
          ripples.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Only create ripple if clicking in water area
      if (y > canvas.height * 0.67) {
        // Create multiple ripples for more dramatic effect
        for (let i = 0; i < 2; i++) {
          setTimeout(() => {
            ripples.push(new WaterRipple(canvas, x, y, true))
          }, i * 100)
        }
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Update star centers for rotation
      stars.forEach(star => {
        star.updateCenter(canvas)
      })
    }

    canvas.addEventListener('click', handleClick)
    window.addEventListener('resize', handleResize)

    return () => {
      canvas.removeEventListener('click', handleClick)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* 2D Sky with stars and shooting stars */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full -z-10"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* 3D Water surface at bottom */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-auto" style={{ top: '67%' }}>
        <Canvas
          camera={{ position: [0, 3, 8], fov: 60 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
          <pointLight position={[-10, 5, -10]} intensity={0.5} color="#3b82f6" />
          <Water3D />
        </Canvas>
      </div>
    </>
  )
}
