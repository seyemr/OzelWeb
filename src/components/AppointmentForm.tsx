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
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Randevu <span className="text-gradient">Talebinizi</span> Iletin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Size en uygun eğitim programını belirlemek için uzman eğitmenlerimizle 
              ücretsiz değerlendirme görüşmesi planlayın.
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.name 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-gray-200 hover:border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="Adınız ve soyadınızı giriniz"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <Users className={`w-5 h-5 ${errors.name ? 'text-red-400' : 'text-gray-400'}`} />
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

                {/* Submit Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="pt-4"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-8 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-green-600 hover:to-green-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp ile Randevu Talep Et
                        <ChevronRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                  
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Formunuz WhatsApp üzerinden gönderilecek ve uzman eğitmenlerimiz size dönüş yapacaktır.
                  </p>
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
