import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Sparkles, Database, BrainCircuit, ChartNoAxesCombined, Code2, Sun, Moon
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01", category: "DATA", type: "Analytics",
    title: "Daily Water Intake Tracker",
    description: "A practical tracker concept for logging hydration, spotting daily patterns and turning simple records into useful insights.",
    stack: ["Python", "Pandas", "Data Visualization"],
    visual: "water", symbol: "↗", status: "FEATURE PROJECT"
  },
  {
    number: "02", category: "ML", type: "Machine Learning",
    title: "Machine Learning Lab",
    description: "A growing collection of experiments focused on data preparation, feature engineering, model evaluation and explainable results.",
    stack: ["Python", "NumPy", "Scikit-learn"],
    visual: "ml", symbol: "⌁", status: "IN PROGRESS"
  },
  {
    number: "03", category: "BUILD", type: "Engineering",
    title: "PCB Plotter Project",
    description: "A hands-on engineering project exploring the connection between software, design files and physical output.",
    stack: ["Engineering", "Problem Solving", "Prototyping"],
    visual: "pcb", symbol: "⌘", status: "PROJECT"
  }
];

const skills = [
  { title: "Data & Analytics", icon: ChartNoAxesCombined, items: "Python · SQL · Pandas · NumPy · Excel · Statistics" },
  { title: "Machine Learning", icon: BrainCircuit, items: "Data cleaning · Feature engineering · Model evaluation · ML fundamentals" },
  { title: "Tools & Platforms", icon: Database, items: "MySQL · Git · SAP · Jupyter · Power BI fundamentals" },
  { title: "Web & APIs", icon: Code2, items: "HTML · CSS · JavaScript · REST APIs · FastAPI fundamentals" }
];

function App() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("mohit-portfolio-theme") || "dark"; }
    catch { return "dark"; }
  });
  const toggleTheme = () => {
    setTheme(current => {
      const next = current === "dark" ? "light" : "dark";
      try { localStorage.setItem("mohit-portfolio-theme", next); } catch {}
      return next;
    });
  };
  const visibleProjects = filter === "All" ? projects : projects.filter(p => p.type === filter);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" data-theme={theme}>
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Mohit Pal home">
          MP<span className="wordmark-dot">.</span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#skills" onClick={closeMenu}>Toolkit <span>03</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>04</span></a>
          <a className="nav-cta" href="mailto:palmohit8527@gmail.com">Let’s talk <ArrowUpRight size={15}/></a>
        </nav>
        <div className="header-controls">
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            <span>{theme === "dark" ? "LIGHT" : "DARK"}</span>
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-meta mono">
            <span><i className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</span>
            <span>BASED IN INDIA · IST</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-availability"><span className="availability-pulse" /> OPEN TO DATA & AI OPPORTUNITIES</div>
              <p className="eyebrow"><span className="eyebrow-line" /> DATA × INTELLIGENCE × BUILDING</p>
              <h1>Making sense<br/>of <span className="outline-word">data.</span><br/>Building what’s <span className="accent-word">next<span className="period">.</span></span></h1>
              <p className="hero-intro">Hey, I’m <strong>Mohit Pal</strong> — a computer science graduate who enjoys turning messy information into clear insights and useful things.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
                <a className="text-link" href="mailto:palmohit8527@gmail.com">Get in touch <ArrowUpRight size={15}/></a>
              </div>
            </div>
            <div className="hero-art" aria-label="Abstract data-inspired artwork">
              <div className="art-top mono"><span>FIG. 001</span><span>THINK / MAKE / LEARN</span></div>
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>
              <div className="orbit orbit-three"></div>
              <div className="art-core"><span>MP</span><i></i></div>
              <div className="art-cross cross-one"></div><div className="art-cross cross-two"></div>
              <div className="art-label label-one mono">01 / DATA</div>
              <div className="art-label label-two mono">02 / IDEAS</div>
              <div className="art-label label-three mono">03 / IMPACT</div>
              <div className="art-bottom"><span>CURIOUS BY DEFAULT.</span><Sparkles size={15}/></div>
            </div>
          </div>
          <div className="hero-footer mono">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line"></span>
            <span>PORTFOLIO / 2026</span>
          </div>
        </section>

        <section className="ticker" aria-label="Areas of interest">
          <div className="ticker-track">
            {["DATA ANALYTICS", "PYTHON", "MACHINE LEARNING", "GENAI", "SAP", "PROBLEM SOLVING", "DATA ANALYTICS", "PYTHON", "MACHINE LEARNING", "GENAI", "SAP", "PROBLEM SOLVING"].map((x, i) => (
              <span key={i}>{x}<b>✳</b></span>
            ))}
          </div>
        </section>

        <section className="work section-wrap section-space" id="work">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK / 01</p><h2>Things I’ve<br/><span className="muted">been building.</span></h2></div>
            <p className="section-note">A mix of data-driven thinking, technical experiments and hands-on projects. This is where curiosity becomes something real.</p>
          </div>
          <div className="work-intro-note"><span className="intro-star">✳</span><span>Curiosity, translated into projects.</span><span className="mono">SELECT / EXPLORE / REPEAT</span></div>
          <div className="filter-row">
            <span className="mono filter-label">FILTER BY</span>
            {["All", "Analytics", "Machine Learning", "Engineering"].map(f => (
              <button key={f} onClick={() => setFilter(f)} className={filter === f ? "filter active" : "filter"}>{f}</button>
            ))}
            <span className="mono project-count">{String(visibleProjects.length).padStart(2, "0")} PROJECTS</span>
          </div>
          <div className="project-list">
            {visibleProjects.map((p) => (
              <article className="project-card" key={p.number}>
                <div className={`project-visual ${p.visual}`}>
                  <div className="visual-top mono"><span>{p.status}</span><span>{p.number} / 03</span></div>
                  {p.visual === "water" && <div className="water-art"><div className="water-ring ring-a"></div><div className="water-ring ring-b"></div><div className="water-drop">H<span>2</span>O</div><div className="water-stats mono"><span>HYDRATION</span><strong>+24%</strong><span>WEEKLY TREND ↗</span></div></div>}
                  {p.visual === "ml" && <div className="ml-art"><div className="ml-grid"></div><div className="ml-chart"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><div className="ml-orb">ML</div><span className="mono ml-caption">LEARN / TEST / IMPROVE</span></div>}
                  {p.visual === "pcb" && <div className="pcb-art"><div className="pcb-board"><i/><i/><i/><i/><i/><i/><i/><i/></div><span className="mono pcb-caption">IDEA → PROTOTYPE</span></div>}
                  <div className="visual-index">{p.number}</div>
                </div>
                <div className="project-info">
                  <div className="project-kicker mono"><span>{p.category}</span><span>{p.type}</span></div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tag-row">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                  <a href="https://github.com/mohitpal598" target="_blank" rel="noreferrer" className="project-link">Explore on GitHub <ArrowUpRight size={16}/></a>
                </div>
              </article>
            ))}
          </div>
          <div className="github-strip">
            <div><span className="mono">MORE EXPERIMENTS, NOTES & CODE</span><h3>The work keeps growing.</h3></div>
            <a className="button button-dark" href="https://github.com/mohitpal598" target="_blank" rel="noreferrer"><Github size={17}/> Visit GitHub <ArrowUpRight size={15}/></a>
          </div>
        </section>

        <section className="about section-wrap section-space" id="about">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME / 02</p><h2>Technical mind.<br/><span className="muted">Curious nature.</span></h2></div>
          </div>
          <div className="about-grid">
            <div className="about-stamp"><div className="stamp-circle">STAY CURIOUS · KEEP BUILDING · STAY CURIOUS · KEEP BUILDING ·</div><span>MP<span className="accent-word">.</span></span><small className="mono">EST. 2025 / ALWAYS LEARNING</small></div>
            <div className="about-copy">
              <p className="about-lead">I like finding the signal in the noise.</p>
              <p>With a background in Computer Science and experience working around business processes and SAP, I’m interested in the space where technology meets real-world problems.</p>
              <p>My current focus is strengthening my skills in data analytics, Python, machine learning and generative AI — one project, one question and one iteration at a time.</p>
              <div className="about-facts">
                <div><span className="mono">01 / EDUCATION</span><strong>B.Tech, Computer Science</strong><small>2025 graduate</small></div>
                <div><span className="mono">02 / EXPERIENCE</span><strong>Industry internship</strong><small>SAP · Business processes · Data</small></div>
                <div><span className="mono">03 / MINDSET</span><strong>Learn by doing</strong><small>Build, test, improve</small></div>
              </div>
              <a className="text-link" href="https://www.linkedin.com/in/mohitpal598/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15}/></a>
            </div>
          </div>
        </section>

        <section className="toolkit section-wrap section-space" id="skills">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> MY TOOLKIT / 03</p><h2>Tools for the<br/><span className="muted">job at hand.</span></h2></div>
            <p className="section-note">A practical toolkit that keeps evolving. I choose tools to solve the problem, not just to add another line to a list.</p>
          </div>
          <div className="skill-list">
            {skills.map((s, i) => {
              const Icon = s.icon;
              return <div className="skill-item" key={s.title}><span className="mono skill-num">0{i+1}</span><div className="skill-icon"><Icon size={20}/></div><h3>{s.title}</h3><p>{s.items}</p><ArrowUpRight className="skill-arrow" size={18}/></div>;
            })}
          </div>
          <div className="learning-note"><Sparkles size={18}/><p><strong>Currently exploring:</strong> GenAI foundations, LLM applications, RAG and building practical AI projects.</p></div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-top mono"><span>HAVE A GOOD ONE IN MIND?</span><span>LET’S MAKE IT HAPPEN ↘</span></div>
          <h2>Good work starts<br/>with a <span className="accent-word">conversation.</span></h2>
          <p>Looking for opportunities, interesting problems and people who enjoy building useful things.</p>
          <a className="contact-email" href="mailto:palmohit8527@gmail.com">palmohit8527@gmail.com <ArrowUpRight size={22}/></a>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/mohitpal598/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a>
            <a href="https://github.com/mohitpal598" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a>
            <a href="mailto:palmohit8527@gmail.com"><Mail size={17}/> Email <ArrowUpRight size={14}/></a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="wordmark" href="#home">MP<span className="wordmark-dot">.</span></a>
        <span className="mono">DESIGNED WITH INTENTION. BUILT WITH CURIOSITY.</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <span className="mono copyright">© 2026 MOHIT PAL</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
