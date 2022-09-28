import React from 'react'
import { Link } from 'react-router-dom'
import "./BlogNavbar.css"
const BlogNavbar = () => {
  return (
    <div className='Blog-navbar-container'>  
     <div className="Blog-navbar-box">
      <ul>
        <li>
          <Link to="/blog">BLOG</Link>
        </li>
        <li>
          <Link to="/productivity">PRODUCTIVITY</Link>
        </li>
        <li>
          <Link to="/remotework">REMOTE WORK</Link>
        </li>
        <li>
          <Link to="/practice">BEST PRACTICE</Link>
        </li>
        <li>
          <Link to="/resources">RESOURCES</Link>
        </li>
      </ul>
     </div>
    </div>
  )
}

export default BlogNavbar
