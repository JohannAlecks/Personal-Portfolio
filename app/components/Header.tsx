import Image from "next/image"

export default function Header() {
  return (
    <nav className="w-full border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">

        {/* Left — Profile Photo + Name + Tagline */}
        <div className="flex items-center gap-4">
          <a href="/JOHANN ALECKSANDREI G. FACTORA.CV.pdf" target="_blank" className="cursor-pointer hover:opacity-80 transition-opacity shrink-0">
            <div className="w-25 h-25 rounded-full overflow-hidden border border-gray-700">
              <Image
                src="/PROFILE.jpg"
                alt="Johann"
                width={160}
                height={160}
                quality={100}
                className="object-cover w-full h-full"
              />
            </div>
          </a>
          <div>
            <h1 className="text-base font-medium">Johann Alecksandrei G. Factora</h1>
            <p className="text-gray-400 text-xs mt-0.5">Backend Developer · Python & Data Pipelines</p>
          </div>
        </div>

        {/* Right — Nav Links */}
        <div className="flex items-center gap-6">
          <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
        </div>

      </div>
    </nav>
  )
}