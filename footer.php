</main>
<footer class="o-hidden">
    <div class="bg-blur-wrapper">
        <div class="bg-blur bg-blur-top-left blue rounded-full"></div>
    </div>

    <div class="footer-wrapper2">
        <div class="footer-area ">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 border-1">
                        <div class="single-footer-caption">
                            <div class="footer-tittle">
                                <div class="footer-pera">
                                    <p>Thank you for browsing my web site and feel free to connect with me through
                                        social media and let me know if you have any questions.</p>
                                </div>
                            </div>
                            <!-- Social -->
                            <ul class="header-social">

                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-7">
                        <div class="single-footer-caption">
                            <div class="footer-tittle">
                                <h4>Tech Stack</h4>
                                <div class="tag-list pt-10">
                                    <a href="#" class="cmn-btn0">react</a>
                                    <a href="#" class="cmn-btn0">SASS</a>
                                    <a href="#" class="cmn-btn0">bootstrap</a>
                                    <a href="#" class="cmn-btn0">CSS</a>
                                    <a href="#" class="cmn-btn0">HTML</a>
                                    <a href="#" class="cmn-btn0">JavaScript</a>
                                    <a href="#" class="cmn-btn0">JQuery</a>
                                    <a href="#" class="cmn-btn0">Figma</a>
                                    <a href="#" class="cmn-btn0">UI/UX</a>
                                    <a href="#" class="cmn-btn0">Git</a>
                                    <a href="#" class="cmn-btn0">GitLab</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                        <div class="single-footer-caption">
                            <div class="footer-tittle">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li class="single-list"><a target="_blank"
                                            href="https://leetcode.com/jmrashed/">leetcode</a>
                                    </li>
                                    <li class="single-list"><a target="_blank"
                                            href="https://www.hackerrank.com/jmrashed">hackerrank</a></li>
                                    <li class="single-list"><a target="_blank"
                                            href="https://codeforces.com/profile/jmrashed">codeforces</a></li>
                                    <li class="single-list"><a target="_blank"
                                            href="https://profiles.topcoder.com/jmrashed">topcoder</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Footer Copyright -->
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="footer-nav">
                            <ul class="listing">
                                <li class="single-list"><a href="blog.html">Blog</a></li>
                                <li class="single-list"><a href="#portfolio">Projects</a></li>
                                <li class="single-list"><a href="#portfolio">Resources</a></li>
                                <li class="single-list"><a href="https://docs.google.com/document/u/0/">Resume</a>
                                </li>
                                <li class="single-list"><a href="#contact">Newsletter</a></li>
                            </ul>
                            <p class="copyRight"> <i class="fa fa-copyright" aria-hidden="true"></i> 2023 | All
                                rights reserved by <a href="https://github.com/jmrashed/">Md Rasheduzzaman</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</footer>
<!-- Scroll Up -->
<div id="back-top">
    <a title="Go to Top" href="#"><i class="fas fa-long-arrow-alt-up scroll-animate"></i></a>
</div>

<!-- jquery-->
<script src="assets/js/jquery-3.6.0.min.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap-5.0.2.min.js"></script>
<!-- Plugin -->
<script src="assets/js/plugin.js"></script>
<!-- Main js-->
<script src="assets/js/mian.js"></script>


<script>
$(document).ready(function() {
    // Function to append project HTML
    function appendProjectHTML(project) {
        var projectHtml = `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div class="box snake mb-24">
                    <div class="gallery-img" style="background-image: url('${project["background-image"]}');"></div>
                    <div class="contents"> 
                        <h5 class="project-title" ><a class="project-title-link" href="${project.url}">${project.title}</a></h5>
                        <p class="project-description">${project.description}</p>
                        <p class="project-technology"><strong>Technology:</strong> ${project.technology}</p>
                        <p  class="project-keywords "><strong>Keywords:</strong> ${project.keywords.join(', ')}</p>
                    </div>
                    <div class="overlay">
                        <div class="overlay-content">
                            <h5><a href="${project.url}" target="_blank" class="live-btn show-btn-only-when-hover">Demo</a></h5>
                        </div>
                    </div>
                </div>
            </div>`;
        return projectHtml;
    }

    // Function to fetch JSON data and append it
    function appendProjects() {
        $.getJSON('projects.json', function(data) {
            var projectsContainer = $('#projects');

            $.each(data, function(index, project) {
                var projectHtml = appendProjectHTML(project);
                projectsContainer.append(projectHtml);
            });
        });
    }

    // Call the function to fetch and append projects
    //  appendProjects();
});



