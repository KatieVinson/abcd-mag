$(function() {
    var showPromo = false;
    $(window).scroll(function() {
        var textHeight = $(".body-text").offset().top;
        //  console.log("TextHeight:  " + textHeight);
        if ($(this).scrollTop() >= textHeight) {
            if (!showPromo) {
                showPromo = true;
                $(".secondary-promo").animate({
                    opacity: 1,
                }, 1000)
            }
        } else {
            if (showPromo) {
                showPromo = !showPromo;
                $(".secondary-promo").animate({
                    opacity: 0,
                }, 100)
            }
        }
    });

});