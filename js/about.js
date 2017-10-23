$(document).scroll(function () {
    var windowHeight = $(window).height();
    var scrollTopLevel = $(document).scrollTop();
    setProgressBar(windowHeight, scrollTopLevel, 40, '#skills');
    setStudies(windowHeight, scrollTopLevel, 100, '#studies');
});

// met à jour progress bar, utiles dans la vue about
function setProgressBar(windowHeight, scrollTopLevel, offset, selector) {
    var positionBottomScreen = windowHeight + scrollTopLevel;
    // on récupère la position du top de la div
    var positionSkills = $(selector).position();
    var positionSkillsTop = positionSkills.top;
    // si le niveau de scroll est supérieur, on met à jour les progress bar
    if (positionBottomScreen >= positionSkillsTop+offset) {
        // on récupère toutes les progress bar
        $('.progress-bar').each(function( index ){
            var finalWidth = $(this).attr('finalWidth');
            $(this).css('width', finalWidth);
        });
    }
};

// met à jour progress bar, utiles dans la vue about
function setStudies(windowHeight, scrollTopLevel, offset, selector) {
    var positionBottomScreen = windowHeight + scrollTopLevel;
    // on récupère la position du top de la div
    var positionSkills = $(selector).position();
    var positionSkillsTop = positionSkills.top;
    // si le niveau de scroll est supérieur, on met à jour les progress bar
    if (positionBottomScreen >= positionSkillsTop+offset) {
        $('#studies>.row>div').css('opacity', '1');
    }
};
