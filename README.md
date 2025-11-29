# 🌟 Portfolio - Hồ Phi Nhật

Trang portfolio cá nhân hiện đại được xây dựng với Next.js, React và Tailwind CSS. Trang web giới thiệu thông tin cá nhân, kỹ năng và dự án của tôi với giao diện đẹp mắt, hiệu ứng mượt mà và thiết kế responsive.

![Portfolio Preview](./public/images/preview.png)

## 🎯 Tính năng nổi bật

- ✨ **Hiệu ứng Loading** - Màn hình loading với animation spinner
- 🎬 **Animation mượt mà** - Hiệu ứng bay vào từ 2 bên và bay ra khi scroll
- 🖼️ **Thiết kế hiện đại** - Giao diện clean với màu sắc cyan và gradient đẹp mắt
- 📱 **Responsive** - Tương thích hoàn hảo trên mọi thiết bị
- 🚀 **Tối ưu hiệu suất** - Tải nhanh với lazy loading và code splitting
- 🎨 **Background 3D** - Hiệu ứng nền 3D động với React Three Fiber
- 👁️ **Toggle hiển thị** - Nút ẩn/hiện nội dung để xem background
- 🎭 **Smooth transitions** - Chuyển cảnh mượt mà giữa các sections

## 🛠️ Công nghệ sử dụng

- **Framework**: Next.js 14 với App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: React Three Fiber + Three.js + Drei
- **Animations**: CSS Transitions & Transforms
- **Font**: Inter (Google Fonts)
- **Icons**: Lucide React, SVG Icons
- **Deployment**: Vercel

## 📦 Cài đặt và chạy dự án

1. **Clone repository**
   ```bash
   git clone https://github.com/quangtrung03/Portfolio.git
   cd Portfolio
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   # hoặc
   yarn install
   ```

3. **Chạy development server**
   ```bash
   npm run dev
   # hoặc
   yarn dev
   ```

4. **Mở trình duyệt**
   Truy cập `http://localhost:3000` để xem ứng dụng.

## �️ Cấu trúc dự án

```
src/
├── app/
│   ├── globals.css      # CSS toàn cục và Tailwind imports
│   ├── layout.tsx       # Layout chính
│   ├── page.tsx         # Trang chủ
│   └── not-found.tsx    # Trang 404
├── components/
│   ├── BackgroundScene.tsx  # Scene 3D nền
│   ├── Header.tsx           # Header navigation
│   ├── Hero.tsx             # Section giới thiệu chính
│   ├── About.tsx            # Section về tôi
│   ├── Projects.tsx         # Section dự án
│   └── Contact.tsx          # Section liên hệ
public/
├── images/
│   ├── avatar.jpg       # Ảnh đại diện
│   └── deptrai2.jpg     # Ảnh chính
└── vercel.json          # Config Vercel deployment
```

## 🎨 Tùy chỉnh nội dung

### Cập nhật thông tin cá nhân

Chỉnh sửa các file sau để tùy chỉnh portfolio:

1. **Hero Component** (`src/components/Hero.tsx`)
   - Thay đổi tên, chức danh
   - Cập nhật thông tin liên hệ (email, số điện thoại)
   - Thay ảnh đại diện trong `/public/images/`

2. **Header Component** (`src/components/Header.tsx`)
   - Cập nhật tên và menu navigation

3. **About Component** (`src/components/About.tsx`)
   - Thay đổi mô tả bản thân
   - Cập nhật kỹ năng và kinh nghiệm

4. **Projects Component** (`src/components/Projects.tsx`)
   - Thêm/sửa các dự án cá nhân

### Tùy chỉnh giao diện

1. **Màu sắc**: Chỉnh sửa trong `tailwind.config.js`
2. **Font**: Thay đổi font chữ trong `layout.tsx`
3. **Animations**: Điều chỉnh timing và effects trong các components

### Tùy chỉnh Background 3D

File `src/components/BackgroundScene.tsx`:
- **Màu sắc**: Thay đổi màu wireframe
- **Tốc độ animation**: Điều chỉnh trong `useFrame` hook
- **Hình dạng**: Modify geometry cho hiệu ứng khác

## 🚀 Deploy dự án

### Deploy lên Vercel (Khuyên dùng)

1. **Push code lên GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy với Vercel**
   - Truy cập [vercel.com](https://vercel.com)
   - Import repository từ GitHub
   - Deploy với cấu hình mặc định

3. **Custom domain** (Tùy chọn)
   - Thêm domain tại Vercel dashboard
   - Cập nhật DNS settings

### Deploy lên Netlify

1. **Build project**
   ```bash
   npm run build
   npm run export
   ```

2. **Upload lên Netlify**
   - Kéo thả folder `out` lên Netlify
   - Hoặc kết nối GitHub repository

## ⚡ Hiệu suất

- **Lighthouse Score**: 90+ trên tất cả metrics
- **Loading Time**: < 2s trên mạng 4G
- **Bundle Size**: Được tối ưu với dynamic imports
- **Animations**: Mượt mà 60fps

## � Trình duyệt hỗ trợ

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **4K**: 1440px+

## 🎯 Tính năng đặc biệt

### Animation System
- **Loading Screen**: Hiệu ứng loading với spinner
- **Enter Animation**: Elements bay vào từ 2 bên
- **Scroll Animation**: Bay ra khi scroll xuống
- **Hover Effects**: Interactive buttons và links

### Performance Optimizations
- **Lazy Loading**: Images và components
- **Code Splitting**: Dynamic imports
- **SEO Friendly**: Meta tags và structured data
- **Fast Refresh**: Hot reload trong development

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Mở Pull Request

## 📄 License

Dự án này được cấp phép theo MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🙏 Cảm ơn

- **Next.js Team** - Framework tuyệt vời
- **Tailwind CSS** - Utility-first CSS framework
- **React Three Fiber** - 3D graphics cho React
- **Vercel** - Platform deployment tốt nhất

## 📞 Liên hệ

- **Email**: hophinhat04@gmail.com
- **Phone**: 0783956550
- **Location**: TP.HCM, Việt Nam
- **GitHub**: [github.com/quangtrung03](https://github.com/quangtrung03)

---

**Được xây dựng với ❤️ bởi Hồ Phi Nhật**

*Sinh viên năm cuối - FPT University*

Để có câu hỏi hoặc hỗ trợ, vui lòng [tạo issue](https://github.com/quangtrung03/Portfolio/issues) hoặc liên hệ trực tiếp qua email.
