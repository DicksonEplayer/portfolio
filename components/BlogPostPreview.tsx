
import React from 'react';
import type { BlogPost } from '../types';

interface BlogPostPreviewProps {
  post: BlogPost;
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ post }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-primary mb-2">
        <a href="#" className="hover:underline">{post.title}</a>
      </h3>
      <div className="text-sm text-gray-500 mb-4">
        <span>By {post.author}</span> &bull; <span>{post.date}</span>
      </div>
      <p className="text-gray-700 mb-4">{post.snippet}</p>
      <a href="#" className="font-semibold text-secondary hover:text-primary transition-colors">
        Read More &rarr;
      </a>
    </div>
  );
};

export default BlogPostPreview;
