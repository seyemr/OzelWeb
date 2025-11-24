import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Eye, Heart, Shield, Sparkles } from 'lucide-react'
import logoImage from '../assets/profil.jpg'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('anasayfa')

  useEffect(() => {
    const sections = ['anasayfa', 'hakkimizda', 'galeri', 'hizmetler', 'egitmenler', 'iletisim']
    
    const updateActiveSection = () => {
      // Check hash first
      const hash = window.location.hash.substring(1)
      if (hash && sections.includes(hash)) {
        setActiveSection(hash)
        return
      }

      // Use Intersection Observer approach
      let currentSection = 'anasayfa'
      const scrollPosition = window.scrollY + 100

      // Find the section currently most visible
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.pageYOffset
          
          // If element is visible or we've scrolled past it
          if (scrollPosition >= elementTop - 200) {
            currentSection = section
          }
        }
      }

      setActiveSection(currentSection)
    }

    const handleHashChange = () => {
      updateActiveSection()
    }

    const handleScroll = () => {
      // Always update from scroll, but prioritize manual clicks
      updateActiveSection()
    }

    // Listen to events
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('hashchange', handleHashChange)
    
    // Initial call
    updateActiveSection()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    // Update hash and active section
    window.history.pushState({}, '', '#anasayfa')
    setActiveSection('anasayfa')
  }

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    
    // Set active section immediately for visual feedback
    setActiveSection(targetId)
    
    // Update URL hash
    window.history.pushState({}, '', href)
    
    // Store if mobile menu was open
    const wasMobileMenuOpen = isMenuOpen
    
    // Close mobile menu if open
    setIsMenuOpen(false)
    
    // Simple and reliable scroll function
    const scrollToTarget = () => {
      const element = document.getElementById(targetId)
      
      if (element) {
        // Get element position relative to document
        const elementTop = element.offsetTop
        const headerHeight = 100 // Fixed header height for consistency
        
        // Calculate scroll position
        const scrollPosition = Math.max(0, elementTop - headerHeight)
        
        // Scroll to position
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        })
      }
    }
    
    // Different delays based on whether mobile menu was open
    if (wasMobileMenuOpen) {
      // Wait for mobile menu close animation (0.3s) + buffer
      setTimeout(scrollToTarget, 400)
    } else {
      // Immediate scroll for desktop
      scrollToTarget()
    }
  }

  const menuItems = [
    { href: "#anasayfa", label: "Ana Sayfa" },
    { href: "#hakkimizda", label: "Hakkımızda" },
    { href: "#galeri", label: "Galeri" },
    { href: "#hizmetler", label: "Hizmetler" },
    { href: "#egitmenler", label: "Eğitmenler" },
    { href: "#iletisim", label: "İletişim" }
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.15) 50%, rgba(168, 85, 247, 0.15) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -top-2 right-20 w-16 h-16 bg-purple-400/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-8 right-40 w-8 h-8 bg-pink-400/30 rounded-full blur-sm animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container section-padding py-4 relative z-10">
        <nav className="flex justify-between items-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
            className="group flex items-center gap-4 cursor-pointer relative"
            onClick={scrollToTop}
          >
            {/* Logo container with glassmorphism effect */}
            <div className="relative">
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl p-1 group-hover:scale-105 transition-all duration-300"
                whileHover={{ rotate: 5 }}
              >
                <img 
                  src={logoImage} 
                  alt="Göreneller Özel Eğitim ve Rehabilitasyon Merkezi Logo" 
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </motion.div>
              
              {/* Floating icon */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -4, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Eye className="w-3 h-3 text-white" />
              </motion.div>
            </div>

            {/* Brand text with modern typography */}
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <motion.h1 
                className="text-2xl font-black bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                Göreneller
              </motion.h1>
              <motion.p 
                className="text-sm font-medium text-gray-600 flex items-center gap-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Heart className="w-3 h-3 text-red-500" />
                <span>Özel Eğitim & Rehabilitasyon</span>
                <Sparkles className="w-3 h-3 text-yellow-500 animate-pulse" />
              </motion.p>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </motion.div>
          
          {/* Desktop Menu with modern glass buttons */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, staggerChildren: 0.1 }}
            className="hidden md:flex items-center gap-2"
          >
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <motion.a 
                  key={index}
                  href={item.href}
                  onClick={(e) => handleMenuClick(e, item.href)}
                  className={`relative px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/30 text-gray-800 shadow-lg' 
                      : 'text-gray-700 hover:bg-white/10 hover:backdrop-blur-sm hover:text-gray-800 hover:border hover:border-white/20'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ 
                    y: -2,
                    scale: 1.05,
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeDesktopTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-xl"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Animated dot for active state */}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    />
                  )}
                </motion.a>
              )
            })}
          </motion.div>

          {/* Modern Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="md:hidden relative p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-800" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-800" />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Animated ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-blue-400 to-purple-400 opacity-0"
              animate={{
                scale: isMenuOpen ? [1, 1.2, 1] : 1,
                opacity: isMenuOpen ? [0, 0.6, 0] : 0,
              }}
              transition={{ duration: 0.6, repeat: isMenuOpen ? Infinity : 0 }}
            />
          </motion.button>
        </nav>

        {/* Modern Mobile Menu with Glassmorphism */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="md:hidden mt-6 relative"
            >
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"></div>
              
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-pink-400/5 rounded-3xl"></div>
              
              <div className="relative z-10 p-6">
                <div className="grid gap-3">
                  {menuItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1)
                    return (
                      <motion.a
                        key={index}
                        initial={{ opacity: 0, x: -30, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -30, scale: 0.8 }}
                        transition={{ 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                        href={item.href}
                        onClick={(e) => handleMenuClick(e, item.href)}
                        className={`group relative flex items-center gap-3 py-4 px-5 rounded-2xl font-semibold transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/30 text-gray-800 shadow-lg' 
                            : 'text-gray-700 hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-white/20'
                        }`}
                        whileHover={{ 
                          scale: 1.02, 
                          x: 5,
                          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Menu item icon */}
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' 
                            : 'bg-white/20 text-gray-600 group-hover:bg-white/30'
                        }`}>
                          {index === 0 && <Shield className="w-4 h-4" />}
                          {index === 1 && <Heart className="w-4 h-4" />}
                          {index === 2 && <Eye className="w-4 h-4" />}
                          {index === 3 && <Sparkles className="w-4 h-4" />}
                          {index === 4 && <Shield className="w-4 h-4" />}
                          {index === 5 && <Heart className="w-4 h-4" />}
                        </div>
                        
                        <span className="flex-1">{item.label}</span>
                        
                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                          />
                        )}
                        
                        {/* Hover effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.a>
                    )
                  })}
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
