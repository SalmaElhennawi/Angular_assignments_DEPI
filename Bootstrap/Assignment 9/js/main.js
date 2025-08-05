// For Nav Links
$('.navbar-nav li').click(function(){
    $(this).find('a').addClass('link-active');
    $(this).siblings().find('a').removeClass('link-active');
});
/*Start Nav Bar */
let navOffset = $('.navbar').offset().top;

$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    if(wScroll > navOffset){
        $('.navbar').css({"backgroundColor" : "rgba(0,0,0,0.5)" , "position" : "fixed" ,"top" :"0px"});
    }
    else{
        $('.navbar').css({"backgroundColor" : "transparent" , "position" : "absolute"});
    }
})
/*End Nav Bar */


/*Go for Sections with Smooth scroll */
$("a[href^= '#']").click(function(e){
    let aHref = $(e.target).attr('href');
    let secOffset = $(aHref).offset().top;
    $('body , html').animate({scrollTop:secOffset} , 1200);
})
/* End */

/* For button toTop */ 
let forAbout = $('#About').offset().top;
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();

    if(wScroll > forAbout - 500){
        $('#btnUp').fadeIn(500);
    }
    else{
        $('#btnUp').fadeOut(500);
    }
})

$('#btnUp').click(function(){   
    $('body , html').animate({scrollTop:0} , 1500);
})
/* End button toTop */ 

/* For Loading Screen */
$(document).ready(function(){
    $('.lds-ellipsis').fadeOut(1500 ,() => {
        $('.lds-ellipsis').parent().fadeOut(2500 , ( ) => {
            $('.loading').remove();
            $('body').css( "overflow-y","auto" );
        }) 
    });
    $('.owl').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplaySpeed:1500,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
})
/* End Loading Screen */


/* Form Validation */
let userEmailInput = document.getElementById('userEmail'); 
let Btn = document.getElementById('btnSubmit');
// User Email
function validateUserEmail(){
    let regex = /^([A-z][.A-z]{2,15}[0-9]{0,4}@(gmail|yahoo|outlook).com)$/;
    if(regex.test(userEmailInput.value) == true){
        Btn.disabled =!1;
        return true;
    }
    else{
        Btn.disabled =!0;
        return false;
    }
}
userEmailInput.addEventListener('keyup',function () {
    validateUserEmail();
})
// Submit
let Form = document.getElementById('form');

document.getElementById('ContactUs').addEventListener('click',function () {
    Form.addEventListener('submit',function(e){
        e.preventDefault();
        if(validateUserEmail() == true ){
            Btn.disabled =!1;
        }
        else{
            Btn.disabled=!0;
        }
    })
});

