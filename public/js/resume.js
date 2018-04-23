(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sideNav'
    });
    
    //my custom code added
    var x_coordinate;
    var y_coordinate;
    var timeStamp;
    var entry = {};
    $(document).mousemove(function (event) {
        x_coordinate = event.pageX;
        y_coordinate = event.pageY;
        timeStamp = new Date();
        entry = {
            x_coordinate: x_coordinate,
            y_coordinate: y_coordinate,
            timeStamp: timeStamp
        };
        $.post("/mouse-position",{entry:entry},function(result){
            console.log("result:\t"+JSON.stringify(result));
        });
    });
    
    

})(jQuery); // End of use strict
