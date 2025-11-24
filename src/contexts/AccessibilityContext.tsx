import React, { useState, useEffect } from 'react'

// Accessibility Context
export const AccessibilityContext = React.createContext<{
  highContrast: boolean
  fontSize: number
  keyboardNavigation: boolean
  toggleHighContrast: () => void
  increaseFontSize: () => void
  decreaseFontSize: () => void
  resetFontSize: () => void
  toggleKeyboardNavigation: () => void
}>({
  highContrast: false,
  fontSize: 100,
  keyboardNavigation: false,
  toggleHighContrast: () => {},
  increaseFontSize: () => {},
  decreaseFontSize: () => {},
  resetFontSize: () => {},
  toggleKeyboardNavigation: () => {}
})

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [highContrast, setHighContrast] = useState(() => {
    return localStorage.getItem('accessibility-high-contrast') === 'true'
  })
  
  const [fontSize, setFontSize] = useState(() => {
    return parseInt(localStorage.getItem('accessibility-font-size') || '100')
  })
  
  const [keyboardNavigation, setKeyboardNavigation] = useState(() => {
    return localStorage.getItem('accessibility-keyboard-nav') === 'true'
  })

  const toggleHighContrast = () => {
    const newValue = !highContrast
    setHighContrast(newValue)
    localStorage.setItem('accessibility-high-contrast', newValue.toString())
  }

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150) // Max 150%
    setFontSize(newSize)
    localStorage.setItem('accessibility-font-size', newSize.toString())
  }

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80) // Min 80%
    setFontSize(newSize)
    localStorage.setItem('accessibility-font-size', newSize.toString())
  }

  const resetFontSize = () => {
    setFontSize(100)
    localStorage.setItem('accessibility-font-size', '100')
  }

  const toggleKeyboardNavigation = () => {
    const newValue = !keyboardNavigation
    setKeyboardNavigation(newValue)
    localStorage.setItem('accessibility-keyboard-nav', newValue.toString())
  }

  useEffect(() => {
    const body = document.body
    const root = document.documentElement

    // High contrast mode
    if (highContrast) {
      body.classList.add('high-contrast')
    } else {
      body.classList.remove('high-contrast')
    }
    
    // Font size adjustment
    root.style.setProperty('--accessibility-font-scale', `${fontSize / 100}`)
    
    // Keyboard navigation
    if (keyboardNavigation) {
      body.classList.add('keyboard-navigation')
    } else {
      body.classList.remove('keyboard-navigation')
    }
  }, [highContrast, fontSize, keyboardNavigation])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Alt + C for contrast
      if (e.altKey && e.key === 'c') {
        e.preventDefault()
        toggleHighContrast()
      }
      // Alt + + for increase font
      if (e.altKey && (e.key === '+' || e.key === '=')) {
        e.preventDefault()
        increaseFontSize()
      }
      // Alt + - for decrease font
      if (e.altKey && e.key === '-') {
        e.preventDefault()
        decreaseFontSize()
      }
      // Alt + 0 for reset font
      if (e.altKey && e.key === '0') {
        e.preventDefault()
        resetFontSize()
      }
      // Alt + K for keyboard navigation
      if (e.altKey && e.key === 'k') {
        e.preventDefault()
        toggleKeyboardNavigation()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AccessibilityContext.Provider value={{
      highContrast,
      fontSize,
      keyboardNavigation,
      toggleHighContrast,
      increaseFontSize,
      decreaseFontSize,
      resetFontSize,
      toggleKeyboardNavigation
    }}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export const useAccessibility = () => {
  const context = React.useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return context
}
