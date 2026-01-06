import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLaptopCode, faServer, faChartLine, faShieldAlt, faBook } from '@fortawesome/free-solid-svg-icons'

export default function WhatsInside() {
  const categories = [
    {
      icon: faCode,
      title: 'Language Updates',
      description: 'Latest C# features, syntax improvements, and language proposals from the .NET team.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: faLaptopCode,
      title: 'Framework News',
      description: 'ASP.NET Core, Blazor, MAUI updates and real-world implementation patterns.',
      color: 'from-purple-500 to-fuchsia-500'
    },
    {
      icon: faServer,
      title: 'Cloud & DevOps',
      description: 'Azure deployments, containerization, CI/CD pipelines, and infrastructure as code.',
      color: 'from-fuchsia-500 to-pink-500'
    },
    {
      icon: faChartLine,
      title: 'Performance Tips',
      description: 'Optimization techniques, benchmarking, profiling, and scalability best practices.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: faShieldAlt,
      title: 'Security Insights',
      description: 'Authentication, authorization, vulnerability fixes, and security-first development.',
      color: 'from-rose-500 to-red-500'
    },
    {
      icon: faBook,
      title: 'Tutorials & Guides',
      description: 'Step-by-step tutorials, architecture patterns, and hands-on coding examples.',
      color: 'from-red-500 to-orange-500'
    }
  ]

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            What You'll Discover
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Every issue is packed with diverse, high-quality content across the entire .NET ecosystem
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-800 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              <div className="absolute inset-[2px] bg-slate-50 dark:bg-slate-900 rounded-2xl -z-10"></div>
              
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                <FontAwesomeIcon icon={category.icon} className="text-2xl text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {category.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
