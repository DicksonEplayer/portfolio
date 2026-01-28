
import React from 'react';
import { BLOG_POSTS } from '../../constants';
import BlogPostPreview from '../BlogPostPreview';

const BlogPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dark">Data Insights Blog</h1>
        <p className="mt-4 text-lg text-gray-600">Thoughts and articles on data analysis, technology, and industry trends.</p>
      </div>
      <div className="space-y-8 max-w-4xl mx-auto">
        {BLOG_POSTS.map(post => (
          <BlogPostPreview key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
