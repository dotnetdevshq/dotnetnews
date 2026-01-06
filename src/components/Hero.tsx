import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faRocket } from '@fortawesome/free-solid-svg-icons'

interface HeroProps {
  email: string
  setEmail: (email: string) => void
  handleSubscribe: (e: React.FormEvent) => void
}

export default function Hero({ email, setEmail, handleSubscribe }: HeroProps) {
  return (
    <section className="py-32 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-slate-900 dark:via-purple-950/30 dark:to-slate-900 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-40 -left-20 w-96 h-96 bg-violet-400/40 dark:bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 right-20 w-[500px] h-[500px] bg-fuchsia-400/40 dark:bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg border border-violet-200/50 dark:border-violet-700/50 transform hover:scale-105 transition-transform duration-300">
            <FontAwesomeIcon icon={faRocket} className="text-violet-600 dark:text-violet-400 animate-bounce" />
            <span className="text-sm font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
              Your Daily .NET Digest
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
              Master .NET
            </span>
            <br />
            One Email at a Time
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Curated insights from <span className="font-bold text-violet-600 dark:text-violet-400">140+ expert sources</span>, 
            delivered fresh to your inbox every morning.
          </p>
          
          {/* Subscribe Form */}
          <form onSubmit={handleSubscribe} className="max-w-xl mx-auto mt-8">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-violet-200/50 dark:border-violet-700/50 transform hover:shadow-violet-500/20 transition-all duration-300">
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 bg-transparent focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-lg"
              />
              <button
                type="submit"
                className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-500 dark:to-fuchsia-500 text-white font-bold rounded-xl hover:from-violet-700 hover:to-fuchsia-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 group-hover:animate-bounce" />
                Subscribe Free
              </button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Free forever • No spam • Unsubscribe anytime
            </p>
          </form>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center group cursor-default">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                2,000+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Subscribers</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                140+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Sources</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                15-25
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Daily Articles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
