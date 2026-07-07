import Header from "./components/Header"

export default function Home() {
  return (
    <main>
      <Header />

      <div className="max-w-2xl mx-auto px-6 pb-16">

                {/* About */}
        <section id="about" className="mb-16">
          <h2 className="text-xl font-medium mb-4">About me</h2>
          <p className="text-gray-500 leading-relaxed">
            Motivated Computer Engineering student with a strong focus on software development and backend systems. 
            Proficient in building applications using technologies such as Python, Flutter (Dart), Next.js, and HTML, 
            with a solid understanding of database integration and system design.
          </p>
          <p className="text-gray-500 leading-relaxed mt-4">
            Gained hands-on experience in technical support and networking during an internship at Clark International 
            Airport Corporation (CIAC) – MIS Department, strengthening problem-solving skills and real-world system understanding.
          </p>
          <p className="text-gray-500 leading-relaxed mt-4">
            Skilled in writing clean, efficient code and developing scalable solutions, with a strong foundation in 
            programming and software architecture. Demonstrates strong analytical thinking, adaptability, and a 
            collaborative mindset, with a keen interest in backend development, APIs, and full-stack applications.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16">
          <h2 className="text-xl font-medium mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-medium mb-2">ETL Pipeline</h3>
              <p className="text-sm text-gray-500 mb-3">Ingests data from a public API, transforms it, and loads into PostgreSQL on a schedule.</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Python", "Airflow", "PostgreSQL"].map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{tag}</span>
                ))}
              </div>
              <a href="#" className="text-sm text-blue-600">GitHub →</a>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-medium mb-2">REST API</h3>
              <p className="text-sm text-gray-500 mb-3">FastAPI backend for a personal finance tracker with auth, migrations, and tests.</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {["FastAPI", "SQLAlchemy", "Docker"].map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{tag}</span>
                ))}
              </div>
              <a href="#" className="text-sm text-blue-600">GitHub →</a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-16">
          <h2 className="text-xl font-medium mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["Python", "Flutter (Dart)", "Next.js", "Java", "HTML", "Networking", "AI Assisted Prompting", "Adaptability and Collaborative Teamwork"].map(skill => (
              <span key={skill} className="text-sm px-3 py-1 border border-gray-200 rounded-full text-gray-600">{skill}</span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-xl font-medium mb-4">Get in touch</h2>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:your@email.com" className="text-sm px-4 py-2 border border-gray-200 rounded-lg text-gray-600">Email</a>
            <a href="#" className="text-sm px-4 py-2 border border-gray-200 rounded-lg text-gray-600">GitHub</a>
            <a href="#" className="text-sm px-4 py-2 border border-gray-200 rounded-lg text-gray-600">LinkedIn</a>
          </div>
        </section>

      </div>
    </main>
  )
}