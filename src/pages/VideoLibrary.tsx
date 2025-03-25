import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoCard from '@/components/VideoCard';
import PageTransition from '@/components/PageTransition';

const VideoLibrary = () => {
  const videos = [
    {
      title: 'Well Dashboard Overview',
      duration: '5 min',
      thumbnailSrc: '/images/WellDashboardOverview.png',
      videoSrc: '/videos/WellDashboard.mp4',
    },
    {
      title: 'Per Stand KPI Lens',
      duration: '4 min',
      thumbnailSrc: '/images/PerStandKPILensThumbnail.png',
      videoSrc: '/videos/PerStandKpiLens.mp4',
    },
    {
      title: 'Customizable Dashboards',
      duration: '7 min',
      thumbnailSrc: '/images/CustomizableDashboardsThumbnail.png',
      videoSrc: '/videos/CustomizableDashboards.mp4',
    },
    {
      title: 'Case Study: Efficiency Gains',
      duration: '6 min',
      thumbnailSrc: '/images/PerStandKPILensThumbnail.png',
      videoSrc: '/videos/PerStandKpiLens.mp4',
    },
    {
      title: 'Integration Tutorial',
      duration: '10 min',
      thumbnailSrc: '/images/PerStandKPILensThumbnail.png',
      videoSrc: '/videos/PerStandKpiLens.mp4',
    },
    {
      title: 'User Experience Walkthrough',
      duration: '4 min',
      thumbnailSrc: '/images/PerStandKPILensThumbnail.png',
      videoSrc: '/videos/PerStandKpiLens.mp4',
    },
  ];

  const closeModal = () => {
    const modal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player') as HTMLVideoElement;
    const modalContent = modal?.querySelector('div');
    
    if (modal && videoPlayer && modalContent) {
      // Add exit animation
      modalContent.classList.add('animate-scale-out');
      
      // Wait for animation to complete before hiding
      setTimeout(() => {
        modal.classList.add('hidden');
        videoPlayer.pause();
        videoPlayer.src = '';
        modalContent.classList.remove('animate-scale-out');
        
        // Reset title and description
        const videoTitle = document.getElementById('modal-video-title');
        const videoDescription = document.getElementById('modal-video-description');
        if (videoTitle) videoTitle.textContent = '';
        if (videoDescription) videoDescription.textContent = '';
      }, 200);
    }
  };

  return (
    <PageTransition>
      <div className="page-container relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-40 pb-20 md:pt-48 md:pb-24 relative overflow-hidden z-10">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  Experience the Power of Data-Driven Oilfield Solutions
                </h1>
                <p className="text-clarity-gray text-lg mb-8">
                  The digital analytics platform designed for drilling rigs, enabling the quickest time to impact and improvement in performance.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl animate-fade-in">
                <img 
                  src="/images/VideoBackgroundImage_Updated.png" 
                  alt="Clarity Platform Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-20 relative z-10">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3 animate-fade-in">
              Explore Our Videos
            </h2>
            <p className="text-clarity-gray text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              Learn how our cutting-edge platform drives efficiency everyday in the oilfield
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
              {videos.map((video, index) => (
                <VideoCard
                  key={index}
                  title={video.title}
                  duration={video.duration}
                  thumbnailSrc={video.thumbnailSrc}
                  videoSrc={video.videoSrc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Video Modal */}
        <div 
          id="video-modal" 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center hidden"
          onClick={(e) => {
            // Only close if clicking directly on the outer container, not on its children
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="relative w-full max-w-6xl mx-4 md:w-[90vw] lg:w-[85vw]">
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-clarity-teal transition-colors duration-300"
              aria-label="Close video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <video id="video-player" className="w-full h-full" controls autoPlay>
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-4 text-white px-2">
              <h3 id="modal-video-title" className="text-xl md:text-2xl font-semibold"></h3>
              <p id="modal-video-description" className="text-clarity-gray mt-2"></p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default VideoLibrary;
