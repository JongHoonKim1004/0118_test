/* 일정 간격마다 크레마클럽 하단 메뉴 순차 변경 */
$(function(){
    
    var index = 0;
    var crema_img = $(".crema-img");
    var crema_title = $(".crema-title");

    crema_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
    crema_img.eq(index).show();

    var slide = function(){
        crema_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        crema_img.hide();

        crema_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        crema_img.eq(index).show();
        index++;
        if(index >= 6){index = 0;}
    }

    var setSlide =  setInterval(slide,3000);
    
    crema_title.mouseover(function(){
        clearInterval(setSlide);
        crema_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        crema_img.hide();

        index = $(this).index();
        $(this).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        $(this).siblings(".crema-img").show();
    }).mouseout(function(){
        setSlide = setInterval(slide,3000);
    });
});