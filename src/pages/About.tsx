import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useContent } from '../contexts/ContentContext'
import { 
  Heart, 
  Users, 
  Eye, 
  BookOpen, 
  Navigation, 
  Home, 
  Sparkles,
  Target,
  Calendar,
  CheckCircle,
  Shield,
  Lightbulb,
  Zap
} from 'lucide-react'

const ModernAboutSection: React.FC = () => {
  const { content } = useContent()
  const [activeTab, setActiveTab] = useState<'mission' | 'values' | 'history'>('mission')

  const stats = [
    { number: '14+', label: 'Yıllık Deneyim', icon: Calendar, color: 'from-blue-500 to-blue-600' },
    { number: '1000+', label: 'Mezun Öğrenci', icon: Users, color: 'from-green-500 to-green-600' },
    { number: '100%', label: 'Başarı Oranı', icon: Target, color: 'from-purple-500 to-purple-600' },
    { number: '24/7', label: 'Destek Hattı', icon: Shield, color: 'from-orange-500 to-orange-600' }
  ]

  const services = [
    {
      icon: BookOpen,
      title: 'Braille Okuma-Yazma',
      description: 'Profesyonel Braille eğitmenleri ile dokunsal okuma-yazma becerileri geliştirme',
      features: ['Temel Braille alfabe', 'İleri seviye yazı teknikleri', 'Matemaksel notasyon', 'Müzik Braille']
    },
    {
      icon: Navigation,
      title: 'Oryantasyon & Mobilite',
      description: 'Bağımsız hareket ve yön bulma becerileri için uzman rehberlik eğitimi',
      features: ['Beyaz baston tekniği', 'Duvar takibi', 'Kol koruma teknikleri', 'Toplu taşıma kullanımı']
    },
    {
      icon: Home,
      title: 'Günlük Yaşam Becerileri',
      description: 'Ev içi aktiviteler, kişisel bakım ve sosyal yaşam becerilerini geliştirme',
      features: ['Mutfak güvenliği', 'Kişisel hijyen', 'Ev düzeni', 'Sosyal etkileşim']
    },
    {
      icon: Eye,
      title: 'Görme Rehabilitasyonu',
      description: 'Az görme durumlarında kalan görme potansiyelini maksimum verimle kullanma',
      features: ['Optik yardımcılar', 'Aydınlatma teknikleri', 'Kontrast kullanımı', 'Büyüteç eğitimi']
    }
  ]

  const tabContent = {
    mission: {
      title: 'Misyonumuz',
      content: 'Görme engelli bireylerin toplumsal yaşama tam katılımını sağlayarak, onların bağımsızlık kazanmalarına ve potansiyellerini en üst düzeyde geliştirmelerine destek olmak. Her birey için özel tasarlanmış eğitim programları ile hayat kalitesini artırmak.'
    },
    values: {
      title: 'Değerlerimiz',
      content: 'İnsan onuru, eşitlik, saygı ve profesyonellik ilkelerimiz doğrultusunda, her bireyin eşsiz olduğunu kabul ederek kişiselleştirilmiş hizmet sunuyoruz. Sürekli gelişim, yenilikçilik ve toplumsal duyarlılık değerlerimizin temelini oluşturur.'
    },
    history: {
      title: 'Tarihçemiz',
      content: '2010 yılında kurulan merkezimiz, görme engelli bireylere yönelik özel eğitim alanında Türkiye\'nin öncü kurumlarından biri olmuştur. 14 yıllık deneyimimizle binlerce bireyin yaşamına dokunarak onların bağımsızlık yolculuklarında rehberlik ettik.'
    }
  }

  return (
    <section 
      id="hakkimizda" 
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-green-400/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
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
            <Heart className="w-12 h-12 text-white" />
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
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {content.aboutTitle}
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            {content.aboutDescription}
          </motion.p>
        </motion.div>

        {/* Interactive Tabs */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="flex justify-center gap-4 mb-8">
            {(['mission', 'values', 'history'] as const).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tabContent[tab].title}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{tabContent[activeTab].title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{tabContent[activeTab].content}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative bg-gradient-to-br ${stat.color} rounded-3xl p-6 text-white text-center shadow-2xl overflow-hidden`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-white/10 opacity-50">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full translate-y-8 -translate-x-8"></div>
              </div>
              
              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  whileHover={{ rotate: 5 }}
                >
                  <stat.icon className="w-6 h-6" />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-black mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-sm font-semibold opacity-90">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-white/10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 -translate-x-20"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 translate-x-16"></div>
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Lightbulb className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold leading-relaxed mb-6"
              >
                "Görmek sadece gözlerle değil, dokunarak, dinleyerek ve hissederek de mümkündür. 
                Amacımız her bireyin içindeki potansiyeli keşfetmek ve hayatlarını dönüştürmektir."
              </motion.blockquote>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-3"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg font-semibold">Göreneller Eğitim Merkezi</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernAboutSection
