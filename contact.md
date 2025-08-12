---
layout: default
title: Contact
---

<section class="contact py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="display-5 fw-bold">Get In Touch</h2>
            <p class="lead text-muted">Have a project in mind or want to connect? Feel free to reach out </p>
        </div>
        
        <div class="row g-4 justify-content-center">
            <div class="col-lg-6">
                <div class="card shadow-sm">
                    <div class="card-body p-4 p-lg-5">
                        <h3 class="card-title mb-4">Send me a message</h3>
                        <form id="contactForm" netlify>
                            <div class="mb-3">
                                <label for="name" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="subject" class="form-label">Subject</label>
                                <input type="text" class="form-control" id="subject" name="subject">
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 py-2">
                                <span class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-4">
                <div class="card shadow-sm h-100">
                    <div class="card-body p-4 p-lg-5">
                        <h3 class="card-title mb-4">Contact Information</h3>
                        <ul class="list-unstyled">
                            <li class="mb-3">
                                <div class="d-flex align-items-center">
                                    <div class="bg-primary bg-opacity-10 p-2 rounded me-3">
                                        <i class="bi bi-envelope-fill text-primary"></i>
                                    </div>
                                    <div>
                                        <h6 class="mb-0">Email</h6>
                                        <a href="mailto:jmrashed.dev@gmail.com" class="text-decoration-none">jmrashed.dev@gmail.com</a>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="d-flex align-items-center">
                                    <div class="bg-primary bg-opacity-10 p-2 rounded me-3">
                                        <i class="bi bi-github text-primary"></i>
                                    </div>
                                    <div>
                                        <h6 class="mb-0">GitHub</h6>
                                        <a href="https://github.com/jmrashed" target="_blank" class="text-decoration-none">github.com/jmrashed</a>
                                    </div>
                                </div>
                            </li>
                            <li class="mb-3">
                                <div class="d-flex align-items-center">
                                    <div class="bg-primary bg-opacity-10 p-2 rounded me-3">
                                        <i class="bi bi-linkedin text-primary"></i>
                                    </div>
                                    <div>
                                        <h6 class="mb-0">LinkedIn</h6>
                                        <a href="https://www.linkedin.com/in/jmrashed" target="_blank" class="text-decoration-none">linkedin.com/in/jmrashed</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="bg-primary bg-opacity-10 p-2 rounded me-3">
                                        <i class="bi bi-geo-alt-fill text-primary"></i>
                                    </div>
                                    <div>
                                        <h6 class="mb-0">Location</h6>
                                        <span>Dhaka, Bangladesh</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        
                        <hr class="my-4">
                        
                        <h5 class="mb-3">Connect with me</h5>
                        <div class="d-flex gap-3">
                            <a href="https://github.com/jmrashed" target="_blank" class="btn btn-outline-dark btn-sm rounded-circle">
                                <i class="bi bi-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jmrashed" target="_blank" class="btn btn-outline-primary btn-sm rounded-circle">
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/@_jmrashed" target="_blank" class="btn btn-outline-info btn-sm rounded-circle">
                                <i class="bi bi-twitter"></i>
                            </a>
                            <a href="mailto:jmrashed@gmail.com" class="btn btn-outline-danger btn-sm rounded-circle">
                                <i class="bi bi-envelope-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('button[type="submit"]');
    const spinner = submitBtn.querySelector('.spinner-border');
    
    // Show loading state
    submitBtn.disabled = true;
    spinner.classList.remove('d-none');
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        spinner.classList.add('d-none');
        submitBtn.disabled = false;
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    }, 1500);
});
</script>