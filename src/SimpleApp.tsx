import { useState } from 'react'

const SimpleApp = () => {
  const [message] = useState('Uygulama çalışıyor! 🎉')
  
  console.log('✅ SimpleApp render edildi')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
        <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">✅</span>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Göreneller
        </h1>
        
        <p className="text-gray-600 mb-6">
          {message}
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">✅ Çalışan Özellikler</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• React 18</li>
              <li>• Tailwind CSS</li>
              <li>• Vite Dev Server</li>
              <li>• TypeScript</li>
            </ul>
          </div>

          <button
            onClick={() => {
              console.log('🔄 Ana uygulamaya geçiliyor...')
              // Ana uygulamayı yükle
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Ana Uygulamayı Yükle
          </button>
        </div>
      </div>
    </div>
  )
}

export default SimpleApp
