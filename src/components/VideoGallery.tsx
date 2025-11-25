import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Camera, Video, Maximize, Eye } from 'lucide-react'
import VideoPlayer from './VideoPlayer'

interface MediaItem {
  id: string
  type: 'image' | 'video'
  src: string
  thumbnail?: string
  title?: string
  description?: string
}

interface VideoGalleryProps {
  mediaItems: MediaItem[]
  columns?: number
  className?: string
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ 
  mediaItems, 
  columns = 3, 
  className = "" 
}) => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all')

  const filteredItems = mediaItems.filter(item => {
    if (filter === 'all') return true
    return item.type === filter
  })

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  const stats = {
    total: mediaItems.length,
    images: mediaItems.filter(item => item.type === 'image').length,
    videos: mediaItems.filter(item => item.type === 'video').length
  }

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header with filters and stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Medya Galerisi</h3>
          <p className="text-gray-600">
            Toplam {stats.total} medya • {stats.images} fotoğraf • {stats.videos} video
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex gap-2">
          {[
            { key: 'all', label: 'Tümü', icon: Eye },
            { key: 'image', label: 'Fotoğraflar', icon: Camera },
            { key: 'video', label: 'Videolar', icon: Video }
          ].map((filterOption) => {
            const Icon = filterOption.icon
            const isActive = filter === filterOption.key
            return (
              <motion.button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key as typeof filter)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} />
                {filterOption.label}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Gallery grid */}
      <motion.div 
        layout
        className={`grid ${gridCols} gap-6`}
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video bg-gray-200 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedMedia(item)}
              whileHover={{ y: -5 }}
            >
              {/* Media thumbnail */}
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.title || 'Galeri görseli'}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={item.thumbnail || item.src}
                    alt={item.title || 'Video önizleme'}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Video overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30 group-hover:bg-white/30 transition-colors"
                    >
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </motion.div>
                  </div>
                </div>
              )}

              {/* Media type badge */}
              <div className="absolute top-3 left-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    item.type === 'video'
                      ? 'bg-red-500/90 text-white'
                      : 'bg-blue-500/90 text-white'
                  }`}
                >
                  {item.type === 'video' ? <Video size={12} /> : <Camera size={12} />}
                  {item.type === 'video' ? 'Video' : 'Fotoğraf'}
                </motion.div>
              </div>

              {/* Title overlay */}
              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                  {item.description && (
                    <p className="text-white/80 text-xs mt-1">{item.description}</p>
                  )}
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30"
                >
                  <Maximize className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            {filter === 'video' ? (
              <Video className="w-10 h-10 text-gray-400" />
            ) : filter === 'image' ? (
              <Camera className="w-10 h-10 text-gray-400" />
            ) : (
              <Eye className="w-10 h-10 text-gray-400" />
            )}
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {filter === 'video' ? 'Video bulunamadı' : 
             filter === 'image' ? 'Fotoğraf bulunamadı' : 
             'Medya bulunamadı'}
          </h3>
          <p className="text-gray-500">
            {filter === 'all' 
              ? 'Henüz hiç medya eklenmemiş.'
              : `Seçili kategoride medya bulunmuyor.`
            }
          </p>
        </motion.div>
      )}

      {/* Modal for viewing media */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-4xl max-h-full w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'image' ? (
                <div className="relative">
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title || 'Galeri görseli'}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedMedia(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  >
                    <X size={20} />
                  </button>
                  {/* Title */}
                  {selectedMedia.title && (
                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-white font-semibold text-lg">{selectedMedia.title}</h3>
                      {selectedMedia.description && (
                        <p className="text-white/80 mt-1">{selectedMedia.description}</p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <VideoPlayer
                  src={selectedMedia.src}
                  title={selectedMedia.title}
                  onClose={() => setSelectedMedia(null)}
                  autoplay={true}
                  className="w-full max-h-[80vh]"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default VideoGallery
