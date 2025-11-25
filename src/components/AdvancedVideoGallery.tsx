import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  SkipBack, 
  SkipForward,
  RotateCcw,
  Video as VideoIcon,
  Clock,
  Share2,
  Heart,
  Eye
} from 'lucide-react'

interface VideoItem {
  id: number
  title: string
  src: string
  thumbnail?: string
  duration: string
  category: string
  description: string
  views?: number
  likes?: number
}

interface AdvancedVideoGalleryProps {
  videos: VideoItem[]
  className?: string
  onVideoLike?: (videoId: number) => void
  onVideoShare?: (video: VideoItem) => void
}

const AdvancedVideoGallery: React.FC<AdvancedVideoGalleryProps> = ({ 
  videos, 
  className = '',
  onVideoLike,
  onVideoShare
}) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [volume, setVolume] = useState(1)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleVideoSelect = (video: VideoItem) => {
    setSelectedVideo(video)
    setIsPlaying(false)
    setCurrentTime(0)
    setShowControls(true)
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setVolume(newVolume)
      setIsMuted(newVolume === 0)
    }
  }

  const handlePlaybackRateChange = (rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate
      setPlaybackRate(rate)
    }
  }

  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds
    }
  }

  const restart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      setCurrentTime(0)
    }
  }

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const closeModal = () => {
    setSelectedVideo(null)
    setIsPlaying(false)
    setCurrentTime(0)
    setShowControls(true)
  }

  const handleMouseMove = () => {
    setShowControls(true)
    // Hide controls after 3 seconds of inactivity
    setTimeout(() => setShowControls(false), 3000)
  }

  return (
    <>
      {/* Video Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => handleVideoSelect(video)}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Thumbnail */}
              {video.thumbnail ? (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <VideoIcon className="w-12 h-12 text-gray-400" />
                </div>
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Play Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.div>
              </motion.div>

              {/* Duration Badge */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-sm font-medium flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {video.duration}
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-blue-600/80 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium">
                {video.category}
              </div>

              {/* Stats */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {video.views && (
                  <div className="flex items-center gap-1 text-white text-xs">
                    <Eye className="w-3 h-3" />
                    {video.views}
                  </div>
                )}
                {video.likes && (
                  <div className="flex items-center gap-1 text-white text-xs">
                    <Heart className="w-3 h-3" />
                    {video.likes}
                  </div>
                )}
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">{video.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{video.category}</span>
                <span>{video.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Advanced Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              ref={containerRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`relative w-full max-w-7xl ${isFullscreen ? 'h-screen' : 'max-h-[95vh]'} bg-black rounded-2xl overflow-hidden shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
              onMouseMove={handleMouseMove}
            >
              {/* Video */}
              <div className="relative w-full aspect-video">
                <video
                  ref={videoRef}
                  src={selectedVideo.src}
                  className="w-full h-full object-contain bg-black"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onClick={togglePlay}
                />

                {/* Advanced Video Controls Overlay */}
                <AnimatePresence>
                  {showControls && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 flex flex-col justify-between"
                    >
                      {/* Top Controls */}
                      <div className="flex items-start justify-between p-6">
                        <div className="flex-1">
                          <h2 className="text-white text-2xl font-bold mb-2">{selectedVideo.title}</h2>
                          <p className="text-white/80 text-sm mb-3">{selectedVideo.description}</p>
                          <div className="flex items-center gap-4 text-white/60 text-sm">
                            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                              {selectedVideo.category}
                            </span>
                            {selectedVideo.views && (
                              <span className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                {selectedVideo.views} görüntüleme
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {/* Action Buttons */}
                          {onVideoLike && (
                            <motion.button
                              onClick={() => onVideoLike(selectedVideo.id)}
                              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Heart className="w-5 h-5" />
                            </motion.button>
                          )}
                          
                          {onVideoShare && (
                            <motion.button
                              onClick={() => onVideoShare(selectedVideo)}
                              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Share2 className="w-5 h-5" />
                            </motion.button>
                          )}

                          <motion.button
                            onClick={closeModal}
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <X className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Bottom Controls */}
                      <div className="p-6 space-y-4">
                        {/* Progress Bar */}
                        <div className="flex items-center gap-3">
                          <span className="text-white text-sm font-mono min-w-[40px]">
                            {formatTime(currentTime)}
                          </span>
                          <div className="flex-1 relative">
                            <input
                              type="range"
                              min="0"
                              max={duration}
                              value={currentTime}
                              onChange={handleSeek}
                              className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer"
                              style={{
                                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(currentTime / duration) * 100}%, rgba(255,255,255,0.2) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.2) 100%)`
                              }}
                            />
                          </div>
                          <span className="text-white text-sm font-mono min-w-[40px]">
                            {formatTime(duration)}
                          </span>
                        </div>

                        {/* Control Buttons */}
                        <div className="flex items-center justify-between">
                          {/* Left Controls */}
                          <div className="flex items-center gap-3">
                            <motion.button
                              onClick={restart}
                              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              title="Baştan başlat"
                            >
                              <RotateCcw className="w-5 h-5" />
                            </motion.button>

                            <motion.button
                              onClick={() => skip(-10)}
                              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              title="10 saniye geri"
                            >
                              <SkipBack className="w-5 h-5" />
                            </motion.button>

                            <motion.button
                              onClick={togglePlay}
                              className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-lg"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {isPlaying ? (
                                <Pause className="w-6 h-6" />
                              ) : (
                                <Play className="w-6 h-6 ml-1" />
                              )}
                            </motion.button>

                            <motion.button
                              onClick={() => skip(10)}
                              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              title="10 saniye ileri"
                            >
                              <SkipForward className="w-5 h-5" />
                            </motion.button>
                          </div>

                          {/* Center Controls - Volume & Speed */}
                          <div className="flex items-center gap-4">
                            {/* Volume Control */}
                            <div className="flex items-center gap-2">
                              <motion.button
                                onClick={toggleMute}
                                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                              </motion.button>
                              <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={isMuted ? 0 : volume}
                                onChange={handleVolumeChange}
                                className="w-20 h-1 bg-white/20 rounded-full appearance-none cursor-pointer"
                              />
                            </div>

                            {/* Speed Control */}
                            <select
                              value={playbackRate}
                              onChange={(e) => handlePlaybackRateChange(parseFloat(e.target.value))}
                              className="bg-white/20 backdrop-blur-sm text-white text-sm rounded px-2 py-1 border-none outline-none"
                            >
                              <option value={0.5} className="text-black">0.5x</option>
                              <option value={0.75} className="text-black">0.75x</option>
                              <option value={1} className="text-black">1x</option>
                              <option value={1.25} className="text-black">1.25x</option>
                              <option value={1.5} className="text-black">1.5x</option>
                              <option value={2} className="text-black">2x</option>
                            </select>
                          </div>

                          {/* Right Controls */}
                          <div className="flex items-center gap-2">
                            <motion.button
                              onClick={toggleFullscreen}
                              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              title="Tam ekran"
                            >
                              <Maximize2 className="w-5 h-5" />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Videos State */}
      {videos.length === 0 && (
        <div className="text-center py-12">
          <VideoIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz Video Yok</h3>
          <p className="text-gray-500">Bu kategoride henüz video eklenmemiş.</p>
        </div>
      )}
    </>
  )
}

export default AdvancedVideoGallery
