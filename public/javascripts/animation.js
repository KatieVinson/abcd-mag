$(function() {
    var showPromo = false;
    $(".promo-image").mouseover(function() {
        if (!showPromo) {
            showPromo = true;
            $(this).fadeOut(1000);
            $(".secondary-promo").animate({
                opacity: 1,
            }, 2000);
        }
    })
});