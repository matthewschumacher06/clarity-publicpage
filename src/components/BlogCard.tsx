
interface BlogCardProps {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageSrc?: string;
}

const BlogCard = ({ title, author, date, excerpt, imageSrc }: BlogCardProps) => {
  return (
    <div className="glass-card overflow-hidden flex flex-col h-full transition-all duration-300 group">
      {imageSrc && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-1 text-white">{title}</h3>
        <p className="text-sm text-clarity-gray mb-3">{author}</p>
        <p className="text-clarity-gray flex-grow mb-4">{excerpt}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xs text-clarity-gray">{date}</span>
          <button className="text-clarity-teal text-sm font-medium hover:text-clarity-teal/80 transition-colors">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
