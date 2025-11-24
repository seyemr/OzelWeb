import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Clock, Users, Award, Heart } from 'lucide-react'
import logoImage from '../assets/profil.jpg'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer id="iletisim" className="relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 section-padding text-white">
        <div className="container">
          
          {/* Main Contact Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Logo and Header */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30"
            >
              <Phone className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Bizimle <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">İletişime Geçin</span> 📞
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Görme engelli bireylerin potansiyelini geliştirmek için buradayız. 
              <span className="font-semibold text-white"> Profesyonel eğitim</span> ve rehabilitasyon hizmetlerimiz hakkında bilgi alın.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            {/* Company Info Card */}
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <div 
                className="flex items-center gap-4 mb-6 cursor-pointer hover:scale-105 transition-transform" 
                onClick={scrollToTop}
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-400 flex-shrink-0 shadow-lg">
                  <img 
                    src={logoImage} 
                    alt="Göreneller Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Göreneller</h3>
                  <p className="text-blue-200 text-sm">Özel Eğitim & Rehabilitasyon</p>
                </div>
              </div>
              
              <p className="text-blue-100 leading-relaxed mb-6">
                🎓 Braille okuma-yazma<br />
                🦯 Oryantasyon ve mobilite<br />
                🏠 Günlük yaşam becerileri<br />
                💻 Teknoloji eğitimi
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-xs">15+ Yıl Deneyim</span>
                <span className="px-3 py-1 bg-green-500/30 text-green-200 rounded-full text-xs">Sertifikalı Kadro</span>
              </div>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">İletişim Bilgileri</h4>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">📍 Adresimiz</p>
                    <p className="text-blue-100 text-sm">
                      Pancarlı, 19052. Sk. No:3<br />
                      27060 Şehitkamil / Gaziantep
                    </p>
                  </div>
                </motion.div>
                
                <motion.a
                  href="tel:+905337035145"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-green-500/20 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="w-5 h-5 text-green-400 group-hover:animate-bounce" />
                  <div>
                    <p className="text-white font-medium">📞 Telefon</p>
                    <p className="text-green-300">+90 533 703 51 45</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://wa.me/905337035145"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-green-500/20 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                >
                  <MessageCircle className="w-5 h-5 text-green-400 group-hover:animate-pulse" />
                  <div>
                    <p className="text-white font-medium">💬 WhatsApp</p>
                    <p className="text-green-300">Hızlı İletişim</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Services & Links Card */}
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">Hizmetlerimiz</h4>
              </div>
              
              <div className="space-y-3 mb-6">
                <motion.a 
                  href="#hakkimizda" 
                  className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Heart className="w-4 h-4 group-hover:text-red-400" />
                  Hakkımızda
                </motion.a>
                <motion.a 
                  href="#hizmetler" 
                  className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Award className="w-4 h-4 group-hover:text-yellow-400" />
                  Eğitim Programları
                </motion.a>
                <motion.a 
                  href="#egitmenler" 
                  className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Users className="w-4 h-4 group-hover:text-blue-400" />
                  Uzman Kadromuz
                </motion.a>
                <motion.a 
                  href="#galeri" 
                  className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-4 h-4 group-hover:text-purple-400" />
                  Galeri
                </motion.a>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-blue-200 text-sm mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Çalışma Saatleri</span>
                </div>
                <p className="text-white text-sm">
                  Pazartesi - Cuma: 09:00 - 17:00<br />
                  Cumartesi: 09:00 - 14:00
                </p>
              </div>
            </motion.div>
          </div>

          {/* Google Maps Link */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <motion.a
              href="https://maps.google.com/?q=Pancarlı,+19052.+Sk.+No:3,+27060+Şehitkamil/Gaziantep"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-5 h-5" />
              <span>🗺️ Google Maps'te Konumumuzu Görün</span>
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="border-t border-white/20 pt-8 text-center"
          >
            <p className="text-blue-200">
              © 2024 <span className="font-semibold text-white">Göreneller</span> Özel Eğitim ve Rehabilitasyon Merkezi. 
              <span className="block sm:inline"> Tüm hakları saklıdır. ❤️</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
