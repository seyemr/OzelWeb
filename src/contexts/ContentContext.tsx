import React, { createContext, useContext, useState, useEffect } from 'react'

interface EditableContent {
  // Hero Section
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  heroButtonText: string
  
  // About Section
  aboutTitle: string
  aboutDescription: string
  aboutMission: string
  aboutVision: string
  
  // Services Section
  servicesTitle: string
  servicesDescription: string
  service1Title: string
  service1Description: string
  service2Title: string
  service2Description: string
  service3Title: string
  service3Description: string
  
  // Trainers Section
  trainersTitle: string
  trainersDescription: string
  trainer1Name: string
  trainer1Title: string
  trainer1Description: string
  trainer2Name: string
  trainer2Title: string
  trainer2Description: string
  trainer3Name: string
  trainer3Title: string
  trainer3Description: string
  
  // Gallery Section
  galleryTitle: string
  galleryDescription: string
  
  // Contact Section
  contactTitle: string
  contactDescription: string
  contactPhone: string
  contactEmail: string
  contactAddress: string
  contactWorkingHours: string
  
  // Footer
  footerDescription: string
  footerCopyright: string
}

interface ContentContextType {
  content: EditableContent
  updateContent: (newContent: EditableContent) => void
}

const defaultContent: EditableContent = {
  // Hero Section
  heroTitle: 'Göreneller Özel Eğitim ve Rehabilitasyon Merkezi',
  heroSubtitle: 'Her Çocuğa Özel, Her Adımda Yanında',
  heroDescription: 'Uzman kadromuz ve modern yaklaşımlarımızla çocuğunuzun gelişimine destek oluyoruz.',
  heroButtonText: 'Hemen Başlayın',
  
  // About Section
  aboutTitle: 'Hakkımızda',
  aboutDescription: 'Göreneller Özel Eğitim ve Rehabilitasyon Merkezi olarak, özel gereksinimli bireylerin eğitim ve rehabilitasyon süreçlerinde ailelerle birlikte yol yürüyoruz.',
  aboutMission: 'Misyonumuz, her bireyin kendi potansiyelini keşfetmesi ve geliştirmesi için gerekli desteği sağlamaktır.',
  aboutVision: 'Vizyonumuz, özel eğitim alanında öncü bir kurum olmak ve her çocuğun hayallerine ulaşmasına yardımcı olmaktır.',
  
  // Services Section
  servicesTitle: 'Hizmetlerimiz',
  servicesDescription: 'Uzman kadromuzla çeşitli alanlarda profesyonel hizmet sunuyoruz.',
  service1Title: 'Özel Eğitim',
  service1Description: 'Bireysel eğitim programları ile çocuğunuzun gelişimini destekliyoruz.',
  service2Title: 'Fizyoterapi',
  service2Description: 'Hareket ve denge sorunları için rehabilitasyon hizmetleri.',
  service3Title: 'Konuşma Terapisi',
  service3Description: 'Dil ve konuşma gelişimi için özel terapi programları.',
  
  // Trainers Section
  trainersTitle: 'Uzman Kadromuz',
  trainersDescription: 'Alanında deneyimli ve uzman eğitmenlerimiz.',
  trainer1Name: 'Ahmet GÖRENEL',
  trainer1Title: 'Özel Eğitim Uzmanı',
  trainer1Description: '15 yıllık deneyimi ile özel eğitim alanında uzman.',
  trainer2Name: 'Ayşe GÖRENEL',
  trainer2Title: 'Fizyoterapist',
  trainer2Description: 'Pediatrik fizyoterapi alanında 10 yıllık deneyim.',
  trainer3Name: 'Mehmet GÖRENEL',
  trainer3Title: 'Konuşma Terapisti',
  trainer3Description: 'Dil ve konuşma bozuklukları uzmanı.',
  
  // Gallery Section
  galleryTitle: 'Galeri',
  galleryDescription: 'Merkezimizden görüntüler ve etkinliklerimiz.',
  
  // Contact Section
  contactTitle: 'İletişim',
  contactDescription: 'Bizimle iletişime geçin, size yardımcı olalım.',
  contactPhone: '+90 533 703 51 45',
  contactEmail: 'info@goreneller.com',
  contactAddress: 'Örnek Mahallesi, Eğitim Caddesi No:123, İstanbul',
  contactWorkingHours: 'Pazartesi - Cuma: 09:00 - 17:00',
  
  // Footer
  footerDescription: 'Göreneller Özel Eğitim ve Rehabilitasyon Merkezi - Her çocuğa özel yaklaşım.',
  footerCopyright: '2024 Göreneller. Tüm hakları saklıdır.'
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export const useContent = () => {
  const context = useContext(ContentContext)
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return context
}

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<EditableContent>(() => {
    // localStorage'dan mevcut içeriği yükle
    const savedContent = localStorage.getItem('siteContent')
    if (savedContent) {
      try {
        return { ...defaultContent, ...JSON.parse(savedContent) }
      } catch (error) {
        console.error('Error parsing saved content:', error)
        return defaultContent
      }
    }
    return defaultContent
  })

  const updateContent = (newContent: EditableContent) => {
    setContent(newContent)
    localStorage.setItem('siteContent', JSON.stringify(newContent))
  }

  useEffect(() => {
    // İçerik değiştiğinde localStorage'a kaydet
    localStorage.setItem('siteContent', JSON.stringify(content))
  }, [content])

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  )
}

export type { EditableContent }
