import BackgroundScene from '@/components/BackgroundScene'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Posters from '@/components/Posters'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundScene />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        {/* <Posters /> */}
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
