import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Accessibility, Eye } from 'lucide-react'
import { useAccessibility } from '../contexts/AccessibilityContext'

const AccessibilityTools: React.FC = () => {
  const { 
    highContrast, 
    fontSize, 
    keyboardNavigation,
    toggleHighContrast, 
    increaseFontSize, 
    decreaseFontSize, 
    resetFontSize,
    toggleKeyboardNavigation 
  } = useAccessibility()

  const [isExpanded, setIsExpanded] = useState(false)
  const [showShortcuts, setShowShortcuts] = useState(false)

  return (
    <>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50"
      >
        {/* Main Panel */}
        <motion.div
          animate={{ 
            width: isExpanded ? 280 : 60,
            height: isExpanded ? 'auto' : 60 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
        >
          {/* Toggle Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full h-15 flex items-center justify-center p-3 hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Erişilebilirlik araçlarını aç/kapat"
          >
            <Accessibility className="w-6 h-6 text-blue-600" />
            {isExpanded && (
              <span className="ml-2 font-semibold text-gray-700">Erişilebilirlik</span>
            )}
          </motion.button>

          {/* Expanded Content */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-4 pt-0"
            >
              {/* High Contrast Toggle */}
              <div className="mb-4">
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    Yüksek Kontrast
                  </span>
                  <motion.button
                    onClick={toggleHighContrast}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-6 rounded-full transition-all duration-200 ${
                      highContrast 
                        ? 'bg-blue-600' 
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Yüksek kontrast modu ${highContrast ? 'açık' : 'kapalı'}`}
                  >
                    <motion.div
                      animate={{ x: highContrast ? 24 : 2 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5 bg-white rounded-full shadow-sm"
                    />
                  </motion.button>
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  Kısayol: Alt + C
                </p>
              </div>

              {/* Font Size Controls */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Yazı Boyutu: {fontSize}%
                </label>
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={decreaseFontSize}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                    disabled={fontSize <= 80}
                    aria-label="Yazı boyutunu küçült"
                  >
                    -
                  </motion.button>
                  
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: `${((fontSize - 80) / 70) * 100}%` }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                  
                  <motion.button
                    onClick={increaseFontSize}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                    disabled={fontSize >= 150}
                    aria-label="Yazı boyutunu büyült"
                  >
                    +
                  </motion.button>
                  
                  <motion.button
                    onClick={resetFontSize}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded text-gray-600 hover:text-gray-800 transition-colors"
                    aria-label="Yazı boyutunu sıfırla"
                  >
                    Sıfırla
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Kısayollar: Alt + / Alt - / Alt 0
                </p>
              </div>

              {/* Keyboard Navigation */}
              <div className="mb-4">
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    Klavye Gezinme
                  </span>
                  <motion.button
                    onClick={toggleKeyboardNavigation}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-6 rounded-full transition-all duration-200 ${
                      keyboardNavigation 
                        ? 'bg-blue-600' 
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Klavye gezinme ${keyboardNavigation ? 'açık' : 'kapalı'}`}
                  >
                    <motion.div
                      animate={{ x: keyboardNavigation ? 24 : 2 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5 bg-white rounded-full shadow-sm"
                    />
                  </motion.button>
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  Kısayol: Alt + K
                </p>
              </div>

              {/* Keyboard Shortcuts Info */}
              <motion.button
                onClick={() => setShowShortcuts(!showShortcuts)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-2 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors flex items-center justify-center gap-1"
              >
                <Eye className="w-3 h-3" />
                {showShortcuts ? 'Kısayolları Gizle' : 'Klavye Kısayolları'}
              </motion.button>

              {showShortcuts && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 p-2 bg-gray-50 rounded-lg text-xs text-gray-600 space-y-1"
                >
                  <div>• Alt + C: Yüksek Kontrast</div>
                  <div>• Alt + +: Yazı Büyüt</div>
                  <div>• Alt + -: Yazı Küçült</div>
                  <div>• Alt + 0: Yazı Sıfırla</div>
                  <div>• Alt + K: Klavye Gezinme</div>
                  <div>• Tab: Öğeler arasında gezin</div>
                  <div>• Enter/Space: Butona tıkla</div>
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Screen Reader Announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {highContrast && "Yüksek kontrast modu aktif"}
        {fontSize !== 100 && `Yazı boyutu ${fontSize}% olarak ayarlandı`}
        {keyboardNavigation && "Klavye gezinme modu aktif"}
      </div>
    </>
  )
}

export default AccessibilityTools
