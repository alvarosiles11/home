new WOW().init();

/*scroll up https://www.controlfacilito.com/tiendavirtual/landingtiendavitual.html */
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
var urlServicio = 'https://www.controlfacilito.com/';
// var urlServicio = 'https://www.controlfacilito.com/controlfacilitodev.com/';
$(document).ready(function () {
    $('.loader').hide();

});
/*navbar onscroll */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        $('.navbar').css('top', '0');
    } else {
        $('.navbar').css('top', '-100px');
    }
    prevScrollpos = currentScrollPos;
}

/*movil ocultar el navbar */
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});