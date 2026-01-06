export default function Sources() {
  return (
    <section id="sources" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted Sources
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            We monitor 140+ premium sources across the .NET ecosystem
          </p>
        </div>
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-50 to-violet-50/30 dark:from-slate-900 dark:to-violet-950/20 rounded-3xl p-10 border-2 border-violet-200/50 dark:border-violet-800/50 shadow-2xl">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Microsoft DevBlogs',
              'Scott Hanselman',
              'Andrew Lock',
              'Stephen Cleary',
              'Nick Chapsas',
              'Jimmy Bogard',
              'Jon Skeet',
              'Julie Lerman',
              'Steve Smith',
              'Derek Comartin',
              'Tim Corey',
              'Rick Strahl'
            ].map((source, index) => (
              <span 
                key={index} 
                className="px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-violet-500 dark:hover:border-violet-500 hover:-translate-y-1 cursor-default font-medium"
              >
                {source}
              </span>
            ))}
            <span className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-bold shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-default">
              + 128 more sources
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
