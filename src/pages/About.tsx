import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Award } from 'lucide-react'

const AboutSection: React.FC = () => {
  return (
    <section id="hakkimizda" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card p-8 lg:p-12">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Kurumumuz Hakkında
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-center mb-6">
                <strong>Göreneller Özel Eğitim ve Rehabilitasyon Merkezi</strong>, 2010 yılından beri görme engelli bireylerin 
                bağımsız yaşam becerilerini geliştirmek amacıyla Braille okuma-yazma, oryantasyon ve mobilite, 
                günlük yaşam becerileri ve sosyal rehabilitasyon alanlarında uzmanlaşmış hizmetler sunmaktadır.
              </p>
              
              <p className="text-center mb-8 text-lg">
                <em>"Görmek sadece gözlerle değil, dokunarak, dinleyerek ve hissederek de mümkündür. 
                Amacımız her bireyin içindeki potansiyeli keşfetmek ve hayatlarını dönüştürmektir."</em>
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sertifikalı Eğitmenler</h3>
                  <p className="text-sm text-gray-600">
                    Braille eğitmeni, oryantasyon ve mobilite uzmanı, görme engelliler öğretmeni sertifikalı kadromuz
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Bireysel Programlar</h3>
                  <p className="text-sm text-gray-600">
                    Her bireyin ihtiyacına özel Braille, hareket ve günlük yaşam becerileri eğitimi
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Erişilebilir Ortam</h3>
                  <p className="text-sm text-gray-600">
                    Tactile yönlendirmeler, sesli rehberlik ve engelsiz tasarımlı eğitim alanları
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
