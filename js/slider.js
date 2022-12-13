/* Service */
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
    }
});

/* Pricing */
$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.package').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},200);

            }
        });

    });

});

/* color book */
    $(document).ready(function(){
    $(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
    $(".callbacks").colorbox({
    onOpen:function(){ alert('onOpen: colorbox is about to open'); },
    onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
    onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
    onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
    onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
});
    //Example of preserving a JavaScript event for inline calls.
    $("#click").click(function(){
    $('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
    return false;
});
});