import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/NewAuthContext'
import { useSiteData } from '../contexts/SiteDataContext'
import UIDDisplay from './UIDDisplay'
import type { SiteInfo } from '../contexts/SiteDataContext'
import { 
  Settings, 
  Save, 
  LogOut, 
  Home,
  RefreshCw,
  Database,
  CheckCircle,
  AlertCircle,
  Edit3,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Target,
  Eye,
  Share2,
  User
} from 'lucide-react'

interface SiteInfoEditorProps {
  onBackToSite: () => void
}

const SiteInfoEditor: React.FC<SiteInfoEditorProps> = ({ onBackToSite }) => {
  const { user, logout } = useAuth()
  const { siteInfo, loading, error, updateSiteInfo, refreshSiteInfo } = useSiteData()
  
  // Form state
  const [formData, setFormData] = useState<SiteInfo>(siteInfo)
  const [isEditing, setIsEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'basic' | 'content' | 'services' | 'social'>('basic')
  const [showUIDDisplay, setShowUIDDisplay] = useState(false)

  // Site bilgileri güncellendiğinde form'u güncelle
  useEffect(() => {
    setFormData(siteInfo)
  }, [siteInfo])

  // Form input değişikliklerini handle et
  const handleInputChange = (field: keyof SiteInfo, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    setSaveSuccess(false)
    setSaveError(null)
  }

  // Nested object değişikliklerini handle et
  const handleNestedChange = (parent: keyof SiteInfo, field: string, value: string) => {
    setFormData(prev => {
      const currentParent = prev[parent]
      if (typeof currentParent === 'object' && currentParent !== null) {
        return {
          ...prev,
          [parent]: {
            ...currentParent,
            [field]: value
          }
        }
      }
      return prev
    })
    setSaveSuccess(false)
    setSaveError(null)
  }

  // Service değişikliklerini handle et
  const handleServiceChange = (index: number, field: string, value: string) => {
    const updatedServices = [...formData.services]
    updatedServices[index] = {
      ...updatedServices[index],
      [field]: value
    }
    setFormData(prev => ({
      ...prev,
      services: updatedServices
    }))
    setSaveSuccess(false)
    setSaveError(null)
  }

  // Form submit
  const handleSave = async () => {
    try {
      setSaving(true)
      setSaveError(null)
      
      const success = await updateSiteInfo(formData)
      
      if (success) {
        setSaveSuccess(true)
        setIsEditing(false)
        setTimeout(() => setSaveSuccess(false), 3000)
      } else {
        setSaveError('Kaydetme işlemi başarısız oldu.')
      }
    } catch (err) {
      setSaveError('Beklenmeyen bir hata oluştu.')
      console.error('Save error:', err)
    } finally {
      setSaving(false)
    }
  }

  // Değişiklikleri iptal et
  const handleCancel = () => {
    setFormData(siteInfo)
    setIsEditing(false)
    setSaveSuccess(false)
    setSaveError(null)
  }

  // Logout işlemi
  const handleLogout = async () => {
    try {
      await logout()
      onBackToSite()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          <RefreshCw className="animate-spin text-blue-600 mx-auto mb-4" size={32} />
          <p className="text-gray-600">Site bilgileri yükleniyor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 rounded-lg p-2">
                <Settings className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Bilgi Düzenleme Paneli</h1>
                <p className="text-sm text-gray-500">Hoşgeldin, {user?.displayName || user?.email}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => refreshSiteInfo()}
                disabled={loading}
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <RefreshCw className={loading ? 'animate-spin' : ''} size={16} />
                <span>Yenile</span>
              </button>

              <button
                onClick={() => setShowUIDDisplay(true)}
                className="flex items-center space-x-2 px-3 py-2 text-blue-600 hover:text-blue-800 rounded-lg hover:bg-blue-50 transition-colors"
                title="Admin UID Bilgileri"
              >
                <User size={16} />
                <span>UID</span>
              </button>
              
              <button
                onClick={onBackToSite}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Home size={16} />
                <span>Siteye Dön</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              >
                <LogOut size={16} />
                <span>Çıkış</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Messages */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
            <AlertCircle className="text-red-600" size={20} />
            <span className="text-red-700">{error}</span>
          </div>
        )}

        {saveSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
            <CheckCircle className="text-green-600" size={20} />
            <span className="text-green-700">Değişiklikler başarıyla kaydedildi!</span>
          </div>
        )}

        {saveError && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
            <AlertCircle className="text-red-600" size={20} />
            <span className="text-red-700">{saveError}</span>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { key: 'basic', label: 'Temel Bilgiler', icon: Database },
                { key: 'content', label: 'İçerik', icon: Edit3 },
                { key: 'services', label: 'Hizmetler', icon: Users },
                { key: 'social', label: 'Sosyal Medya', icon: Share2 }
              ].map(tab => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as 'basic' | 'content' | 'services' | 'social')}
                    className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm ${
                      activeTab === tab.key
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Temel Bilgiler Tab */}
            {activeTab === 'basic' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <Database size={20} />
                  <span>Temel Bilgiler</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Şirket Adı
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Şirket adını girin"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone size={16} className="inline mr-1" />
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Telefon numarasını girin"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail size={16} className="inline mr-1" />
                      E-posta
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="E-posta adresini girin"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock size={16} className="inline mr-1" />
                      Çalışma Saatleri
                    </label>
                    <input
                      type="text"
                      value={formData.workingHours}
                      onChange={(e) => handleInputChange('workingHours', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Çalışma saatlerini girin"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin size={16} className="inline mr-1" />
                      Adres
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Adres bilgisini girin"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* İçerik Tab */}
            {activeTab === 'content' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <Edit3 size={20} />
                  <span>İçerik Yönetimi</span>
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hakkımızda
                    </label>
                    <textarea
                      value={formData.about}
                      onChange={(e) => handleInputChange('about', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Şirket hakkında bilgi girin"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Target size={16} className="inline mr-1" />
                      Misyon
                    </label>
                    <textarea
                      value={formData.mission}
                      onChange={(e) => handleInputChange('mission', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Misyon bilgisini girin"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Eye size={16} className="inline mr-1" />
                      Vizyon
                    </label>
                    <textarea
                      value={formData.vision}
                      onChange={(e) => handleInputChange('vision', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Vizyon bilgisini girin"
                    />
                  </div>

                  {/* Hero Section */}
                  <div className="border-t pt-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-4">Ana Sayfa Hero Bölümü</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Başlık
                        </label>
                        <input
                          type="text"
                          value={formData.heroSection.title}
                          onChange={(e) => handleNestedChange('heroSection', 'title', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Ana başlık"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Alt Başlık
                        </label>
                        <input
                          type="text"
                          value={formData.heroSection.subtitle}
                          onChange={(e) => handleNestedChange('heroSection', 'subtitle', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Alt başlık"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Buton Metni
                        </label>
                        <input
                          type="text"
                          value={formData.heroSection.buttonText}
                          onChange={(e) => handleNestedChange('heroSection', 'buttonText', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Buton metni"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Hizmetler Tab */}
            {activeTab === 'services' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <Users size={20} />
                  <span>Hizmetler</span>
                </h3>

                <div className="space-y-6">
                  {formData.services.map((service, index) => (
                    <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-3">Hizmet {index + 1}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Başlık
                          </label>
                          <input
                            type="text"
                            value={service.title}
                            onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Hizmet başlığı"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            İkon (Emoji)
                          </label>
                          <input
                            type="text"
                            value={service.icon}
                            onChange={(e) => handleServiceChange(index, 'icon', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="🦯"
                          />
                        </div>

                        <div className="md:col-span-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Açıklama
                          </label>
                          <textarea
                            value={service.description}
                            onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                            rows={2}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Hizmet açıklaması"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sosyal Medya Tab */}
            {activeTab === 'social' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <Share2 size={20} />
                  <span>Sosyal Medya</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Facebook
                    </label>
                    <input
                      type="url"
                      value={formData.socialMedia.facebook || ''}
                      onChange={(e) => handleNestedChange('socialMedia', 'facebook', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://facebook.com/..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Instagram
                    </label>
                    <input
                      type="url"
                      value={formData.socialMedia.instagram || ''}
                      onChange={(e) => handleNestedChange('socialMedia', 'instagram', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://instagram.com/..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Twitter
                    </label>
                    <input
                      type="url"
                      value={formData.socialMedia.twitter || ''}
                      onChange={(e) => handleNestedChange('socialMedia', 'twitter', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://twitter.com/..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      value={formData.socialMedia.linkedin || ''}
                      onChange={(e) => handleNestedChange('socialMedia', 'linkedin', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://linkedin.com/..."
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="border-t border-gray-200 px-6 py-4 flex justify-between items-center bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Database size={16} />
                <span>Firestore'a bağlı</span>
              </div>
            </div>

            <div className="flex space-x-3">
              {isEditing && (
                <button
                  onClick={handleCancel}
                  disabled={saving}
                  className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
                >
                  İptal
                </button>
              )}
              
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? (
                  <>
                    <RefreshCw className="animate-spin" size={16} />
                    <span>Kaydediliyor...</span>
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    <span>Kaydet</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* UID Display Modal */}
      {showUIDDisplay && (
        <UIDDisplay onClose={() => setShowUIDDisplay(false)} />
      )}
    </div>
  )
}

export default SiteInfoEditor
