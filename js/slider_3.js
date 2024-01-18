/* 일정 간격마다 국내도서 하단 메뉴 순차 변경 */
$(function(){
    
    var index = 0
    var korean_img = $(".korean-img");
    var korean_title = $(".korean-title");

    korean_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
    korean_img.eq(index).show();

    var slide = function(){
        korean_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        korean_img.hide();

        korean_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        korean_img.eq(index).show();
        index++;
        if(index >= 7){index = 0;}
    }

    var setSlide =  setInterval(slide,3000);
    
    korean_title.mouseover(function(){
        clearInterval(setSlide);
        korean_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        korean_img.hide();

        index = $(this).index();
        $(this).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        $(this).siblings(".korean-img").show();
    }).mouseout(function(){
        setSlide = setInterval(slide,3000);
    });
}); 