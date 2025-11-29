'use client'

interface Skill {
  name: string
  logo: string
  level: number
}

export default function About() {
  const skills: Skill[] = [
    { name: "Adobe Illustrator", logo: "/images/illustrator.png", level: 90 },
    { name: "Adobe Photoshop", logo: "/images/photoshop.png", level: 85 },
    { name: "Adobe InDesign", logo: "/images/indesign.png", level: 80 },
    { name: "Adobe After Effects", logo: "/images/after-effects.png", level: 85 },
    { name: "Adobe Premiere", logo: "/images/premiere-pro.png", level: 80 },
    { name: "CapCut", logo: "/images/capcut-logo-png-download-2035x2048.png", level: 75 },
    { name: "Canva", logo: "/images/canva-icon-logo-symbol-free-png.webp", level: 90 },
    { name: "Maya", logo: "/images/maya.png", level: 70 },
    { name: "ZBrush", logo: "/images/zbrush lg.jpg", level: 75 },
    { name: "Blender", logo: "/images/Blender-Emblem.png", level: 80 },
  ]

  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl flex items-center justify-center border border-white/10 overflow-hidden">
              <img 
                src="/images/avt.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Giới thiệu</h2>
            
            <div className="space-y-4 text-gray-300 mb-8">
              <p>
                Xin chào! Tôi là <span className="text-purple-400 font-semibold">Hồ Phi Nhật</span>, 
                một Designer đến từ TP.HCM.
              </p>
              <p>
                Là sinh viên chuyên ngành Thiết kế Đồ họa tại Đại học FPT. Với tôi, thiết kế không chỉ là tạo ra cái đẹp mà là tìm kiếm giải pháp thị giác để truyền tải thông điệp một cách mạch lạc và hiệu quả nhất. Trong quá trình học tập, tôi luôn đề cao sự chỉn chu, tư duy sáng tạo kết hợp với tính ứng dụng thực tiễn trong từng sản phẩm. Tôi luôn giữ thái độ cầu thị, không ngừng học hỏi để hoàn thiện kỹ năng và tư duy mỗi ngày.
              </p>
              
            </div>

            {/* Skills Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Kĩ năng và phầm mềm sử dụng</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-8 h-8 group-hover:scale-110 transition-transform"
                      />
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
