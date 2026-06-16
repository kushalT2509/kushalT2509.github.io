/*$(document).ready(function(){ 
    $('.icon').on('click', function(){ 
        $('nav ul').toggleClass('showing'); 
        $('nav ul ul').toggleClass('showing'); 
    }); 
}); 
*/
$(document).ready(function () {

    // Toggle main hamburger menu
    $('.hamburger').on('click', function () {
        $('.menu').toggleClass('showing');
    });

    // Toggle the Categories submenu
    $('.submenu-title').on('click', function () {
        $('.submenu-items').slideToggle(200);

        // Change + to - when opened
        let plus = $(this).find('.plus');
        plus.text(plus.text() === '+' ? '-' : '+');
    });

});


/*
$(document).ready(function(){

    alert("Page loaded");

    $('.hamburger').on('click', function(){

        alert("Hamburger clicked");

        $('.menu').toggleClass('showing');

    });

});
*/