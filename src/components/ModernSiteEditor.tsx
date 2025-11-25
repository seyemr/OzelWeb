import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/NewAuthContext'
import { useSiteData } from '../contexts/SiteDataContext'
import type { SiteInfo } from '../contexts/SiteDataContext'
import { 
  Settings, 
  Save, 
  LogOut, 
  Home,
  RefreshCw,
  Trash2,
  Share2,
  Smartphone,
  Monitor,

  Info,
  Camera,
  Briefcase,
  Users,
  MessageCircle,
  Plus,
  AlertCircle
} from 'lucide-react'
import HizmetlerTab from './HizmetlerTab';
import EgitmenlerTab from './EgitmenlerTab';
import IletisimTab from './IletisimTab';

interface ModernSiteEditorProps {
  onBackToSite: () => void
}

const ModernSiteEditor: React.FC<ModernSiteEditorProps> = ({ onBackToSite }) => {
  const { user, logout } = useAuth()
  const { siteInfo, error, updateSiteInfo } = useSiteData()
  
  // State management
  const [activeTab, setActiveTab] = useState('anasayfa')
  const [saving, setSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [isDirty, setIsDirty] = useState(false)
  
  // Form data
  const [formData, setFormData] = useState<SiteInfo>({
    companyName: '',
    title: '',
    description: '',
    phone: '',
    email: '',
    address: '',
    workingHours: '',
    about: '',
    mission: '',
    vision: '',
    services: [],
    socialMedia: {
      facebook: '',
      instagram: '',
      twitter: '',
      youtube: ''
    },
    heroSection: {
      title: '',
      subtitle: '',
      buttonText: ''
    },
    aboutText: ''
  })

  useEffect(() => {
    if (siteInfo) {
      setFormData(siteInfo)
    }
  }, [siteInfo])

  // Handle input changes
  const handleInputChange = (field: string, value: string, section?: string) => {
    if (section === 'socialMedia') {
      setFormData(prev => ({
        ...prev,
        socialMedia: {
          ...prev.socialMedia,
          [field]: value
        }
      }))
    } else if (section === 'heroSection') {
      setFormData(prev => ({
        ...prev,
        heroSection: {
          ...prev.heroSection,
          [field]: value
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }))
    }
    setIsDirty(true)
    setSaveSuccess(false)
    setSaveError(null)
  }

  // TODO: Drag & drop functionality will be added later
  // const reorderSections = (dragIndex: number, hoverIndex: number) => { ... }

  // Save all changes
  const handleSave = async () => {
    try {
      setSaving(true)
      setSaveError(null)
      
      const success = await updateSiteInfo(formData)
      if (success) {
        setSaveSuccess(true)
        setIsDirty(false)
        setTimeout(() => setSaveSuccess(false), 3000)
      } else {
        setSaveError('Değişiklikler kaydedilemedi. Lütfen tekrar deneyin.')
      }
    } catch (error) {
      setSaveError('Beklenmeyen bir hata oluştu.')
      console.error('Save error:', error)
    } finally {
      setSaving(false)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      onBackToSite()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  // Tab content components for main site sections
  
  // Ana Sayfa Tab - Hero Section Editor
  const AnaSayfaTab = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Home className="mr-2 text-blue-600" size={20} />
          Ana Sayfa İçeriği
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Başlık
            </label>
            <input
              type="text"
              value={formData.heroSection?.title || ''}
              onChange={(e) => handleInputChange('title', e.target.value, 'heroSection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ana sayfa başlığı"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alt Başlık
            </label>
            <input
              type="text"
              value={formData.heroSection?.subtitle || ''}
              onChange={(e) => handleInputChange('subtitle', e.target.value, 'heroSection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Alt başlık"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Açıklama
            </label>
            <textarea
              value={formData.heroSection?.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value, 'heroSection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Ana sayfa açıklaması"
            />
          </div>
        </div>
      </div>
    </div>
  )

  // Hakkımızda Tab
  const HakkimizdaTab = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Info className="mr-2 text-green-600" size={20} />
          Hakkımızda İçeriği
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Başlık
            </label>
            <input
              type="text"
              value={formData.aboutSection?.title || ''}
              onChange={(e) => handleInputChange('title', e.target.value, 'aboutSection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Hakkımızda"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Açıklama
            </label>
            <textarea
              value={formData.aboutSection?.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value, 'aboutSection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Şirket hakkında genel bilgi..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Misyon
            </label>
            <textarea
              value={formData.aboutSection?.mission || ''}
              onChange={(e) => handleInputChange('mission', e.target.value, 'aboutSection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="Misyonumuz..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vizyon
            </label>
            <textarea
              value={formData.aboutSection?.vision || ''}
              onChange={(e) => handleInputChange('vision', e.target.value, 'aboutSection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="Vizyonumuz..."
            />
          </div>
        </div>
      </div>
    </div>
  )

  // Galeri Tab
  const GaleriTab = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Camera className="mr-2 text-purple-600" size={20} />
          Galeri Yönetimi
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Galeri Başlığı
            </label>
            <input
              type="text"
              value={formData.gallerySection?.title || ''}
              onChange={(e) => handleInputChange('title', e.target.value, 'gallerySection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Galeri"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Açıklama
            </label>
            <textarea
              value={formData.gallerySection?.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value, 'gallerySection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="Galeri açıklaması..."
            />
          </div>
          
          {/* Gallery Images Management */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resimler
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {formData.gallerySection?.images?.map((image) => (
                <div key={image.id} className="relative group">
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <button className="text-white hover:text-red-400">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
              <div className="w-full h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-500 transition-colors cursor-pointer">
                <Plus className="text-gray-400" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Hizmetler Tab
  const HizmetlerTab = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Briefcase className="mr-2 text-orange-600" size={20} />
          Hizmetler Yönetimi
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hizmetler Başlığı
            </label>
            <input
              type="text"
              value={formData.servicesSection?.title || ''}
              onChange={(e) => handleInputChange('title', e.target.value, 'servicesSection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Hizmetlerimiz"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Açıklama
            </label>
            <textarea
              value={formData.servicesSection?.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value, 'servicesSection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="Hizmetler açıklaması..."
            />
          </div>
          
          {/* Services List */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Hizmet Listesi
              </label>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus size={16} />
                <span>Yeni Hizmet</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {formData.servicesSection?.services?.map((service) => (
                <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Hizmet Adı
                      </label>
                      <input
                        type="text"
                        value={service.title}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Hizmet adı..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        İkon
                      </label>
                      <input
                        type="text"
                        value={service.icon}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="🦯"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Açıklama
                      </label>
                      <textarea
                        value={service.description}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        rows={2}
                        placeholder="Hizmet açıklaması..."
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Eğitmenler Tab
  const EgitmenlerTab = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Users className="mr-2 text-indigo-600" size={20} />
          Eğitmenler Yönetimi
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Eğitmenler Başlığı
            </label>
            <input
              type="text"
              value={formData.trainersSection?.title || ''}
              onChange={(e) => handleInputChange('title', e.target.value, 'trainersSection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Eğitmenlerimiz"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Açıklama
            </label>
            <textarea
              value={formData.trainersSection?.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value, 'trainersSection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="Eğitmenler açıklaması..."
            />
          </div>
          
          {/* Trainers List */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Eğitmen Listesi
              </label>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus size={16} />
                <span>Yeni Eğitmen</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {formData.trainersSection?.trainers?.map((trainer) => (
                <div key={trainer.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        value={trainer.name}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Eğitmen adı..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Ünvan
                      </label>
                      <input
                        type="text"
                        value={trainer.title}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ünvan..."
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Biyografi
                      </label>
                      <textarea
                        value={trainer.bio}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        rows={3}
                        placeholder="Eğitmen hakkında bilgi..."
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // İletişim Tab
  const IletisimTab = () => (
    <div className="space-y-8">
      {/* Contact Info */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <MessageCircle className="mr-2 text-green-600" size={20} />
          İletişim Bilgileri
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefon
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+90 555 123 4567"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              E-posta
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="info@goreneller.com"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adres
            </label>
            <textarea
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={2}
              placeholder="Tam adres bilgisi"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Çalışma Saatleri
            </label>
            <input
              type="text"
              value={formData.workingHours}
              onChange={(e) => handleInputChange('workingHours', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Pazartesi-Cuma: 09:00-18:00"
            />
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Share2 className="mr-2 text-indigo-600" size={20} />
          Sosyal Medya Hesapları
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Facebook
            </label>
            <input
              type="url"
              value={formData.socialMedia?.facebook || ''}
              onChange={(e) => handleInputChange('facebook', e.target.value, 'socialMedia')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://facebook.com/yourpage"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instagram
            </label>
            <input
              type="url"
              value={formData.socialMedia?.instagram || ''}
              onChange={(e) => handleInputChange('instagram', e.target.value, 'socialMedia')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://instagram.com/yourusername"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Twitter
            </label>
            <input
              type="url"
              value={formData.socialMedia?.twitter || ''}
              onChange={(e) => handleInputChange('twitter', e.target.value, 'socialMedia')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://twitter.com/yourusername"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              YouTube
            </label>
            <input
              type="url"
              value={formData.socialMedia?.youtube || ''}
              onChange={(e) => handleInputChange('youtube', e.target.value, 'socialMedia')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://youtube.com/yourchannel"
            />
          </div>
        </div>
      </div>

      {/* Contact Form Settings */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Settings className="mr-2 text-orange-600" size={20} />
          İletişim Formu Ayarları
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Form Başlığı
            </label>
            <input
              type="text"
              value={formData.contactSection?.formTitle || ''}
              onChange={(e) => handleInputChange('formTitle', e.target.value, 'contactSection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Bizimle İletişime Geçin"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Form Açıklaması
            </label>
            <textarea
              value={formData.contactSection?.formDescription || ''}
              onChange={(e) => handleInputChange('formDescription', e.target.value, 'contactSection')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="İletişim formu açıklaması..."
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="showForm"
              checked={formData.contactSection?.showForm || false}
              onChange={(e) => handleInputChange('showForm', e.target.checked, 'contactSection')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="showForm" className="ml-2 block text-sm text-gray-900">
              İletişim formunu görünür yap
            </label>
          </div>
        </div>
      </div>
    </div>
  )

  // Define tabs
  const tabs = [
    {
      id: 'anasayfa',
      label: 'Ana Sayfa',
      icon: Home,
      component: <AnaSayfaTab />
    },
    {
      id: 'galeri',
      label: 'Galeri',
      icon: Camera,
      component: <GaleriTab />
    },
    {
      id: 'hakkimizda',
      label: 'Hakkımızda',
      icon: Info,
      component: <HakkimizdaTab />
    },
    {
      id: 'hizmetler',
      label: 'Hizmetler',
      icon: Briefcase,
      component: <HizmetlerTab />
    },
    {
      id: 'egitmenler',
      label: 'Eğitmenler',
      icon: Users,
      component: <EgitmenlerTab />
    },
    {
      id: 'iletisim',
      label: 'İletişim',
      icon: MessageCircle,
      component: <IletisimTab />
    }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'hakkimizda':
        return <HakkimizdaTab />;
      case 'galeri':
        return <GaleriTab />;
      case 'hizmetler':
        return <HizmetlerTab />;
      case 'egitmenler':
        return <EgitmenlerTab />;
      case 'iletisim':
        return <IletisimTab />;
      default:
        return <div>Tab bulunamadı.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-3">
                <Settings className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Modern Site Editörü</h1>
                <p className="text-sm text-gray-600">Hoşgeldin, {user?.displayName || user?.email}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Preview Mode Selector */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setPreviewMode('desktop')}
                  className={`p-2 rounded ${previewMode === 'desktop' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Monitor size={16} className={previewMode === 'desktop' ? 'text-blue-600' : 'text-gray-600'} />
                </button>
                <button
                  onClick={() => setPreviewMode('tablet')}
                  className={`p-2 rounded ${previewMode === 'tablet' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Smartphone size={16} className={previewMode === 'tablet' ? 'text-blue-600' : 'text-gray-600'} />
                </button>
                <button
                  onClick={() => setPreviewMode('mobile')}
                  className={`p-2 rounded ${previewMode === 'mobile' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Smartphone size={16} className={previewMode === 'mobile' ? 'text-blue-600' : 'text-gray-600'} />
                </button>
              </div>
              
              {/* Save Button */}
              <button
                onClick={handleSave}
                disabled={saving || !isDirty}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  saving || !isDirty
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl'
                }`}
              >
                {saving ? (
                  <>
                    <RefreshCw size={18} className="animate-spin" />
                    <span>Kaydediliyor...</span>
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    <span>Kaydet</span>
                    {isDirty && <div className="w-2 h-2 bg-orange-400 rounded-full"></div>}
                  </>
                )}
              </button>
              
              <button
                onClick={onBackToSite}
                className="flex items-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Home size={18} />
                <span>Siteye Dön</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              >
                <LogOut size={18} />
                <span>Çıkış</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Messages */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3">
            <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
            <span className="text-red-700">{error}</span>
          </div>
        )}

        {saveSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
            <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
            <span className="text-green-700">Değişiklikler başarıyla kaydedildi! ✨</span>
          </div>
        )}

        {saveError && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3">
            <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
            <span className="text-red-700">{saveError}</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModernSiteEditor
