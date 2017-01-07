<main class="content">
    <!-- Summary -->
    <section>
        <h1>Career Summary</h1>
        <p><?= nl2br(cv()->summary) ?></p>
    </section>

    <!-- Skills -->
    <section>
        <h1>Skills</h1>
        <?php foreach (cv()->skills as $skill): ?>
            <div class="skill-wrapper">
                <span class="skill-name"><?= $skill['title'] ?></span>
                <div class="skill-value-wrapper" title="<?= $skill['value'] ?>%">
                    <div class="skill-value" style="width:<?= $skill['value'] ?>%;"></div>
                </div>
                <p><?= nl2br($skill['desc']) ?></p>
            </div>
        <?php endforeach ?>
    </section>

    <!-- Work Experience -->
    <section>
        <h1>Work Experience</h1>
        <?php foreach (cv()->jobs as $job): ?>
            <div class="job-wrapper">
                <div class="job-name"><?= $job['title'] ?></div>
                <span><?= $job['company'].'; '.$job['period'] ?></span>
                <p><?= nl2br($job['desc']) ?></p>
            </div>
        <?php endforeach ?>
    </section>

    <!-- Projects -->
    <section>
        <h1>Projects</h1>
        <?php foreach (cv()->projects as $project): ?>
            <div class="project-wrapper">
                <div class="project-meta">
                    <span class="project-name"><?= $project['title'] ?></span>
                    <a class="project-link" href="<?= $project['url'] ?>" target="_blank"><?= $project['url'] ?></a>
                </div>
                <p><?= nl2br($project['desc']) ?></p>
            </div>
        <?php endforeach ?>
    </section>

    <!-- Extra info -->
    <?php foreach (cv()->sections as $title => $text): ?>
        <section>
            <h1><?= $title ?></h1>
            <p><?= nl2br($text) ?></p>
        </section>
    <?php endforeach ?>
</main>
