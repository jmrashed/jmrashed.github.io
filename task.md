You are a world-class frontend developer and UI/UX designer with expertise in creating modern, clean, and responsive web designs. Always use TailwindCSS (via CDN) for styling and jQuery (via CDN) for interactive elements.  

Task:
```html
    <!-- Skills Section -->
    <section id="skills" class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold gradient-text mb-4">Technical Expertise</h2>
                <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                <p class="text-gray-300 text-xl mt-6 max-w-3xl mx-auto">Comprehensive full-stack development skills with
                    expertise in modern technologies and frameworks</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Frontend Skills -->
                <div class="skill-card glass p-8 rounded-2xl border border-blue-500/30 text-center">
                    <div class="mb-6">
                        <i class="fab fa-html5 text-5xl text-orange-500 mb-4"></i>
                        <h3 class="text-2xl font-bold text-blue-300">Frontend</h3>
                    </div>
                    <ul class="space-y-2 text-gray-300">
                        <li class="flex items-center justify-center"><i
                                class="fab fa-react text-blue-400 mr-2"></i>React.js</li>
                        <li class="flex items-center justify-center"><i
                                class="fab fa-js text-yellow-400 mr-2"></i>JavaScript</li>
                        <li class="flex items-center justify-center"><i
                                class="fab fa-html5 text-orange-500 mr-2"></i>HTML5</li>
                        <li class="flex items-center justify-center"><i
                                class="fab fa-css3-alt text-blue-500 mr-2"></i>CSS3</li>
                        <li class="flex items-center justify-center"><i
                                class="fas fa-paint-brush text-purple-400 mr-2"></i>Tailwind CSS</li>
                        <li class="flex items-center justify-center"><i
                                class="fab fa-bootstrap text-purple-600 mr-2"></i>Bootstrap</li>
                    </ul>
                </div>

                <!-- Backend Skills -->
                <div class="skill-card glass p-8 rounded-2xl border border-green-500/30 text-center">
                    <div class="mb-6">
                        <i class="fas fa-server text-5xl text-green-500 mb-4"></i>
                        <h3 class="text-2xl font-bold text-green-300">Backend</h3>
                    </div>
                    <ul class="space-y-2 text-gray-300">
                        <li class="flex items-center justify-center"><i class="fab fa-php text-purple-500 mr-2"></i>PHP
                        </li>
                        <li class="flex items-center justify-center"><i
                                class="fab fa-laravel text-red-500 mr-2"></i>Laravel</li>
                        <li class="flex items-center justify-center"><i
                                class="fab fa-node-js text-green-500 mr-2"></i>Node.js</li>
                        <li class="flex items-center justify-center"><i
                                class="fab fa-python text-yellow-400 mr-2"></i>Python</li>
                        <li class="flex items-center justify-center"><i
                                class="fas fa-fire text-orange-500 mr-2"></i>FastAPI</li>
                        <li class="flex items-center justify-center"><i
                                class="fas fa-code text-blue-400 mr-2"></i>RESTful APIs</li>
                    </ul>
                </div>

                <!-- Database Skills -->
                <div class="skill-card glass p-8 rounded-2xl border border-yellow-500/30 text-center">
                    <div class="mb-6">
                        <i class="fas fa-database text-5xl text-yellow-500 mb-4"></i>
                        <h3 class="text-2xl font-bold text-yellow-300">Database</h3>
                    </div>
                    <ul class="space-y-2 text-gray-300">
                        <li class="flex items-center justify-center"><i
                                class="fas fa-database text-blue-500 mr-2"></i>MySQL</li>
                        <li class="flex items-center justify-center"><i
                                class="fas fa-leaf text-green-500 mr-2"></i>MongoDB</li>
                        <li class="flex items-center justify-center"><i
                                class="fas fa-database text-red-500 mr-2"></i>NoSQL</li>
                        <li class="flex items-center justify-center"><i
                                class="fas fa-search text-purple-400 mr-2"></i>Redis</li>
                        <li class="flex items-center justify-center"><i
                                class="fas fa-chart-line text-orange-400 mr-2"></i>GraphQL</li>
                        <li class="flex items-center justify-center"><i
                                class="fas fa-sync text-blue-400 mr-2"></i>Database Optimization</li>
                    </ul>
                </div>

                <!-- DevOps Skills -->
                <div class="skill-card glass p-8 rounded-2xl border border-purple-500/30 text-center">
                    <div class="mb-6">
                        <i class="fab fa-aws text-5xl text-orange-400 mb-4"></i>
                        <h3 class="text-2xl font-bold text-purple-300">DevOps & Cloud</h3>
                    </div>
                    <ul class="space-y-2 text-gray-300">
                        <li class="flex items-center justify-center"><i
                                class="fab fa-docker text-blue-500 mr-2"></i>Docker</li>
                        <li class="flex items-center justify-center"><i class="fab fa-aws text-orange-400 mr-2"></i>AWS
                        </li>
                        <li class="flex items-center justify-center"><i
                                class="fas fa-infinity text-green-400 mr-2"></i>CI/CD</li>
                        <li class="flex items-center justify-center"><i class="fab fa-git-alt text-red-500 mr-2"></i>Git
                        </li>
                        <li class="flex items-center justify-center"><i
                                class="fas fa-server text-gray-400 mr-2"></i>Nginx</li>
                        <li class="flex items-center justify-center"><i
                                class="fas fa-tools text-yellow-400 mr-2"></i>System Architecture</li>
                    </ul>
                </div>
            </div>

            <!-- Leadership Skills -->
            <div class="mt-12 text-center">
                <h3 class="text-3xl font-bold text-blue-300 mb-8">Leadership & Management</h3>
                <div class="flex flex-wrap justify-center gap-4">
                    <span
                        class="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 text-blue-300">Team
                        Leadership</span>
                    <span
                        class="px-6 py-3 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full border border-green-500/30 text-green-300">Project
                        Management</span>
                    <span
                        class="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 text-purple-300">Agile/Scrum</span>
                    <span
                        class="px-6 py-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full border border-yellow-500/30 text-yellow-300">Mentoring</span>
                    <span
                        class="px-6 py-3 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-full border border-red-500/30 text-red-300">Strategic
                        Planning</span>
                    <span
                        class="px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full border border-indigo-500/30 text-indigo-300">System
                        Architecture</span>
                </div>
            </div>
        </div>
    </section>

```
write jQuery for import assets\data\skills.json and make dynamic   <!-- Skills Section --> based on json.

restructure html markup and use ID: appendBySkillContent for appned dynamic content by Jquery