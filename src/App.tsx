import React from 'react'
import { AccessibilityProvider } from './contexts/AccessibilityContext'

// Components
import SkipLinks from './components/SkipLinks'
import Header from './components/Header'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Trainers from './pages/Trainers'
import Footer from './components/Footer'
import AppointmentForm from './components/AppointmentForm'
import WhatsAppButton from './components/WhatsAppButton'
import AccessibilityTools from './components/AccessibilityTools'

// Import gallery as a component
import { motion } from 'framer-motion'
import { Camera, Image, Heart, Users } from 'lucide-react'

// Galeri Bölümü Component
const GallerySection: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
      alt: "Rehberlik ve yönlendirme eğitimi: Güvenli şekilde refakatçiyle hareket etme teknikleri",
      category: "Rehberlik Eğitimi",
      title: "Rehberle Yürüme Teknikleri"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      alt: "Bağımsız hareket eğitimi: Beyaz baston kullanımı ve mobilite teknikleri",
      category: "Mobilite", 
      title: "Bağımsız Hareket Eğitimi"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop",
      alt: "Duvar takibi tekniği: Kapalı alanlarda yön bulma ve güvenli geçiş eğitimi",
      category: "Duvar Takibi",
      title: "Duvar Takibi Tekniği"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1594824079122-ac112549f30b?w=800&h=600&fit=crop", 
      alt: "Alçak ve yüksek kol koruma teknikleri: Engellerden korunma eğitimi",
      category: "Koruma Teknikleri",
      title: "Kol Koruma Teknikleri"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
      alt: "Günlük yaşam becerileri: Mutfak güvenliği, kişisel bakım ve ev içi aktiviteler", 
      category: "Yaşam Becerileri",
      title: "Günlük Yaşam Becerileri"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1576267423445-b2f0074d3b71?w=800&h=600&fit=crop",
      alt: "Aile eğitimi ve danışmanlık: Evde güvenli hareket ve rehberlik teknikleri",
      category: "Aile Eğitimi",
      title: "Aile Danışmanlığı"
    }
  ]

  return (
    <section id="galeri" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4">
        {/* Header */}
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
            className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
          >
            <Camera className="w-10 h-10 text-white" />
          </motion.div>
          
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Eğitim <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Galerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rehberlik ve yönlendirme, bağımsız hareket, duvar takibi, kol koruma teknikleri ve günlük yaşam becerilerinden kareler. 
            Profesyonel eğitim programlarımızın uygulanış şekli ve öğrencilerimizin gelişim süreçleri.
          </p>
        </motion.div>

        {/* Bootstrap Carousel Gallery */}
        <div id="galleryCarousel" className="carousel slide max-w-4xl mx-auto" data-bs-ride="carousel" data-bs-interval="4000">
          <div className="carousel-indicators" style={{bottom: '-50px'}}>
            {galleryImages.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#galleryCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slayt ${index + 1}`}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  margin: '0 6px',
                  backgroundColor: index === 0 ? '#3B82F6' : 'rgba(0,0,0,0.3)'
                }}
              ></button>
            ))}
          </div>
          
          <div className="carousel-inner rounded-3xl shadow-2xl overflow-hidden">
            {galleryImages.map((image, index) => (
              <div key={image.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img 
                  src={image.src} 
                  className="d-block w-100" 
                  alt={image.alt}
                  style={{height: '500px', objectFit: 'cover'}}
                />
                <div className="carousel-caption">
                  <div 
                    className="p-2 md:p-4 rounded-lg" 
                    style={{backgroundColor: 'rgba(0,0,0,0.1)', backdropFilter: 'blur(2px)'}}
                  >
                    <h5 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2" style={{textShadow: '3px 3px 6px rgba(0,0,0,1), 1px 1px 2px rgba(0,0,0,1)'}}>{image.title}</h5>
                    <p className="text-sm md:text-base text-white mb-2 md:mb-3" style={{textShadow: '2px 2px 4px rgba(0,0,0,1), 1px 1px 2px rgba(0,0,0,0.8)'}}>{image.alt}</p>
                    <span className="inline-block bg-blue-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-control-prev" 
            type="button" 
            data-bs-target="#galleryCarousel" 
            data-bs-slide="prev" 
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)', 
              borderRadius: '50%', 
              width: '50px', 
              height: '50px',
              top: '50%',
              transform: 'translateY(-50%)',
              left: '15px',
              border: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.8)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Önceki</span>
          </button>
          <button 
            className="carousel-control-next" 
            type="button" 
            data-bs-target="#galleryCarousel" 
            data-bs-slide="next" 
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)', 
              borderRadius: '50%', 
              width: '50px', 
              height: '50px',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '15px',
              border: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.8)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Sonraki</span>
          </button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { number: "500+", label: "Eğitim Anı", icon: Image, color: "blue" },
            { number: "50+", label: "Başarı Hikayesi", icon: Heart, color: "green" },
            { number: "100+", label: "Mutlu Aile", icon: Users, color: "purple" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${
                stat.color === 'blue' ? 'from-blue-500 to-blue-600' :
                stat.color === 'green' ? 'from-green-500 to-green-600' :
                'from-purple-500 to-purple-600'
              } rounded-3xl p-8 text-white text-center shadow-2xl`}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-xl opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <AccessibilityProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white relative">
        <SkipLinks />
        <Header />
        <main className="flex-grow">
          <Hero />
          <GallerySection />
          <About />
          <Services />
          <Trainers />
          <AppointmentForm />
        </main>
        <Footer />
        <WhatsAppButton />
        <AccessibilityTools />
      </div>
    </AccessibilityProvider>
  )
}
