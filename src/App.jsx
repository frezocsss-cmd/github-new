import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Readblog from './pages/Readblog'
import Redstudies from './pages/Redstudies'
import Work from './pages/Work'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="readblog" element={<Readblog />} />
        <Route path="redstudies" element={<Redstudies />} />
        <Route path="work" element={<Work />} />
      </Route>
    </Routes>
  )
}

export default App