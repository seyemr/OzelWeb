import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AccessibilityProvider } from './contexts/AccessibilityContext'
import { AuthProvider, useAuth } from './contexts/NewAuthContext'
import { ContentProvider } from './contexts/ContentContext'
import { SiteDataProvider } from './contexts/SiteDataContext'

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
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import SiteInfoEditor from './components/SiteInfoEditor'
import ProtectedRoute from './components/ProtectedRoute'

// Import modern gallery component
import ModernGallerySection from './pages/Gallery'

// App içeriği - Authentication state'ini kontrol eden component
const AppContent = () => {
  console.log('📱 AppContent component yüklendi')
  
  const { isAuthenticated, isAdmin, loading } = useAuth()
  const [showAdminLogin, setShowAdminLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  
  console.log('🔐 Auth durumu:', { isAuthenticated, isAdmin, loading })

  // Loading durumunda basit loading ekranı göster
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    )
  }

  // Admin giriş yapmışsa site bilgi editörü göster
  if (isAuthenticated && isAdmin) {
    return (
      <ProtectedRoute requireAdmin>
        <SiteInfoEditor onBackToSite={() => setShowAdminLogin(false)} />
      </ProtectedRoute>
    )
  }

  // Register sayfası göster
  if (showRegister) {
    return (
      <RegisterPage 
        onRegisterSuccess={() => {
          setShowRegister(false)
          setShowAdminLogin(false)
        }}
        onSwitchToLogin={() => {
          setShowRegister(false)
          setShowAdminLogin(true)
        }}
      />
    )
  }

  // Login sayfası göster
  if (showAdminLogin) {
    return (
      <LoginPage 
        onLoginSuccess={() => setShowAdminLogin(false)}
        onSwitchToRegister={() => {
          setShowAdminLogin(false)
          setShowRegister(true)
        }}
      />
    )
  }

  // Ana websiteyi göster
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white relative">
      <SkipLinks />
      <Header onAdminClick={() => {
        if (isAuthenticated) {
          // Kullanıcı giriş yapmışsa direkt admin paneline git
          setShowAdminLogin(false)
        } else {
          // Giriş yapmamışsa login sayfasına git
          setShowAdminLogin(true)
        }
      }} />
      <main className="flex-grow">
        <Hero />
        <ModernGallerySection />
        <About />
        <Services />
        <Trainers />
        <AppointmentForm />
      </main>
      <Footer onAdminClick={() => setShowAdminLogin(true)} />
      <WhatsAppButton />
      <AccessibilityTools />
    </div>
  )
}

export default function App() {
  console.log('🚀 App component yüklendi')
  
  return (
    <Router>
      <AuthProvider>
        <SiteDataProvider>
          <ContentProvider>
            <AccessibilityProvider>
              <AppContent />
            </AccessibilityProvider>
          </ContentProvider>
        </SiteDataProvider>
      </AuthProvider>
    </Router>
  )
}
