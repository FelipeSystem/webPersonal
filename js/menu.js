
document.addEventListener('DOMContentLoaded',()=>{
    const elementosCarousel= document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration: 800,
        dist:-80,
        // shift:2,
        padding:400,
        // numvisible:4,
        // indicators:true

    })
 });

$(function(){


    // OCULTAR DIVS
    $('.lp').hide();
    $('.bd').hide();
    $('.proc').hide();
    $('.pw').hide();

    $('#info-cont-lp').click(function(){
        $(".lp").show(500);
        $(".bd").hide();
        $(".proc").hide();
        $(".pw").hide();
    })

    $('#info-cont-bd').click(function(){
        $(".lp").hide();
        $(".bd").show(500);
        $(".proc").hide();
        $(".pw").hide();
    })

    $('#info-cont-proc').click(function(){
        $(".lp").hide();
        $(".bd").hide();
        $(".proc").show(500);
        $(".pw").hide();
    })

    $('#info-cont-pw').click(function(){
        $(".lp").hide();
        $(".bd").hide();
        $(".proc").hide();
        $(".pw").show(500);
    })


    // 
    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();


    // MENU RESPONSIVE
    // CALCULAMOS 
    var ancho = $(window).width(),
        enlaces =$('#enlaces'),
        btnMenu = $('#btn-menu'),
        icono = $('#btn-menu .icono');
    
    if(ancho < 800){
        enlaces.hide();
        icono.addClass('fa-bars');
    }
    
    btnMenu.on('click',function(e){
        
        icono.toggleClass('fa-bars');
        icono.toggleClass('fa-times');
        enlaces.slideToggle();
    });

    $(window).on('resize',function(){
        if($(this).width()> 800){
            enlaces.show();
            icono.addClass('fa-times');
            icono.removeClass('fa-bars');
        } else {
            enlaces.hide();
            icono.addClass('fa-bars');
            icono.removeClass('fa-times');
        }
    });

   
});