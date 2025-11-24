import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
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
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 shadow-lg sticky top-0 z-30"
    >
      <div className="container section-padding py-4">
        <nav className="flex justify-between items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={scrollToTop}
          >
            <div className="w-20 h-18 flex items-center justify-center">
              <img 
                src={logoImage} 
                alt="Göreneller Özel Eğitim ve Rehabilitasyon Merkezi Logo" 
                className="w-full h-full object-cover rounded-lg shadow-sm"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Göreneller</h1>
              <p className="text-sm text-blue-100">Özel Eğitim & Rehabilitasyon</p>
            </div>
          </motion.div>
          
          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden md:flex items-center gap-6"
          >
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <a 
                  key={index}
                  href={item.href}
                  onClick={(e) => handleMenuClick(e, item.href)}
                  className={`relative text-white hover:text-blue-200 transition-colors font-medium pb-2 ${
                    isActive ? 'text-blue-200' : ''
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              )
            })}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="md:hidden p-2 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 border-t border-blue-700 pt-4"
            >
              <div className="flex flex-col gap-4">
                {menuItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1)
                  return (
                    <motion.a
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      href={item.href}
                      onClick={(e) => handleMenuClick(e, item.href)}
                      className={`relative text-white hover:text-blue-200 transition-colors py-2 px-4 rounded-lg hover:bg-blue-700 font-medium ${
                        isActive ? 'bg-blue-700 text-blue-200' : ''
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-white to-yellow-400 rounded-r-full" />
                      )}
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
