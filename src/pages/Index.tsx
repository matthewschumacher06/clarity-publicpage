import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Activity, Clock, LineChart, Database, Server } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import PageTransition from '@/components/PageTransition';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const featureVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    };

    // Original observer code remains unchanged
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetElement = entry.target.querySelector('.opacity-0');
          if (targetElement) {
            targetElement.classList.add('animate-fade-in-up');
            targetElement.classList.remove('opacity-0', 'translate-y-8');
          }
        }
      });
    }, observerOptions);

    // Observe elements
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (techRef.current) observer.observe(techRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);
    if (formRef.current) observer.observe(formRef.current);

    // Add video event listeners - unchanged from before
    const featureVideo = document.getElementById('feature-video') as HTMLVideoElement;
    const playButton = document.getElementById('play-button');
    
    if (featureVideo && playButton) {
      featureVideo.addEventListener('ended', () => {
        playButton.classList.remove('hidden');
      });
      
      featureVideo.addEventListener('pause', () => {
        if (!featureVideo.ended) {
          playButton.classList.remove('hidden');
        }
      });
      
      featureVideo.addEventListener('playing', () => {
        playButton.classList.add('hidden');
      });
    }

    return () => {
      observer.disconnect();
      
      // Clean up video event listeners
      if (featureVideo) {
        featureVideo.removeEventListener('ended', () => {});
        featureVideo.removeEventListener('pause', () => {});
        featureVideo.removeEventListener('playing', () => {});
      }
    };
  }, []);

  const closeModal = () => {
    const modal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player') as HTMLVideoElement;
    const modalContent = modal?.querySelector('div');
    const videoInfoSection = document.getElementById('modal-video-info');
    
    if (modal && videoPlayer && modalContent) {
      // Add exit animation
      modalContent.classList.add('animate-scale-out');
      
      // Wait for animation to complete before hiding
      setTimeout(() => {
        modal.classList.add('hidden');
        videoPlayer.pause();
        videoPlayer.src = '';
        modalContent.classList.remove('animate-scale-out');
        
        // Reset title and description and make sure info section is visible for other videos
        if (videoInfoSection) {
          videoInfoSection.classList.remove('hidden');
          const videoTitle = document.getElementById('modal-video-title');
          const videoDescription = document.getElementById('modal-video-description');
          if (videoTitle) videoTitle.textContent = '';
          if (videoDescription) videoDescription.textContent = '';
        }
      }, 200);
    }
  };

  return (
    <PageTransition>
      <div className="page-container relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-40 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-2 inline-block">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-light mb-2">
                  <span className="font-light">c</span>larity
                </h1>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                INSIGHTS TO <span className="text-clarity-teal">EXECUTION</span>
              </h2>
              <p className="text-clarity-gray text-lg mb-10 max-w-2xl mx-auto">
                Turn data into actionable insights and see drilling operations like never before. We transform raw data into focused, actionable intelligence for maximum efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Data Section */}
        <section className="py-20 relative z-10" ref={featuresRef}>
          <div className="section-container">
            <div className="opacity-0 translate-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
                Smarter Data Better Drilling
              </h2>
              <p className="text-clarity-gray text-center max-w-3xl mx-auto mb-16">
                Optimize drilling operations with our data-driven platform. Leverage real-time analytics to streamline processes and enhance efficiency across all stages of drilling.
              </p>
              
              <div 
                className="relative aspect-video rounded-xl overflow-hidden glass-card mb-16 cursor-pointer"
                onClick={() => {
                  const modal = document.getElementById('feature-video-modal');
                  const videoPlayer = document.getElementById('feature-video-player') as HTMLVideoElement;
                  const videoInfoSection = document.getElementById('modal-video-info');
                  
                  if (modal && videoPlayer && videoInfoSection) {
                    videoPlayer.src = '/videos/ClarityPlatformMontage_Public.mp4';
                    
                    // Hide the title and description section for feature video
                    videoInfoSection.classList.add('hidden');
                    
                    modal.classList.remove('hidden');
                    // Add entry animation
                    const modalContent = modal.querySelector('.relative');
                    if (modalContent) {
                      modalContent.classList.add('animate-scale-in');
                    }
                    
                    videoPlayer.play();
                  }
                }}
              >
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/PlatformDemoThumbnail.png')` }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    id="feature-play-button" 
                    className="w-20 h-20 rounded-full bg-clarity-teal/90 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering parent click event
                      const modal = document.getElementById('feature-video-modal');
                      const videoPlayer = document.getElementById('feature-video-player') as HTMLVideoElement;
                      const videoInfoSection = document.getElementById('modal-video-info');
                      
                      if (modal && videoPlayer && videoInfoSection) {
                        videoPlayer.src = '/videos/ClarityPlatformMontage_Public.mp4';
                        
                        // Hide the title and description section for feature video
                        videoInfoSection.classList.add('hidden');
                        
                        modal.classList.remove('hidden');
                        // Add entry animation
                        const modalContent = modal.querySelector('.relative');
                        if (modalContent) {
                          modalContent.classList.add('animate-scale-in');
                        }
                        
                        videoPlayer.play();
                      }
                    }}
                  >
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 relative z-10" ref={techRef}>
          <div className="section-container">
            <div className="opacity-0 translate-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
                Technology Built for Scale
              </h2>
              
              <div className="glass-card p-6 md:p-10">
                <video 
                  src="/videos/DataFlow_BlackBackground_Latest.mp4"
                  className="w-full h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative z-10" ref={cardsRef}>
          <div className="section-container">
            <div className="opacity-0 translate-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
                Power Your Operations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<Activity className="h-10 w-10" />}
                  title="Performance Optimization"
                  description="Identify opportunities and optimize drilling efficiency with advanced performance metrics."
                  className="text-center"
                />
                <FeatureCard
                  icon={<Clock className="h-10 w-10" />}
                  title="Less Clicks - More Answers"
                  description="The most efficient analysis tool on the market with global context control."
                  className="text-center"
                />
                <FeatureCard
                  icon={<LineChart className="h-10 w-10" />}
                  title="Live Business Intelligence"
                  description="Monitor drilling operations with live data streams and instant insights for immediate decision making."
                  className="text-center"
                />
                <FeatureCard
                  icon={<Database className="h-10 w-10" />}
                  title="AI Powered"
                  description="Artificial intelligence is leveraged to provide efficient and accurate context behind the data."
                  className="text-center"
                />
                <FeatureCard
                  icon={<Server className="h-10 w-10" />}
                  title="Fit for Purpose"
                  description="The right information is delivered  to the right people at the right time in the right way."
                  className="text-center"
                />
                <FeatureCard
                  icon={<Activity className="h-10 w-10" />}
                  title="Rapid Implementation"
                  description="Quick setup and integration with existing systems for immediate value delivery."
                  className="text-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 relative z-10" ref={formRef}>
          <div className="section-container">
            <div className="opacity-0 translate-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
                Ready to Get Started?
              </h2>
              <p className="text-clarity-gray text-center max-w-2xl mx-auto mb-16">
                Let's discuss how we can enhance your oil and gas operations. Fill out the form below, and we'll reach out to you.
              </p>
              
              <div className="flex justify-center">
                <div className="glass-card p-8 w-full max-w-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-clarity-card/60 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-clarity-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">We'd Love to Hear from You</h3>
                      <p className="text-clarity-gray text-sm">Drop Us a Message</p>
                    </div>
                  </div>
                  
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Modal */}
        <div 
          id="feature-video-modal" 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center hidden"
          onClick={(e) => {
            // Only close if clicking directly on the outer container, not on its children
            if (e.target === e.currentTarget) {
              const modal = document.getElementById('feature-video-modal');
              const videoPlayer = document.getElementById('feature-video-player') as HTMLVideoElement;
              const videoInfoSection = document.getElementById('modal-video-info');
              const modalContent = modal?.querySelector('.relative');
              
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
                  if (videoInfoSection) videoInfoSection.classList.remove('hidden');
                }, 200);
              }
            }
          }}
        >
          <div className="relative w-full max-w-7xl mx-4 md:w-[95vw] lg:w-[90vw]">
            <button 
              onClick={() => {
                const modal = document.getElementById('feature-video-modal');
                const videoPlayer = document.getElementById('feature-video-player') as HTMLVideoElement;
                const videoInfoSection = document.getElementById('modal-video-info');
                const modalContent = modal?.querySelector('.relative');
                
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
                    if (videoInfoSection) videoInfoSection.classList.remove('hidden');
                  }, 200);
                }
              }}
              className="absolute -top-12 right-0 text-white hover:text-clarity-teal transition-colors duration-300"
              aria-label="Close video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <video id="feature-video-player" className="w-full h-full" controls>
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div id="modal-video-info" className="mt-4 text-white px-2">
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

export default Index;
