jQuery(document).ready(function(){

    //menu
    $('.nav > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    })

    //slide
    let index = 0;

    setInterval(function(){
       index ++;

        $('#slider ul').animate({marginLeft: -index * 100 + '%'}, 600);

        if(index == 3 ) {
            setTimeout(function(){
                $('#slider ul').animate({marginLeft: 0}, 0);
                 index = 0;
            }, 700)
        }
    }, 3000);

    //tab 
    $('.tab li').on('click', function(){
        $(this).addClass('on').siblings().removeClass('on');
        $('.item-content div').eq($(this).index()).show().siblings().hide();
    })

    //pop
    $('.notice li:first').click(function(){
        $('#pop').addClass('active');
    });
    $('.btn').click(()=>{
        $('#pop').removeClass('active');
    });
});