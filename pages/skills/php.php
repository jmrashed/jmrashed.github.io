<?php 
$jsonFilePath = 'assets/data/skills/php.json';
$jsonData = file_get_contents($jsonFilePath);
$json = json_decode($jsonData, true);

?>
<div class="container mt-5 bg-dark mb-5 p-5 rounded">
    <h1 class="text-light mb-3 mt-2"><?php echo $json['title']; ?></h1>
    <p><?php echo $json['description']; ?></p>

    <h2 class="text-light mb-3 mt-5">Skills</h2>
    <ul>
      <?php foreach ($json['skills'] as $skill): ?>
        <li>
          <strong><?php echo $skill['name']; ?></strong> - <?php echo $skill['level']; ?><br>
          <?php echo $skill['description']; ?>
        </li>
      <?php endforeach; ?>
    </ul>

    <h2 class="text-light mb-3 mt-5">Projects</h2>
    <?php foreach ($json['projects'] as $project): ?>
      <div class="card mb-3">
        <img src="<?php echo $project['image']; ?>" class="card-img-top" alt="<?php echo $project['name']; ?>">
        <div class="card-body">
          <h5 class="card-title"><?php echo $project['name']; ?></h5>
          <p class="card-text"><?php echo $project['description']; ?></p>
          <a href="<?php echo $project['url']; ?>" class="btn btn-primary">Visit Project</a>
        </div>
      </div>
    <?php endforeach; ?>

    <h2 class="text-light mb-3 mt-5">My Completed Projects</h2>
    <p>Total Projects: <?php echo $json['projectStats']['totalProjects']; ?></p>

    <h2 class="text-light mt-5">Why PHP ? </h2>
    <p><?php echo $json['projectStats']['whyPHP']; ?></p>
    

    <h2 class="text-light mt-5">Why Favorite ? </h2>
    <p> <?php echo $json['projectStats']['favoriteFeature']; ?></p>



    <h2 class="text-light mt-5">Why Use PHP ? </h2>
    <p> <?php echo $json['projectStats']['whyUsePHP']; ?></p>
  </div>
