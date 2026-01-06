import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFilter, faClock } from '@fortawesome/free-solid-svg-icons'

export default function WhyIBuiltThis() {
  const reasons = [
    {
      icon: faLightbulb,
      title: "The Problem",
      description: "Quality .NET content is buried under noise. Developers waste hours scrolling through Reddit, Twitter, and countless blogs."
    },
    {
      icon: faFilter,
      title: "The Solution",
      description: "I built an AI-powered system that scans 140+ sources daily, filtering out the noise and highlighting only the gems."
    },
    {
      icon: faClock,
      title: "The Result",
      description: "You save 5-10 hours weekly while staying ahead of the curve. Focus on building, not hunting for content."
    }
  ]

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Built by Developers, for Developers
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Here's why this newsletter exists
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-slate-50 to-violet-50/50 dark:from-slate-900 dark:to-violet-950/20 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-violet-500 dark:hover:border-violet-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <FontAwesomeIcon icon={reason.icon} className="text-2xl text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
                
                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
