/* Animations for Front Page */
$(document).ready(function() {
    // var letters = $("text");
    /// var limits = $("rect").position(); unecessary, just gotta be 500 pixels of offset
    for (count = 0; count < 4; count++) {
        var new_element = gen_rect_element(gen_rect());
        console.log(new_element);
        $("svg").append(gen_rect_element(gen_rect()));
    }

    $("line").each(function() {
        $(this).css("opacity", 0);
    });
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
                    $(this).attr("y", now);
                }
            }, function() {
                $(this).animate({
                    y: end_pos[1]

                }, {
                    duration: gen_duration(),
                    step: function(now, then) {
                        $(this).attr("y", now);
                    }
                });
            });
        }
    });
    $("#fixed").animate({
            opacity: 1
        },
        6000);
    $("line").animate({
        opacity: 1
    }, 6000);
    //Fade in the lines

    $("svg").click(function() {
        animateLetters();
    })

    animateLetters();
});


function gen_pos() {
    var x_val = Math.floor(Math.random() * 440) + 30;
    var y_val_1 = Math.floor(Math.random() * 265) + 250;
    var y_val_2 = Math.floor(Math.random() * 180) + 50;
    var y_val = Math.random() < 0.5 ? y_val_1 : y_val_2;
    //return "translate(" + x_val + "px, " + y_val + "px)";
    return [x_val, y_val];
}

function gen_duration() {
    return Math.floor(Math.random() * 9000) + 7000;
}

function gen_point() {
    return Math.floor(Math.random() * 440) + 30;
}

function gen_rect() {
    return {
        "x1": gen_point(),
        "x2": gen_point(),
        "y1": gen_point(),
        "y2": gen_point()
    }
}

function gen_rect_element(dimensions) {
    var newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    newLine.setAttribute('x1', dimensions.x1);
    newLine.setAttribute('y1', dimensions.y1);
    newLine.setAttribute('x2', dimensions.x2);
    newLine.setAttribute('y2', dimensions.y2);
    newLine.setAttribute('stroke', "#000000");
    newLine.setAttribute('stroke-width', '1px');
    return newLine;
}

function animateLetters() {
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
            }, function() {
                $(this).animate({
                    y: end_pos[1]

                }, {
                    duration: gen_duration(),
                    step: function(now, then) {
                        $(this).attr("y", now)
                            .css("opacity", (now / end_pos[1]));
                    }
                });
            });
        }
    });
    animateLetters();
}