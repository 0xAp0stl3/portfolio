import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 'serveur-irc',
      title: 'Serveur IRC',
      description: 'Un serveur IRC moderne et performant, conçu pour une expérience utilisateur optimale.',
      image: '/irc.png',
      tags: ['C++', 'Socket', 'IRC'],
      github: 'https://github.com/0xAp0stl3/server-irc',
      featured: true
    },
    {
      id: 'transandance',
      title: 'Transandance 🚧 En travaux 🚧',
      description: 'Un pong multijoueur',
      image: '/pong.png',
      tags: ['PHP', 'Socket', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/username/transandance',
      featured: true
    },
    {
      id: 'Cub3D',
      title: 'Cub3D',
      description: 'Jeu 3D simple',
      image: '/cub3d.png',
      tags: ['C', 'SDL'],
      github: 'https://github.com/username/cub3d',
      featured: true
    },
    {
      id: 'weather-app',
      title: 'Application Météo',
      description: 'Application météo en temps réel avec prévisions à 7 jours et notifications personnalisées.',
      image: '/meteo.png',
      tags: ['React', 'OpenWeatherAPI', 'PWA', 'Geolocation'],
      link: 'https://example.com/weather',
      github: 'https://github.com/username/weather-app',
      featured: false
    },
    {
      id: 'portfolio',
      title: 'Portfolio Personnel',
      description: 'Ce portfolio que vous consultez actuellement, conçu avec Next.js et Tailwind CSS.',
      image: '/portfolio.png',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      link: 'https://example.com/portfolio',
      github: 'https://github.com/username/portfolio',
      featured: false
    },
    {
      id: 'minishell',
      title: 'Un minishell en C',
      description: 'Un shell Unix minimaliste, conçu pour être léger et rapide.',
      image: '/minishell.png',
      tags: ['C', 'Shell', 'Unix'],
      github: 'https://github.com/0xAp0stl3/minishell',
      featured: false
    },
    {
      id: '42projects',
      title: 'Projets 42',
      description: 'Une collection de projets réalisés dans le cadre de ma formation à 42.',
      image: '/42projet.png',
      tags: ['C', 'C++', 'Docker', 'Makefile', 'Shell'],
      github: 'https://github.com/0xAp0stl3/42projet',
      featured: false
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Mes projets</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez une sélection de mes travaux récents, allant des sites web aux applications mobiles.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8 mb-16"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="relative h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={
                      { objectFit: "cover",
                        objectPosition: (project.id === "minishell" || project.id === "42projects") ? "top" : "center"
                      }}
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">{project.description}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Vous avez un projet en tête ?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Je suis toujours à la recherche de nouveaux défis et opportunités de collaboration.
            N'hésitez pas à me contacter pour discuter de votre projet.
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors text-lg"
          >
            Discutons de votre projet
          </Link>
        </div>
      </section>
    </div>
  );
}
