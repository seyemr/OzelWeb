import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import logoImage from '../assets/profil.jpg'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer id="iletisim" className="bg-gray-900 text-white section-padding mt-auto relative bottom-0 w-full">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div 
              className="flex items-center gap-3 mb-6 cursor-pointer hover:opacity-80 transition-opacity" 
              onClick={scrollToTop}
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-blue-500 flex-shrink-0">
                <img 
                  src={logoImage} 
                  alt="Göreneller Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Göreneller</h3>
                <p className="text-gray-400 text-sm">Özel Eğitim & Rehabilitasyon</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Braille okuma-yazma, oryantasyon ve mobilite, günlük yaşam becerileri ve teknoloji eğitimi 
              ile görme engelli bireylerin bağımsızlık yolculuğunda profesyonel destek sağlıyoruz.
            </p>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">İletişim Bilgileri</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Pancarlı, 19052. Sk. No:3<br />
                    27060 Şehitkamil / Gaziantep
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a 
                  href="tel:+905337035145" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +90 533 703 51 45
                </a>
              </div>
              
              <motion.a
                href="https://maps.google.com/?q=Pancarlı,+19052.+Sk.+No:3,+27060+Şehitkamil/Gaziantep"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4" />
                Google Maps'te Gör
              </motion.a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6">Hızlı Bağlantılar</h4>
            <div className="space-y-3">
              <a href="#hakkimizda" className="block text-gray-300 hover:text-white transition-colors">
                Hakkımızda
              </a>
              <a href="#galeri" className="block text-gray-300 hover:text-white transition-colors">
                Galeri
              </a>
              <a href="#hizmetler" className="block text-gray-300 hover:text-white transition-colors">
                Hizmetlerimiz
              </a>
              <a href="#egitmenler" className="block text-gray-300 hover:text-white transition-colors">
                Eğitmenlerimiz
              </a>
              <a href="#iletisim" className="block text-gray-300 hover:text-white transition-colors">
                İletişim
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Göreneller Özel Eğitim ve Rehabilitasyon Merkezi. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
