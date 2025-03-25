import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import PageTransition from '@/components/PageTransition';

const EngineeringBlog = () => {
  const blogPosts = [
    {
      title: 'Blog Title',
      author: 'John Moor',
      date: 'Aug 14, 2024',
      excerpt: 'Bear claw sesame snaps bonbon cookie. Fruitcake brownie lemon drops donut gummi bears jelly beans sesame snaps.',
    },
    {
      title: 'Blog Title',
      author: 'John Moor',
      date: 'Aug 14, 2024',
      excerpt: 'Bear claw sesame snaps bonbon cookie. Fruitcake brownie lemon drops donut gummi bears jelly beans sesame snaps.',
    },
    {
      title: 'Blog Title',
      author: 'John Moor',
      date: 'Aug 14, 2024',
      excerpt: 'Bear claw sesame snaps bonbon cookie. Fruitcake brownie lemon drops donut gummi bears jelly beans sesame snaps.',
    },
    {
      title: 'Blog Title',
      author: 'John Moor',
      date: 'Aug 14, 2024',
      excerpt: 'Bear claw sesame snaps bonbon cookie. Fruitcake brownie lemon drops donut gummi bears jelly beans sesame snaps.',
    },
  ];

  return (
    <PageTransition>
      <div className="page-container relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-40 pb-20 md:pt-48 md:pb-24 relative overflow-hidden z-10">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                  Learn more about our digital journey.
                  <br />
                  <br />
                  <span className="text-clarity-gray">Real life lessons on scaling technology across everyday business challenges.</span>
                </h1>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl animate-fade-in">
                <img 
                  src="/images/chart.webm.png" 
                  alt="Data visualization" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 relative z-10">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3 animate-fade-in">
              Real-World Learnings from the Field
            </h2>
            <p className="text-clarity-gray text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              Explore how we solve complex challenges and optimize workflows through engineering and data.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
              {blogPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  author={post.author}
                  date={post.date}
                  excerpt={post.excerpt}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default EngineeringBlog;
