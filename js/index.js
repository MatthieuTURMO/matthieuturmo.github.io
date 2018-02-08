// // fonction qui met en place la barre de navigation en sticky
// $(document).scroll(function () {
//     var windowHeight = $(window).height();
//     var scrollTopLevel = $(document).scrollTop();
//     // quand on scroll plus que 100%, la navbar devient fixe
//     // et on affiche la div de remplacement pour aucun décalage
//     opacityImageBackground('.image-background', windowHeight, scrollTopLevel);
//     // setProgressBar(windowHeight, scrollTopLevel, 40, '#skills');
//     if (windowHeight <= scrollTopLevel) {
//         $('.navbar').addClass('fixed-top');
//         $('.transparent-replace').removeClass('hidden');
//     } else {
//         $('.navbar').removeClass('fixed-top');
//         $('.transparent-replace').addClass('hidden');
//     }
// });

$(document).ready(function () {
    typedTitle();
});

$(document).scroll(function () {
    var windowHeight = $(window).height();
    var scrollTopLevel = $(document).scrollTop();
    opacityImageBackground('.image-background', windowHeight, scrollTopLevel);
});

// click sur un material ripple
$('a.material_ripple').on('click', function () {
    var href = $('a.material_ripple').attr('href');
    window.location.replace(href);
});

// fonction qui scroll jusqu'à la barre de navigation
$('#start').on('click', function () {
    var page = $(this).attr('href');
    var speed = 1000;
    $('html, body').animate({
        scrollTop: $(page).offset().top
    }, speed, "easeOutQuart");
    return false;
});

// en fonction du niveau de scroll, l'opacité de l'image du début change
// lorsque l'on a scroll a plus de 100%, l'opacité est à 0, quand on est au top
// l'opacité est à 1
function opacityImageBackground(selector, windowHeight, scrollTopLevel) {
    var opacity = 1 - scrollTopLevel / windowHeight;
    if (opacity <= 0) {
        opacity = 0;
    }
    $(selector).css('opacity', opacity);
};

function typedTitle() {
    var typed = new Typed('#typed', {
        strings: ["Développeur Web", "Ingénieur"],
        typeSpeed: 30,
        backSpeed: 10,
        backDelay: 1500,
        loop: true,
        cursorChar: '_',
        smartBackspace: false
    });
}