import React from 'react'
import Navbar from './components/Shared/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'

const App = () => {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collection />} />
      </Routes>
    </Router>
  )
}

export default App