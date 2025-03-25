import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import PageTransition from '@/components/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <div className="page-container relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-40 pb-20 md:pt-48 md:pb-24 relative overflow-hidden z-10">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Let's Connect
              </h1>
              <p className="text-clarity-gray text-lg mb-16 max-w-2xl mx-auto">
                Have questions or need more details? Reach out to us, and we'll get back to you as soon as possible.
              </p>
              
              <div className="glass-card p-8 md:p-10 max-w-lg mx-auto animate-fade-in-up">
                <div className="flex items-center mb-8">
                  <div className="bg-clarity-card/60 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-clarity-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">We'd Love to Hear from You</h2>
                    <p className="text-clarity-gray text-sm">Drop Us a Message</p>
                  </div>
                </div>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
