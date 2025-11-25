import React, { useState } from 'react'
import { useAuth } from '../contexts/NewAuthContext'
import { useContent } from '../contexts/ContentContext'
import type { EditableContent } from '../contexts/ContentContext'
import { 
  Settings, 
  Users, 
  FileText, 
  BarChart3, 
  LogOut, 
  Home,
  Edit3,
  Save,
  X,
  Image,
  Video,
  Upload,
  Trash2,
  Play,
  Plus,
  Database,
  Globe,
  Shield,
  AlertCircle,
  CheckCircle,
  Eye,
  EyeOff,
  Download,
  RefreshCw,
  Zap,
  Camera,
  Heart,
  Phone,
  Clock,
  Award
} from 'lucide-react'

interface AdminPanelProps {
  onBackToSite: () => void
}



const AdminPanel: React.FC<AdminPanelProps> = ({ onBackToSite }) => {
  const { user, logout } = useAuth()
  const { content, updateContent } = useContent()
  const [activeTab, setActiveTab] = useState('content')
  const [isEditing, setIsEditing] = useState(false)
  
  const [editedContent, setEditedContent] = useState<EditableContent>(content)
  
  // Video yönetimi için state'ler
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'Beyaz Baston Kullanımı - Video Eğitimi',
      url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      category: 'Mobilite',
      duration: '2:30',
      description: 'Beyaz baston tekniklerinin adım adım video gösterimi',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Rehberlik Teknikleri - Video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      category: 'Rehberlik Eğitimi',
      duration: '1:45',
      description: 'Görme engelli bireylere rehberlik yapma tekniklerinin video ile gösterimi',
      thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Mutfak Güvenliği - Video Eğitimi',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      category: 'Yaşam Becerileri',
      duration: '3:15',
      description: 'Görme engelli bireyler için mutfakta güvenli çalışma tekniklerinin video gösterimi',
      thumbnail: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop'
    }
  ])
  
  const [newVideo, setNewVideo] = useState({
    title: '',
    url: '',
    category: 'Mobilite',
    duration: '',
    description: '',
    thumbnail: ''
  })

  // Galeri yönetimi için state'ler
  const [galleryImages, setGalleryImages] = useState([
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
      alt: "Rehberlik ve yönlendirme eğitimi",
      category: "Rehberlik Eğitimi",
      title: "Rehberle Yürüme Teknikleri",
      description: "Profesyonel rehberlik eğitimi ile güvenli hareket öğrenme süreci",
      type: "image"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      alt: "Bağımsız hareket eğitimi",
      category: "Mobilite", 
      title: "Bağımsız Hareket Eğitimi",
      description: "Beyaz baston kullanımı ve bağımsız hareket teknikleri",
      type: "image"
    }
  ])

  // Site ayarları için state'ler
  const [siteSettings, setSiteSettings] = useState({
    siteName: 'Göreneller Özel Eğitim ve Rehabilitasyon Merkezi',
    siteDescription: 'Görme engelli bireylere özel eğitim ve rehabilitasyon hizmetleri',
    contactPhone: '+90 533 703 51 45',
    contactEmail: 'info@goreneller.com',
    contactAddress: 'Adres bilgisi',
    workingHours: 'Pazartesi - Cuma: 09:00 - 17:00',
    socialMedia: {
      facebook: '',
      instagram: '',
      twitter: '',
      youtube: ''
    },
    seoSettings: {
      metaTitle: 'Göreneller - Özel Eğitim ve Rehabilitasyon',
      metaDescription: 'Görme engelli bireylere profesyonel eğitim ve rehabilitasyon hizmetleri sunuyoruz.',
      keywords: 'görme engeli, özel eğitim, rehabilitasyon, beyaz baston'
    }
  })

  // Servisler ve eğitmenler için state'ler
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Rehberlik ve Yönlendirme Eğitimi',
      description: 'Güvenli hareket teknikleri öğretimi',
      icon: 'Users',
      price: 'Ücretsiz',
      duration: '8 hafta',
      isActive: true
    },
    {
      id: 2,
      title: 'Beyaz Baston Kullanımı',
      description: 'Bağımsız hareket için baston teknikleri',
      icon: 'Zap',
      price: 'Ücretsiz',
      duration: '6 hafta', 
      isActive: true
    }
  ])

  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: 'Uzman Eğitmen 1',
      title: 'Rehberlik ve Yönlendirme Uzmanı',
      experience: '10+ yıl deneyim',
      specialties: ['Rehberlik', 'Mobilite', 'Orientasyon'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      isActive: true,
      bio: 'Görme engelli bireylerin bağımsızlık yolculuğunda 10 yılı aşkın deneyimi olan uzman eğitmen.'
    },
    {
      id: 2,
      name: 'Uzman Eğitmen 2',
      title: 'Yaşam Becerileri Uzmanı',
      experience: '8+ yıl deneyim',
      specialties: ['Günlük Yaşam', 'Teknoloji', 'Braille'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
      isActive: true,
      bio: 'Günlük yaşam becerileri ve teknoloji kullanımında uzman eğitmen.'
    }
  ])

  // Yeni öğe ekleme state'leri
  const [newGalleryItem, setNewGalleryItem] = useState({
    src: '',
    alt: '',
    category: '',
    title: '',
    description: '',
    type: 'image'
  })

  const [newService, setNewService] = useState({
    title: '',
    description: '',
    icon: 'Zap',
    price: 'Ücretsiz',
    duration: '',
    isActive: true
  })

  const [newTrainer, setNewTrainer] = useState({
    name: '',
    title: '',
    experience: '',
    specialties: '',
    image: '',
    isActive: true,
    bio: ''
  })

  // Modal state'leri
  const [showAddModal, setShowAddModal] = useState<string | null>(null)
  const [editingItem, setEditingItem] = useState<{
    id: number
    type: string
    title?: string
    description?: string
    name?: string
    bio?: string
  } | null>(null)

  // Arama ve filtreleme state'leri
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')

  const handleLogout = () => {
    logout()
  }

  const handleEdit = () => {
    setIsEditing(true)
    setEditedContent(content)
  }

  const handleSave = () => {
    updateContent(editedContent)
    setIsEditing(false)
    
    alert('Değişiklikler kaydedildi! Yenilikler siteye yansıtıldı.')
  }

  const handleCancel = () => {
    setEditedContent(content)
    setIsEditing(false)
  }

  // Video yönetimi fonksiyonları
  const handleAddVideo = () => {
    if (!newVideo.title || !newVideo.url) {
      alert('Lütfen video başlığı ve URL\'sini girin.')
      return
    }
    
    const video = {
      ...newVideo,
      id: Date.now() // Basit ID oluşturma
    }
    
    setVideos(prev => [...prev, video])
    setNewVideo({
      title: '',
      url: '',
      category: 'Mobilite',
      duration: '',
      description: '',
      thumbnail: ''
    })
    
    alert('Video başarıyla eklendi!')
  }

  const handleDeleteVideo = (videoId: number) => {
    if (window.confirm('Bu videoyu silmek istediğinizden emin misiniz?')) {
      setVideos(prev => prev.filter(video => video.id !== videoId))
      alert('Video silindi!')
    }
  }

  // Galeri yönetimi fonksiyonları
  const handleAddGalleryItem = () => {
    if (!newGalleryItem.src || !newGalleryItem.title) {
      alert('Lütfen resim URL\'si ve başlığı girin.')
      return
    }
    
    const item = {
      ...newGalleryItem,
      id: Date.now()
    }
    
    setGalleryImages(prev => [...prev, item])
    setNewGalleryItem({
      src: '',
      alt: '',
      category: '',
      title: '',
      description: '',
      type: 'image'
    })
    setShowAddModal(null)
    alert('Galeri öğesi eklendi!')
  }

  const handleDeleteGalleryItem = (itemId: number) => {
    if (window.confirm('Bu galeri öğesini silmek istediğinizden emin misiniz?')) {
      setGalleryImages(prev => prev.filter(item => item.id !== itemId))
      alert('Galeri öğesi silindi!')
    }
  }

  // Servis yönetimi fonksiyonları
  const handleAddService = () => {
    if (!newService.title || !newService.description) {
      alert('Lütfen servis başlığı ve açıklamasını girin.')
      return
    }
    
    const service = {
      ...newService,
      id: Date.now(),
      specialties: newService.title ? [newService.title] : []
    }
    
    setServices(prev => [...prev, service])
    setNewService({
      title: '',
      description: '',
      icon: 'Zap',
      price: 'Ücretsiz',
      duration: '',
      isActive: true
    })
    setShowAddModal(null)
    alert('Servis eklendi!')
  }

  const handleDeleteService = (serviceId: number) => {
    if (window.confirm('Bu servisi silmek istediğinizden emin misiniz?')) {
      setServices(prev => prev.filter(service => service.id !== serviceId))
      alert('Servis silindi!')
    }
  }

  const handleToggleServiceStatus = (serviceId: number) => {
    setServices(prev => prev.map(service => 
      service.id === serviceId ? { ...service, isActive: !service.isActive } : service
    ))
  }

  const handleEditService = (serviceId: number, field: string, value: string | boolean) => {
    setServices(prev => prev.map(service => 
      service.id === serviceId ? { ...service, [field]: value } : service
    ))
  }

  // Eğitmen yönetimi fonksiyonları
  const handleAddTrainer = () => {
    if (!newTrainer.name || !newTrainer.title) {
      alert('Lütfen eğitmen adı ve unvanını girin.')
      return
    }
    
    const trainer = {
      ...newTrainer,
      id: Date.now(),
      specialties: newTrainer.specialties ? newTrainer.specialties.split(',').map(s => s.trim()) : []
    }
    
    setTrainers(prev => [...prev, trainer])
    setNewTrainer({
      name: '',
      title: '',
      experience: '',
      specialties: '',
      image: '',
      isActive: true,
      bio: ''
    })
    setShowAddModal(null)
    alert('Eğitmen eklendi!')
  }

  const handleDeleteTrainer = (trainerId: number) => {
    if (window.confirm('Bu eğitmeni silmek istediğinizden emin misiniz?')) {
      setTrainers(prev => prev.filter(trainer => trainer.id !== trainerId))
      alert('Eğitmen silindi!')
    }
  }

  const handleToggleTrainerStatus = (trainerId: number) => {
    setTrainers(prev => prev.map(trainer => 
      trainer.id === trainerId ? { ...trainer, isActive: !trainer.isActive } : trainer
    ))
  }

  const handleEditTrainer = (trainerId: number, field: string, value: string | boolean) => {
    setTrainers(prev => prev.map(trainer => 
      trainer.id === trainerId ? { ...trainer, [field]: value } : trainer
    ))
  }

  const handleEditVideo = (videoId: number, field: string, value: string) => {
    setVideos(prev => prev.map(video => 
      video.id === videoId ? { ...video, [field]: value } : video
    ))
  }

  // Site ayarları güncelleme
  const handleUpdateSiteSettings = (field: string, value: string) => {
    setSiteSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleUpdateSocialMedia = (platform: string, value: string) => {
    setSiteSettings(prev => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [platform]: value
      }
    }))
  }

  const handleUpdateSEO = (field: string, value: string) => {
    setSiteSettings(prev => ({
      ...prev,
      seoSettings: {
        ...prev.seoSettings,
        [field]: value
      }
    }))
  }



  // Backup ve restore fonksiyonları
  const handleExportData = () => {
    const exportData = {
      content: editedContent,
      videos,
      galleryImages,
      services,
      trainers,
      siteSettings,
      exportDate: new Date().toISOString()
    }
    
    const dataStr = JSON.stringify(exportData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    
    const link = document.createElement('a')
    link.href = URL.createObjectURL(dataBlob)
    link.download = `goreneller-backup-${new Date().toISOString().split('T')[0]}.json`
    link.click()
    
    alert('Veriler başarıyla dışa aktarıldı!')
  }

  const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const importData = JSON.parse(e.target?.result as string)
        
        if (window.confirm('Mevcut veriler silinecek ve yeni veriler yüklenecek. Devam etmek istiyor musunuz?')) {
          // Import edilen verileri state'lere yükle
          if (importData.content) setEditedContent(importData.content)
          if (importData.videos) setVideos(importData.videos)
          if (importData.galleryImages) setGalleryImages(importData.galleryImages)
          if (importData.services) setServices(importData.services)
          if (importData.trainers) setTrainers(importData.trainers)
          if (importData.siteSettings) setSiteSettings(importData.siteSettings)
          
          alert('Veriler başarıyla içe aktarıldı!')
        }
      } catch {
        alert('Dosya formatı hatalı!')
      }
    }
    reader.readAsText(file)
  }

  const handleInputChange = (field: keyof EditableContent, value: string) => {
    setEditedContent(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const menuItems = [
    { id: 'content', label: 'İçerik Yönetimi', icon: FileText },
    { id: 'media', label: 'Medya Galerisi', icon: Image },
    { id: 'videos', label: 'Video Yönetimi', icon: Video },
    { id: 'services', label: 'Hizmet Yönetimi', icon: Zap },
    { id: 'trainers', label: 'Eğitmen Yönetimi', icon: Users },
    { id: 'gallery', label: 'Galeri Yönetimi', icon: Camera },
    { id: 'site-settings', label: 'Site Ayarları', icon: Globe },
    { id: 'backup', label: 'Yedekleme', icon: Database },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Sistem Ayarları', icon: Settings }
  ]

  const renderContentManagement = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">İçerik Yönetimi</h2>
        <div className="flex gap-2">
          {!isEditing ? (
            <button
              onClick={handleEdit}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Edit3 size={16} />
              Tümünü Düzenle
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Save size={16} />
                Tümünü Kaydet
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <X size={16} />
                İptal
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hero Bölümü */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-600">🏠 Ana Sayfa (Hero Bölümü)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ana Başlık</label>
            {isEditing ? (
              <input
                type="text"
                value={editedContent.heroTitle}
                onChange={(e) => handleInputChange('heroTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.heroTitle}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Alt Başlık</label>
            {isEditing ? (
              <input
                type="text"
                value={editedContent.heroSubtitle}
                onChange={(e) => handleInputChange('heroSubtitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.heroSubtitle}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
            {isEditing ? (
              <textarea
                value={editedContent.heroDescription}
                onChange={(e) => handleInputChange('heroDescription', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.heroDescription}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Buton Metni</label>
            {isEditing ? (
              <input
                type="text"
                value={editedContent.heroButtonText}
                onChange={(e) => handleInputChange('heroButtonText', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.heroButtonText}</p>
            )}
          </div>
        </div>
      </div>

      {/* Hakkımızda Bölümü */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 text-green-600">ℹ️ Hakkımızda Bölümü</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Başlık</label>
            {isEditing ? (
              <input
                type="text"
                value={editedContent.aboutTitle}
                onChange={(e) => handleInputChange('aboutTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.aboutTitle}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Genel Açıklama</label>
            {isEditing ? (
              <textarea
                value={editedContent.aboutDescription}
                onChange={(e) => handleInputChange('aboutDescription', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.aboutDescription}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Misyonumuz</label>
            {isEditing ? (
              <textarea
                value={editedContent.aboutMission}
                onChange={(e) => handleInputChange('aboutMission', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.aboutMission}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Vizyonumuz</label>
            {isEditing ? (
              <textarea
                value={editedContent.aboutVision}
                onChange={(e) => handleInputChange('aboutVision', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.aboutVision}</p>
            )}
          </div>
        </div>
      </div>

      {/* Hizmetler Bölümü */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 text-purple-600">🎯 Hizmetlerimiz Bölümü</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Başlık</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedContent.servicesTitle}
                  onChange={(e) => handleInputChange('servicesTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.servicesTitle}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Genel Açıklama</label>
              {isEditing ? (
                <textarea
                  value={editedContent.servicesDescription}
                  onChange={(e) => handleInputChange('servicesDescription', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.servicesDescription}</p>
              )}
            </div>
          </div>
          
          {/* Hizmet 1 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-3">Hizmet 1</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Başlık</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedContent.service1Title}
                    onChange={(e) => handleInputChange('service1Title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 bg-white p-3 rounded-md">{content.service1Title}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
                {isEditing ? (
                  <textarea
                    value={editedContent.service1Description}
                    onChange={(e) => handleInputChange('service1Description', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 bg-white p-3 rounded-md">{content.service1Description}</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Hizmet 2 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-3">Hizmet 2</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Başlık</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedContent.service2Title}
                    onChange={(e) => handleInputChange('service2Title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 bg-white p-3 rounded-md">{content.service2Title}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
                {isEditing ? (
                  <textarea
                    value={editedContent.service2Description}
                    onChange={(e) => handleInputChange('service2Description', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 bg-white p-3 rounded-md">{content.service2Description}</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Hizmet 3 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-3">Hizmet 3</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Başlık</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedContent.service3Title}
                    onChange={(e) => handleInputChange('service3Title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 bg-white p-3 rounded-md">{content.service3Title}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
                {isEditing ? (
                  <textarea
                    value={editedContent.service3Description}
                    onChange={(e) => handleInputChange('service3Description', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 bg-white p-3 rounded-md">{content.service3Description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eğitmenler Bölümü */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 text-orange-600">👥 Eğitmenler Bölümü</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Başlık</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedContent.trainersTitle}
                  onChange={(e) => handleInputChange('trainersTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.trainersTitle}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Genel Açıklama</label>
              {isEditing ? (
                <textarea
                  value={editedContent.trainersDescription}
                  onChange={(e) => handleInputChange('trainersDescription', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.trainersDescription}</p>
              )}
            </div>
          </div>
          
          {/* Eğitmen kartları için benzer yapı */}
          {[1, 2, 3].map((num) => (
            <div key={num} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-3">Eğitmen {num}</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">İsim</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedContent[`trainer${num}Name` as keyof EditableContent] as string}
                      onChange={(e) => handleInputChange(`trainer${num}Name` as keyof EditableContent, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 bg-white p-3 rounded-md">{content[`trainer${num}Name` as keyof EditableContent]}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ünvan</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedContent[`trainer${num}Title` as keyof EditableContent] as string}
                      onChange={(e) => handleInputChange(`trainer${num}Title` as keyof EditableContent, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 bg-white p-3 rounded-md">{content[`trainer${num}Title` as keyof EditableContent]}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
                  {isEditing ? (
                    <textarea
                      value={editedContent[`trainer${num}Description` as keyof EditableContent] as string}
                      onChange={(e) => handleInputChange(`trainer${num}Description` as keyof EditableContent, e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 bg-white p-3 rounded-md">{content[`trainer${num}Description` as keyof EditableContent]}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Galeri Bölümü */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 text-pink-600">🖼️ Galeri Bölümü</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Başlık</label>
            {isEditing ? (
              <input
                type="text"
                value={editedContent.galleryTitle}
                onChange={(e) => handleInputChange('galleryTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.galleryTitle}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
            {isEditing ? (
              <textarea
                value={editedContent.galleryDescription}
                onChange={(e) => handleInputChange('galleryDescription', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.galleryDescription}</p>
            )}
          </div>
        </div>
      </div>

      {/* İletişim Bölümü */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 text-red-600">📞 İletişim Bölümü</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Başlık</label>
            {isEditing ? (
              <input
                type="text"
                value={editedContent.contactTitle}
                onChange={(e) => handleInputChange('contactTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.contactTitle}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
            {isEditing ? (
              <textarea
                value={editedContent.contactDescription}
                onChange={(e) => handleInputChange('contactDescription', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.contactDescription}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
            {isEditing ? (
              <input
                type="text"
                value={editedContent.contactPhone}
                onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.contactPhone}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
            {isEditing ? (
              <input
                type="email"
                value={editedContent.contactEmail}
                onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.contactEmail}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Adres</label>
            {isEditing ? (
              <textarea
                value={editedContent.contactAddress}
                onChange={(e) => handleInputChange('contactAddress', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.contactAddress}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Çalışma Saatleri</label>
            {isEditing ? (
              <input
                type="text"
                value={editedContent.contactWorkingHours}
                onChange={(e) => handleInputChange('contactWorkingHours', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.contactWorkingHours}</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer Bölümü */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-600">📄 Footer (Alt Bilgi)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
            {isEditing ? (
              <textarea
                value={editedContent.footerDescription}
                onChange={(e) => handleInputChange('footerDescription', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.footerDescription}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telif Hakkı</label>
            {isEditing ? (
              <input
                type="text"
                value={editedContent.footerCopyright}
                onChange={(e) => handleInputChange('footerCopyright', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{content.footerCopyright}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  const renderMediaManagement = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Medya Galerisi Yönetimi</h2>
      
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Galeri Görselleri</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {/* Örnek görsel kartları */}
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="relative group">
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Görsel {num}</span>
              </div>
              <button className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <X size={12} />
              </button>
            </div>
          ))}
          
          {/* Yeni görsel ekleme */}
          <div className="aspect-square bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="text-center">
              <div className="text-gray-400 mb-2">+</div>
              <span className="text-sm text-gray-500">Yeni Ekle</span>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <input
            type="file"
            multiple
            accept="image/*"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Logo ve Markalar</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ana Logo</label>
            <div className="flex items-center gap-4">
              <img src="/src/assets/profil.jpg" alt="Mevcut Logo" className="w-16 h-16 rounded-lg object-cover" />
              <input
                type="file"
                accept="image/*"
                className="block flex-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Arkaplan Görseli</label>
            <div className="flex items-center gap-4">
              <img src="/src/assets/back.png" alt="Mevcut Arkaplan" className="w-16 h-16 rounded-lg object-cover" />
              <input
                type="file"
                accept="image/*"
                className="block flex-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderVideoManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Video Yönetimi</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Toplam: {videos.length} video</span>
          <button
            onClick={() => {
              if (window.confirm('Tüm videoları silmek istediğinizden emin misiniz?')) {
                setVideos([])
                alert('Tüm videolar silindi!')
              }
            }}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition-colors text-sm"
          >
            <Trash2 className="w-4 h-4" />
            Tümünü Sil
          </button>
        </div>
      </div>
      
      {/* Video Ekleme Formu */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Upload className="w-5 h-5 text-blue-600" />
          Yeni Video Ekle
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Video Başlığı</label>
            <input
              type="text"
              value={newVideo.title}
              onChange={(e) => setNewVideo(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Video başlığını girin..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Video URL</label>
            <input
              type="url"
              value={newVideo.url}
              onChange={(e) => setNewVideo(prev => ({ ...prev, url: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/video.mp4"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
            <select
              value={newVideo.category}
              onChange={(e) => setNewVideo(prev => ({ ...prev, category: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Mobilite">Mobilite</option>
              <option value="Rehberlik Eğitimi">Rehberlik Eğitimi</option>
              <option value="Yaşam Becerileri">Yaşam Becerileri</option>
              <option value="Duvar Takibi">Duvar Takibi</option>
              <option value="Koruma Teknikleri">Koruma Teknikleri</option>
              <option value="Aile Eğitimi">Aile Eğitimi</option>
              <option value="Akademik Beceriler">Akademik Beceriler</option>
              <option value="Teknoloji">Teknoloji</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Süre</label>
            <input
              type="text"
              value={newVideo.duration}
              onChange={(e) => setNewVideo(prev => ({ ...prev, duration: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="2:30"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
            <textarea
              value={newVideo.description}
              onChange={(e) => setNewVideo(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Video açıklamasını girin..."
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail URL (İsteğe bağlı)</label>
            <input
              type="url"
              value={newVideo.thumbnail}
              onChange={(e) => setNewVideo(prev => ({ ...prev, thumbnail: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/thumbnail.jpg"
            />
          </div>
        </div>
        
        <button
          onClick={handleAddVideo}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Upload className="w-4 h-4" />
          Video Ekle
        </button>
      </div>
      
      {/* Arama ve Filtreleme */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Video ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Tüm Kategoriler</option>
              <option value="Mobilite">Mobilite</option>
              <option value="Rehberlik Eğitimi">Rehberlik Eğitimi</option>
              <option value="Yaşam Becerileri">Yaşam Becerileri</option>
              <option value="Duvar Takibi">Duvar Takibi</option>
              <option value="Koruma Teknikleri">Koruma Teknikleri</option>
              <option value="Aile Eğitimi">Aile Eğitimi</option>
              <option value="Akademik Beceriler">Akademik Beceriler</option>
              <option value="Teknoloji">Teknoloji</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mevcut Videolar */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Video className="w-5 h-5 text-green-600" />
          Mevcut Videolar ({videos.filter(video => {
            const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                video.description.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesCategory = filterCategory === 'all' || video.category === filterCategory
            return matchesSearch && matchesCategory
          }).length})
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.filter(video => {
            const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                video.description.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesCategory = filterCategory === 'all' || video.category === filterCategory
            return matchesSearch && matchesCategory
          }).map((video) => (
            <div key={video.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              {video.thumbnail ? (
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-32 object-cover"
                />
              ) : (
                <div className="w-full h-32 bg-gray-100 flex items-center justify-center">
                  <Video className="w-8 h-8 text-gray-400" />
                </div>
              )}
              
              <div className="p-4">
                {editingItem && editingItem.id === video.id && editingItem.type === 'video' ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={editingItem.title || video.title}
                      onChange={(e) => setEditingItem(prev => prev ? { ...prev, title: e.target.value } : null)}
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                      placeholder="Video başlığı"
                    />
                    <textarea
                      value={editingItem.description || video.description}
                      onChange={(e) => setEditingItem(prev => prev ? { ...prev, description: e.target.value } : null)}
                      rows={2}
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                      placeholder="Video açıklaması"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          handleEditVideo(video.id, 'title', editingItem.title || video.title)
                          handleEditVideo(video.id, 'description', editingItem.description || video.description)
                          setEditingItem(null)
                          alert('Video güncellendi!')
                        }}
                        className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors"
                      >
                        <Save className="w-3 h-3" />
                        Kaydet
                      </button>
                      <button
                        onClick={() => setEditingItem(null)}
                        className="flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                      >
                        <X className="w-3 h-3" />
                        İptal
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h4 className="font-medium text-gray-900 mb-1">{video.title}</h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{video.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{video.category}</span>
                      <span className="flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        {video.duration}
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => window.open(video.url, '_blank')}
                        className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors"
                      >
                        <Play className="w-3 h-3" />
                        Oynat
                      </button>
                      <button
                        onClick={() => setEditingItem({ id: video.id, type: 'video', title: video.title, description: video.description })}
                        className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                      >
                        <Edit3 className="w-3 h-3" />
                        Düzenle
                      </button>
                      <button
                        onClick={() => handleDeleteVideo(video.id)}
                        className="flex items-center gap-1 text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                        Sil
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        
{(() => {
          const filteredVideos = videos.filter(video => {
            const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                video.description.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesCategory = filterCategory === 'all' || video.category === filterCategory
            return matchesSearch && matchesCategory
          })
          
          if (videos.length === 0) {
            return (
              <div className="text-center py-8">
                <Video className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">Henüz video eklenmemiş.</p>
              </div>
            )
          }
          
          if (filteredVideos.length === 0) {
            return (
              <div className="text-center py-8">
                <Video className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">Arama kriterlerinize uygun video bulunamadı.</p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setFilterCategory('all')
                  }}
                  className="mt-2 text-blue-600 hover:text-blue-700 text-sm"
                >
                  Filtreleri Temizle
                </button>
              </div>
            )
          }
          
          return null
        })()}
      </div>
    </div>
  )

  const renderServicesManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Hizmet Yönetimi</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Toplam: {services.length}</span>
            <span>Aktif: {services.filter(s => s.isActive).length}</span>
          </div>
          <button
            onClick={() => {
              const inactiveServices = services.filter(s => !s.isActive)
              if (inactiveServices.length === 0) {
                alert('Silinecek pasif hizmet bulunmamaktadır.')
                return
              }
              if (window.confirm(`${inactiveServices.length} adet pasif hizmeti silmek istiyor musunuz?`)) {
                setServices(prev => prev.filter(s => s.isActive))
                alert(`${inactiveServices.length} pasif hizmet silindi!`)
              }
            }}
            className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded-md transition-colors text-sm"
          >
            <Trash2 className="w-4 h-4" />
            Pasifleri Sil
          </button>
          <button
            onClick={() => setShowAddModal('service')}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Yeni Hizmet Ekle
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.isActive ? 'bg-blue-100' : 'bg-gray-100'}`}>
                <Zap className={`w-6 h-6 ${service.isActive ? 'text-blue-600' : 'text-gray-400'}`} />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleToggleServiceStatus(service.id)}
                  className={`p-2 rounded-lg transition-colors ${service.isActive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}
                >
                  {service.isActive ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setEditingItem({ id: service.id, type: 'service', title: service.title, description: service.description })}
                  className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteService(service.id)}
                  className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
{editingItem && editingItem.id === service.id && editingItem.type === 'service' ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={editingItem.title || service.title}
                  onChange={(e) => setEditingItem(prev => prev ? { ...prev, title: e.target.value } : null)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                  placeholder="Servis başlığı"
                />
                <textarea
                  value={editingItem.description || service.description}
                  onChange={(e) => setEditingItem(prev => prev ? { ...prev, description: e.target.value } : null)}
                  rows={2}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                  placeholder="Servis açıklaması"
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => {
                      handleEditService(service.id, 'title', editingItem.title || service.title)
                      handleEditService(service.id, 'description', editingItem.description || service.description)
                      setEditingItem(null)
                      alert('Servis güncellendi!')
                    }}
                    className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors"
                  >
                    <Save className="w-3 h-3" />
                    Kaydet
                  </button>
                  <button
                    onClick={() => setEditingItem(null)}
                    className="flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-3 h-3" />
                    İptal
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600 font-medium">{service.price}</span>
                  <span className="text-gray-500">{service.duration}</span>
                </div>
                
                <div className={`mt-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  service.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                }`}>
                  {service.isActive ? 'Aktif' : 'Pasif'}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      
      {services.length === 0 && (
        <div className="text-center py-12">
          <Zap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz Hizmet Yok</h3>
          <p className="text-gray-500">İlk hizmetinizi eklemek için yukarıdaki butona tıklayın.</p>
        </div>
      )}
    </div>
  )

  const renderTrainersManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Eğitmen Yönetimi</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Toplam: {trainers.length}</span>
            <span>Aktif: {trainers.filter(t => t.isActive).length}</span>
          </div>
          <button
            onClick={() => {
              if (window.confirm('Tüm eğitmenleri aktif yapmak istiyor musunuz?')) {
                setTrainers(prev => prev.map(t => ({ ...t, isActive: true })))
                alert('Tüm eğitmenler aktif yapıldı!')
              }
            }}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md transition-colors text-sm"
          >
            <Eye className="w-4 h-4" />
            Tümünü Aktif Yap
          </button>
          <button
            onClick={() => setShowAddModal('trainer')}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Yeni Eğitmen Ekle
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <img
                src={trainer.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'}
                alt={trainer.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{trainer.name}</h3>
                    <p className="text-sm text-blue-600">{trainer.title}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleToggleTrainerStatus(trainer.id)}
                      className={`p-2 rounded-lg transition-colors ${trainer.isActive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}
                    >
                      {trainer.isActive ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => setEditingItem({ id: trainer.id, type: 'trainer', name: trainer.name, bio: trainer.bio })}
                      className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteTrainer(trainer.id)}
                      className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
{editingItem && editingItem.id === trainer.id && editingItem.type === 'trainer' ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={editingItem.name || trainer.name}
                  onChange={(e) => setEditingItem(prev => prev ? { ...prev, name: e.target.value } : null)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                  placeholder="Eğitmen adı"
                />
                <textarea
                  value={editingItem.bio || trainer.bio}
                  onChange={(e) => setEditingItem(prev => prev ? { ...prev, bio: e.target.value } : null)}
                  rows={3}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                  placeholder="Eğitmen biyografisi"
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => {
                      handleEditTrainer(trainer.id, 'name', editingItem.name || trainer.name)
                      handleEditTrainer(trainer.id, 'bio', editingItem.bio || trainer.bio)
                      setEditingItem(null)
                      alert('Eğitmen güncellendi!')
                    }}
                    className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors"
                  >
                    <Save className="w-3 h-3" />
                    Kaydet
                  </button>
                  <button
                    onClick={() => setEditingItem(null)}
                    className="flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-3 h-3" />
                    İptal
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{trainer.bio}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-600">{trainer.experience}</span>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {trainer.specialties.map((specialty, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  trainer.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                }`}>
                  {trainer.isActive ? 'Aktif' : 'Pasif'}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      
      {trainers.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz Eğitmen Yok</h3>
          <p className="text-gray-500">İlk eğitmeninizi eklemek için yukarıdaki butona tıklayın.</p>
        </div>
      )}
    </div>
  )

  const renderGalleryManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Galeri Yönetimi</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Toplam: {galleryImages.length}</span>
            <span>Resim: {galleryImages.filter(i => i.type === 'image').length}</span>
            <span>Video: {galleryImages.filter(i => i.type === 'video').length}</span>
          </div>
          <button
            onClick={() => {
              const videoItems = galleryImages.filter(i => i.type === 'video')
              if (videoItems.length === 0) {
                alert('Silinecek video öğesi bulunmamaktadır.')
                return
              }
              if (window.confirm(`${videoItems.length} adet video öğesini silmek istiyor musunuz?`)) {
                setGalleryImages(prev => prev.filter(i => i.type !== 'video'))
                alert(`${videoItems.length} video öğesi silindi!`)
              }
            }}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-md transition-colors text-sm"
          >
            <Video className="w-4 h-4" />
            Videoları Sil
          </button>
          <button
            onClick={() => setShowAddModal('gallery')}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Yeni Medya Ekle
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {galleryImages.map((item) => (
          <div key={item.id} className="relative group aspect-square rounded-lg overflow-hidden bg-gray-100">
            {item.type === 'video' ? (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <Video className="w-8 h-8 text-gray-400" />
              </div>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            )}
            
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button
                onClick={() => setEditingItem({ id: item.id, type: 'gallery', title: item.title, description: item.description })}
                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDeleteGalleryItem(item.id)}
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-xs font-medium truncate">{item.title}</p>
              <p className="text-white/80 text-xs truncate">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
      
      {galleryImages.length === 0 && (
        <div className="text-center py-12">
          <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz Medya Yok</h3>
          <p className="text-gray-500">İlk medya dosyanızı eklemek için yukarıdaki butona tıklayın.</p>
        </div>
      )}
    </div>
  )

  const renderSiteSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Site Ayarları</h2>
      
      {/* Genel Site Bilgileri */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-blue-600" />
          Genel Site Bilgileri
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Site Adı</label>
            <input
              type="text"
              value={siteSettings.siteName}
              onChange={(e) => handleUpdateSiteSettings('siteName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Site Açıklaması</label>
            <textarea
              value={siteSettings.siteDescription}
              onChange={(e) => handleUpdateSiteSettings('siteDescription', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
      
      {/* İletişim Bilgileri */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Phone className="w-5 h-5 text-green-600" />
          İletişim Bilgileri
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
            <input
              type="tel"
              value={siteSettings.contactPhone}
              onChange={(e) => handleUpdateSiteSettings('contactPhone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
            <input
              type="email"
              value={siteSettings.contactEmail}
              onChange={(e) => handleUpdateSiteSettings('contactEmail', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Adres</label>
            <textarea
              value={siteSettings.contactAddress}
              onChange={(e) => handleUpdateSiteSettings('contactAddress', e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Çalışma Saatleri</label>
            <input
              type="text"
              value={siteSettings.workingHours}
              onChange={(e) => handleUpdateSiteSettings('workingHours', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
      
      {/* Sosyal Medya */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-pink-600" />
          Sosyal Medya Linkleri
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
            <input
              type="url"
              value={siteSettings.socialMedia.facebook}
              onChange={(e) => handleUpdateSocialMedia('facebook', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://facebook.com/..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
            <input
              type="url"
              value={siteSettings.socialMedia.instagram}
              onChange={(e) => handleUpdateSocialMedia('instagram', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://instagram.com/..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Twitter</label>
            <input
              type="url"
              value={siteSettings.socialMedia.twitter}
              onChange={(e) => handleUpdateSocialMedia('twitter', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://twitter.com/..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">YouTube</label>
            <input
              type="url"
              value={siteSettings.socialMedia.youtube}
              onChange={(e) => handleUpdateSocialMedia('youtube', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://youtube.com/..."
            />
          </div>
        </div>
      </div>
      
      {/* SEO Ayarları */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-600" />
          SEO Ayarları
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Meta Başlık</label>
            <input
              type="text"
              value={siteSettings.seoSettings.metaTitle}
              onChange={(e) => handleUpdateSEO('metaTitle', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Meta Açıklama</label>
            <textarea
              value={siteSettings.seoSettings.metaDescription}
              onChange={(e) => handleUpdateSEO('metaDescription', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Anahtar Kelimeler</label>
            <input
              type="text"
              value={siteSettings.seoSettings.keywords}
              onChange={(e) => handleUpdateSEO('keywords', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="kelime1, kelime2, kelime3"
            />
          </div>
        </div>
      </div>
    </div>
  )

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">İstatistikler ve Analytics</h2>
      
      {/* Genel İstatistikler */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{videos.length}</h3>
              <p className="text-sm text-gray-600">Toplam Video</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{services.filter(s => s.isActive).length}</h3>
              <p className="text-sm text-gray-600">Aktif Hizmet</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{trainers.filter(t => t.isActive).length}</h3>
              <p className="text-sm text-gray-600">Aktif Eğitmen</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{galleryImages.length}</h3>
              <p className="text-sm text-gray-600">Galeri Öğesi</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Kategorileri */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          Video Kategorileri
        </h3>
        
        <div className="space-y-3">
          {Object.entries(
            videos.reduce((acc, video) => {
              acc[video.category] = (acc[video.category] || 0) + 1
              return acc
            }, {} as {[key: string]: number})
          ).map(([category, count]) => (
            <div key={category} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">{category}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${videos.length > 0 ? (count / videos.length) * 100 : 0}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 w-8 text-right">{count}</span>
              </div>
            </div>
          ))}
          
          {videos.length === 0 && (
            <div className="text-center py-8">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">Henüz video bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Hızlı Aksiyonlar */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-orange-600" />
          Hızlı Aksiyonlar
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setActiveTab('videos')}
            className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-3 rounded-lg transition-colors text-left"
          >
            <Video className="w-5 h-5" />
            <div>
              <div className="font-medium">Video Yönetimi</div>
              <div className="text-sm opacity-75">Videoları düzenle</div>
            </div>
          </button>
          
          <button
            onClick={() => setActiveTab('services')}
            className="flex items-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-4 py-3 rounded-lg transition-colors text-left"
          >
            <Zap className="w-5 h-5" />
            <div>
              <div className="font-medium">Hizmet Yönetimi</div>
              <div className="text-sm opacity-75">Hizmetleri düzenle</div>
            </div>
          </button>
          
          <button
            onClick={() => setActiveTab('backup')}
            className="flex items-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-700 px-4 py-3 rounded-lg transition-colors text-left"
          >
            <Database className="w-5 h-5" />
            <div>
              <div className="font-medium">Yedekleme</div>
              <div className="text-sm opacity-75">Verileri yedekle</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )

  const renderSystemSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Sistem Ayarları</h2>
      
      {/* Admin Kullanıcı Yönetimi */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-purple-600" />
          Admin Kullanıcı Yönetimi
        </h3>
        
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />               <span className="font-medium text-blue-800">Mevcut Admin: {user?.email}</span>
            </div>
            <p className="text-sm text-blue-700">Admin paneline erişim yetkiniz bulunmaktadır.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Yeni Admin Kullanıcı Adı</label>
              <input
                type="text"
                placeholder="Yeni kullanıcı adı"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Şifre</label>
              <input
                type="password"
                placeholder="Yeni şifre"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <button
            onClick={() => alert('Bu özellik demo modunda çalışmamaktadır.')}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Admin Ekle
          </button>
        </div>
      </div>
      
      {/* Sistem Bilgileri */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-green-600" />
          Sistem Bilgileri
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-800">Sistem Durumu</span>
            </div>
            <p className="text-sm text-green-700">Çevrimiçi ve Çalışıyor</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-800">Veri Durumu</span>
            </div>
            <p className="text-sm text-blue-700">LocalStorage Aktif</p>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-purple-800">Son Güncelleme</span>
            </div>
            <p className="text-sm text-purple-700">{new Date().toLocaleDateString('tr-TR')}</p>
          </div>
        </div>
      </div>
      
      {/* Temizlik ve Bakım */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <RefreshCw className="w-5 h-5 text-orange-600" />
          Temizlik ve Bakım
        </h3>
        
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-yellow-800">Dikkat!</h4>
                <p className="text-sm text-yellow-700 mt-1">
                  Bu işlemler geri alınamaz. Devam etmeden önce veri yedeği almayı unutmayın.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => {
                if (window.confirm('Tüm önbellek verileri silinecek. Devam etmek istiyor musunuz?')) {
                  localStorage.clear()
                  alert('Önbellek temizlendi! Sayfa yeniden yüklenecek.')
                  window.location.reload()
                }
              }}
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Önbellek Temizle
            </button>
            
            <button
              onClick={() => {
                if (window.confirm('Tüm site verileri sıfırlanacak. Bu işlem geri alınamaz!')) {
                  // Site verilerini sıfırla
                  setVideos([])
                  setServices([])
                  setTrainers([])
                  setGalleryImages([])
                  alert('Site verileri sıfırlandı!')
                }
              }}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Site Verilerini Sıfırla
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderBackupManagement = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Yedekleme ve Geri Yükleme</h2>
      
      {/* Dışa Aktarma */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Download className="w-5 h-5 text-green-600" />
          Veri Dışa Aktarma
        </h3>
        
        <p className="text-gray-600 mb-4">
          Tüm site verilerinizi JSON formatında dışa aktarın. Bu dosya içerik, medya, videolar ve ayarları içerir.
        </p>
        
        <button
          onClick={handleExportData}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Download className="w-4 h-4" />
          Verileri Dışa Aktar
        </button>
      </div>
      
      {/* İçe Aktarma */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Upload className="w-5 h-5 text-blue-600" />
          Veri İçe Aktarma
        </h3>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-yellow-800">Dikkat!</h4>
              <p className="text-sm text-yellow-700 mt-1">
                Veri içe aktarma işlemi mevcut tüm verileri silecek ve yedek dosyasındaki verilerle değiştirecektir.
              </p>
            </div>
          </div>
        </div>
        
        <input
          type="file"
          accept=".json"
          onChange={handleImportData}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
      
      {/* Sistem Durumu */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-purple-600" />
          Sistem Durumu
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-800">İçerik</span>
            </div>
            <p className="text-sm text-green-700">{Object.keys(content).length} öğe</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Video className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-800">Videolar</span>
            </div>
            <p className="text-sm text-blue-700">{videos.length} video</p>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Camera className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-purple-800">Galeri</span>
            </div>
            <p className="text-sm text-purple-700">{galleryImages.length} öğe</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'content':
        return renderContentManagement()
      case 'media':
        return renderMediaManagement()
      case 'videos':
        return renderVideoManagement()
      case 'services':
        return renderServicesManagement()
      case 'trainers':
        return renderTrainersManagement()
      case 'gallery':
        return renderGalleryManagement()
      case 'site-settings':
        return renderSiteSettings()
      case 'backup':
        return renderBackupManagement()
      case 'analytics':
        return renderAnalytics()
      case 'settings':
        return renderSystemSettings()
      default:
        return null
    }
  }

  // Modal render fonksiyonları
  const renderAddModal = () => {
    if (!showAddModal) return null

    const modalContent = () => {
      switch (showAddModal) {
        case 'gallery':
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Yeni Galeri Öğesi Ekle</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Medya URL</label>
                <input
                  type="url"
                  value={newGalleryItem.src}
                  onChange={(e) => setNewGalleryItem(prev => ({ ...prev, src: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Başlık</label>
                <input
                  type="text"
                  value={newGalleryItem.title}
                  onChange={(e) => setNewGalleryItem(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Medya başlığı"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Alt Metin</label>
                <input
                  type="text"
                  value={newGalleryItem.alt}
                  onChange={(e) => setNewGalleryItem(prev => ({ ...prev, alt: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Alternatif metin"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                <input
                  type="text"
                  value={newGalleryItem.category}
                  onChange={(e) => setNewGalleryItem(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Örn: Rehberlik Eğitimi"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
                <textarea
                  value={newGalleryItem.description}
                  onChange={(e) => setNewGalleryItem(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Açıklama..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tip</label>
                <select
                  value={newGalleryItem.type}
                  onChange={(e) => setNewGalleryItem(prev => ({ ...prev, type: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="image">Resim</option>
                  <option value="video">Video</option>
                </select>
              </div>
              
              <div className="flex gap-2 pt-4">
                <button
                  onClick={handleAddGalleryItem}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Ekle
                </button>
                <button
                  onClick={() => setShowAddModal(null)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  İptal
                </button>
              </div>
            </div>
          )
        
        case 'service':
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Yeni Hizmet Ekle</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hizmet Adı</label>
                <input
                  type="text"
                  value={newService.title}
                  onChange={(e) => setNewService(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Hizmet adını girin..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
                <textarea
                  value={newService.description}
                  onChange={(e) => setNewService(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Hizmet açıklaması..."
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fiyat</label>
                  <input
                    type="text"
                    value={newService.price}
                    onChange={(e) => setNewService(prev => ({ ...prev, price: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ücretsiz"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Süre</label>
                  <input
                    type="text"
                    value={newService.duration}
                    onChange={(e) => setNewService(prev => ({ ...prev, duration: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="8 hafta"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">İkon</label>
                <select
                  value={newService.icon}
                  onChange={(e) => setNewService(prev => ({ ...prev, icon: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Zap">Zap (Şimşek)</option>
                  <option value="Users">Users (Kullanıcılar)</option>
                  <option value="Heart">Heart (Kalp)</option>
                  <option value="Award">Award (Ödül)</option>
                  <option value="Shield">Shield (Kalkan)</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="serviceActive"
                  checked={newService.isActive}
                  onChange={(e) => setNewService(prev => ({ ...prev, isActive: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                <label htmlFor="serviceActive" className="text-sm text-gray-700">Hizmet aktif olsun</label>
              </div>
              
              <div className="flex gap-2 pt-4">
                <button
                  onClick={handleAddService}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Ekle
                </button>
                <button
                  onClick={() => setShowAddModal(null)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  İptal
                </button>
              </div>
            </div>
          )
        
        case 'trainer':
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Yeni Eğitmen Ekle</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    value={newTrainer.name}
                    onChange={(e) => setNewTrainer(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Eğitmen adı..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ünvan</label>
                  <input
                    type="text"
                    value={newTrainer.title}
                    onChange={(e) => setNewTrainer(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Uzman Eğitmen"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Deneyim</label>
                <input
                  type="text"
                  value={newTrainer.experience}
                  onChange={(e) => setNewTrainer(prev => ({ ...prev, experience: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="10+ yıl deneyim"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Uzmanlık Alanları (virgülle ayırın)</label>
                <input
                  type="text"
                  value={newTrainer.specialties}
                  onChange={(e) => setNewTrainer(prev => ({ ...prev, specialties: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Rehberlik, Mobilite, Orientasyon"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Profil Fotoğrafı URL</label>
                <input
                  type="url"
                  value={newTrainer.image}
                  onChange={(e) => setNewTrainer(prev => ({ ...prev, image: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kısa Biyografi</label>
                <textarea
                  value={newTrainer.bio}
                  onChange={(e) => setNewTrainer(prev => ({ ...prev, bio: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Eğitmen hakkında kısa bilgi..."
                />
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="trainerActive"
                  checked={newTrainer.isActive}
                  onChange={(e) => setNewTrainer(prev => ({ ...prev, isActive: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                <label htmlFor="trainerActive" className="text-sm text-gray-700">Eğitmen aktif olsun</label>
              </div>
              
              <div className="flex gap-2 pt-4">
                <button
                  onClick={handleAddTrainer}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Ekle
                </button>
                <button
                  onClick={() => setShowAddModal(null)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  İptal
                </button>
              </div>
            </div>
          )
        
        default:
          return null
      }
    }

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
          {modalContent()}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-sm text-gray-600 mt-1">Hoş geldiniz, {user?.email}</p>
        </div>
        
        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                  activeTab === item.id ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' : 'text-gray-700'
                }`}
              >
                <Icon size={20} />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="absolute bottom-0 w-64 p-6 border-t border-gray-200">
          <button
            onClick={onBackToSite}
            className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors mb-2"
          >
            <Home size={20} />
            Siteye Dön
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            Çıkış Yap
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {renderTabContent()}
      </div>

      {/* Modal */}
      {renderAddModal()}
    </div>
  )
}

export default AdminPanel
