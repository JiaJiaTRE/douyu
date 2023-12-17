window.onload = function () {

    click_index = function () {
        window.location.href = "../html/index.html";
    }

    // 获取id为video的元素
    var video = document.getElementById("videoImg");

    // 获取video高度
    var videoHeight = video.offsetHeight;

    // 设置div高度
    document.getElementById("videoBox").style.height = videoHeight + "px";
    hide_floatingIcon = function () {
        document.getElementById("floating-icons").style.visibility = "hidden";
    }

    // 获取屏幕高度
    var screenHeight = window.screen.height;
    document.getElementById("tabChat").style.height = screenHeight - videoHeight - 50 + "px";  
    document.getElementById("smallTabList").style.height = screenHeight - videoHeight - 110 + "px";  
    document.getElementById("tabDiamond").style.height = screenHeight - videoHeight - 70 + "px";  


    var comprehensive = document.getElementById("comprehensive");
    var contribute = document.getElementById("contribute");
    var live = document.getElementById("live");

    var smallTabComprehensive = document.getElementById("smallTabComprehensive");
    var smallTabContribute = document.getElementById("smallTabContribute");
    var smallTabLive = document.getElementById("smallTabLive");


    click_comprehensive = function() {
        comprehensive.style.backgroundColor = "#F2F2F2";
        contribute.style.backgroundColor = "#fff";
        live.style.backgroundColor = "#fff";

        comprehensive.style.color = "#E35843";
        contribute.style.color = "#979797";
        live.style.color = "#979797";

        smallTabComprehensive.style.display = "block";
        smallTabContribute.style.display = "none";
        smallTabLive.style.display = "none";
    }

    click_contribute = function() {
        comprehensive.style.backgroundColor = "#fff";
        contribute.style.backgroundColor = "#F2F2F2";
        live.style.backgroundColor = "#fff";

        comprehensive.style.color = "#979797";
        contribute.style.color = "#E35843";
        live.style.color = "#979797";

        smallTabComprehensive.style.display = "none";
        smallTabContribute.style.display = "block";
        smallTabLive.style.display = "none";
    }

    click_live = function() {
        comprehensive.style.backgroundColor = "#fff";
        contribute.style.backgroundColor = "#fff";
        live.style.backgroundColor = "#F2F2F2";

        comprehensive.style.color = "#979797";
        contribute.style.color = "#979797";
        live.style.color = "#E35843";

        smallTabComprehensive.style.display = "none";
        smallTabContribute.style.display = "none";
        smallTabLive.style.display = "block";
    }

    click_chat = function() {
        document.getElementById("tabChat").style.display = "block";
        document.getElementById("tabVideo").style.display = "none";
        document.getElementById("tabDiamond").style.display = "none";
        
        document.getElementById("chatLine").style.visibility = "visible";
        document.getElementById("videoLine").style.visibility = "hidden";
        document.getElementById("diamondLine").style.visibility = "hidden";

        document.getElementById("chatText").style.color = "#E35843";
        document.getElementById("videoText").style.color = "#000";
        document.getElementById("diamondText").style.color = "#000";
    }

    click_video = function() {
        document.getElementById("tabChat").style.display = "none";
        document.getElementById("tabVideo").style.display = "block";
        document.getElementById("tabDiamond").style.display = "none";

        document.getElementById("chatLine").style.visibility = "hidden";
        document.getElementById("videoLine").style.visibility = "visible";
        document.getElementById("diamondLine").style.visibility = "hidden";

        document.getElementById("chatText").style.color = "#000";
        document.getElementById("videoText").style.color = "#E35843";
        document.getElementById("diamondText").style.color = "#000";
    }

    click_diamond = function() {
        document.getElementById("tabChat").style.display = "none";
        document.getElementById("tabVideo").style.display = "none";
        document.getElementById("tabDiamond").style.display = "block";
        
        document.getElementById("chatLine").style.visibility = "hidden";
        document.getElementById("videoLine").style.visibility = "hidden";
        document.getElementById("diamondLine").style.visibility = "visible";

        document.getElementById("chatText").style.color = "#000";
        document.getElementById("videoText").style.color = "#000";
        document.getElementById("diamondText").style.color = "#E35843";
        document.getElementById("diamondText").style.color = "#E35843";
    }

    click_list = function() {
        document.getElementById("smallTabList").style.display = "block";
        document.getElementById("smallTabHome").style.display = "none";

        document.getElementById("list").style.color = "#E35843";
        document.getElementById("home").style.color = "#000";

        document.getElementById("list").style.backgroundColor = "#F2F2F2";
        document.getElementById("home").style.backgroundColor = "#fff";
    }

    click_home = function() {
        document.getElementById("smallTabList").style.display = "none";
        document.getElementById("smallTabHome").style.display = "block";

        document.getElementById("list").style.color = "#000";
        document.getElementById("home").style.color = "#E35843";

        document.getElementById("list").style.backgroundColor = "#fff";
        document.getElementById("home").style.backgroundColor = "#F2F2F2";
    }

}