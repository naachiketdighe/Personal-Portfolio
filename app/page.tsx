"use client"

import { useState, useEffect } from "react"
import { Leaf, Sun, Sprout, Trees, Send, Menu, X, ExternalLink, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)
  const [floatingElements, setFloatingElements] = useState<
    Array<{ id: number; x: number; y: number; size: number; type: string }>
  >([])

  // Create floating nature elements
  useEffect(() => {
    const interval = setInterval(() => {
      if (floatingElements.length < 12) {
        setFloatingElements((prev) => [
          ...prev,
          {
            id: Math.random(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 6 + 3,
            type: Math.random() > 0.5 ? "leaf" : "light",
          },
        ])
      } else {
        setFloatingElements((prev) => prev.slice(1))
      }
    }, 1500)

    return () => clearInterval(interval)
  }, [floatingElements.length])

  const sections = [
    { id: "home", label: "Home", icon: <Trees className="h-4 w-4" /> },
    { id: "about", label: "About Me", icon: <Sprout className="h-4 w-4" /> },
    { id: "skills", label: "Skills", icon: <Sun className="h-4 w-4" /> },
    { id: "projects", label: "Projects", icon: <Leaf className="h-4 w-4" /> },
    { id: "year-review", label: "Year Review", icon: <Sun className="h-4 w-4" /> },
    { id: "showcase", label: "Showcase", icon: <Sprout className="h-4 w-4" /> },
    { id: "contact", label: "Contact", icon: <Leaf className="h-4 w-4" /> },
  ]

  // Project data
  const projects = [
    {
      name: "Friends Show Insights",
      desc: "Interactive data visualization platform leveraging D3.js and custom Python ETL scripts to analyze and display character relationships and episode metrics from the popular TV series.",
      tech: "D3.js, Python, ETL, Data Visualization",
      link: "https://knowyourfriends.netlify.app/",
      inDevelopment: false,
    },
    {
      name: "Portfolio Website",
      desc: "Responsive professional showcase built with TypeScript, Next.js, and TailwindCSS, featuring dynamic content rendering, optimized image loading, and custom animations for an elevated user experience.",
      tech: "TypeScript, Next.js, TailwindCSS",
      link: "https://github.com/yourusername/portfolio-website",
      inDevelopment: false,
    },
    {
      name: "Life Management App",
      desc: "Developing a scalable life organization tool with a Next.js frontend and PostgreSQL backend, focused on helping users consolidate calendars, notes, goals, and personal records.",
      tech: "Next.js, PostgreSQL, TypeScript",
      link: "https://www.ikiwi.io/",
      inDevelopment: true,
    },
    {
      name: "CRM Lite",
      desc: "Creating a modular, cost-effective CRM system with essential contact and deal tracking to help startups scale without investing in enterprise platforms.",
      tech: "TypeScript, Next.js, Supabase, PostgreSQL, TailwindCSS",
      link: "http://app.emc2rm.com/",
      inDevelopment: true,
    },
    {
      name: "AWS Login Page",
      desc: "Developed a simple login page using Flask on an AWS EC2 instance and configured Nginx server and Gunicorn to keep the instance running.",
      tech: "Python, Flask, SQLite, AWS EC2, Nginx, Gunicorn",
      link: "https://github.com/naachiketdighe/AWS-Login-Page",
      inDevelopment: false,
    },
    {
      name: "Gamified Canvas",
      desc: "Collaborated closely with two other Computer Science majors to research and develop a website for an alternate version of Canvas. Spearheaded the development by splitting and assigning tasks, leveraging React Router and Navbar to create navigation paths.",
      tech: "React.js, Vite",
      link: "https://github.com/naachiketdighe/Gamified-Canvas-Acan",
      inDevelopment: false,
    },
    {
      name: "World Cup News Live API",
      desc: "Developed a REST API that takes the URL of multiple sports websites and scrapes data containing live news about the World Cup and returns the article's title and URL in JSON format to the user.",
      tech: "Node.js, Express, Axios, Cheerio, RapidAPI",
      link: "https://github.com/naachiketdighe/World-Cup-News-Live-API",
      inDevelopment: false,
    },
    {
      name: "LPR Software",
      desc: "Implemented image capture with Picamera, processing over 100 frames/images via OpenCV and its supporting libraries, and incorporated image-to-text functionality using Tesseract for further analysis.",
      tech: "Python, Raspberry Pi, OpenCV, Tesseract",
      link: "https://github.com/yourusername/lpr-software",
      inDevelopment: false,
    },
  ]

  return (
    <div className="bg-gradient-to-br from-teal-950 via-cyan-900 to-teal-950 text-emerald-50 h-screen w-screen overflow-hidden flex flex-col relative">
      {/* Floating elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className={`absolute rounded-full pointer-events-none animate-float transition-opacity duration-1000
            ${
              element.type === "leaf"
                ? "bg-gradient-to-br from-teal-400 to-cyan-300"
                : "bg-gradient-to-br from-amber-200 to-yellow-100"
            }`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: 0.4,
            boxShadow:
              element.type === "leaf"
                ? `0 0 ${element.size * 2}px ${element.size}px rgba(45, 212, 191, 0.2)`
                : `0 0 ${element.size * 2}px ${element.size}px rgba(251, 191, 36, 0.2)`,
          }}
        />
      ))}

      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6 border-b border-cyan-800/50 bg-teal-950/80 backdrop-blur-sm z-10">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-full flex items-center justify-center">
            <Sprout className="h-5 w-5 text-teal-950" />
          </div>
          <span className="font-serif font-semibold text-lg text-amber-200">Naachoes</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`text-sm font-medium transition-colors flex items-center gap-2 px-3 py-1 rounded-full
                ${
                  activeSection === section.id
                    ? "text-teal-900 bg-gradient-to-r from-amber-200 to-yellow-200"
                    : "text-cyan-200 hover:text-amber-200"
                }`}
            >
              {section.icon}
              {section.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden text-cyan-300" onClick={() => setMenuOpen(true)}>
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-teal-950/95 backdrop-blur-sm z-50 flex flex-col p-4">
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)} className="text-amber-200">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id)
                  setMenuOpen(false)
                }}
                className="text-xl font-serif font-medium text-amber-200 flex flex-col items-center gap-2"
              >
                <div className="h-12 w-12 rounded-full bg-cyan-800/50 flex items-center justify-center">
                  {section.icon}
                </div>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-hidden relative">
        {/* Home Section */}
        {activeSection === "home" && (
          <div className="h-full flex flex-col md:flex-row relative">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent" />
            </div>
            <div className="flex-1 flex flex-col justify-center p-8 md:p-12 z-10">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                <span className="block text-amber-200">Nachiket</span>
                <span className="block bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent">
                  Dighe
                </span>
              </h1>
              <p className="text-cyan-200 mb-8 max-w-md font-serif">
                Data-driven engineer with 1.5+ years of experience building ML solutions, ETL piplines and automated
                analytics systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="w-fit bg-gradient-to-r from-amber-400 to-yellow-300 text-teal-900 hover:from-amber-300 hover:to-yellow-200 border-none"
                  onClick={() => setActiveSection("projects")}
                >
                  View My Work <Sprout className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-fit bg-gradient-to-r from-cyan-400 to-teal-300 text-teal-900 hover:from-cyan-300 hover:to-teal-200 border-none"
                  onClick={() => window.open("https://bronze-piper-19.tiiny.site", "_blank")}
                >
                  View Resume <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 relative hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-cyan-300/20 rounded-full animate-pulse" />
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-800/30 to-teal-700/30 backdrop-blur-md flex items-center justify-center border border-cyan-600/50">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-300/20 backdrop-blur-md flex items-center justify-center border border-amber-400/50">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-300/20 to-teal-200/20 backdrop-blur-md border border-cyan-300/50 flex items-center justify-center">
                      <Sun className="h-12 w-12 text-amber-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === "about" && (
          <div className="h-full flex flex-col md:flex-row p-6 md:p-12 relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent" />
            </div>
            <div className="flex-1 flex flex-col justify-center z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-amber-200">About Me</h2>
              <div className="grid gap-6 max-w-xl">
                <p className="text-cyan-200 font-serif">
                  Hi, I am Nachi, a SWE with loads of experience. Did you know, laughing out aloud is illegal in Hawaii,
                  so they always laugh in a a low ha?
                </p>
                <p className="text-cyan-200 font-serif">
                  I specialize in transforming complex bussiness challenges through analytics, automation, machine
                  learning, or old school code haha. I have explored various fields, such as working on the
                  memory-management system of a legacy C app, fine-tuning a large language model built on BERT,
                  high-perormance ETL piplines and developing predeictive models using Python, full stack web
                  development using Flask and JavaScript, and full stack IOS app development using Swift and Python.
                </p>
                <p className="text-cyan-200 font-serif">
                  When I'm not coding, or building side projects, you can find me in the gym, looking at other people
                  work out, of-course! I also enjoy hiking, playing soccer and pickleball, eating the same food for the
                  tenth time of the week and grabbing drinks with my friends.
                </p>
              </div>
            </div>
            <div className="flex-1 hidden md:flex items-center justify-center z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-cyan-300/20 rounded-full animate-pulse" />
                <div className="h-64 w-64 rounded-full bg-gradient-to-br from-cyan-800/30 to-teal-700/30 backdrop-blur-md flex items-center justify-center border border-cyan-600/50">
                  <div className="h-48 w-48 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-300/20 backdrop-blur-md border border-amber-400/50 flex items-center justify-center">
                    <Sprout className="h-16 w-16 text-amber-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <div className="h-full p-6 md:p-12 flex flex-col relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-amber-200 z-10">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 overflow-auto z-10 pb-6">
              {[
                { name: "Languages", desc: "Java, Python, JavaScript (ES6+), C++, SQL, C#" },
                { name: "Backend", desc: "REST APIs, Microservices, Dropwizard, Flask, Spring Boot, Supabase" },
                { name: "Frontend", desc: "React, TypeScript, Sass, Angular, ASP.NET" },
                {
                  name: "Data Infrastructure",
                  desc: "Kafka, Spark, Elasticsearch, AWS (EC2, Lambda, OpenSearch, S3), HBase",
                },
                { name: "Dev Ops", desc: "Docker, Kubernetes, CI/CD, MySQL, Citrix Endpoint Management" },
                { name: "Methodologies & Testing", desc: "Agile (Scrum, Kanban), Unit testing" },
              ].map((skill, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-cyan-800/30 to-teal-700/30 backdrop-blur-sm border-cyan-600/50 overflow-hidden group hover:border-amber-400/50 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-300/20 flex items-center justify-center mb-3 border border-amber-400/50 group-hover:from-amber-400/30 group-hover:to-yellow-300/30 transition-all duration-300">
                      <Sprout className="h-5 w-5 text-amber-200" />
                    </div>
                    <h3 className="font-medium font-serif text-amber-200">{skill.name}</h3>
                    <p className="text-cyan-200 text-sm mt-1">{skill.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <div className="h-full p-6 md:p-12 flex flex-col relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-amber-200 z-10">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 overflow-auto z-10 pb-6">
              {projects.map((project, index) => (
                <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="block group">
                  <Card
                    className="bg-gradient-to-br from-cyan-800/30 to-teal-700/30 backdrop-blur-sm border-cyan-600/50 
                    overflow-hidden group-hover:border-amber-400/50 transition-all duration-300 h-full"
                  >
                    <CardContent className="p-6 relative">
                      <div className="flex justify-between items-start mb-3">
                        <div
                          className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-300/20 
                        flex items-center justify-center border border-amber-400/50 group-hover:from-amber-400/30 
                        group-hover:to-yellow-300/30 transition-all duration-300"
                        >
                          <Leaf className="h-5 w-5 text-amber-200" />
                        </div>
                        {project.inDevelopment && (
                          <span className="text-xs bg-amber-400/20 text-amber-200 px-2 py-1 rounded-full">
                            In Development
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium font-serif text-amber-200 text-xl">{project.name}</h3>
                        <ExternalLink className="h-4 w-4 text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-cyan-200 mt-2">{project.desc}</p>
                      <div className="mt-4 pt-4 border-t border-cyan-800/50">
                        <p className="text-amber-200/70 text-sm font-medium">Technologies:</p>
                        <p className="text-cyan-200 text-sm">{project.tech}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Year Review Section */}
        {activeSection === "year-review" && (
          <div className="h-full p-6 md:p-12 flex flex-col relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-amber-200 z-10">Year in Review</h2>
            <div className="flex-1 overflow-auto z-10">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-600 before:via-cyan-400 before:to-amber-300">
                {[
                  {
                    month: "January",
                    title: "2024 Spring semester",
                    desc: "Set goals to acheive a 4.0 gpa this semester and work on 3+ personal projects.",
                  },
                  {
                    month: "March",
                    title: "First major project",
                    desc: "Completed and launched a full-stack website related to Canvas LMS.",
                  },
                  {
                    month: "June",
                    title: "End of semester and second major project",
                    desc: "Ended semeseter with 4.0 GPA, and started working on a personal CRM tool for lifestyle management.",
                  },
                  {
                    month: "September",
                    title: "End of Data Science co-op with Delta Air Lines",
                    desc: "Final co-op semester with Delta, learnt a lot of important tools and got a positive feedback.",
                  },
                  {
                    month: "December",
                    title: "Year End Reflection",
                    desc: "Return back home to India, to prep for study abroad next semester in Spain!",
                  },
                ].map((event, index) => (
                  <div key={index} className="relative flex items-start group md:flex-col md:items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-amber-400 bg-teal-900 text-amber-200 font-medium z-10 shadow-md md:mb-2">
                      {index + 1}
                    </div>
                    <div className="ml-6 md:ml-0 md:w-full md:max-w-md">
                      <Card className="bg-gradient-to-br from-cyan-800/30 to-teal-700/30 backdrop-blur-sm border-cyan-600/50 overflow-hidden group-hover:border-amber-400/50 transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium font-serif text-amber-200">{event.title}</h3>
                            <span className="text-xs text-cyan-300 bg-teal-900/50 px-2 py-1 rounded-full">
                              {event.month}
                            </span>
                          </div>
                          <p className="text-cyan-200 text-sm">{event.desc}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Showcase Section */}
        {activeSection === "showcase" && (
          <div className="h-full p-6 md:p-12 flex flex-col relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-amber-200 z-10">
              Honors Learning Portfolio
            </h2>
            <p className="text-cyan-200 mb-6 z-10">Showcasing my experiences as a Global Citizen Scholar</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-auto z-10">
              {[
                {
                  id: "student-orientation-leader",
                  title: "Student Orientation Leader",
                  desc: "Welcoming new students to campus and facilitating their transition to college life through tours, information sessions, and orientation events.",
                },
                {
                  id: "honors-belong-coordinator",
                  title: "Honors Belong Coordinator",
                  desc: "Promoting diversity and inclusion through educational programming, including a Women's History Month Jeopardy event.",
                },
                {
                  id: "spain-study-work-abroad",
                  title: "Spain Study & Work Abroad",
                  desc: "Immersing in Spanish culture and language while studying and working in Bilbao, Spain.",
                },
                {
                  id: "personal-portfolio-website",
                  title: "Personal Portfolio Website",
                  desc: "Developing a responsive professional website using modern web technologies to showcase my skills and experiences.",
                },
                {
                  id: "ceas-ambassador-treasurer",
                  title: "CEAS Ambassador, Treasurer",
                  desc: "Representing the College of Engineering to prospective students while managing organizational finances.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-cyan-900/60 to-teal-800/60 backdrop-blur-sm 
                   border border-cyan-600/50 rounded-lg overflow-hidden relative group transition-all duration-300
                   hover:border-amber-400/50 cursor-pointer p-6"
                  onClick={() => {
                    // Navigate to the showcase item page
                    window.location.href = `/showcase/${item.id}`
                  }}
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-300/20 flex items-center justify-center mb-3 border border-amber-400/50 group-hover:from-amber-400/30 group-hover:to-yellow-300/30 transition-all duration-300">
                    <BookOpen className="h-5 w-5 text-amber-200" />
                  </div>
                  <h3 className="font-medium font-serif text-amber-200 text-xl mb-2 flex items-center">
                    {item.title}
                    <ExternalLink className="h-4 w-4 ml-2 text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-cyan-100 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <div className="h-full flex flex-col md:flex-row p-6 md:p-12 relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent" />
            </div>
            <div className="flex-1 flex flex-col justify-center z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-amber-200">Connect</h2>
              <div className="grid gap-6 max-w-xl">
                <p className="text-cyan-200 font-serif">
                  Feel free to connect, I am currently looking for full-time roles starting May, 2025
                </p>
                <div className="grid gap-2">
                  <p className="text-amber-200 font-medium font-serif">Nachiket Dighe</p>
                  <p className="text-cyan-200">nachiket0412@gmail.com</p>
                </div>
                <Button className="w-fit bg-gradient-to-r from-amber-400 to-yellow-300 text-teal-900 hover:from-amber-300 hover:to-yellow-200 border-none">
                  <Send className="mr-2 h-4 w-4" /> Send a Message
                </Button>
              </div>
            </div>
            <div className="flex-1 hidden md:flex items-center justify-center z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-cyan-300/20 rounded-full animate-pulse" />
                <div className="h-64 w-64 rounded-full bg-gradient-to-br from-cyan-800/30 to-teal-700/30 backdrop-blur-md flex items-center justify-center border border-cyan-600/50">
                  <div className="h-48 w-48 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-300/20 backdrop-blur-md border border-amber-400/50 flex items-center justify-center">
                    <Send className="h-16 w-16 text-amber-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
    </div>
  )
}
