import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default function Testimonials() {
  const testimonials = [
    {
      text: "This newsletter saves me hours every week. I used to spend my mornings hunting for quality .NET content—now it's delivered straight to my inbox. Game changer!",
      author: 'Sarah Chen',
      role: 'Senior .NET Engineer',
      rating: 5
    },
    {
      text: 'Finally, a newsletter that respects my time. No fluff, no clickbait—just solid technical content I can actually use in my projects.',
      author: 'Michael Rodriguez',
      role: 'Tech Lead',
      rating: 5
    },
    {
      text: "I've tried dozens of tech newsletters, but this is the only one I consistently read. The curation quality is exceptional, and I always learn something new.",
      author: 'Emma Thompson',
      role: 'Full Stack Developer',
      rating: 5
    }
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/10 dark:bg-fuchsia-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Loved by Developers Worldwide
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Join thousands of developers who trust us daily
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:border-violet-500 dark:hover:border-violet-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-white text-lg" />
                </div>
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FontAwesomeIcon 
                    key={i} 
                    icon={faStar} 
                    className="text-yellow-400 dark:text-yellow-500 group-hover:scale-110 transition-transform duration-150" 
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
