import React from "react";
import { Link } from "react-router-dom";
import "./BlogPage.css";

// Component for each blog card showing image and title;
const BlogItem = ({ image, title }) => {
  return (
   <Link to="/blog/blog-details" className="Blog-link"><div className="Blog-box">
      <div className="Blog-image-box">
        <img src={image} alt={title} />
      </div>
      <div className="Blog-title">
        <h3>{title}</h3>
      </div>
    </div>
  </Link>
  );
};

export default BlogItem;
