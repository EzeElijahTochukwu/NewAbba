// Blog.jsx
import React from "react";


const Blog = () => {
  return (
    <section id="blog" className="blog">
      <h2>Blog</h2>
      <div className="blog-posts">
        <div className="blog-post">
          <h3>10 Tips for Effective Content Writing</h3>
          <p className="meta">Published on January 28, 2025 by Admin</p>
          <p>Learn how to create engaging and impactful content...</p>
          <a href="/post1" className="read-more">Read More</a>
        </div>
        <div className="blog-post">
          <h3>The Importance of Proofreading</h3>
          <p className="meta">Published on January 25, 2025 by Admin</p>
          <p>Discover why proofreading is essential for professional writing...</p>
          <a href="/post2" className="read-more">Read More</a>
        </div>
        <div className="blog-post">
          <h3>How to Improve Your SEO Strategy</h3>
          <p className="meta">Published on January 20, 2025 by SEO Guru</p>
          <p>Boost your website traffic with these SEO best practices...</p>
          <a href="/post3" className="read-more">Read More</a>
        </div>
        <div className="blog-post">
          <h3>Social Media Marketing Trends in 2025</h3>
          <p className="meta">Published on January 15, 2025 by SocialPro</p>
          <p>Stay ahead of the curve with these social media trends...</p>
          <a href="/post4" className="read-more">Read More</a>
        </div>
        <div className="blog-post">
          <h3>Creating Engaging Visual Content</h3>
          <p className="meta">Published on January 10, 2025 by DesignExpert</p>
          <p>Visuals are key! Discover how to create compelling graphics...</p>
          <a href="/post5" className="read-more">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
