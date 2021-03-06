/**
 * Created by lupan on 2019/1/15.
 */
var measureStep2 = function () {
    return this;
};

//初始化
measureStep2.prototype.init = function () {
    // 视频元素
    this.video = document.querySelector('#video');
    // 视频信息
    this.videoInfo = {
        videoWidth: "",
        videoHeight: "",
        eleWidth: "",
        eleHeight: ""
    };

    // 视频大小
    this.constraints = {
        audio: false,
        video: {
            width: {ideal: 1280},
            height: {ideal: 720}
        }
    };


    // 初始化摄像头
    this.initMediaDevices();
    //初始化事件
    this.initEvent();
};

// 初始化摄像头
measureStep2.prototype.initMediaDevices = function () {
    var that = this;

    // 开启视频
    navigator.mediaDevices.getUserMedia(this.constraints)
        .then(function (mediaStream) {
            console.log('getUserMedia:', mediaStream);

            that.video.srcObject = mediaStream;
            that.video.onloadedmetadata = function (e) {
                that.video.play();

                // 获取视频信息
                that.videoInfo.eleWidth = that.video.clientWidth;
                that.videoInfo.eleHeight = that.video.clientHeight;
                that.videoInfo.videoWidth = e.target.videoWidth;
                that.videoInfo.videoHeight = e.target.videoHeight;

                // 设置video的位置偏移
                $(that.video).css({left: -((that.videoInfo.eleWidth - document.body.clientWidth) / 2)});
            };
        })
        .catch(function (err) {
            console.log(err.name + ": " + err.message);
        });
};

//初始化事件
measureStep2.prototype.initEvent = function () {
    var that = this;

    $('#take').on('click', function () {
        // 使用canvas进行拍照
        var canvas = document.getElementById('canvas');
        // 设置canvas的宽为屏幕宽度, 高为视频元素高度
        canvas.width = document.body.clientWidth;
        canvas.height = that.videoInfo.eleHeight;

        // 设置显示比例，视频实际高度/视频元素高度
        var proportion = that.videoInfo.videoHeight / that.videoInfo.eleHeight;

        // 设置开始截取的坐标位置，偏移位置*显示比例
        var cutX = ((that.videoInfo.eleWidth - document.body.clientWidth) / 2) * proportion;
        // 设置实际要截取的宽高
        var cutWidth = canvas.width * proportion;
        var cutHeight = canvas.height * proportion;

        // 绘制canvas图形
        canvas.getContext('2d').drawImage(video, cutX, 0, cutWidth, cutHeight, 0, 0, canvas.width, canvas.height);
        // 设置图片
        document.getElementById('picture').src = canvas.toDataURL("image/png");
        // var img = new Image();
        // img.src = canvas.toDataURL("image/png");

        // 将数据保存到本地
        localStorage.setItem("sideFile", canvas.toDataURL("image/png"));

        // 点击侧面拍照后，清空购物车数据
        localStorage.removeItem("shopCartData");

        // 跳转到下一页
        // window.location.href = window.location.origin + "/view/measure-step3.html";
        $(location).attr("href","../view/measure-step3.html");
    })
};

$(function () {
    var measureStep2Obj = new measureStep2();
    measureStep2Obj.init();
});