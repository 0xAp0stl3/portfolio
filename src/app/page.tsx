import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Bonjour, je suis <span className="text-blue-600 dark:text-blue-400">Matthieu</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Étudiant en 2eme année de l&apos;école 42, passionné par la cybersécurité et la programmation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                >
                  Voir mes projets
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-md transition-colors"
                >
                  Me contacter
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <Image
                  src="/profil.jpeg"
                  alt="Photo de profil"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projets en vedette</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Découvrez quelques-uns de mes travaux récents</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="/irc.png"
                  alt="Projet 1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Server IRC</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Un serveur IRC moderne et performant, conçu pour une expérience utilisateur optimale.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium rounded">C++</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium rounded">Socket</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium rounded">IRC</span>
                </div>
                <Link 
                  href="/projects" 
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Voir les détails →
                </Link>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="/cub3d.png"
                  alt="Projet 2"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cub3D</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Jeu 3D simple</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium rounded">C</span>
                </div>
                <Link 
                  href="/projects" 
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Voir les détails →
                </Link>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="/meteo.png"
                  alt="Projet 3"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Weather App</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Application météo.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium rounded">React</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium rounded">OpenWeatherAPI</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium rounded">PWA</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium rounded">Geolocation</span>
                </div>
                <Link 
                  href="/projects" 
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Voir les détails →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              Voir tous les projets
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mes compétences</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Technologies et outils que j&apos;utilise</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Skill icons would go here - using placeholders */}
            {['HTML5', 'CSS3', 'Python', 'Git', 'Docker', 'PHP', 'C++', 'C'].map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
                  {/* Placeholder for skill icon */}
                  <span className="text-2xl">{skill.charAt(0)}</span>
                </div>
                <span className="text-gray-900 dark:text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/skills" 
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-md transition-colors"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Intéressé par une collaboration ?</h2>
          <p className="text-xl text-blue-100 mb-8">N&apos;hésitez pas à me contacter pour discuter de votre projet</p>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-md transition-colors text-lg"
          >
            Contactez-moi
          </Link>
        </div>
      </section>
    </div>
  );
}
