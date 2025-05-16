export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center p-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Joseph 👋</h1>
        <p className="text-xl mb-6 max-w-xl">
          A Software Developer specializing in <span className="font-semibold">Mobile App</span> and <span className="font-semibold">Web Development</span>. I build fast, scalable apps and intuitive web experiences.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100">View My Work</a>
          <a href="#contact" className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600">Contact Me</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-7">
          I'm a passionate software developer with experience in building mobile apps using Kotlin, Jetpack Compose, and Firebase, and web apps using Laravel, React, and Tailwind CSS. I enjoy solving real-world problems and creating digital products that improve lives.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          <div>
            <h3 className="font-bold text-xl mb-2">Mobile Development</h3>
            <p>Kotlin, Jetpack Compose, Firebase, Room, Hilt</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Web Development</h3>
            <p>React, Laravel, Tailwind, Livewire, MySQL</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Tools & DevOps</h3>
            <p>Git, Docker, Firebase Hosting, GitHub Actions</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">📱 LSOBS Android App</h3>
            <p>Faith-based app with PDF/audio/video formats, downloads, favorites, and profile features.</p>
            <p className="text-sm text-gray-500 mt-1">Kotlin, Jetpack Compose, Firebase</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">🌐 Domain Automation Tool</h3>
            <p>Automated domain registration system using EPP and admin dashboard.</p>
            <p className="text-sm text-gray-500 mt-1">Laravel, MySQL, Docker</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">🤖 WhatsApp Medicine Bot</h3>
            <p>Provides PDFs, payment info, and medicine requests via Twilio integration.</p>
            <p className="text-sm text-gray-500 mt-1">Laravel, Twilio API</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">📄 React Portfolio</h3>
            <p>This personal portfolio site showcasing my work and skills.</p>
            <p className="text-sm text-gray-500 mt-1">React, TailwindCSS</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-indigo-600 text-white py-10 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="mb-6">Feel free to reach out for collaboration, freelance work, or a quick hello!</p>
          <a href="mailto:your.email@example.com" className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">Send Email</a>
        </div>
      </section>
    </main>
  );
}
