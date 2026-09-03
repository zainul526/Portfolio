import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";


const skills = {
  Frontend: ["React", "JavaScript", "TypeScript", "Vite", "Tailwind CSS", "CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  Database: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma"],
  Mobile: ["Capacitor", "Android", "Java"],
  Deployment: ["Azure VM", "Linux", "Nginx", "PM2", "Cloudflare Pages", "Render"],
  Tools: ["Git", "GitHub", "Razorpay", "Neon", "Axios"],
};

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Student Developer · Aligarh, India</p>
              <h1>Zainul Abideen</h1>
              <h2>Building practical web and Android products while studying Computer Applications.</h2>
              <p className="hero-text">
                I am a B.Sc. (Hons.) Computer Application student at Aligarh Muslim University.
                I learn software development mainly by building complete projects across frontend,
                backend, databases, payments, deployment, and Android integration.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">View projects</a>
                <a className="button secondary" href="mailto:zainulaabideen66@gmail.com">Email me</a>
                <a className="button secondary" href="Zainul_Abideen_Resume.pdf">Download Resume</a>
              </div>
              <div className="social-links">
                <a href="https://github.com/zainul526" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/zainul526/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://leetcode.com/u/zain526/" target="_blank" rel="noreferrer">LeetCode</a>
              </div>
            </div>

            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src="/profile.png"
                alt="Zainul Abideen"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.parentElement.classList.add("photo-placeholder");
                }}
              />
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container narrow">
            <p className="eyebrow">About</p>
            <h2 className="section-title">I prefer learning by building.</h2>
            <p className="lead">
              My strongest work so far is WarbLink, a full-stack education marketplace with a web client,
              Android app, shared backend, payments, and production deployment. I have also built NoorForge,
              a student developer platform using React, TypeScript, Express, Prisma, and PostgreSQL.
            </p>
          </div>
        </section>

        <section className="section section-muted" id="skills">
          <div className="container">
            <p className="eyebrow">Skills</p>
            <h2 className="section-title">Technologies I have worked with</h2>
            <div className="skills-grid">
              {Object.entries(skills).map(([group, items]) => (
                <div className="skill-group" key={group}>
                  <h3>{group}</h3>
                  <div className="skill-items">
                    {items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Selected work</h2>
            <div className="projects-grid">
              <ProjectCard
                featured
                title="WarbLink"
                label="Founder & Developer · 2026"
                description="A full-stack education marketplace connecting students and parents with tutors, with tutor discovery, memberships, payments, administration, and an Android application using the same production backend."
                points={[
                  "Built most of the frontend and worked on the backend with guidance from a senior collaborator.",
                  "Implemented tutor profiles, discovery, authentication, requests, memberships, Razorpay payments, admin flows, and email integrations.",
                  "Converted the React/Vite product into an Android app using Capacitor and native Java integrations.",
                  "Deployed the production system using Azure VM, Linux, Nginx, and PM2.",
                ]}
                tech={["React", "Node.js", "Express", "MongoDB", "Razorpay", "Capacitor", "Android", "Java", "Azure"]}
                links={[
                  { label: "Live website", href: "https://www.warblink.com/" },
                  { label: "Android APK", href: "https://www.warblink.com/downloads/WarbLink-v1.0.1.apk" },
                ]}
              />

              <ProjectCard
                title="NoorForge"
                label="Developer · Started 2025"
                description="A student developer platform focused on project-based learning, collaboration, learning tracks, member workflows, and project showcases."
                points={[
                  "Built with React, TypeScript, Vite, and reusable component-based UI.",
                  "Implemented authentication, protected routes, contact workflows, and a member dashboard.",
                  "Backend uses Express, Prisma, PostgreSQL, JWT, and bcrypt.",
                  "Frontend is hosted on Cloudflare Pages; backend runs on Render with Neon PostgreSQL.",
                ]}
                tech={["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "JWT", "Cloudflare", "Render"]}
                links={[{ label: "Live website", href: "https://noorforge.pages.dev/" }]}
              />
            </div>
          </div>
        </section>

        <section className="section section-muted" id="experience">
          <div className="container">
            <p className="eyebrow">Experience & Education</p>
            <h2 className="section-title">What I have done so far</h2>
            <div className="timeline">
              <article className="timeline-item">
                <div>
                  <p className="timeline-date">Jul 2025 – Jun 2026</p>
                  <h3>AZFAR FOUNDATION</h3>
                  <p className="timeline-role">Mathematics Instructor → Senior Math Mentor → Branch Manager</p>
                </div>
                <p>
                  Taught entrance-level mathematics to around 20–30 students and later handled branch-level
                  responsibilities including fees, expenses, accounts, and other finance-related records using Excel.
                </p>
              </article>

              <article className="timeline-item">
                <div>
                  <p className="timeline-date">Jul 2025 – Expected May 2029</p>
                  <h3>Aligarh Muslim University</h3>
                  <p className="timeline-role">B.Sc. (Hons.) Computer Application · Department of Computer Science</p>
                </div>
                <p>
                  Semester I: 8.90 SGPA · Semester II: 8.18 SGPA. Coursework so far includes C, DSA in C,
                  Java and OOP, Digital System Design, Intro to IT, and Computer Architecture.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container narrow">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Want to connect?</h2>
            <p className="lead">
              I am still exploring where I want to specialize, and I am open to learning, collaboration,
              internships, and opportunities where I can build useful software.
            </p>
            <div className="contact-links">
              <a href="mailto:zainulaabideen66@gmail.com">zainulaabideen66@gmail.com</a>
              <a href="https://github.com/zainul526" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/zainul526/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
