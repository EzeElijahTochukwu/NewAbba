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
      </div>
    </section>
  );
};

export default Blog;
