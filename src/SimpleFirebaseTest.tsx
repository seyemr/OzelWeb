import { useState, useEffect } from 'react'

const SimpleFirebaseTest = () => {
  const [step, setStep] = useState('Başlangıç...')
  const [error, setError] = useState<string | null>(null)
  const [logs, setLogs] = useState<string[]>([])

  const addLog = (message: string) => {
    console.log(message)
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`])
  }

  useEffect(() => {
    const testFirebase = async () => {
      try {
        addLog('🔥 Firebase test başlıyor...')
        setStep('Firebase import test')

        // Test 1: Firebase import
        addLog('📦 Firebase modüllerini import ediyorum...')
        const { auth } = await import('./config/firebase')
        addLog('✅ Firebase auth import başarılı')

        // Test 2: Auth state
        addLog('🔐 Auth state listener kuruluyor...')
        const { onAuthStateChanged } = await import('firebase/auth')
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            addLog(`👤 Kullanıcı bulundu: ${user.email}`)
          } else {
            addLog('👤 Kullanıcı bulunamadı (normal)')
          }
        })

        addLog('✅ Firebase auth listener kuruldu')
        setStep('Test tamamlandı ✅')

        return () => {
          unsubscribe()
          addLog('🧹 Cleanup yapıldı')
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err)
        addLog(`❌ Hata: ${errorMsg}`)
        setError(errorMsg)
        setStep('Test başarısız ❌')
      }
    }

    testFirebase()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">
            🔥 Basit Firebase Test
          </h1>
          
          <div className="mb-4 p-4 bg-blue-50 rounded-lg">
            <h2 className="font-semibold text-blue-900 mb-2">Mevcut Durum:</h2>
            <p className="text-blue-700 text-lg">{step}</p>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h2 className="font-semibold text-red-900 mb-2">❌ Hata:</h2>
              <p className="text-red-700 font-mono text-sm">{error}</p>
            </div>
          )}

          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="font-semibold text-gray-900 mb-3">📋 Log Geçmişi:</h2>
            <div className="max-h-64 overflow-y-auto">
              {logs.map((log, index) => (
                <div key={index} className="text-sm text-gray-600 font-mono mb-1">
                  {log}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              🔄 Tekrar Test Et
            </button>
            <button
              onClick={() => {
                // Ana uygulamaya dön
                import('./main').then(() => {
                  window.location.href = '/'
                })
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              ✅ Ana Uygulamaya Dön
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleFirebaseTest
