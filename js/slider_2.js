/* 일정 간격마다 YES NOW 하단 메뉴 순차 변경 */
$(function(){
    
    var index = 1;
    var yesnow_img = $(".yesnow-img");
    var yesnow_title = $(".yesnow-title");

    yesnow_title.eq(0).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
    yesnow_img.eq(0).show();

    var slide = function(){
        yesnow_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        yesnow_img.hide();

        yesnow_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        yesnow_img.eq(index).show();
        index++;
        if(index >= 4){index = 0;}
    }

    var setSlide =  setInterval(slide,3000);
    
    yesnow_title.mouseover(function(){
        clearInterval(setSlide);
        yesnow_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        yesnow_img.hide();

        index = $(this).index();
        $(this).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        $(this).siblings(".yesnow-img").show();
    }).mouseout(function(){
        setSlide = setInterval(slide,3000);
    });
}); 

