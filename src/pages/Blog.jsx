import React, { useEffect, useRef } from "react";

const Blog = () => {
  const scrollContainerRef = useRef(null);

  // Your blog posts data
  const posts = [
    {
      title: "10 Tips for Effective Content Writing",
      meta: "Published on January 28, 2025 by Admin",
      excerpt: "Learn how to create engaging and impactful content...",
      link: "/post1",
    },
    {
      title: "The Importance of Proofreading",
      meta: "Published on January 25, 2025 by Admin",
      excerpt: "Discover why proofreading is essential for professional writing...",
      link: "/post2",
    },
    {
      title: "How to Improve Your SEO Strategy",
      meta: "Published on January 20, 2025 by SEO Guru",
      excerpt: "Boost your website traffic with these SEO best practices...",
      link: "/post3",
    },
    {
      title: "Social Media Marketing Trends in 2025",
      meta: "Published on January 15, 2025 by SocialPro",
      excerpt: "Stay ahead of the curve with these social media trends...",
      link: "/post4",
    },
    {
      title: "Creating Engaging Visual Content",
      meta: "Published on January 10, 2025 by DesignExpert",
      excerpt: "Visuals are key! Discover how to create compelling graphics...",
      link: "/post5",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return; // Ensure the ref exists

    let scrollSpeed = 1; // pixels to move per frame (adjust as needed)
    let animationFrameId;

    const step = () => {
      // Reset scroll when half the content has been scrolled (first set)
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(step);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(step);

    // Cleanup on unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="blog" className="blog">
      <h2>Blog</h2>
      {/* This container clips any overflow */}
      <div className="blog-scroll-container" ref={scrollContainerRef}>
        <div className="blog-posts">
          {/* First copy of posts */}
          {posts.map((post, index) => (
            <div className="blog-post" key={`post-${index}`}>
              <h3>{post.title}</h3>
              <p className="meta">{post.meta}</p>
              <p>{post.excerpt}</p>
              <a href={post.link} className="read-more">
                Read More
              </a>
            </div>
          ))}
          {/* Duplicate copy of posts for continuous scroll */}
          {posts.map((post, index) => (
            <div className="blog-post" key={`dup-${index}`}>
              <h3>{post.title}</h3>
              <p className="meta">{post.meta}</p>
              <p>{post.excerpt}</p>
              <a href={post.link} className="read-more">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
      
