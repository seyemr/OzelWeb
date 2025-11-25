import React, { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut, 
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth'
import type { User as FirebaseUser } from 'firebase/auth'
import { auth } from '../config/firebase'

interface User {
  uid: string
  email: string
  displayName?: string
  role: 'admin' | 'user'
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, displayName: string) => Promise<boolean>
  logout: () => Promise<void>
  resetPassword: (email: string) => Promise<boolean>
  isAuthenticated: boolean
  isAdmin: boolean
  loading: boolean
  error: string | null
  clearError: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Sadece bu UID'ye sahip kullanıcı admin olarak giriş yapabilir
const ADMIN_UID = 'yb7z2KsOoKe4W35nOcN0fw8A7xE2' // Gerçek admin UID'niz

// Alternatif olarak email kontrolü de yapabilirsiniz
const ADMIN_EMAIL = 'admin@goreneller.com'

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Error'ı temizleme fonksiyonu
  const clearError = () => {
    setError(null)
  }

  // Firebase Auth state değişikliklerini dinle
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        // Kullanıcı giriş yapmış - UID ve email kontrolü yap
        const isAdminByUID = firebaseUser.uid === ADMIN_UID
        const isAdminByEmail = firebaseUser.email === ADMIN_EMAIL
        
        // Gerçek admin kontrolü aktif
        const userRole = (isAdminByUID || isAdminByEmail) ? 'admin' : 'user'
        
        console.log('🔐 User Auth Check:', {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          isAdminByUID,
          isAdminByEmail,
          finalRole: userRole,
          currentADMIN_UID: ADMIN_UID
        })
        
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || '',
          role: userRole
        })
      } else {
        // Kullanıcı çıkış yapmış
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  // Register fonksiyonu
  const register = async (email: string, password: string, displayName: string): Promise<boolean> => {
    try {
      console.log('🔐 Register işlemi başladı:', { email, displayName })
      setLoading(true)
      setError(null)
      
      // Yeni kullanıcı oluştur
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const firebaseUser = userCredential.user
      
      // Display name'i güncelle
      await updateProfile(firebaseUser, {
        displayName: displayName
      })
      
      // User role'ü belirle - UID ve email kontrolü
      // const isAdminByUID = firebaseUser.uid === ADMIN_UID
      // const isAdminByEmail = email === ADMIN_EMAIL
      
      // GEÇICI: Test için tüm kullanıcıları admin yap (gerçek kontrolü aktif etmek için yorumu kaldırın)
      const userRole = 'admin'  // Real admin logic: (isAdminByUID || isAdminByEmail) ? 'admin' : 'user'
      
      // Kullanıcı bilgilerini güncelle
      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email || '',
        displayName: displayName,
        role: userRole
      })
      
      setLoading(false)
      return true
    } catch (error: unknown) {
      setLoading(false)
      console.error('Register error:', error)
      
      // Hata mesajlarını Türkçe'ye çevir
      if (error instanceof Error) {
        if (error.message.includes('auth/email-already-in-use')) {
          setError('Bu email adresi zaten kullanılıyor.')
        } else if (error.message.includes('auth/weak-password')) {
          setError('Şifre çok zayıf. En az 6 karakter olmalıdır.')
        } else if (error.message.includes('auth/invalid-email')) {
          setError('Geçersiz email adresi.')
        } else {
          setError('Kayıt oluşturulurken hata oluştu.')
        }
      } else {
        setError('Kayıt oluşturulurken hata oluştu.')
      }
      return false
    }
  }

  // Login fonksiyonu
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true)
      setError(null)

      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const firebaseUser = userCredential.user
      
      // Admin kontrolü - UID ve email kontrolü
      const isAdminByUID = firebaseUser.uid === ADMIN_UID
      const isAdminByEmail = firebaseUser.email === ADMIN_EMAIL
      
      // Gerçek admin kontrolü aktif
      const userRole = (isAdminByUID || isAdminByEmail) ? 'admin' : 'user'
      
      // Kullanıcı bilgilerini güncelle
      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email || '',
        displayName: firebaseUser.displayName || '',
        role: userRole
      })
      
      setLoading(false)
      return true
    } catch (error: unknown) {
      setLoading(false)
      console.error('Login error:', error)
      
      // Hata mesajlarını Türkçe'ye çevir
      if (error instanceof Error) {
        if (error.message.includes('auth/user-not-found')) {
          setError('Bu email adresi ile kayıtlı kullanıcı bulunamadı.')
        } else if (error.message.includes('auth/wrong-password')) {
          setError('Şifre yanlış.')
        } else if (error.message.includes('auth/invalid-email')) {
          setError('Geçersiz email adresi.')
        } else if (error.message.includes('auth/too-many-requests')) {
          setError('Çok fazla başarısız giriş denemesi. Lütfen daha sonra tekrar deneyin.')
        } else {
          setError('Giriş yapılamadı. Lütfen bilgilerinizi kontrol edin.')
        }
      } else {
        setError('Giriş yapılamadı. Lütfen bilgilerinizi kontrol edin.')
      }
      return false
    }
  }

  // Password reset fonksiyonu
  const resetPassword = async (email: string): Promise<boolean> => {
    try {
      setLoading(true)
      setError(null)
      
      await sendPasswordResetEmail(auth, email, {
        url: window.location.origin, // Kullanıcıyı site ana sayfasına yönlendir
        handleCodeInApp: false
      })
      
      console.log('🔐 Şifre sıfırlama emaili gönderildi:', email)
      return true
    } catch (error: any) {
      console.error('🔥 Password reset error details:', {
        code: error.code,
        message: error.message,
        stack: error.stack,
        email: email
      })
      
      // Hata mesajlarını Türkçe çevir
      switch (error.code) {
        case 'auth/user-not-found':
          setError('Bu email adresi ile kayıtlı kullanıcı bulunamadı.')
          break
        case 'auth/invalid-email':
          setError('Geçersiz email adresi.')
          break
        case 'auth/too-many-requests':
          setError('Çok fazla deneme yapıldı. Lütfen daha sonra tekrar deneyin.')
          break
        case 'auth/missing-email':
          setError('Email adresi gerekli.')
          break
        case 'auth/invalid-action-code':
          setError('Geçersiz işlem kodu.')
          break
        case 'auth/weak-password':
          setError('Şifre çok zayıf.')
          break
        default:
          setError(`Şifre sıfırlama emaili gönderilemedi. Hata kodu: ${error.code || 'Bilinmeyen'}`)
      }
      return false
    } finally {
      setLoading(false)
    }
  }

  // Logout fonksiyonu
  const logout = async (): Promise<void> => {
    try {
      await signOut(auth)
      setUser(null)
      setError(null)
    } catch (error) {
      console.error('Logout error:', error)
      setError('Çıkış yapılamadı.')
    }
  }

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    resetPassword,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    loading,
    error,
    clearError
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
