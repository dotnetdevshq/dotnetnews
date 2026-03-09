import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin, faFacebook, faInstagram, faTiktok, faThreads, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="backdrop-blur-lg bg-slate-900/95 dark:bg-black/95 text-slate-300 dark:text-slate-400 py-16 border-t border-violet-800/30 dark:border-violet-700/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                The .NET Insider
              </div>
              <p className="text-sm flex items-center gap-2 justify-center md:justify-start">
                Built for the .NET developer community
              </p>
            </div>
            
            {/* Social */}
            <div className="flex gap-4 flex-wrap justify-center">
              <a href="https://github.com/dotnetdevshq/dotnetnews" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-700 flex items-center justify-center hover:bg-linear-to-br hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </a>
              <a href="https://www.linkedin.com/company/dotnetdevs/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-700 flex items-center justify-center hover:bg-linear-to-br hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              </a>
              <a href="https://x.com/dotnetdevs_io" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X (Twitter)" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-700 flex items-center justify-center hover:bg-linear-to-br hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FontAwesomeIcon icon={faTwitter} className="text-lg" />
              </a>
              <a href="https://www.facebook.com/dotnetdevsio" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-700 flex items-center justify-center hover:bg-linear-to-br hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FontAwesomeIcon icon={faFacebook} className="text-lg" />
              </a>
              <a href="https://www.instagram.com/dotnetdevs_io/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-700 flex items-center justify-center hover:bg-linear-to-br hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              </a>
              <a href="https://www.tiktok.com/@dotnetdevs" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-700 flex items-center justify-center hover:bg-linear-to-br hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FontAwesomeIcon icon={faTiktok} className="text-lg" />
              </a>
              <a href="https://www.threads.com/@dotnetdevs_io" target="_blank" rel="noopener noreferrer" aria-label="Threads" title="Threads" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-700 flex items-center justify-center hover:bg-linear-to-br hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FontAwesomeIcon icon={faThreads} className="text-lg" />
              </a>
              <a href="https://www.youtube.com/@dotnetdevs_io" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-700 flex items-center justify-center hover:bg-linear-to-br hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FontAwesomeIcon icon={faYoutube} className="text-lg" />
              </a>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800 dark:border-slate-700 text-center text-sm text-slate-500">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-6 justify-center text-slate-400">
                <Link to="/privacy" className="hover:text-violet-400 transition-all duration-200">Privacy</Link>
                <Link to="/terms" className="hover:text-violet-400 transition-all duration-200">Terms</Link>
                <Link to="/contact" className="hover:text-violet-400 transition-all duration-200">Contact Us</Link>
                <Link to="/gdpr" className="hover:text-violet-400 transition-all duration-200">GDPR</Link>
                <Link to="/sponsorship" className="hover:text-violet-400 transition-all duration-200">Sponsorship</Link>
              </div>
              <p>© 2026 .NET News. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
