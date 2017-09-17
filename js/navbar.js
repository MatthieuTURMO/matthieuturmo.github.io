// lorsque la navbar est petite et collapsed
$('.navbar-collapse').on('shown.bs.collapse', function () {
    $('.transparent-replace').css('height', 176);
});

// lorsque la navbar est redevenue grande après un collapse
$('.navbar-collapse').on('hidden.bs.collapse', function () {
    $('.transparent-replace').css('height', 64);
});