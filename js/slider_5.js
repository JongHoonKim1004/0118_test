/* 일정 간격마다 중고샵 하단 메뉴 순차 변경 */
$(function(){
    
    var index =0;
    var used_img = $(".used-img");
    var used_title = $(".used-title");

    used_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
    used_img.eq(index).show();

    var slide = function(){
        used_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        used_img.hide();

        used_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        used_img.eq(index).show();
        index++;
        if(index >= 6){index = 0;}
    }

    var setSlide =  setInterval(slide,3000);
    
    used_title.mouseover(function(){
        clearInterval(setSlide);
        used_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        used_img.hide();

        index = $(this).index();
        $(this).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        $(this).siblings(".used-img").show();
    }).mouseout(function(){
        setSlide = setInterval(slide,3000);
    });
});