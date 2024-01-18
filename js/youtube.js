/* 예스튜브 영역 함수 */
$(function(){
    $.ajax({
        url: "./json/youtube.json",
        dataType: "json",
        success: function(data){
            if(data.length > 0){
                for(var i in data){
                    $(".youtube-main").eq(i).append("<a href='#'><img alt='youtube-main' src='img/"+data.main[i]+"'></a>");
                    $(".youtube-main-content-thumbnail").eq(i).append("<a href='#'><img alt='youtube-thumbnail' src='img/"+data.main[i]+"'></a>");
                    $(".youtube-main-content-img").eq(i).append("<a href='#'><img alt='youtube-content-img' src='img/"+data.thumbnail[i]+"'></a>");
                    $(".youtube-text-long").eq(i).append(data.title[i]);
                    $(".youtube-text-title").eq(i).append("<a href='#'>"+data.title[i]+"</a>");
                    $(".youtube-text-author").eq(i).append(data.author[i]);
                    $(".youtube-text-comp").eq(i).append(data.comp[i]);


                }
            }
        }
    });
});
