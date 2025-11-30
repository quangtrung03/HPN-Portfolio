'use client'

import { useState } from 'react'
import Link from 'next/link'
import Loading from '@/components/Loading'
import FlipbookViewer from '@/components/FlipbookViewer'

type FolderType = {
  id: string
  name: string
  folderPath: string
  images: string[]
  links: { [key: string]: string }
  titles: { [key: string]: string }
  flipbooks: { [key: string]: string }
  flipbookImages: { [key: string]: string[] }
  flipbookPdf: { [key: string]: string }
}

export default function AllProjectsPage() {
  const folders: FolderType[] = [
    {
      id: 'poster',
      name: 'Poster',
      folderPath: 'poster',
      images: ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'],
      links: {},
      titles: {
        '1.jpeg': 'Nhà hát Hồ Gươm',
        '2.jpeg': 'Project 2',
        '3.jpeg': 'Project 3',
        '4.jpeg': 'Project 4',
        '5.jpeg': 'Project 5',
        '6.jpg': 'Project 6',
        '7.jpg': 'Project 7',
        '8.jpg': 'Project 8',
        '9.jpg': 'Project 9'
      },
      flipbooks: {},
      flipbookImages: {},
      flipbookPdf: {}
    },
    {
      id: 'flipbook',
      name: 'Magazine',
      folderPath: 'flipbook',
      images: [
        'flipbook1/color research-images-0.jpg',
        'flipbook2/typography-images-0.jpg'
      ],
      links: {},
      titles: {
        'z7275963072258_ca6f6191978cc8ac7a35027159578412.jpg': 'Typography Design',
        'flipbook1/color research-images-0.jpg': 'Color Research',
        'flipbook2/typography-images-0.jpg': 'Typography Book'
      },
      flipbooks: {},
      flipbookImages: {
        'flipbook1/color research-images-0.jpg': [
          '/images/flipbook/flipbook1/color research-images-0.jpg',
          '/images/flipbook/flipbook1/color research-images-1.jpg',
          '/images/flipbook/flipbook1/color research-images-2.jpg',
          '/images/flipbook/flipbook1/color research-images-3.jpg',
          '/images/flipbook/flipbook1/color research-images-4.jpg',
          '/images/flipbook/flipbook1/color research-images-5.jpg',
          '/images/flipbook/flipbook1/color research-images-6.jpg',
          '/images/flipbook/flipbook1/color research-images-7.jpg',
          '/images/flipbook/flipbook1/color research-images-8.jpg',
          '/images/flipbook/flipbook1/color research-images-9.jpg',
          '/images/flipbook/flipbook1/color research-images-10.jpg',
          '/images/flipbook/flipbook1/color research-images-11.jpg',
          '/images/flipbook/flipbook1/color research-images-12.jpg',
          '/images/flipbook/flipbook1/color research-images-13.jpg',
          '/images/flipbook/flipbook1/color research-images-14.jpg',
          '/images/flipbook/flipbook1/color research-images-15.jpg'
        ],
        'flipbook2/typography-images-0.jpg': [
          '/images/flipbook/flipbook2/typography-images-0.jpg',
          '/images/flipbook/flipbook2/typography-images-1.jpg',
          '/images/flipbook/flipbook2/typography-images-2.jpg',
          '/images/flipbook/flipbook2/typography-images-3.jpg',
          '/images/flipbook/flipbook2/typography-images-4.jpg',
          '/images/flipbook/flipbook2/typography-images-5.jpg',
          '/images/flipbook/flipbook2/typography-images-6.jpg',
          '/images/flipbook/flipbook2/typography-images-7.jpg',
          '/images/flipbook/flipbook2/typography-images-8.jpg',
          '/images/flipbook/flipbook2/typography-images-9.jpg',
          '/images/flipbook/flipbook2/typography-images-10.jpg',
          '/images/flipbook/flipbook2/typography-images-11.jpg',
          '/images/flipbook/flipbook2/typography-images-12.jpg'
        ]
      },
      flipbookPdf: {}
    },
    {
      id: 'chainuoc',
      name: 'Packaging',
      folderPath: 'chainuoc',
      images: [
        'z7275516064311_4c4c8d5f0d50d23c811501e6e8915f09.jpg',
        'z7275516116124_375fe6493b79710dfc57cd3626acb8bc.jpg',
        'z7275516169197_882559cb219ddb33175d605c68d3343c.jpg',
        'z7275516223833_00aff4b6f9df5e33cb6e046018923e67.jpg',
        'z7275516277823_9cbd3ae1785a864db094619be637c732.jpg',
        'z7275516384986_cf87057063a767386ff47772072ce18d.jpg',
        'z7275516437501_cb26d3a7b0e95d88ee3bd28f7a009f2a.jpg',
        'z7275516545107_90404162acfddc2012f28f23b7597bd2.jpg'
      ],
      links: {},
      titles: {},
      flipbooks: {},
      flipbookImages: {},
      flipbookPdf: {}
    },
    {
      id: 'photography',
      name: 'Photography',
      folderPath: 'photography',
      images: [
        'z7275676839938_b21559e0bd7474a048fa97be501e8847.jpg',
        'z7275676894524_ea03284ec75f142465437666af31ade9.jpg',
        'z7275676949866_4c061d11db699d80c8270a283483bccc.jpg',
        'z7275677060151_28027b5c9f1b8e5967b7f7880dcaac9a.jpg',
        'z7275677116819_1bb38695dcbab33d15a0ab43c3586205.jpg',
        'z7275677171773_c6c8b99e2e8f0593f74b4c50abc895a7.jpg',
        'z7275677228124_ddff1d7d1270fd8e35c79fb819d9306d.jpg',
        'z7275677337586_4b332ba86207b0680025de3e2d8401d4.jpg',
        'z7275677393294_f60bdb29e1ad14057ee56ffc32af26a6.jpg',
        'z7275676783593_4e92d46125e3e1f7014457b07b031483.jpg'
      ],
      links: {},
      titles: {},
      flipbooks: {},
      flipbookImages: {},
      flipbookPdf: {}
    },
    {
      id: '3d',
      name: '3D',
      folderPath: '3D',
      images: [
        'z7275785978592_832cfd8023ce1a03d920ff3883438884.jpg',
        'z7275786037181_21343512c69a0951f18354ccb9ae338a.jpg',
        'z7275786092979_166ba4419222c6c1bb7da2c1e7cf2dd5.jpg',
        'z7275786147826_7fb62782570f54dbfa6890b1d7d006fb.jpg',
        'z7275786203038_cb0d1dcfab35df2b2966673ad0d4eb8f.jpg'
      ],
      links: {},
      titles: {},
      flipbooks: {},
      flipbookImages: {},
      flipbookPdf: {}
    },
    {
      id: 'perspective',
      name: 'Perspective',
      folderPath: 'perspective',
      images: [
        'z7275697263345_65747dbdfdb1353700875d3c4edd424b.jpg',
        'z7275697374668_6fb20ec332211d6480a1ada1938833ea.jpg',
        'z7275697484749_3c18d03c3c2edc7601977e1a6a9686aa.jpg',
        'z7275697540198_eb03123adcb6897e7a7a6195d7b45796.jpg',
        'z7275697595698_cf8c132d62484f8044e69a0f492c66c8.jpg',
        'z7275697707405_d796470fb119fc55cbca4b98c89d9824.jpg',
        'z7275697874195_b6362a861cbc6e9543ee9082883025d4.jpg'
      ],
      links: {},
      titles: {},
      flipbooks: {},
      flipbookImages: {},
      flipbookPdf: {}
    },
    {
      id: 'anorther',
      name: 'Another',
      folderPath: 'anorther',
      images: [
        'z7275607221883_cb83aa08127b257b7ecdf8fbd87cab81.jpg',
        'z7275615420683_36c3bc7899171696b145af50436e701d.jpg',
        'z7275798278760_f6b7c1633d2707a7f345c9784c6ac5ec.jpg',
        'z7275798336279_02e536c81ae5b00267d997ebee34cbec.jpg',
        'z7275799330670_a833fd2e2551dde21a3add5023fcd92b.jpg'
      ],
      links: {
        'z7275615420683_36c3bc7899171696b145af50436e701d.jpg': 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdendauthaodien%2Fposts%2Fpfbid09tvkERPt71F6G8SzREZsc8U7gW6Ld4Q83VGwFZwp53uEp2c89BZELpdt1uLcgtPVl&show_text=true&width=500'
      },
      titles: {
        'z7275607221883_cb83aa08127b257b7ecdf8fbd87cab81.jpg': 'Sticker',
        'z7275615420683_36c3bc7899171696b145af50436e701d.jpg': 'Social Post',
        'z7275798278760_f6b7c1633d2707a7f345c9784c6ac5ec.jpg': 'Logo',
        'z7275798336279_02e536c81ae5b00267d997ebee34cbec.jpg': 'Logo',
        'z7275799330670_a833fd2e2551dde21a3add5023fcd92b.jpg': 'Character Design',
      },
      flipbooks: {},
      flipbookImages: {},
      flipbookPdf: {}
    }
  ]

  const [selectedFolderId, setSelectedFolderId] = useState('poster')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedFlipbook, setSelectedFlipbook] = useState<string | null>(null)
  const [flipbookData, setFlipbookData] = useState<{ images?: string[], pdf?: string, title?: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [clickTimer, setClickTimer] = useState<NodeJS.Timeout | null>(null)

  const currentFolder = folders.find(f => f.id === selectedFolderId) || folders[0]
  const images = currentFolder.images.map(img => `/images/${currentFolder.folderPath}/${img}`)

  const handleImageClick = (img: string, fileName: string) => {
    const link = currentFolder.links?.[fileName]
    const flipbook = currentFolder.flipbooks?.[fileName]
    const flipbookImages = currentFolder.flipbookImages?.[fileName]
    const flipbookPdf = currentFolder.flipbookPdf?.[fileName]
    const customTitle = currentFolder.titles?.[fileName]
    
    if (flipbookImages && flipbookImages.length > 0) {
      // Nếu có flipbook từ nhiều ảnh
      setFlipbookData({ images: flipbookImages, title: customTitle })
    } else if (flipbookPdf) {
      // Nếu có flipbook từ PDF
      setFlipbookData({ pdf: flipbookPdf, title: customTitle })
    } else if (flipbook) {
      // Nếu có flipbook iframe (link bên ngoài)
      setSelectedFlipbook(flipbook)
    } else if (link) {
      // Nếu có link, double-click để mở tab mới
      if (clickTimer) {
        clearTimeout(clickTimer)
        setClickTimer(null)
        window.open(link, '_blank')
      } else {
        const timer = setTimeout(() => {
          setSelectedImage(img)
          setClickTimer(null)
        }, 300)
        setClickTimer(timer)
      }
    } else {
      // Mặc định hiển thị ảnh
      setSelectedImage(img)
    }
  }

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0a0a1f] to-[#0a0a0f] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
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

          <div className="flex flex-wrap gap-3">
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => setSelectedFolderId(folder.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFolderId === folder.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30 scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {folder.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 pb-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => {
              const fileName = currentFolder.images[idx]
              const hasLink = currentFolder.links?.[fileName]
              const hasFlipbook = currentFolder.flipbooks?.[fileName]
              const hasFlipbookImages = currentFolder.flipbookImages?.[fileName]?.length > 0
              const hasFlipbookPdf = currentFolder.flipbookPdf?.[fileName]
              const customTitle = currentFolder.titles?.[fileName]
              const isFlipbookItem = hasFlipbook || hasFlipbookImages || hasFlipbookPdf
              
              return (
                <div
                  key={idx}
                  className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer bg-black/20 backdrop-blur-sm"
                  onClick={() => handleImageClick(img, fileName)}
                >
                  <img
                    src={img}
                    alt={customTitle || `Project ${idx + 1}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold mb-2">{customTitle || `Project ${idx + 1}`}</h3>
                      <p className="text-sm text-gray-300">
                        {isFlipbookItem ? 'Click để xem flipbook' : hasLink ? 'Double click để xem chi tiết' : 'Click để xem chi tiết'}
                      </p>
                    </div>
                  </div>
                  {(hasLink || isFlipbookItem) && (
                    <div className="absolute top-3 right-3 bg-blue-500/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                      {isFlipbookItem ? '📖 Flipbook' : '🔗 Link'}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

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

      {selectedFlipbook && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedFlipbook(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl font-light w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full transition-all z-10"
            onClick={() => setSelectedFlipbook(null)}
          >
            ×
          </button>
          <div className="w-full h-full max-w-7xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={selectedFlipbook}
              className="w-full h-full rounded-lg shadow-2xl"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
        </div>
      )}

      {flipbookData && (
        <FlipbookViewer
          images={flipbookData.images}
          pdfUrl={flipbookData.pdf}
          title={flipbookData.title}
          onClose={() => setFlipbookData(null)}
        />
      )}
    </div>
  )
}
