import Link from "next/link";
import { Download, GraduationCap, Award } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import HireMeButton from "@/components/ui/HireMeButton";
import type { AchievementCategory } from "@/types";
import { siteConfig } from "@/lib/utils";

const stats = [
  { value: "10+", label: "Years Experience", color: "text-blue-400", border: "border-blue-500/40", bg: "from-blue-700/20 to-purple-600/20" },
  { value: "36+", label: "Team Members Led", color: "text-green-400", border: "border-green-500/40", bg: "from-green-700/20 to-teal-600/20" },
  { value: "100+", label: "Projects Delivered", color: "text-purple-400", border: "border-purple-500/40", bg: "from-purple-700/20 to-pink-600/20" },
  { value: "98%", label: "Client Satisfaction", color: "text-yellow-400", border: "border-yellow-500/40", bg: "from-yellow-700/20 to-orange-600/20" },
  { value: "$2M+", label: "Budget Managed", color: "text-pink-400", border: "border-pink-500/40", bg: "from-pink-700/20 to-red-600/20" },
  { value: "500K+", label: "Revenue via AI", color: "text-indigo-400", border: "border-indigo-500/40", bg: "from-indigo-700/20 to-blue-600/20" },
  { value: "120+", label: "Projects Delivered", color: "text-green-400", border: "border-green-500/40", bg: "from-green-700/20 to-teal-600/20" },
  { value: "🏆", label: "Award-Winning Leadership", color: "text-yellow-400", border: "border-yellow-500/40", bg: "bg-yellow-800/20" },
];

interface AboutProps {
  achievements: AchievementCategory[];
}

export default function About({ achievements }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <AnimatedSection direction="left">
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Driving Innovation, Building Impact
            </h3>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                As a <span className="font-semibold text-blue-300">Tech Leader with 10+ years of experience</span>, I have transformed ideas into scalable, high-impact software solutions, leading teams of engineers to deliver products that accelerate business growth.
              </p>
              <p>
                Currently spearheading a <span className="font-semibold text-green-300">36-member development team at Onest Tech LLC</span>, I blend deep technical expertise in <span className="text-purple-300">PHP, Node.js, React, and Cloud Infrastructure</span> with strategic leadership.
              </p>
              <p>
                I have strong experience working remotely — managing distributed teams, running async code reviews, and maintaining CI/CD workflows across time zones.
              </p>
              <p>
                Passionate about fostering a culture of <span className="font-semibold text-yellow-300">innovation, mentorship, and continuous learning</span>, empowering engineers to grow while driving organizational success.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${stat.bg} p-5 rounded-2xl border ${stat.border} shadow-lg hover:scale-105 transition-transform duration-300`}
                >
                  <div className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-300 text-xs tracking-wide uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Coding profiles */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="https://leetcode.com/u/jmrashed/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 bg-gradient-to-br from-orange-700/10 to-orange-500/10 rounded-2xl border border-orange-500/30 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">LC</div>
                  <div>
                    <h4 className="font-bold text-orange-300">LeetCode</h4>
                    <p className="text-gray-300 text-xs">Problem-solving & competitive programming</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div><div className="text-xl font-extrabold text-white">320</div><div className="text-gray-400 text-xs">Problems Solved</div></div>
                  <div><div className="text-xl font-extrabold text-white">55%</div><div className="text-gray-400 text-xs">Acceptance Rate</div></div>
                </div>
              </Link>

              <Link
                href="https://www.hackerrank.com/profile/jmrashed"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 bg-gradient-to-br from-green-700/10 to-green-500/10 rounded-2xl border border-green-500/30 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">HR</div>
                  <div>
                    <h4 className="font-bold text-green-300">HackerRank</h4>
                    <p className="text-gray-300 text-xs">Skills & certification challenges</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div><div className="text-xl font-extrabold text-white">180</div><div className="text-gray-400 text-xs">Challenges Solved</div></div>
                  <div><div className="text-xl font-extrabold text-white">30</div><div className="text-gray-400 text-xs">Certifications</div></div>
                </div>
              </Link>
            </div>

            {/* Quote */}
            <div className="mt-6 p-5 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl">
              <p className="text-gray-200 text-lg italic">
                &ldquo;I don&apos;t just build software — I build solutions that scale, empower businesses, and inspire teams to achieve more.&rdquo;
              </p>
            </div>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <HireMeButton className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-green-500 to-teal-400 hover:from-green-600 hover:to-teal-500 rounded-lg text-sm font-semibold transition-all" />
              <Link
                href={siteConfig.cvPath}
                target="_blank"
                download
                className="inline-flex items-center gap-2 px-5 py-3 bg-transparent border border-gray-700 rounded-lg text-sm text-gray-300 hover:bg-white/5 transition-all"
              >
                <Download className="w-4 h-4" /> Download Resume
              </Link>
            </div>
          </AnimatedSection>

          {/* Right column — achievements */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div className="card-glass p-8">
                <h4 className="text-2xl font-bold text-blue-300 mb-6">Core Achievements</h4>
                <div className="space-y-6">
                  {achievements.map((cat) => (
                    <div key={cat.category}>
                      <h5 className="text-lg font-semibold text-blue-400 mb-3 border-b border-blue-500/30 pb-2">
                        {cat.category}
                      </h5>
                      <ul className="space-y-3">
                        {cat.items.map((item) => (
                          <li key={item.id} className="flex items-start gap-3">
                            <Award className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{item.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h5 className="text-xl font-semibold text-blue-300 mb-4">Education & Certifications</h5>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <p className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-blue-400" /> B.Sc. Computer Science & Engineering — CGPA 3.73</p>
                    <p className="flex items-center gap-2"><Award className="w-4 h-4 text-green-400" /> Project Management — Rice University</p>
                    <p className="flex items-center gap-2"><Award className="w-4 h-4 text-purple-400" /> Web Development Specialization — University of Michigan</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
