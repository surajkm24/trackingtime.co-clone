import React from 'react'
import { Link } from 'react-router-dom'

const HomeNavbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomeNavbar