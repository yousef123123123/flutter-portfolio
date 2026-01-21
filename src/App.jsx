import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Smartphone, Download, Menu, X, Phone, Star, Award, Users, Apple } from 'lucide-react';

export default function FlutterPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState({});
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (src) => {
    setLoadedImages(prev => new Set([...prev, src]));
  };

  const projects = [
    {
      title: "SabPay",
      subtitle: "Payment Gateway Solution",
      description: "Powerful payment gateway for businesses of all sizes. Create secure payment links, receive real-time updates, and manage transactions with ease.",
      tech: ["Flutter", "Firebase", "Payment Gateway", "Provider"],
      screenshots: [
        "https://play-lh.googleusercontent.com/DZyvJU1VFyXxx4CiquVTDXRlLesJbq2h0vxfbRECMkMvvHa3zgTbybinVGF-pDPg8AQ=w526-h296",
        "https://play-lh.googleusercontent.com/b1Bea32ePEPYaTF1uu17ln9Wrf8DIJftq8DTbT0JDYgXW34DB8drYs0cLyU9xPUiO3M=w526-h296",
        "https://play-lh.googleusercontent.com/ju_AU9_54p83zDsgjdSNcUXaRbl-NQUGYIkWFyhzPR0wAr_WW6fgoRdtSaA2EuQNoIc=w526-h296"
      ],
      icon: "https://play-lh.googleusercontent.com/03r6vk1QQ6QXguZj3Yu2ceW1SWbex04MYwdP41YyPjuuMY2bHwH7B74OHLRypQhiOoI=w240-h480",
      github: "https://github.com/yousef123123123",
      playstore: "https://play.google.com/store/apps/details?id=com.ex.sabpay",
      stats: { downloads: "50+", rating: "New", reviews: "Growing" },
      features: ["Secure Payment Links", "Real-time Updates", "Transaction Management", "Top Security", "Easy Integration"]
    },
    {
      title: "Maghsool",
      subtitle: "Laundry Services",
      description: "Complete laundry and ironing solution connecting users with local laundries. Order services with one tap and track in real-time.",
      tech: ["Flutter", "Google Maps", "Payment Integration", "Bloc"],
      screenshots: [
        "https://play-lh.googleusercontent.com/RPiYKUmNAkV_r-eVmGpcNbymdP-rsFiBOpe29TaByJdFbRdUb1NtIZ6mvl99oXOVkA=w526-h296",
        "https://play-lh.googleusercontent.com/7ZIyGK-RG9Fu97rMPq6VOVGhZN7vew3Bn2OsU9e6vmgi9MmKDX_S0aw1Q6tbkyo3ylc=w526-h296",
        "https://play-lh.googleusercontent.com/Ip9IIkJKVtHC98A5mVXpAWkJGpMMUpUZTm1lLTNO4scXOh4yl0iBrIyaSeaw5Y3fw38=w526-h296"
      ],
      icon: "https://play-lh.googleusercontent.com/pRFSE2kgwp-KvzGalXfcQcrXtIOmOlykIPvqUTRIdxsyTL_PR3dJ-bDCBJaILuA7umo=w240-h480",
      github: "https://github.com/yousef123123123",
      playstore: "https://play.google.com/store/apps/details?id=com.aait.maghsool",
      stats: { downloads: "10+", rating: "New", reviews: "Growing" },
      features: ["Find Laundries", "Order Tracking", "Secure Payment", "Special Offers", "Multiple Services"]
    },
    {
      title: "Remain",
      subtitle: "Inventory Management",
      description: "Professional inventory management for businesses. Track stock, manage orders, and monitor inventory in real-time.",
      tech: ["Flutter", "REST API", "Charts", "Provider"],
      screenshots: [
        "/images/remain-screenshot.webp"
      ],
      icon: "https://via.placeholder.com/240x240/3498db/FFFFFF?text=R",
      appstore: "https://apps.apple.com/sa/app/remain/id6670443386",
      github: "https://github.com/yousef123123123",
      stats: { downloads: "iOS", rating: "New", reviews: "Growing" },
      features: ["Real-time Inventory", "Order Management", "Analytics", "Multi-location", "Reports"]
    },
    {
      title: "EZ Academy",
      subtitle: "Learning Platform",
      description: "Educational platform with courses, interactive lessons, and progress tracking. Video lessons, quizzes, and certificates.",
      tech: ["Flutter", "Video Player", "Firebase", "Bloc"],
      screenshots: [
        "/images/ezacademy-screenshot.webp"
      ],
      icon: "https://via.placeholder.com/240x240/FF6B35/FFFFFF?text=EZ",
      appstore: "https://apps.apple.com/us/app/ez-academy/id1671893533",
      github: "https://github.com/yousef123123123",
      stats: { downloads: "iOS", rating: "4.5", reviews: "Excellent" },
      features: ["Video Courses", "Quizzes", "Progress Tracking", "Certificates", "Offline Access"]
    },
    {
      title: "Remain Derma",
      subtitle: "Medical & Cosmetic Services",
      description: "Book dermatologists and skin treatment sessions easily. A comprehensive medical app for a chain of cosmetic and dermatology clinics in Saudi Arabia.",
      tech: ["Flutter", "Firebase", "REST API", "Bloc"],
      screenshots: [
        "/images/derma-screenshot.webp"
      ],
      icon: "/images/remain_logo_launch_icon.png",
      playstore: "https://play.google.com/store/apps/details?id=com.quick.derma",
      github: "https://github.com/yousef123123123",
      stats: { downloads: "500+", rating: "4.5", reviews: "Excellent" },
      features: ["Dermatologist Booking", "Skin Treatment Sessions", "Medical Records", "Real-time Notifications", "Secure Payments"]
    },
    {
      title: "InClass KW",
      subtitle: "Educational Courses Platform",
      description: "A comprehensive educational platform for online courses in Kuwait. Browse courses, track progress, and learn at your own pace.",
      tech: ["Flutter", "Firebase", "Video Player", "Bloc"],
      screenshots: [
        "/images/inclasskw-screen.webp"
      ],
      icon: "/images/inclass-logo.png",
      appstore: "https://apps.apple.com/ca/app/inclass-kw/id6756549666",
      github: "https://github.com/yousef123123123",
      stats: { downloads: "iOS", rating: "New", reviews: "Growing" },
      features: ["Online Courses", "Video Lessons", "Progress Tracking", "Certificate Generation", "Multi-language Support"]
    }
  ];

  const skills = [
    {
      category: "Mobile Development",
      items: ["Flutter", "Dart", "iOS", "Android", "Responsive Design", "Material Design"]
    },
    {
      category: "State Management",
      items: ["Provider", "Bloc", "Riverpod", "GetX", "Redux", "MobX"]
    },
    {
      category: "Backend & APIs",
      items: ["Firebase", "REST APIs", "GraphQL", "Node.js", "MongoDB", "SQL"]
    },
    {
      category: "Tools & Deployment",
      items: ["Git", "CI/CD", "Figma", "App Store", "Play Store", "Fastlane"]
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const changeScreenshot = (projectIndex, screenshotIndex) => {
    setActiveScreenshot(prev => {
      const updated = { ...prev };
      updated[projectIndex] = screenshotIndex;
      return updated;
    });
  };

  const getCurrentScreenshot = (projectIndex) => {
    return activeScreenshot[projectIndex] || 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse will-change-transform hidden sm:block"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse will-change-transform hidden sm:block"></div>
      </div>

      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-lg z-50 border-b border-purple-500/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Yousef Gamal
            </h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 transition">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-purple-400 transition">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition">Contact</button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-purple-400">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-purple-400">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-purple-400">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-purple-400">Contact</button>
            </div>
          )}
        </div>
      </nav>

      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-6 sm:mb-8">
            <div className="w-40 h-40 sm:w-52 sm:h-52 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 p-1.5 shadow-2xl">
              <img
                src="/images/profile.jpg"
                alt="Yousef Gamal"
                className="w-full h-full rounded-full object-cover border-4 border-slate-900 bg-slate-800"
                loading="eager"
                decoding="async"
                onLoad={() => handleImageLoad('/images/profile.jpg')}
              />
            </div>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent px-4">
            Flutter Developer
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-3 sm:mb-4 max-w-3xl mx-auto px-4">
            Building robust, scalable cross-platform applications
          </p>
          <p className="text-base sm:text-lg text-purple-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            with clean and maintainable architecture
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap mb-6 sm:mb-8 px-4">
            <a href="#contact" className="px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold shadow-lg">
              <Mail size={20} className="sm:w-[22px] sm:h-[22px]" />
              Get In Touch
            </a>
            <a href="https://docs.google.com/document/d/1eP5SvvBdKs8g12vHFDDGmZRdZZD6sdN8qxui5w3017k/edit" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-10 py-3 sm:py-4 bg-slate-800/80 rounded-full hover:bg-slate-700 transition flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold border-2 border-purple-500/30">
              <Download size={20} className="sm:w-[22px] sm:h-[22px]" />
              Download CV
            </a>
          </div>

          <div className="flex gap-8 justify-center">
            <a href="https://github.com/yousef123123123" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/yousef-gamal-5486aa237/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              <Linkedin size={32} />
            </a>
            <a href="mailto:youssifgamal123@gmail.com" className="hover:text-purple-400 transition">
              <Mail size={32} />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-slate-900/70 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h3>
          <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                I am a Flutter Developer with over 2 years of experience and hold a Bachelor's degree in Computer Science.
              </p>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                I specialize in building robust, scalable, cross-platform applications with clean and maintainable architecture.
              </p>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                My expertise includes state management, API integration, Firebase services, and publishing apps to both App Store and Play Store.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="bg-purple-600/20 p-4 sm:p-6 lg:p-8 rounded-2xl border-2 border-purple-500/30 hover:border-purple-500/60 transition">
                <Code size={24} className="sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-3" />
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-400 mb-1 sm:mb-2">10+</div>
                <div className="text-gray-300 text-sm sm:text-base">Apps Built</div>
              </div>
              <div className="bg-pink-600/20 p-4 sm:p-6 lg:p-8 rounded-2xl border-2 border-purple-500/30 hover:border-purple-500/60 transition">
                <Award size={24} className="sm:w-8 sm:h-8 text-pink-400 mb-2 sm:mb-3" />
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-400 mb-1 sm:mb-2">2+</div>
                <div className="text-gray-300 text-sm sm:text-base">Years Experience</div>
              </div>
              <div className="bg-yellow-600/20 p-4 sm:p-6 lg:p-8 rounded-2xl border-2 border-purple-500/30 hover:border-purple-500/60 transition">
                <Star size={24} className="sm:w-8 sm:h-8 text-yellow-400 mb-2 sm:mb-3" />
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-1 sm:mb-2">B.Sc</div>
                <div className="text-gray-300 text-sm sm:text-base">Computer Science</div>
              </div>
              <div className="bg-green-600/20 p-4 sm:p-6 lg:p-8 rounded-2xl border-2 border-purple-500/30 hover:border-purple-500/60 transition">
                <Users size={24} className="sm:w-8 sm:h-8 text-green-400 mb-2 sm:mb-3" />
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 mb-1 sm:mb-2">100%</div>
                <div className="text-gray-300 text-sm sm:text-base">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h3>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur rounded-3xl overflow-hidden border-2 border-purple-500/30 hover:border-purple-500/60 transition shadow-2xl" style={{ contain: 'layout style' }}>
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <img src={project.icon} alt={project.title} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-lg flex-shrink-0 bg-slate-800" loading="lazy" decoding="async" onLoad={() => handleImageLoad(project.icon)} />
                      <div>
                        <h4 className="text-2xl sm:text-3xl font-bold mb-1">{project.title}</h4>
                        <p className="text-purple-400 text-base sm:text-lg">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-4 sm:mb-6">
                      <h5 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-purple-400">Key Features:</h5>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                            <span className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-8">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-600/30 rounded-full text-xs sm:text-sm border border-purple-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-8">
                      <div className="text-center p-2 sm:p-4 bg-slate-800/50 rounded-xl border border-purple-500/20">
                        <div className="text-lg sm:text-2xl font-bold text-purple-400">{project.stats.downloads}</div>
                        <div className="text-xs sm:text-sm text-gray-400">Downloads</div>
                      </div>
                      <div className="text-center p-2 sm:p-4 bg-slate-800/50 rounded-xl border border-purple-500/20">
                        <div className="text-lg sm:text-2xl font-bold text-pink-400">{project.stats.rating}</div>
                        <div className="text-xs sm:text-sm text-gray-400">Rating</div>
                      </div>
                      <div className="text-center p-2 sm:p-4 bg-slate-800/50 rounded-xl border border-purple-500/20">
                        <div className="text-lg sm:text-2xl font-bold text-yellow-400">{project.stats.reviews}</div>
                        <div className="text-xs sm:text-sm text-gray-400">Reviews</div>
                      </div>
                    </div>

                    <div className="flex gap-2 sm:gap-4 flex-wrap">
                      {project.playstore && (
                        <a href={project.playstore} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-700 hover:to-pink-700 transition flex items-center justify-center gap-2 text-sm sm:text-base font-semibold shadow-lg">
                          <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                          <span className="hidden sm:inline">Play Store</span>
                          <span className="sm:hidden">Play</span>
                        </a>
                      )}
                      {project.appstore && (
                        <a href={project.appstore} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-700 hover:to-pink-700 transition flex items-center justify-center gap-2 text-sm sm:text-base font-semibold shadow-lg">
                          <Apple size={18} className="sm:w-5 sm:h-5" />
                          <span className="hidden sm:inline">App Store</span>
                          <span className="sm:hidden">App</span>
                        </a>
                      )}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition flex items-center gap-2 text-sm sm:text-base font-semibold border-2 border-purple-500/30">
                        <Github size={18} className="sm:w-5 sm:h-5" />
                        <span className="hidden sm:inline">Code</span>
                      </a>
                    </div>
                  </div>

                  <div className="p-4 sm:p-8 lg:p-12 flex items-center justify-center bg-purple-900/20 order-1 lg:order-2">
                    <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none">
                      <div className="relative w-full max-w-[240px] sm:max-w-[280px] lg:w-80 mx-auto aspect-[9/19] lg:h-[640px] bg-slate-900 rounded-[2rem] sm:rounded-[3rem] border-4 sm:border-8 border-slate-800 shadow-2xl overflow-hidden will-change-transform">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 lg:w-40 h-4 sm:h-5 lg:h-7 bg-slate-900 rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl z-10"></div>
                        <div className="w-full h-full overflow-hidden">
                          <div className="flex transition-transform duration-300 sm:duration-500 will-change-transform" style={{ transform: `translateX(-${getCurrentScreenshot(index) * 100}%)` }}>
                            {project.screenshots.map((screenshot, i) => (
                              <img
                                key={i}
                                src={screenshot}
                                alt={project.title}
                                className="w-full h-full object-cover flex-shrink-0 bg-slate-800"
                                loading={i === 0 ? "eager" : "lazy"}
                                decoding="async"
                                onLoad={() => handleImageLoad(screenshot)}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
                          {project.screenshots.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => changeScreenshot(index, i)}
                              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition ${getCurrentScreenshot(index) === i ? 'bg-purple-400 w-4 sm:w-6' : 'bg-gray-500 hover:bg-gray-400'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-slate-900/70 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-purple-600/10 p-4 sm:p-6 lg:p-8 rounded-2xl border-2 border-purple-500/30 hover:border-purple-500/60 transition">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Smartphone className="text-purple-400 sm:w-6 sm:h-6" size={20} />
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold">{skillGroup.category}</h4>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Let's Work Together</h3>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 px-4">
            I'm available for freelance projects and full-time opportunities. Let's build something amazing!
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
            <a href="mailto:youssifgamal123@gmail.com" className="px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl hover:from-purple-700 hover:to-pink-700 transition flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold shadow-lg">
              <Mail size={20} className="sm:w-6 sm:h-6" />
              Email Me
            </a>
            <a href="tel:+201028823209" className="px-6 sm:px-8 py-4 sm:py-6 bg-slate-800/80 rounded-2xl hover:bg-slate-700 transition flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold border-2 border-purple-500/30">
              <Phone size={20} className="sm:w-6 sm:h-6" />
              Call Me
            </a>
            <a href="https://www.linkedin.com/in/yousef-gamal-5486aa237/" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-4 sm:py-6 bg-slate-800/80 rounded-2xl hover:bg-slate-700 transition flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold border-2 border-purple-500/30">
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
              LinkedIn
            </a>
            <a href="https://github.com/yousef123123123" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-4 sm:py-6 bg-slate-800/80 rounded-2xl hover:bg-slate-700 transition flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold border-2 border-purple-500/30">
              <Github size={20} className="sm:w-6 sm:h-6" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="relative py-8 px-4 sm:px-6 border-t border-purple-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Yousef Gamal. Built with React & Tailwind CSS</p>
          <p className="text-gray-500 text-sm mt-2">Crafted with 💜 in Cairo, Egypt</p>
        </div>
      </footer>
    </div>
  );
}
