/* 일정 간격마다 티켓 하단 메뉴 순차 변경 */
$(function(){
    
    var index = 0;
    var ticket_img = $(".ticket-img");
    var ticket_title = $(".ticket-title");

    ticket_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
    ticket_img.eq(index).show();

    var slide = function(){
        ticket_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        ticket_img.hide();

        ticket_title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        ticket_img.eq(index).show();
        index++;
        if(index >= 7){index = 0;}
    }

    var setSlide =  setInterval(slide,3000);
    
    ticket_title.mouseover(function(){
        clearInterval(setSlide);
        ticket_title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        ticket_img.hide();

        index = $(this).index();
        $(this).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        $(this).siblings(".ticket-img").show();
    }).mouseout(function(){
        setSlide = setInterval(slide,3000);
    });
});