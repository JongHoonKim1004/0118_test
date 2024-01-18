/* 오늘의 책 하단 미니 섬네일 mouseover 시 화면전환 */
$(function(){
    var index=0;
    var thum = $(".today-book-thumbnail");
    var intro = $(".today-book-intro");
    var mini = $(".today-book-mini-thumb");
    thum.hide();
    intro.hide();

    thum.eq(0).show();
    intro.eq(0).show();
    mini.eq(0).css({border:"3px solid #0080ff"});
    mini.mouseover(function(){
        thum.hide();
        intro.hide();
        mini.css({border:""});
        index = $(this).index();
        thum.eq(index).show();
        intro.eq(index).show();
        $(this).css({border:"3px solid #0080ff"});
    });
});
