import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Camera, 
  Image, 
  Heart, 
  Users, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward,
  Sparkles,
  Grid,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Expand,
  Minimize,
  Video,
  PlayCircle
} from 'lucide-react'

const ModernGallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('carousel')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
      alt: "Rehberlik ve yönlendirme eğitimi: Güvenli şekilde refakatçiyle hareket etme teknikleri",
      category: "Rehberlik Eğitimi",
      title: "Rehberle Yürüme Teknikleri",
      description: "Profesyonel rehberlik eğitimi ile güvenli hareket öğrenme süreci",
      type: "image"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      alt: "Bağımsız hareket eğitimi: Beyaz baston kullanımı ve mobilite teknikleri",
      category: "Mobilite", 
      title: "Bağımsız Hareket Eğitimi",
      description: "Beyaz baston kullanımı ve bağımsız hareket teknikleri",
      type: "image"
    },
    {
      id: 9,
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      alt: "Beyaz baston kullanımı video eğitimi: Temel tekniklerin uygulanması",
      category: "Mobilite",
      title: "Beyaz Baston Kullanımı - Video Eğitimi",
      description: "Beyaz baston tekniklerinin adım adım video gösterimi",
      type: "video",
      duration: "2:30"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop",
      alt: "Duvar takibi tekniği: Kapalı alanlarda yön bulma ve güvenli geçiş eğitimi",
      category: "Duvar Takibi",
      title: "Duvar Takibi Tekniği",
      description: "İç mekanlarda güvenli hareket ve yön bulma becerileri",
      type: "image"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1594824079122-ac112549f30b?w=800&h=600&fit=crop", 
      alt: "Alçak ve yüksek kol koruma teknikleri: Engellerden korunma eğitimi",
      category: "Koruma Teknikleri",
      title: "Kol Koruma Teknikleri",
      description: "Baş ve vücut koruması için gelişmiş koruma teknikleri",
      type: "image"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
      alt: "Günlük yaşam becerileri: Mutfak güvenliği, kişisel bakım ve ev içi aktiviteler", 
      category: "Yaşam Becerileri",
      title: "Günlük Yaşam Becerileri",
      description: "Bağımsız yaşam için temel beceriler ve ev içi güvenlik",
      type: "image"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1576267423445-b2f0074d3b71?w=800&h=600&fit=crop",
      alt: "Aile eğitimi ve danışmanlık: Evde güvenli hareket ve rehberlik teknikleri",
      category: "Aile Eğitimi",
      title: "Aile Danışmanlığı",
      description: "Ailelerin doğru yaklaşım ve destek teknikleri öğrenmesi",
      type: "image"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      alt: "Braille okuma-yazma eğitimi: Dokunsal okuma becerilerinin geliştirilmesi",
      category: "Akademik Beceriler",
      title: "Braille Okuma-Yazma",
      description: "Braille alfabe ve dokunsal okuma-yazma eğitimi",
      type: "image"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      alt: "Teknoloji eğitimi: Konuşan bilgisayar ve yardımcı teknolojiler",
      category: "Teknoloji",
      title: "Yardımcı Teknolojiler",
      description: "Konuşan bilgisayar ve erişilebilir teknoloji kullanımı",
      type: "image"
    },
    {
      id: 10,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      alt: "Rehberlik eğitimi video gösterimi: Güvenli hareket teknikleri",
      category: "Rehberlik Eğitimi",
      title: "Rehberlik Teknikleri - Video",
      description: "Görme engelli bireylere rehberlik yapma tekniklerinin video ile gösterimi",
      type: "video",
      duration: "1:45"
    },
    {
      id: 11,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      alt: "Günlük yaşam becerileri video eğitimi: Mutfak güvenliği",
      category: "Yaşam Becerileri",
      title: "Mutfak Güvenliği - Video Eğitimi", 
      description: "Görme engelli bireyler için mutfakta güvenli çalışma tekniklerinin video gösterimi",
      type: "video",
      duration: "3:15"
    }
  ]

  // Kategori filtresi kaldırıldı, tüm medya öğeleri gösteriliyor
  const filteredImages = galleryImages

  // Auto-play carousel functionality
  useEffect(() => {
    if (isAutoPlaying && viewMode === 'carousel') {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredImages.length)
      }, 4000)
      return () => clearInterval(timer)
    }
  }, [isAutoPlaying, viewMode, filteredImages.length, currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }



  // Touch handlers
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (viewMode === 'carousel') {
        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault()
            setCurrentSlide((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
            break
          case 'ArrowRight':
            e.preventDefault()
            setCurrentSlide((prev) => (prev + 1) % filteredImages.length)
            break
          case 'Escape':
            if (isFullscreen) setIsFullscreen(false)
            if (selectedImage) setSelectedImage(null)
            break
          case ' ':
            e.preventDefault()
            setIsAutoPlaying(!isAutoPlaying)
            break
          case 'f':
          case 'F':
            e.preventDefault()
            setIsFullscreen(!isFullscreen)
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [viewMode, isAutoPlaying, isFullscreen, selectedImage, filteredImages.length])

  // Fullscreen API
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }



  return (
    <section 
      id="galeri" 
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)'
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-400/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-400/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Modern Header */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative w-24 h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
          >
            <Camera className="w-12 h-12 text-white" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-3xl border-4 border-white/30 animate-pulse"></div>
            <div className="absolute -inset-2 rounded-3xl border border-blue-400/20 animate-ping"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-black text-gray-800 mb-6"
          >
            Eğitim <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Galerimiz
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Görme engelli bireylerin <span className="font-semibold text-blue-700">bağımsızlık yolculuğunda</span> elde ettikleri 
            başarılar ve <span className="font-semibold text-purple-700">profesyonel eğitim süreçlerinden</span> özel anlar.
          </motion.p>
        </motion.div>



        {/* View Mode Toggle */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => setViewMode('carousel')}
            className={`group flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              viewMode === 'carousel'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-4 h-4" />
            Carousel Görünümü
          </motion.button>
          
          <motion.button
            onClick={() => setViewMode('grid')}
            className={`group flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              viewMode === 'grid'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Grid className="w-4 h-4" />
            Galeri Görünümü
          </motion.button>
        </motion.div>

        {/* Conditional Gallery Display */}
        {viewMode === 'carousel' ? (
          /* Ultra-Modern Carousel */
          <div className="max-w-7xl mx-auto mb-16">
            <div className="relative">
              {/* Main Carousel Container */}
              <div 
                className={`relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black transition-all duration-300 ${
                  isFullscreen ? 'h-screen w-screen fixed inset-0 z-50 rounded-none' : 'h-[500px] md:h-[700px]'
                }`}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <AnimatePresence mode="wait">
                  {filteredImages.map((image, index) => (
                    index === currentSlide && (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 1.1, rotateY: 15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                        transition={{ 
                          duration: 0.8, 
                          ease: [0.4, 0, 0.2, 1],
                          scale: { duration: 0.6 },
                          rotateY: { duration: 0.7 }
                        }}
                        className="absolute inset-0 cursor-pointer group"
                        onClick={() => setSelectedImage(image.id)}
                      >
                        {/* Background Media with Parallax Effect */}
                        {image.type === 'video' ? (
                          <motion.video
                            src={image.src}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        ) : (
                          <motion.img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                          />
                        )}
                        
                        {/* Dynamic Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
                        
                        {/* Video Play Button and Duration */}
                        {image.type === 'video' && (
                          <>
                            <motion.div
                              className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              {image.duration}
                            </motion.div>
                            <motion.div
                              className="absolute inset-0 flex items-center justify-center"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <div className="relative">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/30">
                                  <PlayCircle className="w-10 h-10 text-white" />
                                </div>
                                <motion.div
                                  className="absolute inset-0 rounded-full border-2 border-white/50"
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                              </div>
                            </motion.div>
                          </>
                        )}
                        
                        {/* Floating Particles Effect */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-white/20 rounded-full"
                              initial={{ 
                                x: Math.random() * 100 + "%", 
                                y: "100%", 
                                opacity: 0 
                              }}
                              animate={{ 
                                y: "-20%", 
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0]
                              }}
                              transition={{ 
                                duration: 3 + Math.random() * 2, 
                                repeat: Infinity,
                                delay: Math.random() * 2
                              }}
                            />
                          ))}
                        </div>
                        
                        {/* Content with Advanced Animations */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                          <motion.div
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="max-w-4xl"
                          >
                            {/* Category Badge */}
                            <motion.span 
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-blue-600/80 backdrop-blur-sm text-white mb-6 shadow-2xl relative"
                              whileHover={{ scale: 1.05, y: -2 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <motion.div
                                className="absolute inset-0 rounded-full bg-white/20"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              <Camera className="w-4 h-4 relative z-10" />
                              <span className="relative z-10">{image.category}</span>
                            </motion.span>
                            
                            {/* Title with Typewriter Effect */}
                            <motion.h3 
                              className="text-4xl md:text-6xl font-black mb-6 leading-tight"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.6, duration: 1 }}
                            >
                              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                                {image.title}
                              </span>
                            </motion.h3>
                            
                            {/* Description with Stagger Effect */}
                            <motion.p 
                              className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8, duration: 0.6 }}
                            >
                              {image.description}
                            </motion.p>
                          </motion.div>
                        </div>
                        
                        {/* Enhanced Action Icons */}
                        <div className="absolute top-6 right-6 flex gap-3">
                          <motion.button 
                            onClick={() => setSelectedImage(image.id)}
                            className="w-14 h-14 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/60 transition-all duration-300 border border-white/20"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Maximize2 className="w-6 h-6 text-white" />
                          </motion.button>
                          
                          <motion.button 
                            onClick={toggleFullscreen}
                            className="w-14 h-14 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/60 transition-all duration-300 border border-white/20"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {isFullscreen ? <Minimize className="w-6 h-6 text-white" /> : <Expand className="w-6 h-6 text-white" />}
                          </motion.button>
                          
                          <motion.div 
                            className="w-14 h-14 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/60 transition-all duration-300 border border-white/20"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Heart className="w-6 h-6 text-white" />
                          </motion.div>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
              
              {/* Enhanced Navigation Buttons */}
              <motion.button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20 group"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-7 h-7 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
              </motion.button>
              
              <motion.button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20 group"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-7 h-7 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
              </motion.button>
            </div>
            
            {/* Thumbnail Navigation */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8 px-4"
            >
              <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-4">
                {filteredImages.map((image, index) => (
                  <motion.button
                    key={image.id}
                    onClick={() => goToSlide(index)}
                    className={`relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                      index === currentSlide
                        ? 'ring-4 ring-blue-500 ring-opacity-60 scale-110'
                        : 'hover:scale-105 hover:ring-2 hover:ring-white/30'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    {index === currentSlide && (
                      <motion.div
                        className="absolute inset-0 bg-blue-500/30"
                        layoutId="activeThumbnail"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
            
            {/* Advanced Carousel Controls */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8"
            >
              {/* Auto-play Control */}
              <motion.button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                  isAutoPlaying
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-gray-300 hover:to-gray-400'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isAutoPlaying ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </motion.div>
                {isAutoPlaying ? 'Otomatik Oynatma' : 'Manuel Kontrol'}
              </motion.button>
              
              {/* Progress Indicators */}
              <div className="flex gap-2">
                {filteredImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="relative w-4 h-4 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <div className={`w-full h-full rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                    }`} />
                    {index === currentSlide && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-400"
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              {/* Slide Counter & Navigation */}
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={prevSlide}
                  className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-gray-200 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SkipBack className="w-4 h-4 text-gray-600" />
                </motion.button>
                
                <span className="text-lg font-bold text-gray-700 min-w-[80px] text-center">
                  {String(currentSlide + 1).padStart(2, '0')} / {String(filteredImages.length).padStart(2, '0')}
                </span>
                
                <motion.button
                  onClick={nextSlide}
                  className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-gray-200 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SkipForward className="w-4 h-4 text-gray-600" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        ) : (
          /* Modern Gallery Grid */
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Media */}
                  {image.type === 'video' ? (
                    <>
                      <video
                        src={image.src}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        muted
                        loop
                        playsInline
                      />
                      {/* Video indicator */}
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                        <Video className="w-3 h-3" />
                        {image.duration}
                      </div>
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                          <PlayCircle className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
                      <h3 className="font-bold text-gray-800 mb-2 line-clamp-1">{image.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{image.description}</p>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
                        <Camera className="w-3 h-3" />
                        {image.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Modern Stats */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "500+", label: "Eğitim Anı", icon: Image, color: "from-blue-500 to-blue-600" },
            { number: "50+", label: "Başarı Hikayesi", icon: Heart, color: "from-green-500 to-green-600" },
            { number: "100+", label: "Mutlu Aile", icon: Users, color: "from-purple-500 to-purple-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative bg-gradient-to-br ${stat.color} rounded-3xl p-8 text-white text-center shadow-2xl overflow-hidden`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-white/10 opacity-50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
              </div>
              
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 5 }}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <motion.h3 
                  className="text-4xl font-black mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.2, type: "spring" }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-xl font-semibold opacity-90">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const image = galleryImages.find(img => img.id === selectedImage)
                if (!image) return null
                
                return (
                  <>
                    {image.type === 'video' ? (
                      <video
                        src={image.src}
                        controls
                        className="w-full h-auto max-h-[60vh] object-cover bg-black"
                        autoPlay
                      >
                        Video oynatılamıyor.
                      </video>
                    ) : (
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto max-h-[60vh] object-cover"
                      />
                    )}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{image.title}</h3>
                          <p className="text-gray-600">{image.description}</p>
                        </div>
                        {image.type === 'video' && image.duration && (
                          <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                            <Video className="w-4 h-4" />
                            {image.duration}
                          </div>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-blue-600 text-white">
                        <Camera className="w-4 h-4" />
                        {image.category}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ModernGallerySection
