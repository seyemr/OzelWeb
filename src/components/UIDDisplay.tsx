import React, { useState } from 'react'
import { useAuth } from '../contexts/NewAuthContext'
import { Copy, CheckCircle, User, Shield, Eye, EyeOff } from 'lucide-react'

interface UIDDisplayProps {
  onClose: () => void
}

const UIDDisplay: React.FC<UIDDisplayProps> = ({ onClose }) => {
  const { user } = useAuth()
  const [copied, setCopied] = useState(false)
  const [showUID, setShowUID] = useState(false)

  const copyUID = async () => {
    if (user?.uid) {
      try {
        await navigator.clipboard.writeText(user.uid)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('UID kopyalanamadı:', err)
      }
    }
  }

  if (!user) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="bg-blue-600 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <User className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Kullanıcı Bilgileri</h2>
          <p className="text-gray-600">Admin UID'nizi kopyalayın</p>
        </div>

        <div className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="bg-gray-50 rounded-lg p-3 text-gray-800 font-mono text-sm">
              {user.email}
            </div>
          </div>

          {/* Display Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              İsim
            </label>
            <div className="bg-gray-50 rounded-lg p-3 text-gray-800">
              {user.displayName || 'Belirtilmemiş'}
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rol
            </label>
            <div className="flex items-center space-x-2">
              <div className={`bg-${user.role === 'admin' ? 'green' : 'gray'}-50 rounded-lg p-3 flex-1 flex items-center space-x-2`}>
                <Shield className={`text-${user.role === 'admin' ? 'green' : 'gray'}-600`} size={16} />
                <span className={`text-${user.role === 'admin' ? 'green' : 'gray'}-800 font-medium`}>
                  {user.role === 'admin' ? 'Admin' : 'Kullanıcı'}
                </span>
              </div>
            </div>
          </div>

          {/* UID */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Firebase UID (Admin Kontrolü İçin)
              </label>
              <button
                onClick={() => setShowUID(!showUID)}
                className="text-blue-600 hover:text-blue-700 p-1"
                title={showUID ? 'UID\'yi Gizle' : 'UID\'yi Göster'}
              >
                {showUID ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              {showUID ? (
                <>
                  <div className="font-mono text-xs text-gray-800 break-all mb-3 bg-white p-2 rounded border">
                    {user.uid}
                  </div>
                  <button
                    onClick={copyUID}
                    disabled={copied}
                    className="flex items-center space-x-2 w-full justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-green-600"
                  >
                    {copied ? (
                      <>
                        <CheckCircle size={16} />
                        <span>Kopyalandı!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>UID'yi Kopyala</span>
                      </>
                    )}
                  </button>
                </>
              ) : (
                <div className="text-center py-4">
                  <p className="text-sm text-gray-600 mb-2">
                    Güvenlik için UID gizlenmiştir
                  </p>
                  <p className="text-xs text-gray-500">
                    Görmek için yukarıdaki göz ikonuna tıklayın
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Talimatlar */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-2">📝 Admin UID Ayarlama</h3>
            <ol className="text-sm text-blue-800 space-y-1">
              <li>1. Yukarıdaki UID'yi kopyalayın</li>
              <li>2. <code className="bg-blue-100 px-1 rounded">AuthContext.tsx</code> dosyasını açın</li>
              <li>3. <code className="bg-blue-100 px-1 rounded">ADMIN_UID</code> değerini kopyaladığınız UID ile değiştirin</li>
              <li>4. Uygulamayı yeniden başlatın</li>
            </ol>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  )
}

export default UIDDisplay
