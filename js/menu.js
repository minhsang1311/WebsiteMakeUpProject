$(window).ready(function (){
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });
});
$(document).ready(function (){
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $(".backtop").fadeIn();
        } else {
            $(".backtop").fadeOut();
        }
    });
});
$(".backtop").click(function (){
    $('html,body').animate({scrollTop: 0}, 500);
});

$(document).ready(function (){
    $('#toggle').click(function () {
        $('#main-menu2').slideToggle();
    });
});
$(window).ready(function (){
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $("#main-menu2").addClass("sticky");
        } else {
            $("#main-menu2").removeClass("sticky");
        }
    });
});