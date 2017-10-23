// fonction qui scroll sur le formulaire pour l'envoi d'un mail
$('#btn-formulaire').on('click', function () {
    var page = $(this).attr('href');
    var speed = 1000;
    $('html, body').animate({
        scrollTop: $(page).offset().top
    }, speed, "easeOutQuart");
    return false;
});

$(document).ready(function(){
    var windowHeight = $(window).height();
    var scrollTopLevel = $(document).scrollTop();
    setSocialCases(windowHeight, scrollTopLevel, 40, '.social');    
});

$(document).scroll(function () {
    var windowHeight = $(window).height();
    var scrollTopLevel = $(document).scrollTop();
    setSocialCases(windowHeight, scrollTopLevel, 40, '.social');
});

// met à jour progress bar, utiles dans la vue about
function setSocialCases(windowHeight, scrollTopLevel, offset, selector) {
    var positionBottomScreen = windowHeight + scrollTopLevel;
    // on récupère la position du top de la div
    var positionSkills = $(selector).position();
    var positionSkillsTop = positionSkills.top;
    // si le niveau de scroll est supérieur, on met à jour les progress bar
    if (positionBottomScreen >= positionSkillsTop+offset) {
        // on récupère toutes les progress bar
        $('.social>.container-fluid>.row>div').css('opacity','1');
    }
};

