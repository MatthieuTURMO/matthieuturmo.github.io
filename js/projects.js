$(document).ready(function () {
    var windowHeight = $(window).height();
    var scrollTopLevel = $(document).scrollTop();
    showProjet(windowHeight, scrollTopLevel, 50, '.projet');
});

$(document).scroll(function () {
    var windowHeight = $(window).height();
    var scrollTopLevel = $(document).scrollTop();
    showProjet(windowHeight, scrollTopLevel, 50, '.projet');
});

$(window).resize(function () {
    var windowHeight = $(window).height();
    var scrollTopLevel = $(document).scrollTop();
    showProjet(windowHeight, scrollTopLevel, 50, '.projet');
});


// affiche les projets en fonction du niveau de scroll
function showProjet(windowHeight, scrollTopLevel, offset, selector) {
    var positionBottomScreen = windowHeight + scrollTopLevel;
    $(selector).each(function (index) {
        var positionProjet = $(this).offset().top;
        if (positionBottomScreen >= positionProjet + offset) {
            $(this).animate({
                opacity: '1'
            }, 1000);
        }
    });

};