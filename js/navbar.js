// lorsque la navbar est petite et collapsed
$('.navbar-collapse').on('shown.bs.collapse', function () {
    $('.transparent-replace').css('height', 176);
});

// lorsque la navbar est redevenue grande après un collapse
$('.navbar-collapse').on('hidden.bs.collapse', function () {
    $('.transparent-replace').css('height', 64);
});

// quand on clique sur le burger, quand la fenetre est petite
// ca toggle le sidenav
$('.burger').on('click', function () {
    if ($('.burger').hasClass('cross')) {
        closeSideNav();
    } else {
        openSideNav();
    }
});

$('.overlay-nav').on('click', function () {
    closeSideNav();
});

$(window).resize(function () {
    var windowWidth = window.innerWidth
    if (windowWidth >= 650) {
        closeSideNav();
    }
});

// ouvre le sidenav
function openSideNav() {
    toggleClass('.sidenav', 'show', 'hidden');
    toggleClass('.burger', 'cross', 'collapsed');
    disableScroll();
}

// ferme le sidenav
function closeSideNav() {
    toggleClass('.sidenav', 'hidden', 'show');
    toggleClass('.burger', 'collapsed', 'cross');
    enableScroll();
}

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