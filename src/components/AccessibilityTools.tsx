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
          className={`rounded-2xl shadow-2xl border overflow-hidden ${
            highContrast 
              ? 'bg-black border-yellow-400 shadow-yellow-400/20' 
              : 'bg-white border-gray-200'
          }`}
        >
          {/* Toggle Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-full h-15 flex items-center justify-center p-3 transition-colors ${
              highContrast 
                ? 'hover:bg-yellow-900 text-yellow-400' 
                : 'hover:bg-gray-50 text-blue-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Erişilebilirlik araçlarını aç/kapat"
          >
            <Accessibility className={`w-6 h-6 ${
              highContrast ? 'text-yellow-400' : 'text-blue-600'
            }`} />
            {isExpanded && (
              <span className={`ml-2 font-semibold ${
                highContrast ? 'text-white' : 'text-gray-700'
              }`}>
                Erişilebilirlik
              </span>
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
                  <span className={`text-sm font-medium transition-colors ${
                    highContrast 
                      ? 'text-white group-hover:text-yellow-300' 
                      : 'text-gray-700 group-hover:text-blue-600'
                  }`}>
                    Yüksek Kontrast
                  </span>
                  <motion.button
                    onClick={toggleHighContrast}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-6 rounded-full transition-all duration-200 border-2 ${
                      highContrast 
                        ? 'bg-yellow-500 border-yellow-400 shadow-lg' 
                        : 'bg-gray-300 border-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Yüksek kontrast modu ${highContrast ? 'açık' : 'kapalı'}`}
                    style={{
                      backgroundColor: highContrast ? '#eab308' : '#d1d5db',
                      borderColor: highContrast ? '#f59e0b' : '#d1d5db'
                    }}
                  >
                    <motion.div
                      animate={{ x: highContrast ? 24 : 2 }}
                      transition={{ duration: 0.2 }}
                      className={`w-5 h-5 rounded-full shadow-md ${
                        highContrast ? 'bg-black' : 'bg-white'
                      }`}
                    />
                  </motion.button>
                </label>
                <p className={`text-xs mt-1 ${
                  highContrast ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  Kısayol: Alt + C
                </p>
              </div>

              {/* Font Size Controls */}
              <div className="mb-4">
                <label className={`text-sm font-medium mb-2 block ${
                  highContrast ? 'text-white' : 'text-gray-700'
                }`}>
                  Yazı Boyutu: {fontSize}%
                </label>
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={decreaseFontSize}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors border-2 ${
                      highContrast 
                        ? 'bg-yellow-500 hover:bg-yellow-400 border-yellow-400 text-black font-bold' 
                        : 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-600 hover:text-gray-800'
                    }`}
                    disabled={fontSize <= 80}
                    aria-label="Yazı boyutunu küçült"
                  >
                    -
                  </motion.button>
                  
                  <div className={`flex-1 h-2 rounded-full overflow-hidden border ${
                    highContrast ? 'bg-gray-800 border-yellow-400' : 'bg-gray-200 border-gray-300'
                  }`}>
                    <motion.div
                      animate={{ width: `${((fontSize - 80) / 70) * 100}%` }}
                      className={`h-full rounded-full ${
                        highContrast ? 'bg-yellow-400' : 'bg-blue-500'
                      }`}
                    />
                  </div>
                  
                  <motion.button
                    onClick={increaseFontSize}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors border-2 ${
                      highContrast 
                        ? 'bg-yellow-500 hover:bg-yellow-400 border-yellow-400 text-black font-bold' 
                        : 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-600 hover:text-gray-800'
                    }`}
                    disabled={fontSize >= 150}
                    aria-label="Yazı boyutunu büyült"
                  >
                    +
                  </motion.button>
                  
                  <motion.button
                    onClick={resetFontSize}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-2 py-1 text-xs rounded transition-colors border-2 ${
                      highContrast 
                        ? 'bg-yellow-500 hover:bg-yellow-400 border-yellow-400 text-black font-bold' 
                        : 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-600 hover:text-gray-800'
                    }`}
                    aria-label="Yazı boyutunu sıfırla"
                  >
                    Sıfırla
                  </motion.button>
                </div>
                <p className={`text-xs mt-1 ${
                  highContrast ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  Kısayollar: Alt + / Alt - / Alt 0
                </p>
              </div>

              {/* Keyboard Navigation */}
              <div className="mb-4">
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className={`text-sm font-medium transition-colors ${
                    highContrast 
                      ? 'text-white group-hover:text-yellow-300' 
                      : 'text-gray-700 group-hover:text-blue-600'
                  }`}>
                    Klavye Gezinme
                  </span>
                  <motion.button
                    onClick={toggleKeyboardNavigation}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-6 rounded-full transition-all duration-200 border-2 ${
                      keyboardNavigation 
                        ? (highContrast ? 'bg-yellow-500 border-yellow-400' : 'bg-blue-600 border-blue-500')
                        : (highContrast ? 'bg-gray-700 border-gray-600' : 'bg-gray-300 border-gray-300')
                    }`}
                    aria-label={`Klavye gezinme ${keyboardNavigation ? 'açık' : 'kapalı'}`}
                  >
                    <motion.div
                      animate={{ x: keyboardNavigation ? 24 : 2 }}
                      transition={{ duration: 0.2 }}
                      className={`w-5 h-5 rounded-full shadow-md ${
                        keyboardNavigation 
                          ? (highContrast ? 'bg-black' : 'bg-white')
                          : 'bg-white'
                      }`}
                    />
                  </motion.button>
                </label>
                <p className={`text-xs mt-1 ${
                  highContrast ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  Kısayol: Alt + K
                </p>
              </div>

              {/* Keyboard Shortcuts Info */}
              <motion.button
                onClick={() => setShowShortcuts(!showShortcuts)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-2 text-xs rounded-lg transition-colors flex items-center justify-center gap-1 border-2 ${
                  highContrast 
                    ? 'bg-yellow-500 hover:bg-yellow-400 border-yellow-400 text-black font-bold'
                    : 'bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700'
                }`}
              >
                <Eye className="w-3 h-3" />
                {showShortcuts ? 'Kısayolları Gizle' : 'Klavye Kısayolları'}
              </motion.button>

              {showShortcuts && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`mt-2 p-2 rounded-lg text-xs space-y-1 border-2 ${
                    highContrast 
                      ? 'bg-gray-800 border-yellow-400 text-yellow-100'
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}
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
