
"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-violet-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-xl font-semibold tracking-wide">
            Sanjana Sri
          </h1>

          <div className="hidden md:flex gap-8 text-zinc-300">

            <a href="#" className="hover:text-white transition">
              Home
            </a>

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl"
        >

          <p className="uppercase tracking-[0.4em] text-sm text-zinc-500 mb-6">
            Portfolio
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">

            Building
            <span className="bg-gradient-to-r from-violet-400 via-white to-cyan-400 bg-clip-text text-transparent">
              {" "}Future-Ready
            </span>

            <br />

            Digital & AI
            <span className="bg-gradient-to-r from-cyan-400 via-white to-violet-400 bg-clip-text text-transparent">
              {" "}Experiences
            </span>

          </h1>

          <h2 className="mt-8 text-2xl md:text-3xl text-zinc-300 font-light">

            Hi, I'm
            <span className="text-white font-medium"> Sanjana Sri </span>

            — Infosys Systems Engineer & AI Enthusiast

          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-8 max-w-3xl mx-auto">

            Passionate about Artificial Intelligence, Machine Learning,
            Reinforcement Learning, and modern software engineering.
            I create intelligent systems and elegant digital experiences.

          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition duration-300"
            >
              Explore Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition duration-300"
            >
              Download Resume
            </a>

          </div>

        </motion.div>

      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative py-28 px-6"
      >

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >

          <h2 className="text-5xl font-bold mb-16 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition duration-300">

              <h3 className="text-3xl font-semibold mb-6">
                Who I Am
              </h3>

              <p className="text-zinc-400 leading-8">

                I am a Computer Science and Business Systems student at
                Ramco Institute of Technology with strong interests in
                Artificial Intelligence, Reinforcement Learning, and
                modern software engineering.

                <br /><br />

                I enjoy building intelligent systems, solving real-world
                problems, and designing elegant digital experiences
                through creativity and technology.

              </p>

            </div>

            <div className="space-y-6">

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition duration-300">

                <h3 className="text-2xl font-semibold mb-3">
                  Education
                </h3>

                <p className="text-zinc-400 leading-7">
                  B.Tech Computer Science and Business Systems (Honors)
                  <br />
                  Ramco Institute of Technology
                  <br />
                  2022 – 2026
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition duration-300">

                <h3 className="text-2xl font-semibold mb-3">
                  Leadership
                </h3>

                <p className="text-zinc-400 leading-7">
                  Secretary — RIT TECHNEBIZ
                  <br />
                  Class Representative
                  <br />
                  Active CSI & ACM Member
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition duration-300">

                <h3 className="text-2xl font-semibold mb-3">
                  Career Goal
                </h3>

                <p className="text-zinc-400 leading-7">
                  Aspiring AI Engineer focused on developing intelligent,
                  scalable, and impactful software solutions using modern
                  AI technologies and software engineering practices.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="relative py-28 px-6"
      >

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-20"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {[
            "Python",
            "Machine Learning",
            "Artificial Intelligence",
            "SQL",
            "Java",
            "React",
            "OpenCV",
            "GitHub",
            "JavaScript",
            "Linux",
            "Tailwind CSS",
            "Problem Solving"
          ].map((skill) => (

            <motion.div
              whileHover={{ y: -10 }}
              key={skill}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/10 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition duration-300"
            >
              {skill}
            </motion.div>

          ))}

        </div>

      </section>

{/* PROJECTS SECTION */}
<section
  id="projects"
  className="relative py-28 px-6"
