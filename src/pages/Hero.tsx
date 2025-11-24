import React from 'react'
import { motion } from 'framer-motion'
import backgroundImage from '../assets/back.png'

const HeroSection: React.FC = () => {
  return (
    <section 
      id="main-content" 
      className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div id="anasayfa" className="absolute top-0"></div>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-indigo-900/30"></div>
      <div className="absolute inset-0 bg-grid-gray-100 opacity-10"></div>
      <div className="container section-padding relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl"
          >
            Görme Engelliler İçin
            <span className="text-gradient block mt-2 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Profesyonel Eğitim
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-lg"
          >
            Braille okuma-yazma, oryantasyon ve mobilite, teknoloji kullanımı ve günlük yaşam becerilerinde 
            uzmanlaşmış eğitim kadromuzla görme engelli bireylerin bağımsızlık yolculuğunda yanındayız.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              className="btn btn-primary shadow-2xl hover:shadow-3xl transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('iletisim')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                  window.history.pushState({}, '', '#iletisim')
                }
              }}
            >
              Hemen İletişime Geçin
            </button>
            <button 
              className="btn btn-secondary shadow-2xl hover:shadow-3xl transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('hizmetler')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                  window.history.pushState({}, '', '#hizmetler')
                }
              }}
            >
              Hizmetlerimizi Keşfedin
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
    </section>
  )
}

export default HeroSection
