import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-red-600 mb-2">Uygulama Hatası</h1>
              <p className="text-gray-600">Bir hata oluştu. Lütfen geliştiriciyi bilgilendirin.</p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-2">Hata Detayları:</h3>
              <pre className="text-sm text-red-600 whitespace-pre-wrap">
                {this.state.error?.name}: {this.state.error?.message}
              </pre>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-2">Stack Trace:</h3>
              <pre className="text-xs text-gray-600 whitespace-pre-wrap max-h-40 overflow-y-auto">
                {this.state.error?.stack}
              </pre>
            </div>

            <div className="text-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
              >
                Sayfayı Yenile
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
