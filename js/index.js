$(document).scroll(function () {
    var windowHeight = $(window).height();
    var scrollTopLevel = $(document).scrollTop();

    if(windowHeight <= scrollTopLevel){
        console.log("MDR");
        $('.navbar').addClass('fixed-top');
        $('.transparent-replace').removeClass('hidden');
    }
    else {
        $('.navbar').removeClass('fixed-top');
        $('.transparent-replace').addClass('hidden');
    }
})