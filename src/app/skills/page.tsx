
export default function Skills() {
  // Données des compétences (normalement, ces données pourraient venir d'une API ou d'un CMS)
  const skillCategories = [
    {
      "name": "Compétences techniques",
      "skills": [
        { "name": "C", "level": 80 },
        { "name": "C++", "level": 70 },
        { "name": "Python", "level": 65 },
        { "name": "JavaScript", "level": 60 },
        { "name": "HTML5 & CSS3", "level": 70 },
        { "name": "SQL (MySQL)", "level": 65 },
        { "name": "Docker", "level": 52 },
        { "name": "Git", "level": 90 },
        { "name": "Linux / Bash", "level": 75 },
        { "name": "Structures de données & Algorithmes", "level": 60 }
      ]
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Mes compétences</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Un aperçu des technologies et outils que j&apos;utilise pour créer des applications web modernes et performantes.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8 mb-16"></div>
          </div>
          
          {/* Skills Categories */}
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-2 border-b border-gray-200 dark:border-gray-800">
                  {category.name}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                          {/* Placeholder for skill icon - in a real app, you'd use the actual icon */}
                          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{skill.name.charAt(0)}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                      </div>
                      
                      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-blue-600 dark:bg-blue-500 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="mt-2 flex justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>Niveau de maîtrise</span>
                        <span>{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education & Certifications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Formation & Certifications</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Mon parcours académique et mes certifications professionnelles</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                Formation
              </h3>
              
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">École 42</h4>
                      <p className="text-gray-600 dark:text-gray-400">École 42</p>
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">2023 - Present</span>
                  </div>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                  Formation générale en informatique avec des cours en programmation, algorithmes, bases de données et réseaux.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                Certifications
              </h3>
              
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Penetration Testing Certification ⚙️ En cours ⚙️</h4>
                      <p className="text-gray-600 dark:text-gray-400">Hack the Box</p>
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">2023</span>
                  </div>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    Certification validant les compétences en pentesting et en sécurité des systèmes d&apos;information.
                    Certification sur les outils et techniques de test d&apos;intrusion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Soft Skills */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Compétences personnelles</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Au-delà des compétences techniques</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-800">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Communication</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Communication claire et efficace avec les clients et les équipes techniques.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-800">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Gestion de projet</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Organisation efficace des tâches et respect des délais dans les projets.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-800">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Résolution de problèmes</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Analyse et résolution efficace des problèmes complexes.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-800">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Travail d&apos;équipe</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Collaboration efficace au sein d'équipes multidisciplinaires.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
