// pages/Blog.tsx
import React, { useState } from 'react';
import BlogPost from './Blogpost';

const Blog: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <section id="blog" className="relative py-20 overflow-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-15 text-center">
          <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold">
            <span>Our</span> <span className="font-serif italic">Blog</span>
          </h1>
        </div>
        <div className="max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              date={post.date}
              title={post.title}
              imageSrc={post.imageSrc}
            />
          ))}
          {showContent && additionalContent.map((post, index) => (
            <BlogPost
              key={index}
              date={post.date}
              title={post.title}
              imageSrc={post.imageSrc}
            />
          ))}
          <div className="pt-12 border-t-2 border-gray-100 text-center">
            <a
              onClick={(e) => {
                e.preventDefault();
                setShowContent(true);
              }}
              className="relative group inline-block py-4 px-7 font-semibold text-orange-900 hover:text-orange-50 rounded-full bg-orange-50 transition duration-300 overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <span className="relative">See More Articles</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const blogPosts = [
  {
    date: 'Jul 20, 2022',
    title: 'Consectures Dummy Content Velit officia consequat duis enim velit mollit adipsing',
    imageSrc: '/woman.png',
  },
  {
    date: 'Jul 20, 2022',
    title: 'Consectures Dummy Content Velit officia consequat duis enim velit mollit adipsing',
    imageSrc: '/woman.png',
  },
  {
    date: 'Jul 20, 2022',
    title: 'Consectures Dummy Content Velit officia consequat duis enim velit mollit adipsing',
    imageSrc: '/woman.png',
  },
];

const additionalContent = [
  {
    date: 'Jul 20, 2022',
    title: 'Consectures Dummy Content Velit officia consequat duis enim velit mollit adipsing',
    imageSrc: '/woman.png',
  },
  {
    date: 'Jul 20, 2022',
    title: 'Consectures Dummy Content Velit officia consequat duis enim velit mollit adipsing',
    imageSrc: '/woman.png',
  },
  {
    date: 'Jul 20, 2022',
    title: 'Consectures Dummy Content Velit officia consequat duis enim velit mollit adipsing',
    imageSrc: '/woman.png',
  },
];

export default Blog;
