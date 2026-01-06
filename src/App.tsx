import { useState, useEffect } from 'react'
import { toast, Toaster } from 'sonner'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyIBuiltThis from './components/WhyIBuiltThis'
import HowItWorks from './components/HowItWorks'
import WhatsInside from './components/WhatsInside'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Sources from './components/Sources'
import Footer from './components/Footer'

export default function App() {
  const [email, setEmail] = useState('')
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast.success('Successfully subscribed to .NET News!')
      setEmail('')
    }
  }

  const toggleDarkMode = () => {
    console.log('Toggle clicked, current isDark:', isDark) // Debug log
    setIsDark(!isDark)
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-violet-50/30 dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
        
        <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />

        <main className="flex-1">
          <Hero email={email} setEmail={setEmail} handleSubscribe={handleSubscribe} />
          <WhyIBuiltThis />
          <HowItWorks />
          <WhatsInside />
          <Testimonials />
          <CTASection email={email} setEmail={setEmail} handleSubscribe={handleSubscribe} />
          <Sources />
        </main>

        <Footer />
      </div>
    </>
  )
}
