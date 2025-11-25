import React, { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc,
  onSnapshot 
} from 'firebase/firestore'
import { db } from '../config/firebase'

// Site bilgileri interface'i
export interface SiteInfo {
  companyName: string
  phone: string
  email: string
  address: string
  workingHours: string
  about: string
  mission: string
  vision: string
  services: {
    id: number
    title: string
    description: string
    icon: string
  }[]
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
    youtube?: string
  }
  heroSection: {
    title: string
    subtitle: string
    buttonText: string
    description: string
    backgroundImage?: string
  }
  aboutSection: {
    title: string
    description: string
    mission: string
    vision: string
    image?: string
  }
  gallerySection: {
    title: string
    description: string
    images: {
      id: string
      url: string
      alt: string
      caption?: string
    }[]
  }
  servicesSection: {
    title: string
    description: string
    services: {
      id: string
      title: string
      description: string
      icon: string
      features?: string[]
    }[]
  }
  trainersSection: {
    title: string
    description: string
    trainers: {
      id: string
      name: string
      title: string
      bio: string
      image?: string
      specialties?: string[]
    }[]
  }
  contactSection: {
    title: string
    description: string
    showForm: boolean
    formTitle: string
    formDescription: string
  }
  // Eski alanlar (backward compatibility)
  title?: string
  description?: string
  aboutText?: string
}

// Varsayılan site bilgileri
const defaultSiteInfo: SiteInfo = {
  companyName: "Göreneller",
  phone: "+90 (212) 555 0123",
  email: "info@goreneller.com",
  address: "İstanbul, Türkiye",
  workingHours: "Pazartesi - Cuma: 09:00 - 18:00",
  about: "Görme engelli bireyler için kapsamlı eğitim ve destek hizmetleri sunuyoruz.",
  mission: "Görme engelli bireylerin bağımsız yaşam becerilerini geliştirmek ve sosyal hayata entegrasyonlarını sağlamak.",
  vision: "Tüm görme engelli bireylerin eşit fırsatlara sahip olduğu, erişilebilir bir toplum yaratmak.",
  services: [
    {
      id: 1,
      title: "Mobilitie Eğitimi",
      description: "Beyaz baston kullanımı ve güvenli hareket teknikleri",
      icon: "🦯"
    },
    {
      id: 2,
      title: "Yaşam Becerileri",
      description: "Günlük yaşam aktivitelerinde bağımsızlık kazanma",
      icon: "🏠"
    },
    {
      id: 3,
      title: "Rehberlik Eğitimi",
      description: "Yönlendirme ve destek teknikleri öğrenme",
      icon: "🤝"
    }
  ],
  socialMedia: {
    facebook: "https://facebook.com/goreneller",
    instagram: "https://instagram.com/goreneller",
    twitter: "https://twitter.com/goreneller"
  },
  heroSection: {
    title: "Görme Engelliler İçin Eğitim ve Destek",
    subtitle: "Bağımsızlık yolculuğunuzda yanınızdayız",
    buttonText: "Hizmetlerimizi Keşfedin",
    description: "Göreneller Özel Eğitim Merkezi olarak, görme engelli bireylerin toplumsal hayata tam katılımını destekleyen kapsamlı eğitim programları sunuyoruz."
  },
  aboutSection: {
    title: "Hakkımızda",
    description: "Göreneller olarak 15 yıldır görme engelli bireyler ve ailelerine hizmet vermekteyiz.",
    mission: "Görme engelli bireylerin eğitim, rehabilitasyon ve toplumsal entegrasyon ihtiyaçlarını karşılamak.",
    vision: "Görme engelli bireylerin bağımsız bir yaşam sürmelerini sağlayan öncü eğitim kurumu olmak."
  },
  gallerySection: {
    title: "Galeri",
    description: "Eğitim faaliyetlerimizden kareler ve başarı hikayelerimizi keşfedin.",
    images: [
      {
        id: "1",
        url: "/src/assets/back.png",
        alt: "Eğitim faaliyetleri",
        caption: "Günlük yaşam becerileri eğitimi"
      }
    ]
  },
  servicesSection: {
    title: "Hizmetlerimiz",
    description: "Görme engelli bireyler için kapsamlı eğitim ve destek hizmetleri sunuyoruz.",
    services: [
      {
        id: "1",
        title: "Braille Eğitimi",
        description: "Braille okuma ve yazma teknikleri öğretimi",
        icon: "📚",
        features: ["Temel Braille alfabesi", "İleri düzey okuma", "Matematik Braille", "Müzik notasyonu"]
      },
      {
        id: "2",
        title: "Yönelim ve Mobilite",
        description: "Güvenli hareket ve yönelim teknikleri",
        icon: "🦯",
        features: ["Baston kullanımı", "Yönelim teknikleri", "Toplu taşıma kullanımı", "Güvenli seyahat"]
      },
      {
        id: "3",
        title: "Günlük Yaşam Becerileri",
        description: "Bağımsız yaşam için gerekli beceriler",
        icon: "🏠",
        features: ["Ev işleri", "Kişisel bakım", "Yemek hazırlama", "Para yönetimi"]
      }
    ]
  },
  trainersSection: {
    title: "Eğitmenlerimiz",
    description: "Alanında uzman, deneyimli eğitmen kadromuzla hizmet veriyoruz.",
    trainers: [
      {
        id: "1",
        name: "Mehmet Öztürk",
        title: "Braille Eğitmeni",
        bio: "15 yıllık deneyimle Braille eğitimi konusunda uzman.",
        specialties: ["Braille Alfabesi", "Matematik Notasyonu", "Müzik Braille"]
      },
      {
        id: "2",
        name: "Ayşe Kaya",
        title: "Yönelim ve Mobilite Uzmanı",
        bio: "Görme engelli bireylerin bağımsız hareket edebilmeleri için özel eğitim verir.",
        specialties: ["Baston Eğitimi", "Yönelim Teknikleri", "Güvenlik"]
      }
    ]
  },
  contactSection: {
    title: "İletişim",
    description: "Bizimle iletişime geçin, size yardımcı olalım.",
    showForm: true,
    formTitle: "Randevu Talep Formu",
    formDescription: "Eğitim programlarımız hakkında bilgi almak ve randevu talebinde bulunmak için formu doldurun."
  }
}

