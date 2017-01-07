<header class="content">

    <div class="width-50 width-mobile-phone-100 cell nopad relative">
        <div id="avatar-wrapper">
            <picture>
                <source media="(max-width: 480px)" srcset="<?= cv()->images['medium']; ?>, <?= cv()->images['large']; ?> 2x">
                <img src="<?= cv()->images['small']; ?>" alt="<?= cv()->name ?>" width="164" height="164">
            </picture>
        </div>

        <div id="links">
            <?php foreach (cv()->links as $link): ?>
                <a class="link" target="_blank" href="<?= $link['url'] ?>" title="<?= $link['title'] ?>">
                    <i class="<?= $link['icon'] ?>"></i>
                </a>
            <?php endforeach; ?>
        </div>
    </div>

    <div id="info" class="info width-50 width-mobile-phone-100 cell nopad">
        <h1><?= cv()->name ?></h1>
        <p class="prof"><?= cv()->profession ?></p>
        <p>
            <a href="https://goo.gl/maps/unB85JnKjCu" title="Chisinau, Moldova in Google Maps" target="_blank"><?= cv()->location ?></a>
            <i class="icon-location"></i>
        </p>
        <p>
            <a href="tel:<?= str_replace([' ', '(', ')'], '', cv()->phone) ?>" title="Call <?= cv()->phone ?>">
                <?= cv()->phone ?>
            </a>
            <i class="icon-phone"></i>
        </p>
    </div>
</header>
