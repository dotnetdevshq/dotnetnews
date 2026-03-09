import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

interface HeaderProps {
  isDark: boolean
  toggleDarkMode: () => void
}

export default function Header({ isDark, toggleDarkMode }: HeaderProps) {
  return (
    <header className="backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 sticky top-0 z-50 border-b border-violet-300 dark:border-violet-700 transition-all duration-300">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/dotnetinsider-logo.png" 
              alt=".NET News logo" 
              className="h-12 w-12 object-contain rounded-full transition-transform duration-300 hover:scale-110"
            />
            <span className="text-2xl font-extrabold bg-linear-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
              The .NET Insider
            </span>
          </div>
          <nav className="flex items-center gap-8">
            <Link to="/" className="hidden md:inline text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200 font-medium hover:scale-105">Home</Link>
            <Link to="/#archive" className="hidden md:inline text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200 font-medium hover:scale-105">Archive</Link>
            <Link to="/sponsorship" className="hidden md:inline text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200 font-medium hover:scale-105">Sponsorship</Link>
            <Link to="/#sources" className="hidden md:inline text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200 font-medium hover:scale-105">Sources</Link>
            <button
              onClick={toggleDarkMode}
              type="button"
              className="p-3 rounded-xl bg-linear-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 hover:from-violet-200 hover:to-fuchsia-200 dark:hover:from-violet-800/40 dark:hover:to-fuchsia-800/40 transition-all duration-300 backdrop-blur-sm cursor-pointer border border-violet-200 dark:border-violet-700 hover:scale-110 hover:rotate-12"
              aria-label="Toggle dark mode"
            >
              <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-lg text-violet-600 dark:text-violet-400" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
