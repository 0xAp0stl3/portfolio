import Image from 'next/image';
import Link from 'next/link';

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
                  src="/profil.jpeg"
                  alt="Photo de profil"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 dark:bg-blue-900/30 rounded-lg -z-10"></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Matthieu</h2>
              <p className="text-xl text-blue-600 dark:text-blue-400 mb-6">Étudiant 42</p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Bienvenue sur mon portfolio ! Je suis un étudiant passionné par la cybersécurité, la création d'application et plein d'autres choses.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                J'adore résoudre des problèmes complexes et transformer des idées en solutions numériques élégantes.
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
                  <div className="md:w-5/12">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">2022 - Présent</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">Développeur Full Stack</h3>
                      <p className="text-gray-600 dark:text-gray-400">Entreprise XYZ</p>
                      <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Développement d'applications web modernes utilisant React, Node.js et MongoDB.
                        Collaboration avec les équipes de design et de produit pour créer des expériences utilisateur exceptionnelles.
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  
                  <div className="md:w-5/12 mt-6 md:mt-0"></div>
                </div>
              </div>
              
              {/* Experience 2 */}
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
                      À l’école 42, on progresse par projets collaboratifs en autonomie, 
                      sans cours magistraux ni professeurs : on conçoit, code et déploie des applications concrètes tout en s’autoévaluant 
                      et en évaluant les autres étudiants. On y acquiert ainsi des compétences techniques (algorithmie, architectures logicielles, DevOps) 
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
      
      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Mes services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Ce que je peux vous offrir</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Développement Web</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Création de sites web et d'applications web modernes, réactifs et optimisés pour tous les appareils.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Applications Mobiles</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Développement d'applications mobiles natives et hybrides pour iOS et Android avec React Native.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">API & Backend</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Conception et développement d'API RESTful et de services backend robustes et évolutifs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
