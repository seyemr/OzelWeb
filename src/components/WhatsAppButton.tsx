import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/905337035145?text=Merhaba, Göreneller Özel Eğitim ve Rehabilitasyon Merkezi hakkında bilgi almak istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl whatsapp-pulse transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  )
}

export default WhatsAppButton
