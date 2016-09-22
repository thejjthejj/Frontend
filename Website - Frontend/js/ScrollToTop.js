//bron: http://jsfiddle.net/neeklamy/RpPEe/
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        });
        return false;
    });

});