import React from 'react'
import { motion } from 'framer-motion'
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
  Brain
} from 'lucide-react'

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: "🦯 Rehberlik ve Yönlendirme Eğitimi",
      description: "Güvenli şekilde refakatçiyle hareket etmeyi öğretir. Rehber tutuş pozisyonları, kapı geçişleri, merdiven çıkma/iniş, dar alanlardan geçiş ve kalabalıkta güvenli hareket teknikleri.",
      amaç: "Bireyin güvenli bir şekilde refakatçi ile hareket etmesini sağlamak",
      içerik: "• Rehber tutuş pozisyonları\n• Kapı geçişleri\n• Merdiven çıkma ve iniş teknikleri\n• Dar alanlardan geçiş\n• Kalabalıkta güvenli hareket",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Navigation,
      title: "🚶‍♂️ Bağımsız Hareket (Mobilite) Eğitimi",
      description: "Tek başına güvenli ve bağımsız hareket sağlar. Baston kullanımı, yön bulma, dönüş teknikleri, dinleme ve dokunma duyularının kullanımı, engelleri algılama ve atlatma.",
      amaç: "Bireyin bağımsız, güvenli ve etkili hareket etmesini sağlamak",
      içerik: "• Baston kullanım teknikleri\n• Yön bulma ve dönüş teknikleri\n• Dinleme ve dokunma duyularının kullanımı\n• Engelleri algılama ve atlatma\n• Güvenli yol bulma stratejileri",
      color: "from-green-400 to-green-600", 
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Shield,
      title: "🧱 Duvar Takibi Tekniği Eğitimi",
      description: "Kapalı alanlarda yön bulma ve güvenli geçiş. Sağ/sol duvar takip pozisyonları, kapı giriş-çıkışlarında hizalama, dar alan geçiş teknikleri ve köşe dönüşleri.",
      amaç: "İç mekanlarda güvenli hareket ve yön bulma becerilerini geliştirmek",
      içerik: "• Sağ ve sol duvar takip pozisyonları\n• Kapı giriş-çıkışlarında hizalama\n• Dar alan geçiş teknikleri\n• Köşe dönüşleri\n• İç mekan yön bulma",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50", 
      borderColor: "border-purple-200"
    },
    {
      icon: Heart,
      title: "✋ Alçak Kol Koruma Tekniği Eğitimi",
      description: "Göğüs hizası ve gövde seviyesindeki engellerden korunma. Doğru kol pozisyonu, yürüyüş sırasında koruma ve dar alanlarda güvenli uygulama teknikleri.",
      amaç: "Göğüs ve karın bölgesindeki engellere karşı korunma sağlamak",
      içerik: "• Doğru kol pozisyonu\n• Yürüyüş sırasında koruma teknikleri\n• Dar alanlarda uygulama\n• Engel tespiti\n• Güvenli geçiş teknikleri",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      icon: Shield,
      title: "🙋‍♂️ Yüksek Kol Koruma Tekniği Eğitimi",
      description: "Baş ve yüz bölgesindeki engellere karşı güvenli hareket. Kol pozisyonu, baş hizası engelleri tespit, merdiven ve kapı girişlerinde uygulama.",
      amaç: "Baş ve yüz bölgesindeki engellere karşı korunma sağlamak",
      içerik: "• Üst kol pozisyonu\n• Baş hizası engel tespiti\n• Merdiven ve kapı girişlerinde uygulama\n• Yüksek engel algılama\n• Güvenli baş koruma teknikleri",
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: Award,
      title: "🧩 Günlük Yaşam Becerileri Eğitimi",
      description: "Bağımsız yaşam becerilerini artırma. Kişisel bakım, kıyafet düzenleme, ev içi güvenlik, para kullanma, alışveriş becerileri ve mutfak güvenliği.",
      amaç: "Günlük yaşamda bağımsızlığı ve yaşam kalitesini artırmak",
      içerik: "• Kişisel bakım becerileri\n• Kıyafet düzenleme ve seçimi\n• Ev içi güvenlik önlemleri\n• Para kullanma ve yönetimi\n• Alışveriş becerileri ve mutfak güvenliği",
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: Brain,
      title: "🧠 Algı ve Kavram Geliştirme Eğitimi",
      description: "Görsel olmayan algıların güçlendirilmesi. Dokunsal ayırt etme, işitsel kavramlar, mekânsal ilişkiler ve nesne-yön kavramları geliştirme.",
      amaç: "Alternatif duyular yoluyla çevreyi algılama becerilerini geliştirmek",
      içerik: "• Dokunsal ayırt etme becerileri\n• İşitsel kavramlar ve ses lokalizasyonu\n• Mekânsal ilişkiler\n• Nesne-yön kavramları\n• Çevresel farkındalık",
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      icon: Award,
      title: "🎓 Bireysel Eğitim Programları",
      description: "Kişiye özel hedefler doğrultusunda eğitim planı. Bireysel performans değerlendirme, aylık gelişim hedefleri ve aileye düzenli geri bildirim.",
      amaç: "Her bireyin ihtiyaçlarına özel kapsamlı eğitim programı sunmak",
      içerik: "• Bireysel performans değerlendirme\n• Kişiye özel hedef belirleme\n• Aylık gelişim takibi\n• Aile danışmanlığı\n• Düzenli geri bildirim ve raporlama",
      color: "from-cyan-400 to-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200"
    },
    {
      icon: Users,
      title: "👨‍👩‍👧 Aile Eğitimi ve Danışmanlık",
      description: "Ailelerin doğru yaklaşımları öğrenmesi ve evde destek süreci. Evde güvenli hareket, rehberlik teknikleri, davranış yönetimi ve eğitimde aile rolü.",
      amaç: "Ailelerin eğitim sürecine aktif katılımını ve doğru yaklaşımları sağlamak",
      içerik: "• Aile eğitimi ve bilinçlendirme\n• Evde güvenli hareket düzenlemeleri\n• Rehberlik teknikleri öğretimi\n• Davranış yönetimi stratejileri\n• Eğitimde aile desteği",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: BookOpen,
      title: "📚 Akademik Beceriler Eğitimi",
      description: "Görme engelli öğrenciler için akademik destek. Braille okuma-yazma, kabartma matematik materyalleri, adaptif eğitim araçları ve EBA uyumlu içerikler.",
      amaç: "Akademik başarıyı desteklemek ve eğitim sürecini kolaylaştırmak",
      içerik: "• Braille okuma-yazma öğretimi\n• Kabartma matematik materyalleri\n• Adaptif eğitim araçları kullanımı\n• EBA uyumlu içerikler\n• Akademik destek ve rehberlik",
      color: "from-violet-400 to-violet-600",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200"
    }
  ]

  const handleServiceDetail = (serviceName: string) => {
    // Detay sayfasına yönlendirme fonksiyonu
    console.log(`${serviceName} detay sayfasına yönlendiriliyor...`)
    // Router kullanıldığında: navigate(`/hizmetler/${serviceName.toLowerCase().replace(/\s+/g, '-')}`)
  }

  return (
    <section id="hizmetler" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            <Award className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Profesyonel <span className="text-gradient">Eğitim Programlarımız</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Rehberlik ve yönlendirme, bağımsız hareket, duvar takibi, kol koruma teknikleri, günlük yaşam becerileri 
            ve algı geliştirme alanlarında uzmanlaşmış eğitim programları. Bireysel performans değerlendirme ile 
            her kişiye özel hedefler doğrultusunda kapsamlı rehabilitasyon hizmetleri sunuyoruz.
          </p>
        </motion.div>

        {/* Bootstrap Carousel for Services */}
        <div id="servicesCarousel" className="carousel slide max-w-6xl mx-auto" data-bs-ride="carousel" data-bs-interval="5000">
          {/* Carousel Indicators */}
          <div className="carousel-indicators" style={{bottom: '-50px'}}>
            {services.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#servicesCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: index === 0 ? '#3b82f6' : '#cbd5e1',
                  border: 'none',
                  margin: '0 4px'
                }}
              />
            ))}
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            {services.map((service, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className={`group relative ${service.bgColor} border-2 ${service.borderColor} rounded-3xl p-8 mx-auto max-w-2xl hover:shadow-2xl transition-all duration-500`}
                >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <div className="mb-6 space-y-3">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Amaç */}
                  <div className="bg-white/50 p-3 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 text-xs mb-1">🎯 Amaç:</h4>
                    <p className="text-gray-700 text-xs leading-relaxed">{service.amaç}</p>
                  </div>
                  
                  {/* İçerik */}
                  <div className="bg-white/50 p-3 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 text-xs mb-1">📋 Eğitim İçeriği:</h4>
                    <div className="text-gray-700 text-xs leading-relaxed whitespace-pre-line">{service.içerik}</div>
                  </div>
                </div>
                
                {/* Detail Button */}
                <motion.button
                  onClick={() => handleServiceDetail(service.title)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group`}
                >
                  <span>Detaylı Bilgi</span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz Hakkında Daha Fazla Bilgi Almak İster Misiniz?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Uzman eğitmen kadromuzla size en uygun eğitim programını belirlemek için 
              iletişime geçin. Ücretsiz değerlendirme görüşmesi için hemen arayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Hemen Arayın
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile İletişim
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
