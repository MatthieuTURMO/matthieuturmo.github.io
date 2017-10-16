// fonction qui scroll sur le formulaire pour l'envoi d'un mail
$('#btn-formulaire').on('click', function () {
    var page = $(this).attr('href');
    var speed = 1000;
    $('html, body').animate({
        scrollTop: $(page).offset().top
    }, speed, "easeOutQuart");
    return false;
});