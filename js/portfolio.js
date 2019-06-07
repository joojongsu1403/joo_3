$(document).ready(function () {

 var win_width = $(window).width();
    
    if(win_width >= 760){

    var ht = $(window).height();
    $('section').height(ht);

    $(window).on('resize', function () {
        var ht = $(window).height();
        $('section').height(ht);
    });



    $('.button_box>li').click(function (e) {

        var ht = $(window).height();

        var i = $(this).index();

        var nowTop = i * ht;

        $('html,body').stop().animate({
            scrollTop: nowTop
        }, 700);
    });


    $(window).on('scroll', function () {

        var ht = $(window).height();

        var scroll = $(window).scrollTop();

        if (scroll >= ht * 0 && scroll < ht * 1) {
            $('#button_box li').removeClass('button_on');
            $('#button_box li').eq(0).addClass('button_on');
        } else if (scroll >= ht * 1 && scroll < ht * 2) {
            $('#button_box li').removeClass('button_on');
            $('#button_box li').eq(1).addClass('button_on');
            $('.sec_1_in_wrap:nth-child(2)').stop().animate({
               opacity:1,
                left:0
            });
        } else if (scroll >= ht * 2 && scroll < ht * 3) {
            $('#button_box li').removeClass('button_on');
            $('#button_box li').eq(2).addClass('button_on');
        } else if (scroll >= ht * 3 && scroll < ht * 4) {
            $('#button_box li').removeClass('button_on');
            $('#button_box li').eq(3).addClass('button_on');
            $('#sec_3_left_wrap').stop().animate({
               opacity:1,
                left:0
            });
            $('#photoshop_skill_bar').stop().animate({
               width: 10.685+'vw'
            });
            $('#illustrator_skill_bar').stop().animate({
                width: 12.369+'vw'
            });
            $('#html_css_skill_bar').stop().animate({
                width: 11.527+'vw'
            });
            $('#jquery_skill_bar').stop().animate({
                width: 10.105+'vw'
            });
        }


    });


    $('section').on('mousewheel', function (event, delta) {

            if (delta > 0) {
                var prev = $(this).prev().offset().top;

                $('html,body').stop().animate({
                    scrollTop: prev
                }, 700);

                return false;

            } else if (delta < 0) {
                var next = $(this).next().offset().top;

                $('html,body').stop().animate({
                    scrollTop: next
                }, 700);

                return false;
            }
    });


    $('#click_box').mouseenter(function(){
       
        $(this).css({
           backgroundColor: 'rgba(30,30,30,0.8)'
            
        });
        return false;
        
    }).mouseout(function(){
        $(this).css({
           backgroundColor: 'transparent'
        });
        return false;
    });


    $('#click_box').click(function () {
        $('.sec_2_right_object_out_box').stop().animate({
            left: -68.421 + 'vw'
        }, function () {
            $('.sec_2_right_object_out_box').css('left',0).find('li:first').appendTo('.sec_2_right_object_out_box');
            
            
        });
    });
        
        
    /*$('#click_box').click(function(index){
        var num = 0;
        if(num==0){
            $(this).css({
                backgroundColor:'blue'
            })
            num++;
        } else if(num==1){
            $(this).css({
                backgroundColor:'green'
            })
            num--;
        }
        
    });*/

    }


}); //end
