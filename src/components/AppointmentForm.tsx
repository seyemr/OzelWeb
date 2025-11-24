import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ChevronRight, 
  Phone, 
  MessageCircle,
  Users,
  Heart
} from 'lucide-react'

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    { value: '', label: 'Eğitim Türü Seçiniz' },
    { value: 'rehberle-yurume', label: 'Rehberle Yürüme Teknikleri' },
    { value: 'duvar-takibi', label: 'Duvar Takibi Eğitimi' },
    { value: 'koruma-teknikleri', label: 'Alçak/Yüksek Kol Koruma Eğitimleri' },
    { value: 'gunluk-yasam', label: 'Günlük Yaşam Becerileri' },
    { value: 'aile-egitimi', label: 'Aile Eğitimleri' }
  ]

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad zorunludur'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Ad Soyad en az 2 karakter olmalıdır'
    }

    // Phone validation
    const phoneRegex = /^(\+90|0)?[5][0-9]{9}$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon numarası zorunludur'
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Geçerli bir telefon numarası giriniz'
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Eğitim türü seçimi zorunludur'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj alanı zorunludur'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate form processing
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Create WhatsApp message
      const selectedService = services.find(s => s.value === formData.service)?.label || ''
      const whatsappMessage = `Merhaba, Göreneller Özel Eğitim Merkezi'nden randevu talep ediyorum.

📋 *Randevu Bilgilerim:*
👤 *Ad Soyad:* ${formData.name}
📞 *Telefon:* ${formData.phone}
🎯 *Eğitim Türü:* ${selectedService}
💬 *Mesaj:* ${formData.message}

Lütfen uygun olan randevu saatlerinizi paylaşır mısınız?`

      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappUrl = `https://wa.me/905551234567?text=${encodedMessage}`
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank')
      
      // Reset form
      setFormData({ name: '', phone: '', service: '', message: '' })
      
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Modern Header with Gradient Background */}
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 rounded-3xl shadow-2xl mb-16">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
            </div>
            
            <div className="relative z-10 text-center px-8 py-16">
              {/* Animated Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30"
              >
                <MessageCircle className="w-10 h-10 text-white" />
              </motion.div>
              
              {/* Title */}
              <motion.h2 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Randevu Talebinizi İletin! 📅
              </motion.h2>
              
              {/* Description */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg text-emerald-100 max-w-3xl mx-auto leading-relaxed"
              >
                <p className="mb-4">
                  <span className="font-semibold text-white">Uzman eğitmenlerimizle</span> size en uygun eğitim programını belirlemek için 
                  ücretsiz değerlendirme görüşmesi planlayın.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm border border-white/30">
                    🆓 Ücretsiz Değerlendirme
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm border border-white/30">
                    👨‍🏫 Uzman Eğitmenler
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm border border-white/30">
                    📋 Kişiye Özel Program
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Modern Form Card */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100/50 overflow-hidden hover:shadow-3xl transition-all duration-500"
          >
            {/* Card Header with Gradient */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 lg:px-12 py-6">
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Randevu Formu</h3>
              </div>
            </div>
            
            <div className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Users className="w-3 h-3 text-white" />
                    </div>
                    👤 Ad Soyad *
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 pr-12 bg-gradient-to-r from-gray-50 to-gray-100/50 border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white group-hover:bg-white ${
                        errors.name 
                          ? 'border-red-300 bg-red-50 focus:ring-red-500/20 focus:border-red-500' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      placeholder="Adınız ve soyadınızı giriniz"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <Users className={`w-5 h-5 transition-colors ${errors.name ? 'text-red-400' : 'text-gray-400 group-hover:text-blue-500'}`} />
                    </div>
                  </div>
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon Numarası *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.phone 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-gray-200 hover:border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="0555 123 45 67"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <Phone className={`w-5 h-5 ${errors.phone ? 'text-red-400' : 'text-gray-400'}`} />
                    </div>
                  </div>
                  {errors.phone && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </motion.div>

                {/* Service Selection */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Eğitim Türü *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer ${
                        errors.service 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-gray-200 hover:border-gray-300 focus:border-blue-500'
                      }`}
                    >
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronRight className={`w-5 h-5 rotate-90 ${errors.service ? 'text-red-400' : 'text-gray-400'}`} />
                    </div>
                  </div>
                  {errors.service && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.service}
                    </motion.p>
                  )}
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mesajınız *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                        errors.message 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-gray-200 hover:border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="Hangi konularda destek almak istiyorsunuz? Özel durumlarınız varsa lütfen belirtiniz..."
                    />
                    <div className="absolute right-4 top-4">
                      <MessageCircle className={`w-5 h-5 ${errors.message ? 'text-red-400' : 'text-gray-400'}`} />
                    </div>
                  </div>
                  {errors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    Minimum 10 karakter gereklidir
                  </p>
                </motion.div>

                {/* Modern Submit Button */}
                <motion.div
                  initial={{ y: 30, opacity: 0, scale: 0.9 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="pt-8"
                >
                  {/* Main Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative w-full py-5 px-8 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-green-600 hover:via-emerald-700 hover:to-teal-700'
                    }`}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Button content */}
                    <div className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                          <span className="text-lg">Gönderiliyor...</span>
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
                          <span className="text-lg">💬 WhatsApp ile Randevu Talep Et</span>
                          <motion.div
                            className="group-hover:translate-x-1 transition-transform"
                            whileHover={{ x: 5 }}
                          >
                            <ChevronRight className="w-6 h-6" />
                          </motion.div>
                        </>
                      )}
                    </div>
                  </motion.button>
                  
                  {/* Alternative Contact Methods */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                    <motion.a
                      href="tel:+905337035145"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="w-5 h-5" />
                      <span>📞 Hızlı Arama</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://wa.me/905337035145"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-green-100 border-2 border-green-200 text-green-700 font-semibold rounded-xl hover:bg-green-200 hover:border-green-300 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>💬 Direkt WhatsApp</span>
                    </motion.a>
                  </div>
                  
                  {/* Info Text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-100"
                  >
                    <p className="text-sm text-gray-600 mb-2">
                      🔒 <strong>Güvenli</strong> • 🚀 <strong>Hızlı</strong> • 📋 <strong>Kolay</strong>
                    </p>
                    <p className="text-xs text-gray-500">
                      Formunuz WhatsApp üzerinden güvenle gönderilecek ve uzman eğitmenlerimiz 24 saat içinde size dönüş yapacaktır.
                    </p>
                  </motion.div>
                </motion.div>
              </form>
            </div>

            {/* Decorative elements */}
            <div className="h-2 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500"></div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: Phone,
                title: "Hızlı İletişim",
                description: "WhatsApp üzerinden anında dönüş alın",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Users,
                title: "Uzman Kadro",
                description: "Deneyimli eğitmenlerimizle değerlendirme",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Heart,
                title: "Ücretsiz Değerlendirme",
                description: "İlk görüşme tamamen ücretsizdir",
                color: "from-pink-500 to-pink-600"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AppointmentForm
