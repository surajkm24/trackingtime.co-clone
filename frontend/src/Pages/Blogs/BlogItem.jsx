import React from "react";
import { Link } from "react-router-dom";
import "./BlogPage.css";
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
