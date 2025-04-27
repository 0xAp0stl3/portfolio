import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">À propos de moi</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/starter_pack.png"
                  alt="Photo de profil"
                  fill
                  style={{ objectFit: "contain"}}
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 dark:bg-blue-900/30 rounded-lg -z-10"></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Matthieu</h2>
              <p className="text-xl text-blue-600 dark:text-blue-400 mb-6">Étudiant 42</p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Bienvenue sur mon portfolio ! Je suis un étudiant passionné par la cybersécurité, la création d&apos;application et plein d&apos;autres choses.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                J&apos;adore résoudre des problèmes complexes et transformer des idées en solutions numériques élégantes.
                Mon objectif est de créer des expériences utilisateur exceptionnelles qui allient design attrayant et fonctionnalités robustes.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                  <p className="text-gray-700 dark:text-gray-300">apostlepro1@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Localisation</h3>
                  <p className="text-gray-700 dark:text-gray-300">Occitanie, France</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Disponibilité</h3>
                  <p className="text-gray-700 dark:text-gray-300">Freelance / Temps plein</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Expérience</h3>
                  <p className="text-gray-700 dark:text-gray-300">2 années</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Mon parcours</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Mon expérience professionnelle et académique</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              
              {/* Experience 1 */}
              <div className="relative">
                <div className="md:flex items-center justify-between">
                  <div className="md:w-5/12"></div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  
                  <div className="md:w-5/12 mt-6 md:mt-0">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">sept 2025 - dec 2025</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">Stage 🚧 En travaux 🚧</h3>
                      <p className="mt-4 text-gray-700 dark:text-gray-300">
                      🚧 En travaux 🚧
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Education */}
              <div className="relative">
                <div className="md:flex items-center justify-between">
                  <div className="md:w-5/12">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">2023 - 2027</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">École 42</h3>
                      <p className="mt-4 text-gray-700 dark:text-gray-300">
                      À l&apos;école 42, on progresse par projets collaboratifs en autonomie, 
                      sans cours magistraux ni professeurs : on conçoit, code et déploie des applications concrètes tout en s&apos;autoévaluant 
                      et en évaluant les autres étudiants. On y acquiert ainsi des compétences techniques (algorithmie, architectures logicielles) 
                      et transverses (gestion de projet, communication, résolution de problèmes).
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  
                  <div className="md:w-5/12 mt-6 md:mt-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
