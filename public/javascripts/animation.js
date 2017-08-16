/*****************
                                                                                                                                                                                                                                     Summary
                                                                                                                                                                                                                                *****************/
/* Watch the codecast to learn how this demo was made: https://www.youtube.com/watch?v=MDLiVB6g2NY&hd=1 */

/* This demo serves two purposes:
1) Act as Velocity's primary visual test (in addition to the unit and load tests).
2) Demonstrate all of Velocity's features.
3) Demonstrate the performance capabilties of the DOM; WebGL and Canvas are not used in this demo.
*/

/* Intended demo behavior: 
1) A message box fades out.
2) Dots are randomly assigned coordinates and opacities then translated and increased in opacity. This animation is then reversed.
3) Meanwhile, the dots' container has its perspective, rotateZ, and opacity animated in a loop with a delay.
4) Once the dot animation is complete, the message box fades back in.
*/

/*********************
 Device Detection
*********************/

var isWebkit = /Webkit/i.test(navigator.userAgent),
    isChrome = /Chrome/i.test(navigator.userAgent),
    isMobile = !!("ontouchstart" in window),
    isAndroid = /Android/i.test(navigator.userAgent),
    isIE = document.documentMode;

/******************
    Redirection
******************/

if (isMobile && isAndroid && !isChrome) {
    alert("Although Velocity.js works on all mobile browsers, this 3D demo is for iOS devices or Android devices running Chrome only. Redirecting you to Velocity's documentation.");
    window.location = "index.html";
}

/***************
    Helpers
***************/

/* Randomly generate an integer between two numbers. */
function r(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Override the default easing type with something a bit more jazzy. */
$.Velocity.defaults.easing = "easeInOutsine";

/*******************
    Dot Creation
*******************/

/* Differentiate dot counts based on roughly-guestimated device and browser capabilities. */
var dotsCount = 25,
    dotsHtml = "",
    $count = $("#count"),
    $dots;

for (var i = 0; i < dotsCount; i++) {
    dotsHtml += "<text class='dot'>b</text>";
}

$dots = $(dotsHtml);

$count.html(dotsCount);

/*************
    Setup
*************/

var $container = $("#container"),
    $browserWidthNotice = $("#browserWidthNotice"),
    $welcome = $("#welcome");

var screenWidth = 500,
    screenHeight = 500,
    chromeHeight = screenHeight;

/* Ensure the user is full-screened; this demo's translations are relative to screen width, not window width. */
if ((document.documentElement.clientWidth / screenWidth) < 0.80) {
    $browserWidthNotice.show();
}

/*****************
    Animation
*****************/


/* Special visual enhancement for WebKit browsers, which are faster at box-shadow manipulation. */
if (isWebkit) {
    $dots.css("color", "#000");
}

/* Animate the dots. */
$dots
    .velocity({
        translateX: [
            function() {
                return "+=" + r(-screenWidth, screenWidth)
            },
            function() {
                return r(0, screenWidth)
            }
        ],
        translateY: [
            function() {
                return "+=" + r(-screenHeight, screenHeight / 2.75)
            },
            function() {
                return r(0, screenHeight)
            }
        ]
    }, {
        duration: 4000,
        complete: animate($dots)
    })
    .appendTo($container);

function animate(elements) {
    elements.velocity({
        translateX: [
            function() {
                return "+=" + r(-screenWidth, screenWidth)
            },
            function() {
                return r(0, screenWidth)
            }
        ],
        translateY: [
            function() {
                return "+=" + r(-screenHeight, screenHeight / 2.75)
            },
            function() {
                return r(0, screenHeight)
            }
        ]
    }, {
        duration: 4000,
        complete: animate($dots)
    });
}