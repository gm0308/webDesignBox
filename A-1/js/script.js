jQuery(document).ready(function(){
    //menu 

    $('.nav > li').mouseover(function(){
        $('.submenu').stop().slideDown();
    }).mouseout(function(){
        $('.submenu').stop().slideUp();
    });

    //slide
    let slide = 0;

    setInterval(function(){
        let nextslide = (slide + 1) % 3;

        $('.slide').eq(slide).fadeOut(1200);
        $('.slide').eq(nextslide).fadeIn(1200);

        slide = nextslide;
    }, 3000);

    //tab
    $('.ntab').click(function(){
        $('.notice').css('display', 'block');
        $('.gallery').css('display', 'none');

        $('.ntab').css('backgroundColor', 'black');
        $('.ntab a').css('color', 'white');
        $('.gtab').css('backgroundColor', 'white');
        $('.gtab a').css('color', 'black');
    });
    $('.gtab').click(function(){
        $('.notice').css('display', 'none');
        $('.gallery').css('display', 'block');

        $('.gtab').css('backgroundColor', 'black');
        $('.gtab a').css('color', 'white');
        $('.ntab').css('backgroundColor', 'white');
        $('.ntab a').css('color', 'black');
    });

    //popup
    $('.notice li:first').click(function(){
        $('#pop').css('display', 'block');
    });
    $('.btn').click(function(){
        $('#pop').css('display', 'none');
    })
});