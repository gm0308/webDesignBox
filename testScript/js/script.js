jQuery(document).ready(function(){

    /* slider 1 */
    let slider1 = 0;
    $('.sliderwrap1').append($('.slide1').first().clone(true));

    setInterval(function(){
        slider1 ++;
        $('.sliderwrap1').animate({marginLeft : slider1 * -100 + '%'}, 600);
        
        if(slider1 == 3) {
            setTimeout(function(){
                $('.sliderwrap1').animate({marginLeft : 0}, 0);
                slider1 = 0;
            }, 700);
        }
    }, 3000);

    /* slider 2 */
    let slider2 = 0;
    $('.sliderwrap2').append($('.slide2').first().clone(true));

    setInterval(function(){
        slider2++;
        $('.sliderwrap2').animate({marginTop : slider2 * -300 + 'px'}, 600);

        if(slider2 == 3) {
            setTimeout(function(){
                $('.sliderwrap2').animate({marginTop : 0}, 0);
                slider2 = 0;
            }, 700);
        }
    }, 3000);

    /* slider 3 */
    let slider3 = 0;

    setInterval(function(){
        let slidernext3 = (slider3 + 1) % 3;

        $('.slide3').eq(slider3).fadeOut(1200);
        $('.slide3').eq(slidernext3).fadeIn(1200);

        slider3 = slidernext3;
    }, 3000);
});