interface SiteDataContextType {
  siteInfo: SiteInfo
  loading: boolean
  error: string | null
  updateSiteInfo: (newInfo: Partial<SiteInfo>) => Promise<boolean>
  refreshSiteInfo: () => Promise<void>
}

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined)

export const useSiteData = () => {
  const context = useContext(SiteDataContext)
  if (context === undefined) {
    throw new Error('useSiteData must be used within a SiteDataProvider')
  }
  return context
}

export const SiteDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [siteInfo, setSiteInfo] = useState<SiteInfo>(defaultSiteInfo)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Firestore'dan site bilgilerini oku
  const fetchSiteInfo = async (): Promise<void> => {
    try {
      setLoading(true)
      setError(null)

      const docRef = doc(db, 'site', 'siteInfo')
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const data = docSnap.data() as SiteInfo
        setSiteInfo(data)
      } else {
        // Eğer döküman yoksa varsayılan veriyi Firestore'a kaydet
        await setDoc(docRef, defaultSiteInfo)
        setSiteInfo(defaultSiteInfo)
      }
    } catch (err) {
      console.error('Site bilgileri yüklenirken hata:', err)
      setError('Site bilgileri yüklenemedi.')
      setSiteInfo(defaultSiteInfo) // Hata durumunda varsayılan veriyi kullan
    } finally {
      setLoading(false)
    }
  }

  // Site bilgilerini güncelle
  const updateSiteInfo = async (newInfo: Partial<SiteInfo>): Promise<boolean> => {
    try {
      setLoading(true)
      setError(null)

      const docRef = doc(db, 'site', 'siteInfo')
      const updatedInfo = { ...siteInfo, ...newInfo }

      await updateDoc(docRef, updatedInfo)
      setSiteInfo(updatedInfo)
      
      return true
    } catch (err) {
      console.error('Site bilgileri güncellenirken hata:', err)
      setError('Site bilgileri güncellenemedi.')
      return false
    } finally {
      setLoading(false)
    }
  }

  // Site bilgilerini yenile
  const refreshSiteInfo = async (): Promise<void> => {
    await fetchSiteInfo()
  }

  // Component mount olduğunda site bilgilerini yükle
  useEffect(() => {
    fetchSiteInfo()
  }, [])

  // Firestore'u gerçek zamanlı dinle
  useEffect(() => {
    const docRef = doc(db, 'site', 'siteInfo')
    
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as SiteInfo
        setSiteInfo(data)
      }
    }, (err) => {
      console.error('Firestore listener error:', err)
      setError('Veritabanı bağlantısında sorun oluştu.')
    })

    return () => unsubscribe()
  }, [])

  const value: SiteDataContextType = {
    siteInfo,
    loading,
    error,
    updateSiteInfo,
    refreshSiteInfo
  }

  return (
    <SiteDataContext.Provider value={value}>
      {children}
    </SiteDataContext.Provider>
  )
}

export default SiteDataContext
