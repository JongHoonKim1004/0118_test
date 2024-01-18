/* 일정 간격마다 문구/GIFT 하단 메뉴 순차 변경 */
$(function(){
    
    var index = 0;
    var gift_img = $(".gift-img");
    var gift_title = $(".gift-title");

    gift_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
    gift_img.eq(index).show();

    var slide = function(){
        gift_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        gift_img.hide();

        gift_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        gift_img.eq(index).show();
        index++;
        if(index >= 7){index = 0;}
    }

    var setSlide =  setInterval(slide,3000);
    
    gift_title.mouseover(function(){
        clearInterval(setSlide);
        gift_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        gift_img.hide();

        index = $(this).index();
        $(this).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        $(this).siblings(".gift-img").show();
    }).mouseout(function(){
        setSlide = setInterval(slide,3000);
    });
});