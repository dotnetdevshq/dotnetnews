import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import WhyIBuiltThis from './components/WhyIBuiltThis'
import HowItWorks from './components/HowItWorks'
import WhatsInside from './components/WhatsInside'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Sources from './components/Sources'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Privacy from './components/pages/Privacy'
import Terms from './components/pages/Terms'
import Contact from './components/pages/Contact'
import GDPR from './components/pages/GDPR'
import SourcesPage from './components/pages/SourcesPage'
import Sponsorship from './components/pages/Sponsorship'

interface AppProps {
  isDark: boolean
  toggleDarkMode: () => void
}

function HomePage({ isDark, toggleDarkMode }: AppProps) {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast.success('Thank you for subscribing to .NET News.')
      setEmail('')
    }
  }

  return (
    <Layout isDark={isDark} toggleDarkMode={toggleDarkMode}>
      <Hero email={email} setEmail={setEmail} handleSubscribe={handleSubscribe} />
      <WhyIBuiltThis />
      <HowItWorks />
      <WhatsInside />
      <Testimonials />
      <CTASection email={email} setEmail={setEmail} handleSubscribe={handleSubscribe} />
      <Sources />
    </Layout>
  )
}

export default function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check saved theme on mount
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else if (savedTheme === 'light') {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      // Default to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      }
    }
  }, [])

  useEffect(() => {
    // Update DOM when isDark changes
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage isDark={isDark} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/privacy" element={<Layout isDark={isDark} toggleDarkMode={toggleDarkMode}><Privacy /></Layout>} />
        <Route path="/terms" element={<Layout isDark={isDark} toggleDarkMode={toggleDarkMode}><Terms /></Layout>} />
        <Route path="/contact" element={<Layout isDark={isDark} toggleDarkMode={toggleDarkMode}><Contact /></Layout>} />
        <Route path="/gdpr" element={<Layout isDark={isDark} toggleDarkMode={toggleDarkMode}><GDPR /></Layout>} />
        <Route path="/sources" element={<Layout isDark={isDark} toggleDarkMode={toggleDarkMode}><SourcesPage /></Layout>} />
        <Route path="/sponsorship" element={<Layout isDark={isDark} toggleDarkMode={toggleDarkMode}><Sponsorship /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
