import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Shield, MessageCircle } from 'lucide-react'

const TrainersSection: React.FC = () => {
  const trainers = [
    {
      name: "Uzm. Eğt. Ayşe Kaya",
      title: "Braille Eğitmeni & Kurum Müdürü",
      specialty: "Braille Okuma-Yazma ve Matematik",
      experience: "15 yıl deneyim",
      description: "Türkiye Görme Engelliler Derneği sertifikalı Braille eğitmeni. Türkçe-İngilizce Braille, matematik Braille ve kısaltmalar sistemi uzmanı. 500+ öğrenciye Braille öğretti.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Mehmet Demir, COMS",
      title: "Oryantasyon ve Mobilite Uzmanı", 
      specialty: "Beyaz Baston ve Bağımsız Seyahat",
      experience: "12 yıl deneyim",
      description: "Certified Orientation and Mobility Specialist (COMS) sertifikalı uzman. Beyaz baston teknikleri, GPS kullanımı, iç-dış mekan navigasyonu ve güvenli seyahat eğitimi.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      name: "Fatma Öztürk",
      title: "Günlük Yaşam Becerileri Eğitmeni",
      specialty: "Bağımsız Yaşam ve Ev Yönetimi", 
      experience: "10 yıl deneyim",
      description: "Ev işleri, yemek pişirme, kişisel bakım, alışveriş ve para yönetimi eğitmeni. Bağımsız yaşam için gerekli tüm pratik becerilerde uzman.",
      image: "https://images.unsplash.com/photo-1594824079122-ac112549f30b?w=400&h=400&fit=crop&crop=face",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      name: "Ali Yılmaz",
      title: "Yardımcı Teknolojiler Uzmanı",
      specialty: "Ekran Okuyucu ve Bilgisayar Eğitimi",
      experience: "8 yıl deneyim", 
      description: "NVDA, JAWS ekran okuyucu eğitmeni. Dokunmatik teknolojiler, sesli komutlar, erişilebilir mobil uygulamalar ve Braille klavye teknikleri uzmanı.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      name: "Zeynep Aktaş",
      title: "Aile Danışmanı ve Sosyal Hizmet Uzmanı",
      specialty: "Aile Eğitimi & Sosyal Rehabilitasyon",
      experience: "11 yıl deneyim",
      description: "Sosyal Hizmet lisans mezunu. Görme engelli bireylerin ailelerine yönelik danışmanlık hizmetleri, ev ortamı düzenlemeleri ve sosyal uyum programları uzmanı. Aile-birey iletişim eğitimi koordinatörü.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      name: "Hasan Çelik",
      title: "Sosyal Beceriler Eğitmeni",
      specialty: "İletişim ve Toplumsal Uyum",
      experience: "9 yıl deneyim",
      description: "Sosyal ortamlarda kendini ifade etme, iletişim becerileri geliştirme, görgü kuralları ve toplumsal etkinliklere katılım konularında uzman eğitmen.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50"
    }
  ]

  return (
    <section id="egitmenler" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Users className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Uzman <span className="text-gradient">Eğitmen Kadromuz</span> 👨‍🏫
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            <span className="font-semibold text-blue-600">Braille, oryantasyon ve mobilite, günlük yaşam becerileri</span> ve teknoloji alanlarında 
            sertifikalı eğitmenlerimizle görme engelli bireylere profesyonel destek sunuyoruz. 
          </p>
          
          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              🎓 Sertifikalı Kadro
            </div>
            <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              ⭐ 15+ Yıl Deneyim
            </div>
            <div className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              🎯 Kişiye Özel Program
            </div>
            <div className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              💝 Kaliteli Hizmet
            </div>
          </div>
        </motion.div>

        {/* Bootstrap Carousel for Trainers */}
        <div id="trainersCarousel" className="carousel slide max-w-5xl mx-auto" data-bs-ride="carousel" data-bs-interval="9000">
          {/* Carousel Indicators */}
          <div className="carousel-indicators mb-8 d-flex justify-content-center gap-2" style={{position: 'relative', bottom: 'auto', marginTop: '2rem'}}>
            {trainers.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#trainersCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : 'false'}
                aria-label={`Eğitmen ${index + 1}: ${trainers[index].name}`}
                title={trainers[index].name}
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: index === 0 ? '#3b82f6' : '#cbd5e1',
                  border: '2px solid #fff',
                  margin: '0',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            {trainers.map((trainer, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <motion.div
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className={`group relative ${trainer.bgColor} rounded-3xl p-8 mx-2 md:mx-8 border-2 border-white/50 hover:border-white transition-all duration-500 overflow-hidden hover:shadow-2xl`}
                >
                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-3xl"></div>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${trainer.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Avatar Section */}
                    <div className="flex flex-col items-center mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative mb-4"
                      >
                        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${trainer.color} p-1`}>
                          <img
                            src={trainer.image}
                            alt={trainer.name}
                            className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                          />
                        </div>
                        
                        {/* Status Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.5, type: "spring" }}
                          className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br ${trainer.color} rounded-full flex items-center justify-center shadow-lg border-3 border-white`}
                        >
                          <Award className="w-5 h-5 text-white" />
                        </motion.div>
                      </motion.div>
                      
                      {/* Name and Title */}
                      <motion.div 
                        className="text-center mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                          {trainer.name}
                        </h3>
                        <p className={`font-semibold text-lg mb-1 bg-gradient-to-r ${trainer.color} bg-clip-text text-transparent`}>
                          {trainer.title}
                        </p>
                      </motion.div>
                    </div>
                    
                    {/* Specialty Badge */}
                    <div className={`inline-flex items-center px-5 py-3 bg-gradient-to-r ${trainer.color} text-white text-sm font-medium rounded-full mb-6 shadow-lg`}>
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      {trainer.specialty}
                    </div>
                    
                    {/* Description Card */}
                    <div className="mb-6 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/50 shadow-lg">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-8 h-8 bg-gradient-to-br ${trainer.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Uzmanlık Alanı</h4>
                          <p className="text-sm text-gray-600">{trainer.specialty}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-left">
                        {trainer.description}
                      </p>
                    </div>
                    
                    {/* Experience Badge */}
                    <div className="mb-6 flex justify-center">
                      <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${trainer.color} text-white font-semibold rounded-full shadow-lg`}>
                        <Award className="w-5 h-5 mr-2" />
                        <span>{trainer.experience}</span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${trainer.color} text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 min-w-[140px]`}
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>İletişim</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-700 font-medium rounded-xl border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300 min-w-[140px]"
                      >
                        <Users className="w-4 h-4" />
                        <span>Profil</span>
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Carousel Controls - Responsive */}
          <button
            className="carousel-control-responsive prev"
            type="button"
            data-bs-target="#trainersCarousel"
            data-bs-slide="prev"
          >
            <span className="control-icon" aria-hidden="true">
              ‹
            </span>
            <span className="visually-hidden">Önceki</span>
          </button>
          <button
            className="carousel-control-responsive next"
            type="button"
            data-bs-target="#trainersCarousel"
            data-bs-slide="next"
          >
            <span className="control-icon" aria-hidden="true">
              ›
            </span>
            <span className="visually-hidden">Sonraki</span>
          </button>
          
          {/* Mobile Navigation Buttons */}
          <div className="d-block d-sm-none mt-4 text-center">
            <button
              type="button"
              data-bs-target="#trainersCarousel"
              data-bs-slide="prev"
              className="btn btn-outline-primary btn-sm me-3 px-4 py-2"
            >
              ← Önceki
            </button>
            <button
              type="button"
              data-bs-target="#trainersCarousel"
              data-bs-slide="next"
              className="btn btn-outline-primary btn-sm px-4 py-2"
            >
              Sonraki →
            </button>
          </div>
        </div>
        
        {/* Modern Team Stats & CTA */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative mt-20"
        >
          {/* Background with gradient */}
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 rounded-3xl shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 px-8 py-12">
              {/* Stats Section */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { number: "6+", label: "Uzman Eğitmen", icon: Users, emoji: "👨‍🏫" },
                  { number: "60+", label: "Yıl Toplam Deneyim", icon: Award, emoji: "🏆" },
                  { number: "100%", label: "Sertifikalı Kadro", icon: Shield, emoji: "🎓" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0, scale: 0.8 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + (index * 0.2), duration: 0.6, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-6 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 1.2 + (index * 0.2), type: "spring", stiffness: 200 }}
                      className="text-4xl mb-3"
                    >
                      {stat.emoji}
                    </motion.div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-white/80 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA Section */}
              <div className="text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8, type: "spring", stiffness: 100 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30"
                >
                  <Users className="w-10 h-10 text-white" />
                </motion.div>
                
                {/* Title */}
                <motion.h3 
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2, duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                  Eğitmen Kadromuzla Tanışın! 🌟
                </motion.h3>
                
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                  className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                  <p className="mb-3">
                    <span className="font-semibold text-white">Deneyimli ve sertifikalı eğitmen kadromuz</span> ile her bireyin potansiyelini maksimum düzeyde geliştiriyoruz.
                  </p>
                  <p className="text-base">
                    👑 <strong className="text-white">Uzman Kadro</strong> • 🎯 <strong className="text-white">Kişiye Özel Yaklaşım</strong> • 💫 <strong className="text-white">Kanıtlanmış Başarı</strong>
                  </p>
                </motion.div>
                
                {/* Action Buttons */}
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.4, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <motion.a
                    href="tel:+905337035145"
                    className="group relative bg-white text-purple-700 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 min-w-[220px] justify-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      <Users className="w-5 h-5 group-hover:animate-bounce" />
                      <span>👨‍🏫 Eğitmenlerle Görüş</span>
                    </div>
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0.5 bg-white rounded-2xl group-hover:bg-white/90 transition-colors duration-300"></div>
                  </motion.a>
                  
                  <motion.a
                    href="https://wa.me/905337035145"
                    className="group relative bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 min-w-[220px] justify-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                    <span>💬 Randevu Al</span>
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </motion.a>
                </motion.div>
                
                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.6, duration: 0.6 }}
                  className="mt-8 text-sm text-purple-200"
                >
                  <p>🏅 <strong>Sertifikalı Eğitmenler</strong> | ⭐ <strong>15+ Yıl Deneyim</strong> | 🎯 <strong>Kişiye Özel Program</strong></p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrainersSection
