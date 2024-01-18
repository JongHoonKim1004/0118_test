/* 일정 간격마다 CD/LP 하단 메뉴 순차 변경 */
$(function(){
    
    var index = 0;
    var CDLP_img = $(".CDLP-img");
    var CDLP_title = $(".CDLP-title");

    CDLP_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
    CDLP_img.eq(index).show();

    var slide = function(){
        CDLP_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        CDLP_img.hide();

        CDLP_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        CDLP_img.eq(index).show();
        index++;
        if(index >= 6){index = 0;}
    }

    var setSlide =  setInterval(slide,3000);
    
    CDLP_title.mouseover(function(){
        clearInterval(setSlide);
        CDLP_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        CDLP_img.hide();

        index = $(this).index();
        $(this).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        $(this).siblings(".CDLP-img").show();
    }).mouseout(function(){
        setSlide = setInterval(slide,3000);
    });
});