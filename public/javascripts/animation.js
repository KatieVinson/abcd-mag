/* Animations for Front Page */
$(document).ready(function() {
    // var letters = $("text");
    /// var limits = $("rect").position(); unecessary, just gotta be 500 pixels of offset
    $("text").each(function(index) {
        if ($(this).attr("id") === "fixed") {
            return true;
        } else {
            let origin_pos = gen_pos();
            let end_pos = gen_pos();
            $(this).attr("x", origin_pos[0]).attr("y", origin_pos[1]).css("opacity", 0);
            $(this).animate({
                y: end_pos[1]

            }, {
                duration: gen_duration(),
                step: function(now, then) {
                    $(this).attr("y", now)
                        .css("opacity", (now / end_pos[1]));
                }
            });

        }
    });
});


function gen_pos() {
    x_val = Math.floor(Math.random() * 440) + 30;
    y_val = Math.floor(Math.random() * 440) + 30;
    //return "translate(" + x_val + "px, " + y_val + "px)";
    return [x_val, y_val];
}

function gen_duration() {
    return Math.floor(Math.random() * 4000) + 2000;
}

function gen_rect() {

}