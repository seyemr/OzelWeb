import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle,
  Users,
  Heart,
  AlertCircle,
  CheckCircle
} from 'lucide-react'
import CustomTextarea from './CustomTextarea'

const AppointmentForm: React.FC = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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
    setSubmitStatus('idle')

    try {
      // Firebase'e randevu kaydı ekle
      const appointmentData = {
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        status: 'pending' as const
      }

      // TODO: Implement Firebase appointment saving
      console.log('Randevu verisi:', appointmentData)
      const docId = 'temp_id_' + Date.now()

      // WhatsApp mesajı oluştur
      const selectedService = services.find(s => s.value === formData.service)?.label || ''
      const whatsappMessage = `Merhaba, Göreneller Özel Eğitim Merkezi'nden randevu talep ediyorum.

📋 *Randevu Bilgilerim:*
👤 *Ad Soyad:* ${formData.name}
📞 *Telefon:* ${formData.phone}
🎯 *Eğitim Türü:* ${selectedService}
💬 *Mesaj:* ${formData.message}

🔗 *Randevu Referans:* ${docId}

Lütfen uygun olan randevu saatlerinizi paylaşır mısınız?`

      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappUrl = `https://wa.me/905337035145?text=${encodedMessage}`
      
      // WhatsApp'ı aç
      window.open(whatsappUrl, '_blank')
      
      // Formu sıfırla ve başarı durumu göster
      setFormData({ name: '', phone: '', service: '', message: '' })
      setSubmitStatus('success')
      
      // 3 saniye sonra durumu sıfırla
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      
      // Hata durumunda 5 saniye sonra durumu sıfırla
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="appointment-form-container section-padding">
      <div className="container relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Modern Minimalist Header */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Randevu Al
            </h2>
            
            <p className="text-lg text-white/80 max-w-md mx-auto">
              Uzman eğitmenlerimizle ücretsiz değerlendirme görüşmesi planlayın.
            </p>
          </motion.div>

          {/* Modern Minimalist Form Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="modern-form-card"
          >
            <form onSubmit={handleSubmit} className="p-8">
              
              {/* Name Field */}
              <div className={`modern-form-field ${errors.name ? 'error' : ''}`}>
                <label htmlFor="name" className="modern-form-label">
                  Ad Soyad *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="modern-form-input"
                    placeholder="Adınız ve soyadınızı giriniz"
                  />
                  <Users className="form-input-icon" />
                </div>
                {errors.name && (
                  <div className="form-error-message">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Phone Field */}
              <div className={`modern-form-field ${errors.phone ? 'error' : ''}`}>
                <label htmlFor="phone" className="modern-form-label">
                  Telefon Numarası *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="modern-form-input"
                    placeholder="0555 123 45 67"
                  />
                  <Phone className="form-input-icon" />
                </div>
                {errors.phone && (
                  <div className="form-error-message">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </div>
                )}
              </div>

              {/* Service Selection */}
              <div className={`modern-form-field ${errors.service ? 'error' : ''}`}>
                <label htmlFor="service" className="modern-form-label">
                  Eğitim Türü *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="modern-form-select"
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <div className="form-error-message">
                    <AlertCircle className="w-4 h-4" />
                    {errors.service}
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div className={`modern-form-field ${errors.message ? 'error' : ''}`}>
                <label htmlFor="message" className="modern-form-label">
                  Mesajınız *
                </label>
                <div className="relative">
                  <CustomTextarea
                    value={formData.message}
                    onChange={(value) => {
                      setFormData(prev => ({ ...prev, message: value }))
                      if (errors.message) {
                        setErrors(prev => ({ ...prev, message: '' }))
                      }
                    }}
                    placeholder="Hangi konularda destek almak istiyorsunuz? Özel durumlarınız varsa lütfen belirtiniz..."
                    className="modern-form-textarea"
                    rows={6}
                    onFocus={() => {
                      // Focus event - ensure keyboard is ready
                      console.log('Textarea focused - keyboard ready')
                    }}
                  />
                  <MessageCircle className="form-input-icon top-4" />
                </div>
                {errors.message && (
                  <div className="form-error-message">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Minimum 10 karakter gereklidir
                </p>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="modern-submit-button"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner mr-2" />
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp ile Randevu Talep Et
                  </>
                )}
              </motion.button>

              {/* Alternative Contact Methods */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <motion.a
                  href="tel:+905337035145"
                  className="contact-button phone flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-4 h-4" />
                  <span>Hızlı Arama</span>
                </motion.a>
                
                <motion.a
                  href="https://wa.me/905337035145"
                  className="contact-button whatsapp flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direkt WhatsApp</span>
                </motion.a>
              </div>

            </form>
          </motion.div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-4 bg-green-50 border border-green-200 rounded-2xl"
            >
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <div>
                  <h4 className="text-green-800 font-semibold">Randevu talebiniz başarıyla gönderildi!</h4>
                  <p className="text-green-700 text-sm">WhatsApp üzerinden en kısa sürede size dönüş yapacağız.</p>
                </div>
              </div>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-4 bg-red-50 border border-red-200 rounded-2xl"
            >
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                <div>
                  <h4 className="text-red-800 font-semibold">Bir hata oluştu!</h4>
                  <p className="text-red-700 text-sm">Lütfen tekrar deneyin veya doğrudan WhatsApp ile iletişime geçin.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Info Cards */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mt-8"
          >
            {[
              {
                icon: Phone,
                title: "Hızlı İletişim",
                description: "WhatsApp üzerinden anında dönüş alın",
                variant: "blue"
              },
              {
                icon: Users,
                title: "Uzman Kadro", 
                description: "Deneyimli eğitmenlerimizle değerlendirme",
                variant: "purple"
              },
              {
                icon: Heart,
                title: "Ücretsiz Değerlendirme",
                description: "İlk görüşme tamamen ücretsizdir",
                variant: "pink"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className={`info-card ${card.variant}`}
              >
                <div className="info-card-icon">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AppointmentForm
