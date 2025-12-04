'use client'

import { useEffect, useState } from 'react'

export default function Projects() {
  const [shuffledImages, setShuffledImages] = useState<string[]>([])

  // Map folder từ đường dẫn ảnh
  const getFolderFromPath = (imgPath: string) => {
    if (imgPath.includes('/poster/')) return 'poster'
    if (imgPath.includes('/chainuoc/')) return 'chainuoc'
    if (imgPath.includes('/photography/')) return 'photography'
    if (imgPath.includes('/3D/')) return '3d'
    if (imgPath.includes('/perspective/')) return 'perspective'
    if (imgPath.includes('/other/')) return 'Other'
    return 'poster'
  }

  // Handle double click
  const handleDoubleClick = (imgPath: string) => {
    const folderId = getFolderFromPath(imgPath)
    window.location.href = `/projects?folder=${folderId}`
  }

  // Tất cả ảnh từ các folder (trừ flipbook)
  const allImages = [
    // Poster
    '/images/poster/1.jpeg',
    '/images/poster/2.jpeg',
    '/images/poster/3.jpeg',
    '/images/poster/4.jpeg',
    '/images/poster/5.jpeg',
    '/images/poster/6.jpg',
    '/images/poster/7.jpg',
    '/images/poster/8.jpg',
    '/images/poster/9.jpg',
    // Packaging (chainuoc)
    '/images/chainuoc/1.jpg',
    '/images/chainuoc/2.jpg',
    '/images/chainuoc/3.jpg',
    '/images/chainuoc/4.jpg',
    '/images/chainuoc/5.jpg',
    '/images/chainuoc/6.jpg',
    '/images/chainuoc/7.jpg',
    '/images/chainuoc/8.jpg',
    // Photography
    '/images/photography/z7275676839938_b21559e0bd7474a048fa97be501e8847.jpg',
    '/images/photography/z7275676894524_ea03284ec75f142465437666af31ade9.jpg',
    '/images/photography/z7275676949866_4c061d11db699d80c8270a283483bccc.jpg',
    '/images/photography/z7275677060151_28027b5c9f1b8e5967b7f7880dcaac9a.jpg',
    '/images/photography/z7275677116819_1bb38695dcbab33d15a0ab43c3586205.jpg',
    '/images/photography/z7275677171773_c6c8b99e2e8f0593f74b4c50abc895a7.jpg',
    '/images/photography/z7275677228124_ddff1d7d1270fd8e35c79fb819d9306d.jpg',
    '/images/photography/z7275677337586_4b332ba86207b0680025de3e2d8401d4.jpg',
    '/images/photography/z7275677393294_f60bdb29e1ad14057ee56ffc32af26a6.jpg',
    '/images/photography/z7275676783593_4e92d46125e3e1f7014457b07b031483.jpg',
    // 3D
    '/images/3D/z7275785978592_832cfd8023ce1a03d920ff3883438884.jpg',
    '/images/3D/z7275786037181_21343512c69a0951f18354ccb9ae338a.jpg',
    '/images/3D/z7275786092979_166ba4419222c6c1bb7da2c1e7cf2dd5.jpg',
    '/images/3D/z7275786147826_7fb62782570f54dbfa6890b1d7d006fb.jpg',
    '/images/3D/z7275786203038_cb0d1dcfab35df2b2966673ad0d4eb8f.jpg',
    // Perspective
    '/images/perspective/z7275697263345_65747dbdfdb1353700875d3c4edd424b.jpg',
    '/images/perspective/z7275697374668_6fb20ec332211d6480a1ada1938833ea.jpg',
    '/images/perspective/z7275697484749_3c18d03c3c2edc7601977e1a6a9686aa.jpg',
    '/images/perspective/z7275697540198_eb03123adcb6897e7a7a6195d7b45796.jpg',
    '/images/perspective/z7275697595698_cf8c132d62484f8044e69a0f492c66c8.jpg',
    '/images/perspective/z7275697707405_d796470fb119fc55cbca4b98c89d9824.jpg',
    '/images/perspective/z7275697874195_b6362a861cbc6e9543ee9082883025d4.jpg',
    // Other
    '/images/other/dendau.jpg',
    '/images/other/z7275607221883_cb83aa08127b257b7ecdf8fbd87cab81.jpg',
    '/images/other/z7275615420683_36c3bc7899171696b145af50436e701d.jpg',
    '/images/other/z7275798278760_f6b7c1633d2707a7f345c9784c6ac5ec.jpg',
    '/images/other/z7275798336279_02e536c81ae5b00267d997ebee34cbec.jpg',
    '/images/other/z7275799330670_a833fd2e2551dde21a3add5023fcd92b.jpg',
  ]

  // Shuffle và chia thành 2 cột
  useEffect(() => {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5)
    setShuffledImages(shuffled)
  }, [])

  const column1 = shuffledImages.slice(0, Math.ceil(shuffledImages.length / 2))
  const column2 = shuffledImages.slice(Math.ceil(shuffledImages.length / 2))

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
                  className="relative group rounded-lg overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer"
                  onDoubleClick={() => handleDoubleClick(img)}
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
              {[...column2, ...column2, ...column2].map((img, idx) => (
                <div 
                  key={`col2-${idx}`}
                  className="relative group rounded-lg overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer"
                  onDoubleClick={() => handleDoubleClick(img)}
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
