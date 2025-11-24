import React from 'react'

const SkipLinks: React.FC = () => {
  return (
    <div className="skip-links">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:text-sm focus:font-medium">
        Ana içeriğe geç
      </a>
      <a href="#hakkimizda" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:text-sm focus:font-medium">
        Hakkımızda bölümüne geç
      </a>
      <a href="#galeri" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-64 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:text-sm focus:font-medium">
        Galeri bölümüne geç
      </a>
      <a href="#hizmetler" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-96 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:text-sm focus:font-medium">
        Hizmetler bölümüne geç
      </a>
      <a href="#egitmenler" className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:text-sm focus:font-medium">
        Eğitmenler bölümüne geç
      </a>
      <a href="#iletisim" className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-32 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:text-sm focus:font-medium">
        İletişim bölümüne geç
      </a>
    </div>
  )
}

export default SkipLinks
