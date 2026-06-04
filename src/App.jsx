import "./index.css";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}


function App() {
  // const skills = [
  //   "C#",
  //   "Java",
  //   "SQL",
  //   "TypeScript",
  //   "ASP.NET Core (.NET 8)",
  //   "Entity Framework Core",
  //   "RESTful APIs",
  //   "SignalR",
  //   "FastAPI",
  //   "React.js",
  //   "Next.js",
  //   "HTML/CSS",
  //   "SQL Server",
  //   "PostgreSQL",
  //   "MongoDB",
  //   "Relational Database Design",
  //   "JWT Authentication",
  //   "Role-based Authorization",
  //   "Docker",
  //   "CI/CD",
  //   "Azure",
  //   "Vietnix VPS",
  //   "Git",
  //   "GitHub",
  //   "Postman",
  //   "Swagger",
  //   "PayOS",
  //   "Cloudinary",
  //   "Gemini API",
  //   "STT/TTS",
  //   "GHN API",
  // ];
  

  const projects = [
  {
    name: "AESP - AI Speaking Practice Platform",
    category: "Web",
    image: "/AESP.png",
    description:
      "An AI-assisted English speaking practice platform with placement testing, AI scoring, learning paths, payment, coin rewards, and reviewer feedback.",
    tech: ["ASP.NET Core", "FastAPI", "Next.js", "SQL Server", "PayOS","ReactNative", "Cloudinary"],
    githubUrl: "https://github.com/kaizdawson/AESP",
    liveUrl: "https://www.aespwithai.com/landing",
  },
  {
    name: "AR Card Create Website",
    category: "Web",
    image: "/MNO.png",
    description:
      "A web-based platform that allows users to design AR greeting cards and share them via link or QR code, enabling interactive experiences on mobile devices.",
    tech: ["ASP.NET Core", "SQL Server", "Azure", "Gemini API", "React.js", "Cloudinary", "PayOS"],
    githubUrl: "https://github.com/kaizdawson/Monopolizers",
    liveUrl: "https://monopolizers.vercel.app/homepage",
  },
  {
    name: "SBE - Used Sports Bicycle Exchange Platform",
    category: "Web",
    image: "/SBE.png",
    description:
      "An online marketplace for used sports bicycles with listing management, online inspection, 5-minute listing lock, PayOS payment, GHN shipping integration, escrow flow, refund handling, and role-based workflows for Buyer, Seller, Inspector, and Admin.",
    tech: [ "ASP.NET Core",
    "RESTful APIs",
    "Groq AI",
    "GHN API",
    "SQL Server",
    "PayOS",
    "GHN API",
    "JWT",
    "RBAC",
    "React.js",],
    githubUrl: "https://github.com/SWP-SportsBicycles/used-bicycle-exchange-FE",
    liveUrl: "https://used-bicycle-exchange-fe.vercel.app/marketplace",
  },
  {
  name: "Ecommerce Tea Shop - Online Tea Store",
  category: "Web",
  image: "/TeaValut.png",
  description:
    "A responsive e-commerce frontend for an online tea shop, providing product browsing, product details, shopping cart flow, user-facing pages, and a clean shopping experience for customers.",
  tech: [
    "ASP.NET Core",
    "RESTful APIs",
    "cloudinary", 
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Create React App",
    "Responsive UI",
    "Frontend Routing",
  ],
  githubUrl: "https://github.com/EcommerceTeaShop/EcommerceTeaShop.FE",
  liveUrl: "https://your-demo-link.com",
},
];

useScrollReveal();
  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute top-[20%] right-[-100px] w-[420px] h-[420px] bg-blue-600/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-120px] left-[25%] w-[420px] h-[420px] bg-purple-600/10 rounded-full blur-[140px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-[#020617]/90 to-[#020617]" />
    </div>
  );
}

function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "about";

      NAV_ITEMS.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const sectionTop = section.offsetTop - 140;

        if (window.scrollY >= sectionTop) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto mt-4 px-6">
        <div className="h-16 px-5 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-xl flex items-center justify-between shadow-2xl shadow-black/20">
          <a href="#" className="text-lg font-bold tracking-tight">
            <span className="text-white">Port</span>
            <span className="text-cyan-400">folio</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 text-sm font-semibold hover:bg-cyan-300 transition"
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
   <section
  data-reveal
  className="reveal-section max-w-7xl mx-auto px-6 pt-36 md:pt-44 pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center"
