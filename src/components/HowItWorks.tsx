import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faWandMagicSparkles, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function HowItWorks() {
  const steps = [
    {
      icon: faGlobe,
      title: 'Aggregate',
      description: 'Our system monitors 140+ premium .NET blogs, forums, and social channels 24/7.',
      number: '01'
    },
    {
      icon: faWandMagicSparkles,
      title: 'Curate',
      description: 'AI filters and ranks content based on quality signals, then a human reviews the top picks.',
      number: '02'
    },
    {
      icon: faPaperPlane,
      title: 'Deliver',
      description: 'Every morning at 7 AM EST, you receive 15-25 handpicked articles in your inbox.',
      number: '03'
    }
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Three simple steps to stay informed
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500"></div>
            
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Number badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 group-hover:scale-125 transition-all duration-300">
                  {step.number}
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:border-violet-500 dark:hover:border-violet-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 mt-8 h-full">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300">
                    <FontAwesomeIcon icon={step.icon} className="text-4xl text-violet-600 dark:text-violet-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
