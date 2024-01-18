/* 일정 간격마다 DVD 하단 메뉴 순차 변경 */
$(function(){
    
    var index = 0;
    var DVD_img = $(".DVD-img");
    var DVD_title = $(".DVD-title");

    DVD_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
    DVD_img.eq(index).show();

    var slide = function(){
        DVD_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        DVD_img.hide();

        DVD_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        DVD_img.eq(index).show();
        index++;
        if(index >= 5){index = 0;}
    }

    var setSlide =  setInterval(slide,3000);
    
    DVD_title.mouseover(function(){
        clearInterval(setSlide);
        DVD_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        DVD_img.hide();

        index = $(this).index();
        $(this).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        $(this).siblings(".DVD-img").show();
    }).mouseout(function(){
        setSlide = setInterval(slide,3000);
    });
});