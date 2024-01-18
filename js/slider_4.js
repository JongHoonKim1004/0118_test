/* 일정 간격마다 외국도서 하단 메뉴 순차 변경 */
$(function(){
    
    var index = 0;
    var foreign_img = $(".foreign-img");
    var foreign_title = $(".foreign-title");

    foreign_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
    foreign_img.eq(index).show();

    var slide = function(){
        foreign_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        foreign_img.hide();

        foreign_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        foreign_img.eq(index).show();
        index++;
        if(index >= 6){index = 0;}
    }

    var setSlide =  setInterval(slide,3000);
    
    foreign_title.mouseover(function(){
        clearInterval(setSlide);
        foreign_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        foreign_img.hide();

        index = $(this).index();
        $(this).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        $(this).siblings(".foreign-img").show();
    }).mouseout(function(){
        setSlide = setInterval(slide,3000);
    });
}); 