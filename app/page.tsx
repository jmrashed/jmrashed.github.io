"use client"

import { latestBlogs } from "@/app/blogs/blogs-data";

import { projects as projectsData } from "@/app/projects/projects-data";
import Footer from "@/components/footer";
import MouseFollower from "@/components/mouse-follower";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Calendar,
  Clock,
  Cloud,
  Code,
  Mail,
  Settings,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, isInView])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)

  // Added parallax effect for hero background
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const skills = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "PHP/Laravel, Node.js, React - architecting scalable solutions",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Docker, CI/CD - optimizing infrastructure costs by 20%",
    },
    { icon: Brain, title: "AI Integration", description: "ML capabilities creating $500K annual revenue streams" },
    { icon: Users, title: "Team Leadership", description: "Led 40+ developers with 98% client satisfaction" },
    { icon: Settings, title: "System Architecture", description: "Microservices reducing downtime by 35%" },
    { icon: Shield, title: "Security & Compliance", description: "Achieving 99.9% uptime and regulatory compliance" },
  ]

const experiences = [
  {
    title: "Technical Lead",
    company: "Onest Tech LLC",
    location: "Banani, Dhaka, Bangladesh",
    period: "September 2022 – March 2025 (2 yrs 7 mos)",
    employmentType: "Full-time, On-site",
    responsibilities: [
      "Led a high-performing team of 36 developers across multiple concurrent SaaS projects, maintaining a 98% client satisfaction rate.",
      "Enhanced application performance by 10% through strategic architectural refinements and code optimizations.",
      "Designed and delivered 4 complex software systems, reducing system downtime by 35% and increasing scalability by 15%.",
      "Implemented robust CI/CD pipelines integrated with Docker, reducing deployment times by 10% and minimizing post-deployment issues.",
      "Applied Agile methodologies to streamline project delivery timelines, significantly boosting team productivity.",
      "Mentored and coached 40+ developers, elevating code quality and technical skill levels across teams.",
    ],
    skills: [
      "Software Architecture",
      "Scalability Engineering",
      "DevOps (Docker, CI/CD)",
      "Team Mentoring & Leadership",
      "Stakeholder Management",
      "MongoDB",
      "Next.js",
      "Node.js",
      "Remote Team Management",
      "Jira",
      "Slack",
    ],
  },

  {
    title: "Technical Project Manager",
    company: "Onest Tech LLC",
    location: "Banani, Dhaka, Bangladesh",
    period: "February 2021 – August 2021 (7 mos)",
    employmentType: "Full-time, On-site",
    responsibilities: [
      "Managed over 15 concurrent projects, ensuring a 95% on-time delivery rate with high-quality results.",
      "Built and maintained strong relationships with 100+ clients, driving project success and high customer satisfaction.",
      "Implemented Agile/Scrum methodologies, reducing average project delivery time by 20% and improving team collaboration.",
      "Strategically allocated technical resources to maximize efficiency and boost project ROI.",
      "Proactively identified and mitigated risks to ensure projects consistently delivered on-budget.",
    ],
    skills: [
      "Agile Project Management",
      "Scrum",
      "Technical Staff Management",
      "IT Project Management",
      "Technology Strategy",
      "Resource Planning",
      "Risk Management",
      "Technical Leadership",
    ],
  },

  {
    title: "Project Manager",
    company: "SpondonIT",
    location: "Panthapath, Dhaka, Bangladesh",
    period: "November 2018 – January 2021 (2 yrs 3 mos)",
    employmentType: "Full-time, On-site",
    responsibilities: [
      "Defined project objectives and deliverables leveraging modern technology stacks including PHP, Node.js, and Python.",
      "Implemented Infrastructure-as-Code (IaC) practices using AWS, Docker, and CI/CD pipelines to streamline deployments.",
      "Deployed performance monitoring solutions improving system reliability by 25%.",
      "Facilitated cross-functional collaboration between development and operations teams, enhancing productivity and delivery speed.",
      "Supervised creation of intuitive, visually appealing user interfaces, increasing user satisfaction by 30%.",
    ],
    skills: [
      "Project Scope Development",
      "Amazon Web Services (AWS)",
      "Docker",
      "Continuous Integration and Continuous Delivery (CI/CD)",
      "Cross-functional Team Leadership",
      "System Monitoring",
      "UI/UX Design",
    ],
  },

  {
    title: "Senior Software Engineer",
    company: "Boishakhi Media Limited",
    location: "Mohakhali, Dhaka, Bangladesh",
    period: "July 2017 – October 2018 (1 yr 4 mos)",
    employmentType: "Full-time, On-site",
    responsibilities: [
      "Led full-stack development using PHP (Laravel, CodeIgniter) and modern JavaScript frameworks.",
      "Managed and optimized MySQL and NoSQL databases to improve performance and reliability.",
      "Designed and implemented RESTful APIs and GraphQL endpoints for seamless data communication.",
      "Created visually appealing, user-friendly interfaces following modern CSS frameworks and UI/UX principles.",
      "Architected scalable systems capable of handling increased user loads through optimization strategies.",
    ],
    skills: [
      "Laravel",
      "CodeIgniter",
      "React.js",
      "NoSQL Databases",
      "GraphQL",
      "System Scaling",
      "Bootstrap",
      "Tailwind CSS",
      "Figma",
      "System Architecture",
    ],
  },

  {
    title: "Software Engineer",
    company: "United Group",
    location: "Gulshan-2, Dhaka, Bangladesh",
    period: "January 2016 – June 2017 (1 yr 6 mos)",
    employmentType: "Full-time, On-site",
    responsibilities: [
      'Awarded "Employee of the Year 2017" for outstanding performance and contribution.',
      "Led full-stack development, including database design and UI implementation, ensuring scalable and maintainable architecture.",
      "Developed and maintained RESTful APIs to facilitate smooth frontend-backend communication.",
      "Enhanced user experience and interactivity using JavaScript and jQuery.",
    ],
    skills: [
      "Full-Stack Development",
      "RESTful API Development",
      "JavaScript",
      "jQuery",
      "Database Design",
      "UI/UX Implementation",
    ],
  },

  {
    title: "Software Engineer Intern",
    company: "Institute of Water and Flood Management (IWFM), BUET",
    location: "Dhaka, Bangladesh",
    period: "January 2015 – December 2015 (1 yr)",
    employmentType: "Part-time, On-site",
    responsibilities: [
      "Developed and customized WordPress themes and plugins using PHP, JavaScript, HTML5, and CSS3.",
      "Managed MySQL databases to support efficient data storage and retrieval.",
      "Utilized Git for version control and FileZilla for FTP deployment to streamline collaboration.",
      "Authored detailed technical documentation to facilitate knowledge sharing and onboarding.",
      "Gained hands-on experience in web development, database management, and software engineering best practices.",
    ],
    skills: [
      "OOP",
      "PHP",
      "HTML5",
      "CSS3",
      "JavaScript",
      "MySQL",
      "Git",
      "WordPress",
    ],
  },
];

 



  return (
    <div className="min-h-screen bg-background">
      <MouseFollower />
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="hero"
        ref={heroRef}
        className="hero-gradient text-white py-20 px-4 pt-32 relative overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Added animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Leading Technology,
              <br />
              <motion.span
                className="text-indigo-400"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Driving Innovation
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Senior Technology Leader with 10+ years guiding high-performing teams, managing $2M+ budgets, and
              delivering scalable, AI-powered solutions.
            </motion.p>

            {/* Animated Metrics */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { end: 10, suffix: "+", label: "Years Experience" },
                { end: 40, suffix: "+", label: "Developers Led" },
                { end: 2, prefix: "$", suffix: "M+", label: "Budgets Managed" },
                { end: 98, suffix: "%", label: "Client Satisfaction" },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
                    {metric.prefix}
                    <AnimatedCounter end={metric.end} suffix={metric.suffix} />
                  </div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3">
                  <Mail className="mr-2 h-5 w-5" />
                  Let's Connect
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 bg-transparent"
                >
                  View Projects
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Technical Expertise Matrix */}
      <section id="expertise" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-gray-900">Technical Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming complex technical challenges into scalable business solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="skill-tile border-0 shadow-lg hover:shadow-xl h-full">
                  <CardContent className="p-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <skill.icon className="h-12 w-12 text-indigo-600 mb-6" />
                    </motion.div>
                    <h3 className="font-serif text-xl font-bold mb-4 text-gray-900">{skill.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Journey */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Leadership Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A track record of scaling teams, optimizing systems, and driving innovation
            </p>
          </motion.div>

          <div className="space-y-8">
  {experiences.map((exp, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="border-l-4 border-l-indigo-600 shadow-lg">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
              <p className="text-lg text-indigo-600 font-semibold">{exp.company}</p>
              <p className="text-sm text-gray-600">
                {exp.location} &bull; <span className="italic">{exp.employmentType}</span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="w-fit mt-2 md:mt-0 flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {exp.period}
              </Badge>
            </motion.div>
          </div>

          {/* Responsibilities List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {exp.responsibilities.map((resp, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 + 0.6 }}
                viewport={{ once: true }}
              >
                <TrendingUp className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{resp}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills Section */}
          {exp.skills && exp.skills.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
              viewport={{ once: true }}
            >
              {exp.skills.map((skill, skillIdx) => (
                <Badge
                  key={skillIdx}
                  variant="outline"
                  className="text-indigo-700 border-indigo-400 hover:bg-indigo-100 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A selection of projects I've worked on
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => {
              const productName = project["Product Name"]?.toLowerCase().replace(/ /g, "-");
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Link href={`/projects/${productName}`}>
                    <Card className="border-l-4 border-l-indigo-600 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                      <CardContent className="p-8">
                        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">{project["Product Name"]}</h3>
                        <p className="text-gray-700">{project.Description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.Technology.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-indigo-700 border-indigo-400 hover:bg-indigo-100 cursor-default"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-gray-900">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sharing knowledge on technology leadership, software architecture, and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {latestBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link href={`/blogs/${blog.slug}`}>
                  <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl h-full transition-all duration-300">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                      <Badge className="absolute top-4 right-4 bg-indigo-600 text-white">{blog.category}</Badge>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(blog.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {blog.readTime}
                        </div>
                      </div>

                      <h3 className="font-serif text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

                      <div className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/blogs">
              <Button
                size="lg"
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white bg-transparent"
              >
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