>
      <div>
        <div className="hero-status-badge">
            <span className="hero-status-dot">
              <span className="hero-status-ping"></span>
              <span className="hero-status-core"></span>
            </span>

            <span className="hero-status-text">
              Available for Backend Developer opportunities
            </span>
          </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          Nguyen Anh <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
            Tuan
          </span>
        </h1>

        <TypewriterText />

        <p className="max-w-2xl text-slate-400 leading-8 text-base md:text-lg mb-9">
          Software Engineer with hands-on experience in backend and full-stack
          web development using ASP.NET Core (.NET 8), Entity Framework Core,
          RESTful APIs, SignalR, JWT authentication, role-based authorization,
          SQL Server, PostgreSQL, MongoDB, React.js, Next.js, TypeScript,
          FastAPI, and third-party integrations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a href="#contact" className="btn-primary">
            Hire Me
          </a>

          <a href="/AnhTuanNguyen_Resume.pdf" className="btn-secondary">
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-3 gap-5 max-w-2xl">
          <Stat number={5} suffix="+" label="Projects" />
          <Stat number={2} suffix="+" label="Years" />
          <Stat number={500} suffix="+" label="Commits" />
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <div className="absolute w-80 h-80 bg-cyan-400/20 rounded-full blur-[90px]" />

        <div className="relative w-full max-w-sm">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-[2rem] blur opacity-40" />

          <div className="relative rounded-[2rem] bg-white/[0.07] border border-white/10 backdrop-blur-xl p-6 shadow-2xl">
           <div className="aspect-square rounded-[1.5rem] bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 overflow-hidden relative">
            <img
              src="/avatarchibi.png"
              alt="Nguyen Anh Tuan"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

            <div className="absolute left-6 right-6 bottom-6">
              <p className="text-slate-300 font-semibold">
                Backend Developer
              </p>

              <p className="text-slate-400 text-sm mt-1">
                ASP.NET Core • REST API • Database
              </p>
            </div>
          </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <MiniCard title="API" value="RESTful" />
              <MiniCard title="Auth" value="JWT" />
              <MiniCard title="DB" value="SQL / NoSQL" />
              <MiniCard title="Deploy" value="VPS / Azure" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    let timer;
    let pauseTimer;

    const duration = 900;
    const steps = 36;
    const increment = number / steps;
    const speed = duration / steps;

    const startCounting = () => {
      current = 0;
      setCount(0);

      timer = setInterval(() => {
        current += increment;

        if (current >= number) {
          setCount(number);
          clearInterval(timer);

          pauseTimer = setTimeout(() => {
            startCounting();
          }, 2200);
        } else {
          setCount(Math.floor(current));
        }
      }, speed);
    };

    startCounting();

    return () => {
      clearInterval(timer);
      clearTimeout(pauseTimer);
    };
  }, [number]);

  return (
    <div className="stat-card-pro">
      <div className="stat-shine-pro" />

      <p className="stat-value-pro">
        {count}
        {suffix}
      </p>

      <p className="stat-label-pro">{label}</p>
    </div>
  );
}

function MiniCard({ title, value }) {
  return (
    <div className="rounded-2xl bg-slate-950/60 border border-white/10 p-4">
      <p className="text-xs text-slate-500 mb-1">{title}</p>
      <p className="text-sm font-semibold text-slate-200">{value}</p>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-12">
      <p className="text-cyan-400 font-semibold mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-slate-400 leading-7">{description}</p>
      )}
    </div>
  );
}