>

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-7xl mx-auto"
  >

    <div className="text-center mb-20">

      <h2 className="text-5xl font-bold mb-6">
        Case Study Projects
      </h2>

      <p className="text-zinc-400 text-xl leading-8 max-w-3xl mx-auto">
        A showcase of intelligent systems, AI-driven solutions,
        and software engineering projects built with innovation,
        research, and real-world problem solving.
      </p>

    </div>

    <div className="space-y-12">

      {/* PROJECT 1 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(34,211,238,0.18)] transition duration-300"
      >

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-8">

          <div>

            <h3 className="text-4xl font-bold mb-4">
              Constraint-Aware Reinforcement Learning
            </h3>

            <p className="text-cyan-400 text-lg">
              AI-Based Cascading Failure Mitigation System
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            {[
              "Python",
              "PPO",
              "A2C",
              "Grid2Op",
              "Pandapower",
              "Reinforcement Learning"
            ].map((tech) => (

              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-8">

            <div>

              <h4 className="text-2xl font-semibold mb-3">
                Problem Statement
              </h4>

              <p className="text-zinc-400 leading-8">
                Modern power systems are vulnerable to cascading failures,
                where a single fault can propagate rapidly and lead to
                widespread outages. This project focuses on designing
                an intelligent mitigation system capable of making
                adaptive real-time decisions under operational constraints.
              </p>

            </div>

            <div>

              <h4 className="text-2xl font-semibold mb-3">
                My Contribution
              </h4>

              <ul className="space-y-3 text-zinc-400 leading-8">

                <li>
                  • Developed reinforcement learning agents using PPO and A2C algorithms
                </li>

                <li>
                  • Integrated Grid2Op and Pandapower for smart-grid simulations
                </li>

                <li>
                  • Designed custom reward engineering strategies
                </li>

                <li>
                  • Implemented intelligent load shedding and network reconfiguration
                </li>

                <li>
                  • Evaluated resilience using IEEE 14-Bus network scenarios
                </li>

              </ul>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-8">

            <div>

              <h4 className="text-2xl font-semibold mb-3">
                Key Features
              </h4>

              <ul className="space-y-3 text-zinc-400 leading-8">

                <li>★ Constraint-aware decision making</li>
                <li>★ Voltage stability optimization</li>
                <li>★ Smart contingency handling</li>
                <li>★ Cascade propagation reduction</li>
                <li>★ Reinforcement learning-based control actions</li>

              </ul>

            </div>

            <div>

              <h4 className="text-2xl font-semibold mb-3">
                Outcome
              </h4>

              <p className="text-zinc-400 leading-8">
                Successfully developed an AI-driven mitigation framework
                capable of improving grid resilience and minimizing
                cascading failure propagation through intelligent
                adaptive control strategies.
              </p>

            </div>

          </div>

        </div>

      </motion.div>

      {/* PROJECT 2 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl hover:border-violet-400 hover:shadow-[0_0_50px_rgba(139,92,246,0.18)] transition duration-300"
      >

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-8">

          <div>

            <h3 className="text-4xl font-bold mb-4">
              Employee Leave Management System
            </h3>

            <p className="text-violet-400 text-lg">
              Face Recognition Based Smart Authentication Platform
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            {[
              "PHP",
              "MySQL",
              "JavaScript",
              "HTML",
              "Face Recognition"
            ].map((tech) => (

              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-violet-400/10 border border-violet-400/20 text-violet-300 text-sm"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="space-y-8">

            <div>

              <h4 className="text-2xl font-semibold mb-3">
                Problem Statement
              </h4>

              <p className="text-zinc-400 leading-8">
                Traditional employee leave systems often lack secure
                authentication and efficient approval workflows.
                This project introduces a smart web-based leave
                management platform integrated with face-recognition
                authentication for improved security and automation.
              </p>

            </div>

            <div>

              <h4 className="text-2xl font-semibold mb-3">
                My Contribution
              </h4>

              <ul className="space-y-3 text-zinc-400 leading-8">

                <li>• Developed complete leave application workflows</li>
                <li>• Integrated face-recognition-based authentication</li>
                <li>• Designed role-based access control systems</li>
                <li>• Created MySQL database architecture</li>
                <li>• Built responsive web interfaces</li>

              </ul>

            </div>

          </div>

          <div className="space-y-8">

            <div>

              <h4 className="text-2xl font-semibold mb-3">
                Key Features
              </h4>

              <ul className="space-y-3 text-zinc-400 leading-8">

                <li>★ Secure biometric authentication</li>
                <li>★ Automated leave approval workflow</li>
                <li>★ Employee attendance tracking</li>
                <li>★ Role-based dashboard management</li>
                <li>★ Database-driven operations</li>

              </ul>

            </div>

            <div>

              <h4 className="text-2xl font-semibold mb-3">
                Outcome
              </h4>

              <p className="text-zinc-400 leading-8">
                Developed a secure and efficient employee management
                system capable of simplifying organizational leave
                processing while enhancing authentication security.
              </p>

            </div>

          </div>

        </div>

      </motion.div>

      {/* PROJECT 3 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl hover:border-pink-400 hover:shadow-[0_0_50px_rgba(236,72,153,0.18)] transition duration-300"
      >

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-8">

          <div>

            <h3 className="text-4xl font-bold mb-4">
              Movie Recommendation System
            </h3>

            <p className="text-pink-400 text-lg">
              Personalized Recommendation Engine
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            {[
              "Python",
              "KNN",
              "Machine Learning",
              "MySQL",
              "Collaborative Filtering"
            ].map((tech) => (

              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-pink-400/10 border border-pink-400/20 text-pink-300 text-sm"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="space-y-8">

            <div>

              <h4 className="text-2xl font-semibold mb-3">
                Problem Statement
              </h4>

              <p className="text-zinc-400 leading-8">
                Users often struggle to discover personalized movie
                recommendations from massive datasets. This project
                focuses on building an intelligent recommendation
                engine capable of predicting user preferences based
                on similarity analysis and collaborative filtering.
              </p>

            </div>

            <div>

              <h4 className="text-2xl font-semibold mb-3">
                My Contribution
              </h4>

              <ul className="space-y-3 text-zinc-400 leading-8">

                <li>• Processed MovieLens dataset for analysis</li>
                <li>• Implemented KNN-based recommendation logic</li>
                <li>• Applied collaborative filtering techniques</li>
                <li>• Optimized recommendation accuracy</li>
                <li>• Performed user-rating similarity analysis</li>

              </ul>

            </div>

          </div>

          <div className="space-y-8">

            <div>

              <h4 className="text-2xl font-semibold mb-3">
                Key Features
              </h4>

              <ul className="space-y-3 text-zinc-400 leading-8">

                <li>★ Personalized movie recommendations</li>
                <li>★ KNN similarity-based predictions</li>
                <li>★ Collaborative filtering engine</li>
                <li>★ Data preprocessing & optimization</li>
                <li>★ Improved recommendation accuracy</li>

              </ul>

            </div>

            <div>

              <h4 className="text-2xl font-semibold mb-3">
                Outcome
              </h4>

              <p className="text-zinc-400 leading-8">
                Successfully developed a machine learning-powered
                recommendation engine capable of generating accurate
                personalized movie suggestions based on user behavior
                and preference analysis.
              </p>

            </div>

          </div>

        </div>

      </motion.div>

    </div>

  </motion.div>

</section>


      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative py-28 px-6"
      >

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >

          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="text-zinc-400 text-xl leading-8 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities,
              collaborations, or innovative AI projects.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT CONTACT INFO */}
            <div className="space-y-8">

              <h3 className="text-4xl font-bold mb-12">
                Let's Connect
              </h3>

              {/* EMAIL */}
              <div className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition duration-300">

                <div className="text-cyan-400 text-3xl">
                  ✉
                </div>

                <div>

                  <p className="text-xl font-semibold mb-2">
                    Email
                  </p>

                  <a
                    href="mailto:sanjanathangavel8@gmail.com"
                    className="text-zinc-400 hover:text-cyan-400 transition break-all"
                  >
                    sanjanathangavel8@gmail.com
                  </a>

                </div>

              </div>

              {/* LINKEDIN */}
              <div className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#0077B5] hover:shadow-[0_0_40px_rgba(0,119,181,0.25)] transition duration-300">

                <div className="text-[#0077B5] text-3xl">
                  in
                </div>

                <div>

                  <p className="text-xl font-semibold mb-2">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/sanjana-sri-0530a5256/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-[#0077B5] transition break-all"
                  >
                    linkedin.com/in/sanjana-sri-0530a5256
                  </a>

                </div>

              </div>

              {/* GITHUB */}
              <div className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition duration-300">

                <div className="text-white text-3xl">
                  ⌘
                </div>

                <div>

                  <p className="text-xl font-semibold mb-2">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition break-all"
                  >
                    github.com/yourgithub
                  </a>

                </div>

              </div>

            </div>

            {/* RIGHT CONTACT FORM */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-10 hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] transition duration-300">

              <form className="space-y-8">

                {/* NAME */}
                <div>

                  <label className="block text-lg font-medium mb-3">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-[#0b1120] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label className="block text-lg font-medium mb-3">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full bg-[#0b1120] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                  />

                </div>

                {/* SUBJECT */}
                <div>

                  <label className="block text-lg font-medium mb-3">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="w-full bg-[#0b1120] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                  />

                </div>

                {/* MESSAGE */}
                <div>

                  <label className="block text-lg font-medium mb-3">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Your message..."
                    className="w-full bg-[#0b1120] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
                  ></textarea>

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-cyan-400 text-black text-lg font-semibold hover:scale-[1.02] transition duration-300"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </motion.div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-zinc-500">

        © 2026 Sanjana Sri. Crafted with passion & creativity.

      </footer>

    </main>
  );
}

