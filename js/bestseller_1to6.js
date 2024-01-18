/* 베스트셀러 1~5위 & 6~10위 화면전환 */
$(function(){
    var index;
    var rank = $(".bestseller-rank-num");
    var div = $(".bestseller-ranking");

    div.hide();
    rank.css({fontWeight:"",color:""});

    div.eq(1).show();
    rank.eq(1).css({fontWeight:"bold",color:"black"});

    rank.click(function(){
        div.hide();
        rank.css({fontWeight:"",color:""});

        index = $(this).index();
        div.eq(index).show();
        rank.eq(index).css({fontWeight:"bold",color:"black"});
    });
});