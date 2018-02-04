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
    toggleClass('.burger', 'cross', '');
    disableScroll();
}

// ferme le sidenav
function closeSideNav() {
    toggleClass('.sidenav', 'hidden', 'show');
    toggleClass('.burger', '', 'cross');
    enableScroll();
}

// ajoute classToAdd et delete classToRemove du composant selector
function toggleClass(selector, classToAdd, classToRemove) {
    $(selector).addClass(classToAdd);
    $(selector).removeClass(classToRemove);
}

function disableScroll() {
    $('body').css({
        'overflow-y': 'hidden',
        height: '100%'
    });
}

function enableScroll() {
    $('body').css({
        'overflow-y': 'auto',
        height: 'auto'
    });
}

var lastScrollTop = 0;
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    toggleNavbar(lastScrollTop, scrollTop, function () {
        lastScrollTop = scrollTop;
    });
});

//affiche ou non la navbar en fonction de si on scroll vers le haut ou vers le bas
function toggleNavbar(lastScrollTop, scrollTop, callback) {
    if (lastScrollTop > scrollTop) {
        $(".navbar").css('top', '0');
        $(".replace-topmenu").css('top', '0');
        $(".burger").css('top', '18.5px');
    } else {
        $(".navbar").css('top', '-60px');
        $(".replace-topmenu").css('top', '-60px');
        $(".burger").css('top', '-60px');
    }
    callback();
}