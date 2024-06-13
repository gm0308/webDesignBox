jQuery(document).ready(function(){
    //menu

    $('.nav > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown();
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
    });

    //slide
    $('.slidewrap').append($('.slider').first().clone(true));

    var slider = 0;

    setInterval(function(){
        slider++;
        $('.slidewrap').animate({'top': -slider * 350}, 600);

        if(slider == 3) {
            setTimeout(function(){
                $('.slidewrap').animate({'top': 0}, 0);
                slider = 0;
            }, 700);
        }
    }, 3000);

    $('.ntab').click(function(){
        $('.notice').css('display', 'block');
        $('.gallery').css('display', 'none');

        $('.ntab').css('backgroundColor', 'black');
        $('.ntab a').css('color', 'white');
        $('.gtab a').css('color', 'black');
        $('.gtab').css('backgroundColor', 'wheat');
    });
    $('.gtab').click(function(){
        $('.notice').css('display', 'none');
        $('.gallery').css('display', 'block');

        $('.ntab').css('backgroundColor', 'wheat');
        $('.ntab a').css('color', 'black');
        $('.gtab a').css('color', 'white');
        $('.gtab').css('backgroundColor', 'black');
    });

    $('.notice > ul > li:first').click(function(){
        $('#pop').css('display', 'block');
    });
    $('.btn').click(function(){
        $('#pop').css('display', 'none');
    })
})