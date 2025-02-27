import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ChevronDown, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            MD RASHEDUZZAMAN
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#certifications" className="text-sm font-medium hover:text-primary">
              Certifications
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:flex">
            Download CV
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                MD RASHEDUZZAMAN
              </h1>
              <p className="text-xl text-muted-foreground max-w-[700px]">
                Project Manager & Tech Lead with 9+ years of full-stack development experience
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="mailto:jmrashedbd@gmail.com">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
                <Link href="tel:+8801734446514">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Phone className="h-5 w-5" />
                    <span className="sr-only">Phone</span>
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4 mt-8">
                <Button asChild>
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-muted-foreground mb-4">
                  Results-driven Project Manager with 9+ years of experience in full-stack development, team leadership,
                  and project management. Skilled in overseeing remote teams, managing project lifecycles, and
                  delivering scalable, high-performance solutions using PHP, Node.js, Laravel, and React.
                </p>
                <p className="text-muted-foreground mb-4">
                  Proven ability to streamline workflows, optimize resources, and drive successful project outcomes.
                  Passionate about fostering collaboration, improving system architecture, and ensuring on-time,
                  high-quality software delivery.
                </p>
                <p className="text-muted-foreground">
                  Seeking a remote leadership role to drive innovation and deliver impactful technology solutions.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Bachelor of Science in Computer Science & Engineering</h4>
                    <p className="text-muted-foreground">Stamford University Bangladesh</p>
                    <p className="text-muted-foreground">2012 - 2016</p>
                    <p className="text-sm mt-2">CGPA 3.73 [Merit Scholarship: Awarded for 3 trimesters]</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>jmrashedbd@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>+88 01734446514</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                      <span>LinkedIn</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="h-4 w-4 text-muted-foreground" />
                      <span>GitHub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-12">Professional Experience</h2>
            <div className="space-y-12">
              <ExperienceCard
                title="Tech Lead Officer"
                company="Onest Tech LLC"
                period="09/2022 - Current"
                duration="2.5 years"
                location="Banani, Dhaka, BD"
                responsibilities={[
                  "Led a remote, cross-functional team of 36 developers across different time zones, overseeing technical decisions and architectural strategies in PHP, Node.js, Python, JavaScript, React, and databases.",
                  "Managed full-stack application development and deployment, driving a 10% performance increase using PHP, Node.js, React, and MySQL/NoSQL.",
                  "Directed the architecture and maintenance of RESTful APIs and GraphQL endpoints, improving data retrieval and system efficiency.",
                  "Led design and implementation of 4 complex systems, reducing downtime by 35% and improving scalability by 15%.",
                  "Implemented CI/CD pipelines and Docker, reducing deployment time and post-deployment issues by 10%.",
                  "Championed Agile methodologies remotely, effectively coordinating teams in different time zones, streamlining project timelines, and boosting client satisfaction.",
                ]}
              />

              <ExperienceCard
                title="Project Manager"
                company="Onest Tech LLC"
                period="01/2021 - 08/2022"
                duration="1.8 years"
                location="Banani, Dhaka, BD"
                responsibilities={[
                  "Led cross-functional teams of 30+ members across multiple time zones, ensuring 95% on-time delivery and 20% improvement in team collaboration.",
                  "Managed projects using Agile, Scrum, and Kanban, improving project efficiency by 15% and client satisfaction by 18%.",
                  "Communicated goals, progress, and requirements to stakeholders, maintaining 98% stakeholder alignment and transparency.",
                  "Identified and mitigated risks, ensuring 100% on-budget delivery for 10+ projects.",
                  "Strengthened relationships with clients and sponsors, achieving a 25% increase in repeat business and referrals.",
                  "Optimized resource allocation, reducing project bottlenecks by 12% and improving overall efficiency.",
                  "Proficient in Microsoft Project, Jira, Trello, and Asana, ensuring streamlined project tracking and execution.",
                ]}
              />

              <ExperienceCard
                title="Project Manager"
                company="Spondon IT"
                period="06/2020 - 01/2021"
                duration="1 year"
                location="Panthapath, Dhaka, BD"
                responsibilities={[
                  "Define project scope, objectives, and deliverables, aligning requirements using PHP, Node, Python, and relevant technologies",
                  "Allocate and manage technical resources efficiently, identifying and mitigating risks using MySql, NoSQL, MongoDB, and Rest API.",
                  "Facilitate collaboration between development and operations teams, bridging the gap by leveraging Git, CI/CD, and Docker.",
                  "Implement infrastructure management through code, ensuring consistency with cPanel, WHM Panel, VPS, Apache, and Nginx.",
                  "Implement robust monitoring solutions, tracking performance and detecting issues using AWS, EC2, and security measures.",
                ]}
              />

              <ExperienceCard
                title="Senior Software Engineer"
                company="Spondon IT"
                period="01/2019 - 06/2020"
                duration="1.6 years"
                location="Panthapath, Dhaka, BD"
                responsibilities={[
                  "Lead the development using PHP (Laravel, CodeIgniter) and JavaScript, jQuery, Ajax for both front-end and back-end components.",
                  "Manage and optimize databases, including MySQL and NoSQL, ensuring efficient data storage, retrieval, and performance.",
                  "Design and implement RESTful APIs and GraphQL endpoints to facilitate seamless communication between various application modules.",
                  "Utilize HTML, CSS, SASS, Tailwind CSS, and UI/UX design principles (Figma) to create visually appealing and user-friendly interfaces.",
                  "Architect scalable systems, considering load balancing, caching strategies, and database optimizations to handle increasing user loads.",
                  "Configure and maintain web servers Apache on cPanel, WHM Panel, VPS, ensuring high availability and security.",
                ]}
              />

              <ExperienceCard
                title="Software Engineer"
                company="United Group"
                period="07/2017 - 12/2018"
                duration="1.6 years"
                location="Gulshan-2, Dhaka, BD"
                responsibilities={[
                  "Led end-to-end software development, from designing scalable database schemas using MySQL and NoSQL to implementing server-side logic with PHP frameworks like Laravel and CodeIgniter.",
                  "Developed responsive and visually appealing user interfaces using HTML, CSS, and Bootstrap, enhancing overall user experience.",
                  "Designed, developed, and maintained RESTful APIs to ensure seamless communication between front-end and back-end systems.",
                  "Managed and optimized database systems, including data modeling, indexing, and query performance tuning, primarily with MySQL.",
                  "Enhanced web application interactivity and user engagement using JavaScript and jQuery, ensuring a seamless and dynamic user experience.",
                ]}
              />

              <ExperienceCard
                title="Junior Software Engineer"
                company="United Group"
                period="06/2016 - 06/2017"
                duration="1 year"
                location="Gulshan-2, Dhaka, BD"
                responsibilities={[
                  "Developed, tested, and maintained software applications using PHP, JavaScript, and MySQL.",
                  "Designed and optimized relational databases using SQL for efficient data storage and retrieval.",
                  "Built and maintained user-friendly interfaces and interactive web applications using HTML, CSS, Bootstrap, and other front-end technologies.",
                  "Developed server-side applications and APIs using PHP, Node.js, and related technologies to enhance system functionality.",
                ]}
              />

              <ExperienceCard
                title="Software Engineer, Intern"
                company="IWFM, BUET"
                period="01/2016 - 06/2016"
                duration="6 months"
                location="Polashi, Dhaka, BD"
                responsibilities={[
                  "Assisted in designing and developing user-friendly web interfaces using HTML, CSS, Bootstrap, and JavaScript to enhance user experience.",
                  "Collaborated with the development team to customize and modify WordPress themes and plugins, ensuring alignment with project requirements.",
                  "Assisted in designing, implementing, and optimizing MySQL databases to support web applications efficiently.",
                  "Created technical documentation, including code comments and project reports, to facilitate knowledge sharing and project tracking.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-12">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <SkillCategory
                title="Project & Team Management"
                skills={[
                  "Agile (Scrum, Kanban)",
                  "Jira, Asana, Trello, ClickUp",
                  "Resource & Time Management (Clockify, RescueTime)",
                  "Team Collaboration (Slack, Skype, Zoom)",
                  "Remote Team Leadership & Communication",
                ]}
              />

              <SkillCategory
                title="Technical Expertise"
                skills={[
                  "System Architecture & Design",
                  "Monolithic & Microservices",
                  "API Management (REST, GraphQL)",
                  "Cloud Services (AWS, DigitalOcean, VPS)",
                  "DevOps & Deployment (Docker, Apache, Nginx, CI/CD)",
                ]}
              />

              <SkillCategory
                title="Software Development"
                skills={[
                  "PHP (Laravel, CodeIgniter)",
                  "Node.js (Express, Fastify)",
                  "Python (FastAPI, Flask)",
                  "Frontend: JavaScript (React, jQuery)",
                  "UI/UX (Figma, Tailwind, Bootstrap)",
                  "Databases: MySQL, NoSQL",
                  "Testing & QA: Selenium, Postman, JMeter",
                ]}
              />

              <SkillCategory
                title="Messaging & Workflow Automation"
                skills={["RabbitMQ", "Kafka", "Message Queuing", "Workflow Orchestration", "Event-Driven Architecture"]}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="HRM - Human Resource Management System"
                technologies={[
                  "Microservices",
                  "Node.js",
                  "Go",
                  "Python",
                  "Kafka",
                  "Hystrix",
                  "ELK",
                  "Redis",
                  "Docker",
                ]}
                description="A comprehensive HR management system built with a microservices architecture, handling employee data, payroll, attendance, and performance tracking."
              />

              <ProjectCard
                title="LMS - Learning Management System"
                technologies={["Laravel", "jQuery", "Bootstrap", "RestAPI"]}
                description="An educational platform for course creation, student enrollment, content delivery, and progress tracking with comprehensive reporting."
              />

              <ProjectCard
                title="CRM - Client Relationship Management System"
                technologies={["Laravel", "jQuery", "Bootstrap", "RestAPI"]}
                description="A system for managing customer interactions, sales pipelines, and service requests with analytics and reporting capabilities."
              />

              <ProjectCard
                title="Ecommerce - Online Marketplace"
                technologies={["Next.js", "Node.js", "MongoDB", "Laravel", "MySQL"]}
                description="A multi-vendor marketplace platform with product listings, shopping cart, payment processing, and vendor management."
              />

              <ProjectCard
                title="ExpenseTracker - Mobile Expense Tracking"
                technologies={["Laravel", "HTML", "Tailwind CSS", "Firebase", "Flutter"]}
                description="A mobile application for tracking personal and business expenses with categorization, reporting, and budget management."
              />

              <ProjectCard
                title="Social Media Dashboard"
                technologies={["React.js", "GraphQL", "Node.js", "MongoDB"]}
                description="A centralized dashboard for monitoring and managing multiple social media accounts with analytics and scheduling capabilities."
              />
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-12">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Google Project Management Certificate</h3>
                <p className="text-muted-foreground mb-4">Completed January 2025</p>
                <p className="text-sm">
                  Comprehensive certification covering project initiation, planning, execution, and closure with
                  Google's best practices.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Agile Project Management</h3>
                <p className="text-muted-foreground mb-4">Coursera (University of Maryland) - December 2024</p>
                <p className="text-sm">
                  In-depth training on Agile methodologies, Scrum framework, and iterative development approaches.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Introduction to Project Management</h3>
                <p className="text-muted-foreground mb-4">Alison - November 2024</p>
                <p className="text-sm">
                  Foundational course covering project management principles, methodologies, and best practices.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Scrum Master Fundamentals</h3>
                <p className="text-muted-foreground mb-4">Scrum Training Series - October 2024</p>
                <p className="text-sm">
                  Specialized training on Scrum framework, roles, ceremonies, and artifacts for effective Agile
                  implementation.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Project Management Principles and Practices</h3>
                <p className="text-muted-foreground mb-4">
                  Coursera (University of California, Irvine) - September 2024
                </p>
                <p className="text-sm">
                  Comprehensive course on project management methodologies, tools, and techniques for successful project
                  delivery.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Additional Training</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Agile Project Management Bootcamp – Coursera (May 2015)</li>
                  <li>• Remote Project Management Tools Bootcamp – Udemy (Aug 2016)</li>
                  <li>• Excellence in Project Management, Onest Tech LLC (2022)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-muted to-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Interested in working together? Feel free to reach out through any of the channels below.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col items-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <Mail className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-lg font-medium mb-2">Email</h3>
                  <a href="mailto:jmrashedbd@gmail.com" className="text-muted-foreground hover:text-primary">
                    jmrashedbd@gmail.com
                  </a>
                </div>
                <div className="flex flex-col items-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <Phone className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-lg font-medium mb-2">Phone</h3>
                  <a href="tel:+8801734446514" className="text-muted-foreground hover:text-primary">
                    +88 01734446514
                  </a>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <Button asChild>
                  <Link href="mailto:jmrashedbd@gmail.com">Send Email</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MD RASHEDUZZAMAN. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="mailto:jmrashedbd@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  responsibilities: string[];
}
// Define the ExperienceCard component with TypeScript types
const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  duration,
  location,
  responsibilities,
}) => {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-background">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-primary font-medium">{company}</p>
        </div>
        <div className="mt-2 md:mt-0 text-right">
          <p className="text-muted-foreground">{period}</p>
          <p className="text-sm text-muted-foreground">
            {duration} | {location}
          </p>
        </div>
      </div>
      <ul className="space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-sm">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

// Define the SkillCategory component with TypeScript types
const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-sm py-1">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

type ExperienceProps = {
  title: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  responsibilities: string[];
};
// Define the ProjectCard component

// Define the prop types
interface ProjectCardProps {
  title: string;
  technologies: string[];
  description: string;
}

// Define the component with TypeScript types
const ProjectCard: React.FC<ProjectCardProps> = ({ title, technologies, description }) => {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-background">
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t flex justify-end">
          <Button variant="ghost" size="sm" className="text-xs">
            <ExternalLink className="h-3 w-3 mr-1" />
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};
