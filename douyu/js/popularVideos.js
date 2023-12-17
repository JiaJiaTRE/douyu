window.onload =  function() {

    click_index = function(){
        window.location.href = "../html/index.html";
    }


    // 获取id为video-right的元素
    var video_right = document.getElementById("video-right");

    // 获取video_right的高度
    var video_right_height = video_right.offsetHeight;

    // 获取id为PGCimg的元素
    var PGCimg = document.getElementById("PGCimg");

    // 设置PGCimg的高度
    PGCimg.style.height = video_right_height + "px";

}