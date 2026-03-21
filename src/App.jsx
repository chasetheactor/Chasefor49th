import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Initiatives from './pages/Initiatives'
import WhyMe from './pages/WhyMe'
import './App.css'

export default function App() {
  return (
    <>
      <div className="animated-bg">
        <video
          className="animated-bg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/crowd-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="page-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/why-me" element={<WhyMe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}
