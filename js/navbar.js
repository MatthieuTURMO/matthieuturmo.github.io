// lorsque la navbar est petite et collapsed
$('.navbar-collapse').on('shown.bs.collapse', function () {
    $('.transparent-replace').css('height', 176);
});

// lorsque la navbar est redevenue grande après un collapse
$('.navbar-collapse').on('hidden.bs.collapse', function () {
    $('.transparent-replace').css('height', 64);
});

// quand on clique sur le burger, quand la fenetre est petite
$('.burger').on('click', function () {
    toggleClass('.sidenav', 'show', 'hidden');
    disableScroll();
});

$('.overlay-nav').on('click', function () {
    enableScroll();
    toggleClass('.sidenav', 'hidden', 'show');
});

$(window).resize(function () {
    var windowWidth = window.innerWidth
    if (windowWidth >= 650) {
        toggleClass('.sidenav', 'hidden', 'show');
        enableScroll();
    }
});

// ajoute classToAdd et delete classToRemove du composant selector
function toggleClass(selector, classToAdd, classToRemove) {
    $(selector).addClass(classToAdd);
    $(selector).removeClass(classToRemove);
}

function disableScroll() {
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
}

function enableScroll() {
    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });
}