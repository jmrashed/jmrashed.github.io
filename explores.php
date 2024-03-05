<?php include('header.php'); ?>
<?php
$technicalSkills = [
    'Programming Languages' => [
        'PHP',
        'JavaScript',
        'Python', 
    ],
    'Web Development' => [
        'HTML5',
        'CSS3',
        'React',
        'Angular',
        'Vue.js',
        'Node.js',
    ],
    'Database Management' => [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'SQLite',
    ],
    'Server-Side Technologies' => [
        'LAMP Stack (Linux, Apache, MySQL, PHP)',
        'MEAN Stack (MongoDB, Express.js, Angular, Node.js)',
        'Django',
        'ASP.NET',
    ],
    'Version Control' => [
        'Git',
        'GitHub',
        'GitLab',
        'Bitbucket',
    ],
    'Cloud Computing' => [
        'Amazon Web Services (AWS)',
        'Microsoft Azure',
        'Google Cloud Platform (GCP)',
    ],
    'DevOps' => [
        'Docker',
        'Kubernetes',
        'Jenkins',
        'Ansible',
    ],
    'Cybersecurity' => [
        'Network Security',
        'Penetration Testing',
        'Security Auditing',
        'Encryption Techniques',
    ],
];
?>
<section class="contact-us section-padding" id="contact">
    <div class="container  mt-5">
        <div class="row">
            <div class="col-lg-3">
                <div class="single-footer-caption make-sidebar">
                    <div class="footer-tittle">
                        <h4 class="text-white mt-1">Explore More</h4>
                        <div class="tag-list pt-10">
                            <?php foreach ($technicalSkills as $category => $skills) : ?>
                                <div class="skill-category"><?= $category ?></div>
                                <ul class="skill-list">
                                    <?php foreach ($skills as $skill) : ?>
                                        <li> <a href="explore-details.php?page=<?= $skill ?>" class="cmn-btn0"><?= $skill ?></a></li>
                                    <?php endforeach; ?>
                                </ul>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-9">
                <h4 class="text-white mt-1">Details</h4>

            </div>

        </div>

    </div>
</section>
<?php include('footer.php'); ?>