window.onload = function () {

    // 轮播图
    // 获取ul对象
    var imgList = document.querySelector('.banner-container-imgList');
    // 获取圆点对象
    var circle = document.querySelector('.banner-container-circle');
    var thisIndex = 0;
    // 获取ul对象下的标签
    var imgListLi = imgList.children;
    // 获取圆点对象下的标签
    var circleA = circle.children;
    // 定义一个开关
    var flag = true;
    // 自动获取页面宽度
    var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // 设置ul的宽度
    imgList.style.width = imgList.children.length * windowWidth + 'px';
    // 输出ul的宽度
    // console.log(imgList.style.width);
    // 根据图片数量动态生成圆点
    for (var i = 0; i < imgList.children.length; i++) {
        var aNode = document.createElement('a');
        // 给每个圆点添加自定义属性index
        aNode.setAttribute('index', i);
        if (i == 0) {
            // 给第一个圆点添加类名为hover
            aNode.className = 'hover';
        }
        // 将圆点添加到圆点对象中
        circle.appendChild(aNode);
    }

    // 自动切换图片
    function antoChange() {
        setInterval(function () {
            if (flag) {
                flag = false;
                if (thisIndex >= circleA.length) {
                    thisIndex = 0;
                }
                slow(imgList, -thisIndex * windowWidth, function () {
                    flag = true;
                });
                circleChange();
                thisIndex++;
            }
        }, 4000);
    }

    // 更新圆点状态
    function circleChange() {
        for (var i = 0; i < circleA.length; i++) {
            circleA[i].className = '';
        }
        circleA[thisIndex].className = 'hover';
    }

    // 平滑切换
    function slow(obj, target, callback) {
        obj.myInter = setInterval(function () {
            // console.log(target); 430
            var offsetLeft = obj.offsetLeft;
            var num = (target - offsetLeft) / 10;
            // console.log(num); 43
            imgList.style.marginLeft = target + 'px';
            num > 0 ? num = Math.ceil(num) : num = Math.floor(num);
            if (offsetLeft == target) {
                // 停止定时器
                clearInterval(obj.myInter);
                // 检查callback是否存在
                callback && callback();
            } else {
                imgList.style.marginLeft = target + 'px';
            }
        }, 10)
    }

    antoChange();

    click_popularVideos = function() {
        window.location.href="../html/popularVideos.html"; 
    }

    click_liveBroadcast = function() {
        window.location.href="../html/liveBroadcast.html"; 
    }

}