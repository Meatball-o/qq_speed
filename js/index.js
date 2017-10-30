// $(function(){
//     $(".absolute").mouseover(function(){
//         $(".ranking>div").stop().slideDown(500);
//     });
//     $(".ranking").mouseout(function(){
//         $(".ranking").stop().slideUp(500);
//     });
// });

$(document).ready(function(e) {
    var unslider04 = $('#b04').unslider({
            dots: true
        }),
        data04 = unslider04.data('unslider');
    $('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
});
$(".cut_one").click(function(){
    $("#b04").hide();
});
$(".cut_two").click(function(){
    $("#b05").show();
});


// 首页最下方箭头那里
$(".index_qq_one").hover(function(){
    $(".index_media").toggle();
})

// logo页面显示
$(".logo_success1 a img").hover(function(){
    $(".logo_success01").show();
});
$(".opacity1").hover(function(){
    $(".opacity1").css("opacity",".8");
    console.log("1")
})



// news  切换
$(function(){
    $(".con .con_one").eq(0).show();
    $(".tit_one li").hover(function(){
        var news = $(".tit_one li").index(this);
        $(".con .con_one").hide();
        $(".con .con_one").eq(news).show();
    })

    $(".con .con_two").eq(0).show();
    $(".tit_two li").hover(function(){
        var news = $(".tit_two li").index(this);
        $(".con .con_two").hide();
        $(".con .con_two").eq(news).show();
    })

    $(".con .con_three").eq(0).show();
    $(".tit_three li").hover(function(){
        var news = $(".tit_three li").index(this);
        $(".con .con_three").hide();
        $(".con .con_three").eq(news).show();
    })

    $(".con .con_four").eq(0).show();
    $(".tit_four li").hover(function(){
        var news = $(".tit_four li").index(this);
        $(".con .con_four").hide();
        $(".con .con_four").eq(news).show();
    })

    $(".fixed_click").click(function(){
        $(".fixed").hide();
    })
    $(".aaa").click(function () {
        window.location.href="logo.html";
    })
})
// logo轮播