function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    {
      title: "Programming Languages",
      items: ["C#", "Java", "SQL", "TypeScript"],
    },
    {
      title: "Backend Development",
      items: [
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "RESTful API Design",
        "SignalR",
        "JWT Authentication & Authorization",
      ],
    },
    {
      title: "Frontend Development",
      items: ["React.js", "Next.js", "TypeScript", "HTML/CSS"],
    },
    {
      title: "Databases",
      items: ["SQL Server", "PostgreSQL", "MongoDB", "Database Design"],
    },
    {
      title: "Architecture & Design",
      items: [
        "Clean Architecture",
        "Layered Architecture",
        "Repository Pattern",
        "Unit of Work Pattern",
        "Mediator Pattern",
        "CQRS Pattern",
        "Domain-Driven Design Basic",
      ],
    },
    {
      title: "DevOps & Deployment",
      items: [
        "Docker",
        "Docker Compose",
        "VPS Deployment",
        "Ubuntu / Linux",
        "CI/CD with GitHub Actions",
        "Azure",
      ],
    },
    {
      title: "Third-party Integrations",
      items: ["PayOS", "Cloudinary", "Gemini API", "STT/TTS", "GHN API", "Groq AI",],
    },
  ];

  return (
    <section id="about" data-reveal className="reveal-section about-section-v2">
      <div className="about-shell-v2">
        <div className="about-image-card-v2">
          <img
            src="/z7768771060745_085945443b51330ffb4de342837264ae.jpg"
            alt="Nguyen Anh Tuan"
            className="about-image-v2"
          />
        </div>

        <div className="about-content-v2">
          <span className="about-eyebrow-v2">About Me</span>

          <h2 className="about-heading-v2">
            I build reliable backend systems and full-stack web applications.
          </h2>

          <div className="about-copy-v2">
            <p>
              I am a Software Engineering graduate from FPT University with
              hands-on experience in backend and full-stack web development.
            </p>

            <p>
              My main stack includes ASP.NET Core .NET 8, Entity Framework Core,
              RESTful APIs, SQL Server, PostgreSQL, MongoDB, React.js, Next.js,
              TypeScript, FastAPI, Docker, CI/CD, and VPS deployment.
            </p>

            <p>
              I worked as a Back-end Developer Intern at FPT Software and built
              AI-integrated systems such as AESP and AIDiner with payment, cloud
              storage, AI services, and frontend-backend integration.
            </p>
          </div>

          <div className="about-tabs-v2">
            <button
              type="button"
              onClick={() => setActiveTab("skills")}
              className={activeTab === "skills" ? "active" : ""}
            >
              Skills
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={activeTab === "education" ? "active" : ""}
            >
              Education
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("focus")}
              className={activeTab === "focus" ? "active" : ""}
            >
              Focus
            </button>
          </div>

          <div className="about-panel-v2">
            {activeTab === "skills" && (
              <div className="about-skill-scroll-v2">
                {skills.map((group) => (
                  <div key={group.title} className="about-skill-block-v2">
                    <h3>{group.title}</h3>

                    <div>
                      {group.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <div className="about-simple-v2">
                <span>2022 – 2025</span>
                <h3>FPT University - HCM Campus</h3>
                <p>Bachelor of Software Engineering</p>
              </div>
            )}

            {activeTab === "focus" && (
              <div className="about-focus-grid-v2">
                <div>
                  <h3>Backend Engineering</h3>
                  <p>API design, authentication, database modeling, and clean architecture.</p>
                </div>

                <div>
                  <h3>Full-stack Integration</h3>
                  <p>React / Next.js integration with backend services and third-party APIs.</p>
                </div>

                <div>
                  <h3>Deployment</h3>
                  <p>Docker, VPS, CI/CD, Azure, and production environment setup.</p>
                </div>

                <div>
                  <h3>System Integration</h3>
                  <p>Payment, Cloudinary, AI services, STT/TTS, and external APIs.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
        ✓
      </div>
      <p className="text-slate-300">{title}</p>
    </div>
  );
}

function Skills() {
  const skillGroups = [
    {
      title: "Backend Engineering",
      level: "Strong",
      percent: 92,
      description:
        "Designing and building secure, scalable backend systems with clean API structure, authentication, business logic, database access, and third-party integrations.",
      items: [
        "ASP.NET Core .NET 8",
        "Entity Framework Core",
        "RESTful APIs",
        "JWT Authentication",
        "SignalR",
      ],
    },
    {
      title: "Frontend",
      level: "Practical",
      percent: 40,
      description:
        "Creating responsive interfaces and connecting frontend applications with backend APIs.",
      items: ["React.js", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "Database",
      level: "Strong",
      percent: 85,
      description:
        "Designing data models, relationships, queries, and database structures for real systems.",
      items: ["SQL Server", "PostgreSQL", "MongoDB", "Database Design"],
    },
    {
      title: "Architecture",
      level: "Growing",
      percent: 78,
      description:
        "Structuring maintainable systems using clean architecture and common design patterns.",
      items: [
        "Clean Architecture",
        "Layered Architecture",
        "Repository Pattern",
        "Unit of Work",
        "CQRS",
      ],
    },
    {
      title: "DevOps & Deployment",
      level: "Practical",
      percent: 72,
      description:
        "Deploying applications, configuring environments, and setting up basic CI/CD workflows.",
      items: ["Docker", "Vietnix VPS", "VPS Ubuntu/Linux", "GitHub Actions", "Azure"],
    },
    {
      title: "Integrations",
      level: "Practical",
      percent: 80,
      description:
        "Integrating payment, cloud storage, AI services, shipping APIs, and third-party systems.",
      items: ["PayOS", "Cloudinary", "Gemini API", "Groq AI", "GHN API", "STT/TTS", "VNPay"],
    },
  ];

  return (
    <section
      id="skills"
      data-reveal
      className="reveal-section skills-section-v2"
    >
      <div className="skills-container-v2">
        <div className="skills-header-v2">
          <p>Technical Skills</p>
          <h2>My development stack.</h2>
          <span>
            A practical skill set focused on backend engineering, full-stack
            integration, database design, architecture, and deployment.
          </span>
        </div>

        <div className="skills-grid-v2">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card-v2">
              <div className="skill-card-top-v2">
                <h3>{group.title}</h3>
                <span>{group.level}</span>
              </div>

              <p className="skill-card-desc-v2">{group.description}</p>

              <div className="skill-progress-v2">
                <div style={{ width: `${group.percent}%` }} />
              </div>

              <div className="skill-tags-v2">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All",  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
   <section
  id="projects"
  data-reveal
  className="reveal-section projects-section-v2"
>
      <div className="projects-container-v2">
        <div className="projects-header-v2">
          <p>Projects</p>
          <h2>My Projects</h2>
          <span>
            Selected projects that show my experience in backend development,
            full-stack integration, AI services, payment, database design, and
            deployment.
          </span>
        </div>

        <div className="projects-filter-v2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "active" : ""}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid-v2">
          {filteredProjects.map((project) => (
            <article key={project.name} className="project-card-v2">
              <div className="project-image-wrap-v2">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image-v2"
                />

                <div className="project-overlay-v2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-v2"
                    aria-label="View GitHub repository"
                  >
                    {"</>"}
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-v2"
                    aria-label="View live website"
                  >
                    👁
                  </a>
                </div>
              </div>

              <div className="project-content-v2">
                <div className="project-topline-v2">
                  <span>{project.category}</span>
                </div>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-tech-v2">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



function Education() {
  return (
   <section
  id="education"
  data-reveal
  className="reveal-section max-w-7xl mx-auto px-6 py-24"
>
      <SectionHeader
        eyebrow="Education"
        title="Academic background and achievements."
        description="My education and project experience built a strong foundation in software engineering, backend systems, and AI-integrated applications."
      />

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card p-8">
          <h3 className="text-2xl font-bold mb-2">FPT University - HCM Campus</h3>
          <p className="text-cyan-300 mb-4">Bachelor of Software Engineering</p>
        </div>

        <div className="card p-8">
          <h3 className="text-2xl font-bold mb-5">Honors & Awards</h3>

          <div className="space-y-4">
            <Feature title="FPT Software Internship Program - Back-End Developer Intern 2024" />
            <Feature title="AI-integrated Software Projects - Gemini API, STT/TTS, FastAPI, Cloud Deployment" />
            <Feature title="Best Capstone Project Contribution - AESP, FPT University 2025" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
const [isSending, setIsSending] = useState(false);
const [sendStatus, setSendStatus] = useState("");
  const socials = [
    {
      type: "github",
      label: "GitHub",
      value: "Nguyễn Anh Tuấn",
      href: "https://github.com/TuanETV123",
      icon: "/icons/github.png",
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "tuan-nguyen-anh-se79",
      href: "https://www.linkedin.com/in/tuan-nguyen-anh-se79",
      icon: "/icons/link.png",
    },
    {
      type: "facebook",
      label: "Facebook",
      value: "nguyen.anh.tuan.744887",
      href: "https://www.facebook.com/nguyen.anh.tuan.744887",
      icon: "public/icons/Facebook_f_logo_(2019).svg.png",
    },
    {
      type: "email",
      label: "Email",
      value: "tuannhatrang.contact@gmail.com",
      href: "mailto:tuannhatrang.contact@gmail.com",
      icon: "/icons/gmail.webp",
    },
    {
      type: "Zalo",
      label: "Zalo",
      value: "+84 901 909 777",
      href: "tel:+84901909777",
      icon: "public/icons/zalo.png",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendEmail = async (e) => {
  e.preventDefault();

  setIsSending(true);
  setSendStatus("");

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "tuannhatrang.contact@gmail.com",
      },
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    setSendStatus("success");
    setFormData({
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("EmailJS error:", error);
    setSendStatus("error");
  } finally {
    setIsSending(false);
  }
};

  return (
    <section id="contact" data-reveal className="reveal-section contact-section-v3">
      <div className="contact-container-v3">
        <div className="contact-left-v3">
          <p className="contact-kicker-v3">Contact</p>

          <h2 className="contact-title-v3">Let’s Connect</h2>

          <p className="contact-description-v3">
            I’m currently looking for Backend Developer / Full-stack Developer
            opportunities. Whether you have a question, a collaboration idea, or
            a job opportunity, feel free to reach out.
          </p>

          <div className="contact-social-list-v3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className={`contact-social-v3 ${item.type}`}
              >
                <span className="contact-social-icon-v3">
                  <img src={item.icon} alt={item.label} />
                </span>

                <span className="contact-social-info-v3">
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form-v3" onSubmit={handleSendEmail}>
          <div className="contact-form-title-v3">
            <h3>Send Message</h3>
            <p>This will open your email app with the message prepared.</p>
          </div>

          <div className="contact-field-v3">
            <label>Your email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="contact@google.com"
              required
            />
          </div>

          <div className="contact-field-v3">
            <label>Subject</label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="Job opportunity / Collaboration"
              required
            />
          </div>

          <div className="contact-field-v3">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Let's talk about..."
              required
            />
          </div>

         <button type="submit" className="contact-submit-v3" disabled={isSending}>
  {isSending ? "Sending..." : "Send Message"}
</button>

{sendStatus === "success" && (
  <p className="contact-status success">
    Message sent successfully. Thank you!
  </p>
)}

{sendStatus === "error" && (
  <p className="contact-status error">
    Something went wrong. Please try again or contact me directly by email.
  </p>
)}
        </form>
      </div>
    </section>
  );
}

// function ContactItem({ label, value }) {
//   return (
//     <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
//       <p className="text-slate-500 w-24">{label}</p>
//       <p className="text-slate-300 break-all">{value}</p>
//     </div>
//   );
// }

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-slate-500">
      © 2026 Nguyen Anh Tuan. Designed & built with React.
    </footer>
  );
}

  const roles = ["Backend Developer", "Software Engineer", "Full-stack Developer"];

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = 90;
    const deletingSpeed = 45;
    const delayAfterComplete = 1200;
    const delayBeforeNextWord = 250;

    let timer;

    if (!isDeleting && text.length < currentRole.length) {
      timer = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text.length === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayAfterComplete);
    }

    if (isDeleting && text.length > 0) {
      timer = setTimeout(() => {
        setText(currentRole.slice(0, text.length - 1));
      }, deletingSpeed);
    }

    if (isDeleting && text.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, delayBeforeNextWord);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <p className="text-xl md:text-2xl text-slate-300 font-medium mb-6 min-h-[36px]">
      
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 font-bold">
        {text}
      </span>
      <span className="typing-cursor">|</span>
    </p>
  );
}


export default App;