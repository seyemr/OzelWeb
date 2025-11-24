import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronRight, 
  Phone, 
  MessageCircle,
  Heart,
  Users,
  Award,
  Shield,
  Navigation,
  BookOpen,
  Brain,
  Sparkles,
  Target,
  CheckCircle,
  Home,
  Lightbulb,
  ArrowRight,
  Star,
  Clock,
  Trophy,
  ChevronLeft,
  Play
} from 'lucide-react'

const ModernServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState(0)
  const [viewMode, setViewMode] = useState<'cards' | 'carousel'>('cards')
  const services = [
    {
      icon: Users,
      title: "Rehberlik ve Yön Bulma Eğitimi",
      shortTitle: "Rehberlik Eğitimi",
      description: "Güvenli şekilde refakatçiyle hareket etmeyi öğretir. Rehber tutuş pozisyonları, kapı geçişleri, merdiven çıkma/iniş, dar alanlardan geçiş ve kalabalıkta güvenli hareket teknikleri.",
      amaç: "Bireyin güvenli bir şekilde refakatçi ile hareket etmesini sağlamak",
      içerik: [
        "Rehber tutuş pozisyonları",
        "Kapı geçişleri", 
        "Merdiven çıkma ve iniş teknikleri",
        "Dar alanlardan geçiş",
        "Kalabalıkta güvenli hareket"
      ],
      duration: "8-12 hafta",
      level: "Temel",
      color: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      emoji: "🦯"
    },
    {
      icon: Navigation,
      title: "Bağımsız Hareket (Mobilite) Eğitimi",
      shortTitle: "Mobilite Eğitimi",
      description: "Tek başına güvenli ve bağımsız hareket sağlar. Baston kullanımı, yön bulma, dönüş teknikleri, dinleme ve dokunma duyularının kullanımı, engelleri algılama ve atlatma.",
      amaç: "Bireyin bağımsız, güvenli ve etkili hareket etmesini sağlamak",
      içerik: [
        "Baston kullanım teknikleri",
        "Yön bulma ve dönüş teknikleri",
        "Dinleme ve dokunma duyularının kullanımı",
        "Engelleri algılama ve atlatma",
        "Güvenli yol bulma stratejileri"
      ],
      duration: "12-16 hafta",
      level: "Orta",
      color: "from-green-500 to-green-600", 
      bgGradient: "from-green-50 to-green-100",
      emoji: "🚶‍♂️"
    },
    {
      icon: Shield,
      title: "Duvar Takibi Tekniği Eğitimi",
      shortTitle: "Duvar Takibi",
      description: "Kapalı alanlarda yön bulma ve güvenli geçiş. Sağ/sol duvar takip pozisyonları, kapı giriş-çıkışlarında hizalama, dar alan geçiş teknikleri ve köşe dönüşleri.",
      amaç: "İç mekanlarda güvenli hareket ve yön bulma becerilerini geliştirmek",
      içerik: [
        "Sağ ve sol duvar takip pozisyonları",
        "Kapı giriş-çıkışlarında hizalama",
        "Dar alan geçiş teknikleri",
        "Köşe dönüşleri",
        "İç mekan yön bulma"
      ],
      duration: "6-8 hafta",
      level: "Temel",
      color: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      emoji: "🧱"
    },
    {
      icon: Heart,
      title: "Alçak Kol Koruma Tekniği Eğitimi",
      shortTitle: "Alçak Kol Koruma",
      description: "Göğüs hizası ve gövde seviyesindeki engellerden korunma. Doğru kol pozisyonu, yürüyüş sırasında koruma ve dar alanlarda güvenli uygulama teknikleri.",
      amaç: "Göğüs hizasındaki engellerden etkili korunma sağlamak",
      içerik: [
        "Doğru kol pozisyonu",
        "Yürüyüş sırasında koruma",
        "Dar alanlarda uygulama",
        "Göğüs hizası engel algılama",
        "Güvenli koruma refleksleri"
      ],
      duration: "4-6 hafta",
      level: "Temel",
      color: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100",
      emoji: "✋"
    },
    {
      icon: Award,
      title: "Yüksek Kol Koruma Tekniği Eğitimi",
      shortTitle: "Yüksek Kol Koruma",
      description: "Baş ve yüz bölgesindeki engellere karşı güvenlik. Kol pozisyonu, baş hizası engelleri tespit, merdiven ve kapı girişlerinde güvenli uygulama.",
      amaç: "Baş ve yüz bölgesini engellerden koruyarak güvenli hareket sağlamak",
      içerik: [
        "Yüksek kol pozisyonu",
        "Baş hizası engelleri tespit",
        "Merdiven girişlerinde uygulama",
        "Kapı girişlerinde güvenlik",
        "Yüz ve baş koruması"
      ],
      duration: "4-6 hafta",
      level: "Temel",
      color: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100",
      emoji: "🙋‍♂️"
    },
    {
      icon: Home,
      title: "Günlük Yaşam Becerileri Eğitimi",
      shortTitle: "Günlük Yaşam",
      description: "Bağımsız yaşam becerilerini artırma. Kişisel bakım, kıyafet düzenleme, ev içi güvenlik, para kullanma, alışveriş becerileri ve mutfak güvenliği.",
      amaç: "Günlük yaşamda bağımsızlık ve öz yeterlilik kazandırmak",
      içerik: [
        "Kişisel bakım becerileri",
        "Kıyafet düzenleme ve seçimi",
        "Ev içi güvenlik önlemleri",
        "Para kullanma teknikleri",
        "Alışveriş ve mutfak güvenliği"
      ],
      duration: "10-14 hafta",
      level: "Orta",
      color: "from-rose-500 to-rose-600",
      bgGradient: "from-rose-50 to-rose-100",
      emoji: "🧩"
    },
    {
      icon: Brain,
      title: "Algı ve Kavram Geliştirme Eğitimi",
      shortTitle: "Algı Geliştirme",
      description: "Görsel olmayan algıların güçlendirilmesi. Dokunsal ayırt etme, işitsel kavramlar, mekânsal ilişkiler ve nesne-yön kavramları geliştirme.",
      amaç: "Duyusal algı ve kavramsal düşünce becerilerini geliştirmek",
      içerik: [
        "Dokunsal ayırt etme becerileri",
        "İşitsel kavram geliştirme",
        "Mekânsal ilişkiler",
        "Nesne ve yön kavramları",
        "Duyusal koordinasyon"
      ],
      duration: "8-12 hafta",
      level: "İleri",
      color: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100",
      emoji: "🧠"
    },
    {
      icon: Trophy,
      title: "Bireysel Eğitim Programları",
      shortTitle: "Bireysel Program",
      description: "Kişiye özel hedefler doğrultusunda eğitim planı. Bireysel performans değerlendirme, aylık gelişim hedefleri ve aileye düzenli geri bildirim.",
      amaç: "Her bireyin ihtiyaçlarına özel kapsamlı eğitim programı sunmak",
      içerik: [
        "Bireysel performans değerlendirme",
        "Kişiye özel hedef belirleme",
        "Aylık gelişim takibi",
        "Aile danışmanlığı",
        "Düzenli geri bildirim ve raporlama"
      ],
      duration: "16-24 hafta",
      level: "Kapsamlı",
      color: "from-cyan-500 to-cyan-600",
      bgGradient: "from-cyan-50 to-cyan-100",
      emoji: "🎓"
    },
    {
      icon: Users,
      title: "Aile Eğitimi ve Danışmanlık",
      shortTitle: "Aile Eğitimi",
      description: "Ailelerin doğru yaklaşımları öğrenmesi ve evde destek süreci. Evde güvenli hareket, rehberlik teknikleri, davranış yönetimi ve eğitimde aile rolü.",
      amaç: "Ailelerin eğitim sürecine aktif katılımını ve doğru yaklaşımları sağlamak",
      içerik: [
        "Aile eğitimi ve bilinçlendirme",
        "Evde güvenli hareket düzenlemeleri",
        "Rehberlik teknikleri öğretimi",
        "Davranış yönetimi stratejileri",
        "Eğitimde aile desteği"
      ],
      duration: "6-10 hafta",
      level: "Destek",
      color: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      emoji: "👨‍👩‍👧"
    },
    {
      icon: BookOpen,
      title: "Akademik Beceriler Eğitimi",
      shortTitle: "Akademik Destek",
      description: "Görme engelli öğrenciler için akademik destek. Braille okuma-yazma, kabartma matematik materyalleri, adaptif eğitim araçları ve EBA uyumlu içerikler.",
      amaç: "Akademik başarıyı desteklemek ve eğitim sürecini kolaylaştırmak",
      içerik: [
        "Braille okuma-yazma öğretimi",
        "Kabartma matematik materyalleri",
        "Adaptif eğitim araçları kullanımı",
        "EBA uyumlu içerikler",
        "Akademik destek ve rehberlik"
      ],
      duration: "Sürekli",
      level: "Akademik",
      color: "from-violet-500 to-violet-600",
      bgGradient: "from-violet-50 to-violet-100",
      emoji: "📚"
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Temel': return 'bg-green-500'
      case 'Orta': return 'bg-yellow-500'
      case 'İleri': return 'bg-orange-500'
      case 'Kapsamlı': return 'bg-purple-500'
      case 'Destek': return 'bg-blue-500'
      case 'Akademik': return 'bg-indigo-500'
      default: return 'bg-gray-500'
    }
  }

  const handleServiceDetail = (serviceName: string) => {
    console.log(`${serviceName} detay sayfasına yönlendiriliyor...`)
  }

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section 
      id="hizmetler" 
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)'
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-400/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-400/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
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
            <Award className="w-12 h-12 text-white" />
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
            Profesyonel <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Eğitim Programları
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Rehberlik ve yönlendirme, bağımsız hareket, duvar takibi, kol koruma teknikleri, 
            <span className="font-semibold text-blue-700"> günlük yaşam becerileri</span> ve algı geliştirme 
            alanlarında <span className="font-semibold text-purple-700">uzmanlaşmış eğitim programları.</span>
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
            onClick={() => setViewMode('cards')}
            className={`group flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              viewMode === 'cards'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Trophy className="w-4 h-4" />
            Kart Görünümü
          </motion.button>
          
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
        </motion.div>

        {/* Conditional Display */}
        {viewMode === 'cards' ? (
          /* Modern Services Grid */
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -40 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-6 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300 overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-4xl">{service.emoji}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getLevelColor(service.level)}`}>
                          {service.level}
                        </span>
                      </div>
                    </div>
                    
                    {/* Title & Duration */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.shortTitle}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 font-medium">{service.duration}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    {/* Features Preview */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-500" />
                        Temel Konular
                      </h4>
                      <div className="space-y-1">
                        {service.içerik.slice(0, 3).map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span className="text-xs text-gray-600 line-clamp-1">{item}</span>
                          </div>
                        ))}
                        {service.içerik.length > 3 && (
                          <span className="text-xs text-blue-500 font-medium">+{service.içerik.length - 3} diğer konu</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <motion.button
                      onClick={() => handleServiceDetail(service.title)}
                      className={`w-full bg-gradient-to-r ${service.color} text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-sm">Detayları Gör</span>
                      <motion.div
                        className="group-hover/btn:translate-x-1 transition-transform"
                        whileHover={{ x: 3 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.button>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Modern Carousel */
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative">
              {/* Main Carousel Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black h-[600px]">
                <AnimatePresence mode="wait">
                  {services.map((service, index) => (
                    index === activeService && (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, scale: 1.1, x: 300 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: -300 }}
                        transition={{ 
                          duration: 0.8, 
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        className="absolute inset-0 cursor-pointer group"
                      >
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-90`}></div>
                        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`}></div>
                        
                        {/* Content */}
                        <div className="absolute inset-0 p-12 flex items-center">
                          <div className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Icon & Info */}
                            <motion.div
                              initial={{ x: -50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.3, duration: 0.6 }}
                              className="text-center lg:text-left"
                            >
                              <div className="flex items-center justify-center lg:justify-start gap-6 mb-6">
                                <motion.div
                                  className={`w-24 h-24 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center shadow-2xl`}
                                  whileHover={{ rotate: 5, scale: 1.1 }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  <service.icon className="w-12 h-12 text-white" />
                                </motion.div>
                                <div className="text-8xl">{service.emoji}</div>
                              </div>
                              
                              <motion.h3 
                                className="text-4xl md:text-5xl font-black text-gray-800 mb-4"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                              >
                                {service.shortTitle}
                              </motion.h3>
                              
                              <motion.div
                                className="flex items-center justify-center lg:justify-start gap-4 mb-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                              >
                                <span className={`px-4 py-2 rounded-full text-sm font-bold text-white ${getLevelColor(service.level)} shadow-lg`}>
                                  {service.level}
                                </span>
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                                  <Clock className="w-4 h-4 text-gray-600" />
                                  <span className="text-sm font-medium text-gray-700">{service.duration}</span>
                                </div>
                              </motion.div>
                            </motion.div>
                            
                            {/* Right Side - Content */}
                            <motion.div
                              initial={{ x: 50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.4, duration: 0.6 }}
                              className="space-y-6"
                            >
                              {/* Description */}
                              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                  {service.description}
                                </p>
                                
                                {/* Amaç */}
                                <div className="mb-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                  <h4 className="flex items-center gap-2 font-semibold text-blue-700 mb-2">
                                    <Target className="w-4 h-4" />
                                    Amaç
                                  </h4>
                                  <p className="text-sm text-blue-600">{service.amaç}</p>
                                </div>
                                
                                {/* İçerik Preview */}
                                <div className="mb-4">
                                  <h4 className="flex items-center gap-2 font-semibold text-green-700 mb-3">
                                    <CheckCircle className="w-4 h-4" />
                                    Eğitim İçeriği
                                  </h4>
                                  <div className="grid grid-cols-1 gap-2">
                                    {service.içerik.slice(0, 4).map((item, itemIndex) => (
                                      <motion.div
                                        key={itemIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 + itemIndex * 0.1 }}
                                        className="flex items-center gap-3 text-sm text-gray-600"
                                      >
                                        <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                        <span>{item}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                                
                                {/* Action Button */}
                                <motion.button
                                  onClick={() => handleServiceDetail(service.title)}
                                  className={`w-full bg-gradient-to-r ${service.color} text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group/btn`}
                                  whileHover={{ scale: 1.02, y: -2 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Lightbulb className="w-5 h-5 group-hover/btn:animate-pulse" />
                                  <span>Detaylı Bilgi Al</span>
                                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </motion.button>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
              
              {/* Navigation Buttons */}
              <motion.button
                onClick={prevService}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white/30 transition-all duration-300 border border-white/20 group shadow-xl"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-7 h-7 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
              </motion.button>
              
              <motion.button
                onClick={nextService}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white/30 transition-all duration-300 border border-white/20 group shadow-xl"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-7 h-7 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
              </motion.button>
            </div>
            
            {/* Carousel Indicators */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex justify-center items-center gap-4 mt-8"
            >
              {services.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeService ? 'bg-blue-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </motion.div>
            
            {/* Service Counter */}
            <div className="text-center mt-4">
              <span className="text-lg font-bold text-gray-700">
                {String(activeService + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        )}

        {/* Modern Call to Action */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative mt-20"
        >
          {/* Background with gradient */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 px-8 py-12 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30"
              >
                <MessageCircle className="w-10 h-10 text-white" />
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Bizimle İletişime Geçin! 🌟
              </motion.h3>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                <p className="mb-3">
                  <span className="font-semibold text-white">Uzman eğitmen kadromuz</span> ile size en uygun eğitim programını belirleyelim.
                </p>
                <p className="text-base">
                  📋 <strong className="text-white">Kişiye özel plan</strong> • 🤝 <strong className="text-white">Profesyonel destek</strong> • ✨ <strong className="text-white">Uzman kadro</strong>
                </p>
              </motion.div>
              
              {/* Action Buttons */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.a
                  href="tel:+905337035145"
                  className="group relative bg-white text-blue-700 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 min-w-[200px] justify-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <Phone className="w-5 h-5 group-hover:animate-bounce" />
                    <span>📞 Hemen Ara</span>
                  </div>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0.5 bg-white rounded-2xl group-hover:bg-white/90 transition-colors duration-300"></div>
                </motion.a>
                
                <motion.a
                  href="https://wa.me/905337035145"
                  className="group relative bg-green-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 min-w-[200px] justify-center hover:bg-green-600"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                  <span>💬 WhatsApp</span>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </motion.a>
              </motion.div>
              
              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="mt-8 text-sm text-blue-200"
              >
                <p>⏰ <strong>7/24 Destek Hattı</strong> | 🚀 <strong>Hızlı Geri Dönüş</strong> | 🎓 <strong>15+ Yıl Deneyim</strong></p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernServicesSection
