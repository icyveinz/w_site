// Activate AOS and WOW libraries.
$(function() {
    AOS.init();
    new WOW().init();

    // For a smooth scroll to the top of the page.
    $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop : $(_href).offset().top+"px"});
        return false
    });
})