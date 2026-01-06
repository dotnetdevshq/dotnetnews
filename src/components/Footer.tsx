import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="backdrop-blur-lg bg-slate-900/95 dark:bg-black/95 text-slate-300 dark:text-slate-400 py-16 border-t border-violet-800/30 dark:border-violet-700/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                .NET News
              </div>
              <p className="text-sm flex items-center gap-2 justify-center md:justify-start">
                Made with <FontAwesomeIcon icon={faHeart} className="text-red-400 animate-pulse" /> for the .NET community
              </p>
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap gap-8 text-sm">
              <a href="#" className="hover:text-violet-400 transition-all duration-200 hover:scale-110">Privacy Policy</a>
              <a href="#" className="hover:text-violet-400 transition-all duration-200 hover:scale-110">Terms of Service</a>
              <a href="#" className="hover:text-violet-400 transition-all duration-200 hover:scale-110">Contact</a>
            </div>
            
            {/* Social */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-700 flex items-center justify-center hover:bg-gradient-to-br hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FontAwesomeIcon icon={faTwitter} className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-700 flex items-center justify-center hover:bg-gradient-to-br hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-700 flex items-center justify-center hover:bg-gradient-to-br hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              </a>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800 dark:border-slate-700 text-center text-sm text-slate-500">
            <p>© 2025 .NET News. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
