new WOW().init();

$('.btnCV').click(function () {
    window.location.href = "../docs/CV Alvaro Siles Estrada.docx";
    //window.open("../docs/CV Alvaro Siles Estrada.docx");
    //alert("ostias");
    //https://www.controlfacilito.com/
    //https://www.controlfacilito.com/controlfacilitodev.com
});




$(function () {
    var $btn = $('#btnTop');
    var $home = $('#home');
    var startpoint = $home.scrollTop() + $home.height();
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > startpoint) {
            $btn.show();
        } else {
            $btn.hide();
        }
    });
});


/*$(document).ready(function() {
    $('.loader').hide();

});*/

/*navbar onscroll web*/
/*var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        $('.navbar').css('top', '0');
    } else {
        $('.navbar').css('top', '-100px');
    }
    prevScrollpos = currentScrollPos;
}*/

/*navbar onscroll movil*/
/*$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});*/