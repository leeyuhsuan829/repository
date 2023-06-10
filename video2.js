$(function(){
    $("#myVideo2").attr("src","pig2.mp4");
    $("#playBtn2").on("click",function(){
        $("#volumeDisplay2").text($("#myVideo2")[0].volume.toFixed(2));

        if($("#myVideo2")[0].paused){
            $("#myVideo2")[0].play();
            $("#playBtn2").text("Pause");
        }else{
            $("#myVideo2")[0].pause();
            $("#playBtn2").text("Play");
        }
    });
    $("#fullBtn2").on("click",function(){
        $("#myVideo2")[0].webkitEnterFullscreen();
    });
    $("#lowerVolumeBtn2").on("click", downVolume2);
    $("#higherVolumeBtn2").on("click", upVolume2);
    $("#myVideo2").on("timeupdate",updateProgress);
    $("#progressBar").on("change",changeProgress);
});

function downVolume2() {
    var myVideo2 = $("#myVideo2")[0];
    if (myVideo2.volume == 0) {
    } else if (myVideo2.volume < 0.1) {
        myVideo2.volume = 0;
    } else {
        myVideo2.volume = myVideo2.volume - 0.1;
    }
    volumeDisplay2.innerHTML = myVideo2.volume.toFixed(2);
}

function upVolume2() {
    var myVideo2 = $("#myVideo2")[0];
    if(myVideo2.volume == 1) {
    } else if (myVideo2.volume > 0.9) {
        myVideo2.volume = 1;
    } else {
        myVideo2.volume = myVideo2.volume + 0.1;
    }
    volumeDisplay2.innerHTML = myVideo2.volume.toFixed(2);
}


function changeProgress(){
    $("#myVideo2")[0].currentTime=$("#progressBar")[0].value;
}