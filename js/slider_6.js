/* 일정 간격마다 eBook 하단 메뉴 순차 변경 */
$(function(){
    
    var index = 0;
    var eBook_img = $(".eBook-img");
    var eBook_title = $(".eBook-title");

    eBook_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
    eBook_img.eq(index).show();

    var slide = function(){
        eBook_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        eBook_img.hide();

        eBook_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        eBook_img.eq(index).show();
        index++;
        if(index >= 7){index = 0;}
    }

    var setSlide =  setInterval(slide,3000);
    
    eBook_title.mouseover(function(){
        clearInterval(setSlide);
        eBook_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        eBook_img.hide();

        index = $(this).index();
        $(this).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        $(this).siblings(".eBook-img").show();
    }).mouseout(function(){
        setSlide = setInterval(slide,3000);
    });
});