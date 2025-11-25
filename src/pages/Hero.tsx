import React from 'react'
import { motion } from 'framer-motion'
import { useContent } from '../contexts/ContentContext'
import { 
  ArrowRight, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Sparkles, 
  ChevronDown,
  Play,
  Shield,
  Zap
} from 'lucide-react'
import backgroundImage from '../assets/back.png'

const HeroSection: React.FC = () => {
  const { content } = useContent()
  
  return (
    <section 
      id="main-content" 
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)'
      }}
    >
      <div id="anasayfa" className="absolute top-0"></div>
      
      {/* Modern Animated Background */}
      <div className="absolute inset-0">
        {/* Primary background image with modern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Modern gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-indigo-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-pink-400 rounded-full"
            animate={{
              y: [0, -25, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </div>

      <div className="container section-padding relative z-10">
        {/* Modern Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-blue-200 mb-6"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>15+ Yıl Deneyim • Uzman Kadro • Bireysel Eğitim</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6"
            >
              <span className="block text-white drop-shadow-2xl">
                {content.heroTitle}
              </span>
              <motion.span 
                className="block text-white/80 text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {content.heroSubtitle}
              </motion.span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              {content.heroDescription}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              {[
                { icon: Users, number: "500+", label: "Mezun Öğrenci" },
                { icon: Award, number: "15+", label: "Yıl Deneyim" },
                { icon: Heart, number: "100%", label: "Başarı Oranı" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:bg-white/10 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center gap-3 min-w-[250px] justify-center overflow-hidden"
                onClick={() => {
                  const element = document.getElementById('iletisim')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                    window.history.pushState({}, '', '#iletisim')
                  }
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                <span className="relative z-10">Hemen İletişime Geçin</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              
              <motion.button 
                className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-white/10 transition-all duration-300 inline-flex items-center gap-3 min-w-[250px] justify-center"
                onClick={() => {
                  const element = document.getElementById('hizmetler')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                    window.history.pushState({}, '', '#hizmetler')
                  }
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5 group-hover:animate-bounce" />
                <span>{content.heroButtonText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Modern Visual Elements */}
          <div className="hidden lg:block relative">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, type: "spring" }}
              className="relative"
            >
              {/* Main Feature Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Floating icons */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="text-center space-y-6">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl flex items-center justify-center mx-auto"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Award className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white">
                    Bireysel Eğitim Programları
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Her öğrencimiz için özel hazırlanan eğitim planları ile 
                    maksimum verimlilik ve hızlı öğrenme sağlıyoruz.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">24/7</div>
                      <div className="text-sm text-gray-400">Destek</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">1:1</div>
                      <div className="text-sm text-gray-400">Eğitim</div>
                    </div>
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -z-10 top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full filter blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -z-10 bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-yellow-500/20 rounded-full filter blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => {
              const element = document.getElementById('hakkimizda')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <span className="text-sm font-medium">Keşfetmeye Devam Et</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
