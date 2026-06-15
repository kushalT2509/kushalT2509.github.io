/*$(document).ready(function(){ 
    $('.icon').on('click', function(){ 
        $('nav ul').toggleClass('showing'); 
        $('nav ul ul').toggleClass('showing'); 
    }); 
}); 
*/
$(document).ready(function () {
    $('.hamburger').on('click', function () {
        $('.menu').toggleClass('showing');
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