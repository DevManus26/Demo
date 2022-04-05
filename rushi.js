var Devmanus = new Typed(".element",{
      strings : ["Front End Developer","Designer","Freelancer"],
      typeSpeed :100,
      backSpeed :50,
      loop : true,
    });
    
    var Devmanus = new Typed(".element-2",{
      strings : ["Front End Developer","Designer","Freelancer"],
      typeSpeed :100,
      backSpeed :50,
      loop : true,
    });
  
// slideshow script

$(document).ready(function(){
    $('.carousel') .owlCarousel({
        margin:5,
        loop:true,
        nav:false,
        autoplay:true,
        autoplayTimeOut:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items: 1,
                
            },
             600:{
                items:1,
                

            },
             1000:{
                items:1,
                
            }
        }
    });
});

function myFunction() {
 alert("Your Message Successfully Sent.");
}