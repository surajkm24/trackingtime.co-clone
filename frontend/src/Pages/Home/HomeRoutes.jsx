import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BestPractice from '../Blogs/BestPractice'
import BlogDetail from '../Blogs/BlogDetail'
import BlogPage from '../Blogs/BlogPage'
import Productivity from '../Blogs/Productivity'
import RemoteWork from '../Blogs/RemoteWork'
import Resource from '../Blogs/Resource'

const HomeRoutes = () => {
  return (
    <div>

  <Routes>
       <Route path="/blog" element={<BlogPage />} />
       <Route path="/productivity" element={<Productivity/>} />
       <Route path="/remotework" element={<RemoteWork/>} />
       <Route path="/practice" element={<BestPractice/>} />
       <Route path="/resources" element={<Resource/>} />
       <Route path="/blog/blog-details" element={<BlogDetail/>} />
    </Routes>
    </div>
  )
}

export default HomeRoutes