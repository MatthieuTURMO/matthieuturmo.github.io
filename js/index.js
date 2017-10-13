// fonction qui met en place la barre de navigation en sticky
$(document).scroll(function () {
    var windowHeight = $(window).height();
    var scrollTopLevel = $(document).scrollTop();
    // quand on scroll plus que 100%, la navbar devient fixe
    // et on affiche la div de remplacement pour aucun décalage
    opacityImageBackground('.image-background', windowHeight, scrollTopLevel);
    if (windowHeight <= scrollTopLevel) {
        $('.navbar').addClass('fixed-top');
        $('.transparent-replace').removeClass('hidden');
    } else {
        $('.navbar').removeClass('fixed-top');
        $('.transparent-replace').addClass('hidden');
    }
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
}
