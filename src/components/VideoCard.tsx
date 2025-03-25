import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  description?: string;
  duration: string;
  thumbnailSrc?: string;
  videoSrc?: string;
}

const VideoCard = ({ title, description, duration, thumbnailSrc, videoSrc }: VideoCardProps) => {
  const openVideoModal = (e: React.MouseEvent) => {
    e.preventDefault();
    const modal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player') as HTMLVideoElement;
    const videoTitle = document.getElementById('modal-video-title');
    const videoDescription = document.getElementById('modal-video-description');
    
    if (modal && videoPlayer) {
      videoPlayer.src = videoSrc;
      
      if (videoTitle) videoTitle.textContent = title;
      if (videoDescription) videoDescription.textContent = description || '';
      
      modal.classList.remove('hidden');
      // Add entry animation
      const modalContent = modal.querySelector('div');
      if (modalContent) {
        modalContent.classList.add('animate-scale-in');
      }
      
      videoPlayer.play();
    }
  };

  return (
    <div 
      className="glass-card overflow-hidden flex flex-col h-full group cursor-pointer"
      onClick={videoSrc ? openVideoModal : undefined}
    >
      <div className="relative h-48 bg-clarity-card/80">
        {thumbnailSrc ? (
          <img 
            src={thumbnailSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-clarity-dark to-clarity-card/80" />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          {videoSrc ? (
            <div 
              className="w-12 h-12 rounded-full bg-clarity-teal/90 flex items-center justify-center transition-transform duration-300 hover:scale-110 group-hover:bg-clarity-teal"
              onClick={(e) => {
                e.stopPropagation();
                openVideoModal(e);
              }}
            >
              <Play className="h-5 w-5 text-white fill-white" />
            </div>
          ) : (
            <button className="w-12 h-12 rounded-full bg-clarity-teal/90 flex items-center justify-center transition-transform duration-300 hover:scale-110 group-hover:bg-clarity-teal">
              <Play className="h-5 w-5 text-white fill-white" />
            </button>
          )}
        </div>
        <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {description && <p className="text-sm text-clarity-gray mt-2">{description}</p>}
      </div>
    </div>
  );
};

export default VideoCard;
