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
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Uzman <span className="text-gradient">Eğitmen Kadromuz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Braille, oryantasyon ve mobilite, günlük yaşam becerileri ve teknoloji alanlarında 
            sertifikalı eğitmenlerimizle görme engelli bireylere profesyonel destek sunuyoruz. 
            Deneyimli kadromuz, her bireyin potansiyelini maksimum düzeyde geliştirmek için çalışır.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`group relative ${trainer.bgColor} rounded-3xl p-8 border-2 border-white/50 hover:border-white transition-all duration-500 overflow-hidden`}
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-3xl"></div>
              
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${trainer.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
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
                      transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                      className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br ${trainer.color} rounded-full flex items-center justify-center shadow-lg border-3 border-white`}
                    >
                      <Award className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Name and Title */}
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {trainer.name}
                    </h3>
                    <p className={`font-semibold mb-1 bg-gradient-to-r ${trainer.color} bg-clip-text text-transparent`}>
                      {trainer.title}
                    </p>
                  </motion.div>
                </div>
                
                {/* Specialty Badge */}
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${trainer.color} text-white text-sm font-medium rounded-full mb-4 shadow-md`}>
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  {trainer.specialty}
                </div>
                
                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {trainer.description}
                </p>
                
                {/* Experience Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-600 bg-white/70 px-3 py-1 rounded-full">
                    {trainer.experience}
                  </span>
                  
                  {/* Social Links */}
                  <motion.div 
                    className="flex gap-2"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-8 h-8 bg-gradient-to-r ${trainer.color} text-white rounded-full flex items-center justify-center shadow-md`}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Team Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "6+", label: "Uzman Eğitmen", icon: Users },
            { number: "60+", label: "Yıl Toplam Deneyim", icon: Award },
            { number: "100%", label: "Sertifikalı Kadro", icon: Shield }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrainersSection
