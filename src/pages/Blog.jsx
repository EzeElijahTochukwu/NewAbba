import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const Blog = () => {
  const scrollContainerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left

  const posts = [
    { title: "10 Tips for Effective Content Writing", meta: "Published on Jan 28, 2025", excerpt: "Learn how to create engaging and impactful content...", link: "/post1" },
    { title: "The Importance of Proofreading", meta: "Published on Jan 25, 2025", excerpt: "Discover why proofreading is essential for professional writing...", link: "/post2" },
    { title: "How to Improve Your SEO Strategy", meta: "Published on Jan 20, 2025", excerpt: "Boost your website traffic with these SEO best practices...", link: "/post3" },
    { title: "Social Media Marketing Trends in 2025", meta: "Published on Jan 15, 2025", excerpt: "Stay ahead of the curve with these social media trends...", link: "/post4" },
    { title: "Creating Engaging Visual Content", meta: "Published on Jan 10, 2025", excerpt: "Visuals are key! Discover how to create compelling graphics...", link: "/post5" },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 1; // Pixels per interval
    let intervalDelay = 20; // ms between scroll updates

    const intervalId = setInterval(() => {
      if (scrollContainer.scrollLeft <= 0) {
        setScrollDirection(1); // Change direction to right
      } else if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        setScrollDirection(-1); // Change direction to left
      }
      scrollContainer.scrollLeft += scrollSpeed * scrollDirection;
    }, intervalDelay);

    return () => clearInterval(intervalId);
  }, [scrollDirection]);

  return (
    <section id="blog" className="blog">
      <h2>Blog</h2>
      <div className="blog-scroll-container" ref={scrollContainerRef}>
        <div className="blog-posts">
          {posts.map((post, index) => (
            <div className="blog-post" key={index}>
              <h3>{post.title}</h3>
              <p className="meta">{post.meta}</p>
              <p>{post.excerpt}</p>
              <a href={post.link} className="read-more">Read More</a>
            </div>
          ))}
          {posts.map((post, index) => ( // Duplicate for smooth looping
            <div className="blog-post" key={`dup-${index}`}>
              <h3>{post.title}</h3>
              <p className="meta">{post.meta}</p>
              <p>{post.excerpt}</p>
              <a href={post.link} className="read-more">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
              
