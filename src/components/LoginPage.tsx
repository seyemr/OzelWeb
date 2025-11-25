import React, { useState } from 'react'
import { useAuth } from '../contexts/NewAuthContext'
import UIDDisplay from './UIDDisplay'
import { LogIn, Eye, EyeOff, Mail, Lock, User } from 'lucide-react'

interface LoginPageProps {
  onLoginSuccess: () => void
  onSwitchToRegister?: () => void
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, onSwitchToRegister }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showUIDDisplay, setShowUIDDisplay] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [resetSuccess, setResetSuccess] = useState(false)
  const { login, loading, error, clearError, user, resetPassword } = useAuth()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'email') setEmail(value)
    if (name === 'password') setPassword(value)
    if (error) {
      clearError()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const success = await login(email, password)
      if (success) {
        onLoginSuccess()
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    clearError()
    
    if (!resetEmail.trim()) {
      return
    }

    try {
      const success = await resetPassword(resetEmail)
      if (success) {
        setResetSuccess(true)
        // 3 saniye sonra formu gizle
        setTimeout(() => {
          setShowForgotPassword(false)
          setResetSuccess(false)
          setResetEmail('')
        }, 3000)
      }
    } catch (error) {
      console.error('Password reset failed:', error)
    }
  }

  // Eğer şifre sıfırlama formu gösteriliyorsa
  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="bg-orange-500 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Şifremi Unuttum</h1>
            <p className="text-gray-600">Email adresinizi girin, şifre sıfırlama linkini göndereceğiz.</p>
          </div>

          {resetSuccess ? (
            <div className="text-center">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 font-medium">✅ Email gönderildi!</p>
                <p className="text-green-600 text-sm mt-1">
                  {resetEmail} adresine şifre sıfırlama linki gönderildi. 
                  Email'inizi kontrol edin.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="resetEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Adresi
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="resetEmail"
                    type="email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="admin@example.com"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !resetEmail.trim()}
                className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Mail size={18} className="mr-2" />
                    Şifre Sıfırlama Linki Gönder
                  </>
                )}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    setShowForgotPassword(false)
                    setResetEmail('')
                    setResetSuccess(false)
                    clearError()
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  ← Giriş sayfasına dön
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-blue-600 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <LogIn className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Paneli</h1>
          <p className="text-gray-600">Site yöneticisi olarak giriş yapın</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Adresi
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="ornek@email.com"
                required
                autoComplete="email"
              />
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Şifre
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Şifrenizi girin"
                required
                autoComplete="current-password"
              />
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Giriş yapılıyor...
              </>
            ) : (
              <>
                <LogIn size={18} className="mr-2" />
                Giriş Yap
              </>
            )}
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => {
                setShowForgotPassword(true)
                clearError()
              }}
              className="text-orange-600 hover:text-orange-700 font-medium text-sm"
            >
              Şifremi unuttum
            </button>
          </div>

          {/* Switch to Register */}
          <div className="text-center">
            {onSwitchToRegister && (
              <p className="text-sm text-gray-600">
                Hesabınız yok mu?{' '}
                <button
                  type="button"
                  onClick={onSwitchToRegister}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Hesap Oluşturun
                </button>
              </p>
            )}
          </div>

          {/* UID Display Button - Sadece giriş yapmış kullanıcılar için */}
          {user && (
            <div className="text-center mt-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => setShowUIDDisplay(true)}
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 mx-auto"
              >
                <User size={16} />
                <span>Admin UID Göster</span>
              </button>
            </div>
          )}
        </form>

        {/* UID Display Modal */}
        {showUIDDisplay && (
          <UIDDisplay onClose={() => setShowUIDDisplay(false)} />
        )}
      </div>
    </div>
  )
}

export default LoginPage
