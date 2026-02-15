import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SocialBar from './components/SocialBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BedsheetsPage from './pages/BedsheetsPage'
import TowelsPage from './pages/TowelsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <>
      <Navbar />
      <SocialBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bedsheets" element={<BedsheetsPage />} />
          <Route path="/towels" element={<TowelsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
