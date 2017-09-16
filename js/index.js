$(document).scroll(function () {
    var windowHeight = $(window).height();
    var scrollTopLevel = $(document).scrollTop();

    if(windowHeight <= scrollTopLevel){
        console.log("MDR");
        $('.navbar').addClass('fixed-top');
    }
    else {
        $('.navbar').removeClass('fixed-top');
    }
})