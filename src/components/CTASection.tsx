import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faBolt, faHeart } from '@fortawesome/free-solid-svg-icons'

interface CTASectionProps {
  email: string
  setEmail: (email: string) => void
  handleSubscribe: (e: React.FormEvent) => void
}

export default function CTASection({ email, setEmail, handleSubscribe }: CTASectionProps) {
  return (
    <section className="py-32 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-900 dark:via-purple-900 dark:to-fuchsia-900 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
            <FontAwesomeIcon icon={faBolt} className="text-yellow-300 animate-pulse" />
            <span className="text-white font-semibold">Join the Community Today</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Start Your Journey to
            <br />
            <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
              .NET Mastery
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Subscribe now and receive curated .NET insights every morning. 
            <strong className="font-bold"> Zero cost. Zero spam. Maximum value.</strong>
          </p>
          
          {/* Subscribe Form */}
          <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto mt-10">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-5 bg-transparent focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-lg"
              />
              <button
                type="submit"
                className="group px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-xl hover:from-violet-700 hover:to-fuchsia-700 transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
              >
                <FontAwesomeIcon icon={faRocket} className="mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
                Get Started
              </button>
            </div>
          </form>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-2">✓</div>
              <div className="text-white font-semibold">100% Free Forever</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-white font-semibold">Daily at 7 AM EST</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-2">
                <FontAwesomeIcon icon={faHeart} className="text-red-300 animate-pulse" />
              </div>
              <div className="text-white font-semibold">2,000+ Happy Readers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