$(document).ready(function() {
    // Function to append experience HTML
    function appendExperienceHTML(experience) {
        var experienceHtml = `
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="single-services border-color-five mb-24">
                    <div class="services-ion sookh-logo">
                        <h2 class="text-white mt-1">${experience.company}</h2>
                        <h5 class="text-warning mb-3">${experience.position}</h5>
                        <h5 class="text-info">${experience.startDate} - ${experience.endDate}</h5>
                    </div>
                    <div class="services-cap">
                        <ul>
        `;

        // Loop through responsibilities and add them to the HTML
        experience.responsibilities.forEach(function(responsibility) {
            experienceHtml += `<li> 💫 ${responsibility}</li>`;
        });

        experienceHtml += `
                        </ul>
                        <!-- Tag -->
                        <div class="tag-list pt-10">
        `;

        // Loop through skills and add them to the HTML
        experience.skills.forEach(function(skill) {
            experienceHtml += `<a href="#" class="cmn-btn0">${skill}</a>`;
        });

        experienceHtml += `
                        </div>
                    </div>
                </div>
            </div>
        `;

        return experienceHtml;
    }

    // Function to fetch JSON data and append it
    function appendExperiences() {
        $.getJSON('experiences.json', function(data) {
            var experiencesContainer = $('#experiences');

            $.each(data, function(index, experience) {
                var experienceHtml = appendExperienceHTML(experience);
                experiencesContainer.append(experienceHtml);
            });
        });
    }

    // Call the function to fetch and append experiences
    appendExperiences();
});








function generateSocialMediaLinks(data) {
    var socialMediaList = $('.header-social');

    $.each(data, function(index, link) {
        // Create list item and anchor tag
        var listItem = $('<li></li>');
        var anchorTag = $('<a></a>', {
            href: link.url,
            target: '_blank'
        });

        // Create Font Awesome icon with color
        var iconTag = $('<i></i>', {
            class: link.icon,
            style: 'color: ' + link.iconColor // Set the icon color from JSON
        });
        anchorTag.append(iconTag);
        listItem.append(anchorTag);
        socialMediaList.append(listItem);
    });
}

// Fetch JSON data
$.getJSON('social-media-links.json', function(data) {
    generateSocialMediaLinks(data);
});











// Function to generate tech stack HTML
function generateTechStack(techData) {
    var techStackContainer = $('#tech-stack');

    $.each(techData, function(index, tech) {
        var techHtml = `
                    <li class="tech-item p-3">
                        <i class="${tech.icon}" style="color: ${tech.color};"></i>
                        <span>${tech.name} </span>
                    </li>`;
        // console.log(techHtml);
        techStackContainer.append(techHtml);
    });
}

// Fetch JSON data
$.getJSON('tech-stack.json', function(data) {
    //  console.log(data);
    generateTechStack(data);
});
</script>


<script>
$(document).ready(function() {
    // Fetch the JSON data
    $.getJSON("products.json", function(data) {
        // Initialize an empty variable to store HTML markup
        var html = "";
        let classArray = [
            "border-color-one",
            "border-color-two",
            "border-color-three",
            "border-color-four",
            "border-color-five",
            "border-color-six",
            "border-color-seven",
            "border-color-eight",
        ];

        // Loop through the JSON data
        $.each(data, function(index, product) {
            // Truncate description to a maximum of 100 characters
            var truncatedDescription = product.description.substring(0, 130) + (product
                .description.length > 100 ? "..." : "");
            var tagsArray = product.tags.split(',');

            // Create HTML markup for each product
            html += `
                    <div class=" mb-12 col-md-6 p-3">
                        <div class="my-recent-projects single-services ${classArray[index]} bg-dark" id="product-${product.id}">
                            <span class="highlight-text">${index + 1}</span>
                            <h6 class="text-white mt-1 mb-2">${product.title}</h6>
                            <p class=" mb-3 mt-3">${truncatedDescription}</p>
                            <div class="tag-list">`;
            tagsArray.forEach(tag => {
                html += `<a href="#" class="cmn-btn0">${tag}</a>`;
            });

            html += `</div>
                    
                            <a target="_blank" class="text-warning" href="${product.envato_link}">Demo</a>
                        </div>
                    </div>`;
        });

        // Replace the content of the "product-list" div with the generated HTML
        $("#product-list").html(html);
    });
});
</script>


<script>
// Function to generate HTML for each blog post
function generateBlogHTML(blog) {
    var blogHTML = `
            <div class="col-lg-4 mb-3 mt-3">
                <div class="blog-post p-2 border-1">
                    <img src="${blog.image}" alt="${blog.title}">
                    <h4><a class="text-white single" href="${blog.url}" target="_blank">${blog.title}</a></h4>
                    <p class="mt-2">${blog.description}</p>
                    <p class="mt-2"><strong>Category:</strong> ${blog.category}</p>
                    <p class="mt-2"><strong>Keywords:</strong> ${blog.keywords.join(', ')}</p>
                </div>
            </div>
            `;
    return blogHTML;
}

// Fetch JSON data and generate HTML
$.getJSON('assets/data/blogs.json', function(data) {

    var blogList = $('#blog-list');
    $.each(data, function(index, blog) {
        var blogHTML = generateBlogHTML(blog);
        blogList.append(blogHTML);
    });
});
</script>

</body>

</html>