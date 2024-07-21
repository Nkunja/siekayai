import React from 'react';

interface BlogPostProps {
  date: string;
  title: string;
  imageSrc: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ date, title, imageSrc }) => {
  return (
    <div className="py-12 border-t-2 border-gray-100">
      <div className="flex flex-wrap lg:flex-nowrap items-center">
        <div className="w-full lg:w-auto px-4 mb-8 lg:mb-0">
          <img className="block w-44 h-30" src={imageSrc} alt="" />
        </div>
        <div className="w-full lg:w-9/12 px-4 mb-10 lg:mb-0">
          <div className="max-w-2xl">
            <span className="block text-gray-400 mb-1">{date}</span>
            <p className="text-2xl font-semibold text-gray-900">{title}</p>
          </div>
        </div>
        <div className="w-full lg:w-auto px-4 ml-auto text-right">
          <a className="inline-flex items-center text-xl font-semibold text-orange-900 hover:text-gray-900" href="#">
            <span className="mr-2">Read</span>
            <svg
              className="animate-bounce"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33301 14.6668L14.6663 1.3335"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.33301 1.3335H14.6663V14.6668"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
