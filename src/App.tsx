import React from 'react'
import { AccessibilityProvider } from './contexts/AccessibilityContext'

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

// Import modern gallery component
import ModernGallerySection from './pages/Gallery'

export default function App() {
  return (
    <AccessibilityProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white relative">
        <SkipLinks />
        <Header />
        <main className="flex-grow">
          <Hero />
          <ModernGallerySection />
          <About />
          <Services />
          <Trainers />
          <AppointmentForm />
        </main>
        <Footer />
        <WhatsAppButton />
        <AccessibilityTools />
      </div>
    </AccessibilityProvider>
  )
}
