$(function(){
    $("#myVideo3").attr("src","pig3.mp4");
    $("#playBtn3").on("click",function(){
        $("#volumeDisplay3").text($("#myVideo3")[0].volume.toFixed(2));

        if($("#myVideo3")[0].paused){
            $("#myVideo3")[0].play();
            $("#playBtn3").text("Pause");
        }else{
            $("#myVideo3")[0].pause();
            $("#playBtn3").text("Play");
        }
    });
    $("#fullBtn3").on("click",function(){
        $("#myVideo3")[0].webkitEnterFullscreen();
    });
    $("#lowerVolumeBtn3").on("click", downVolume3);
    $("#higherVolumeBtn3").on("click", upVolume3);
    $("#myVideo3").on("timeupdate",updateProgress);
    $("#progressBar").on("change",changeProgress);
});

function downVolume3() {
    var myVideo3 = $("#myVideo3")[0];
    if (myVideo3.volume == 0) {
    } else if (myVideo3.volume < 0.1) {
        myVideo3.volume = 0;
    } else {
        myVideo3.volume = myVideo3.volume - 0.1;
    }
    volumeDisplay3.innerHTML = myVideo3.volume.toFixed(2);
}

function upVolume3() {
    var myVideo3 = $("#myVideo3")[0];
    if(myVideo3.volume == 1) {
    } else if (myVideo3.volume > 0.9) {
        myVideo3.volume = 1;
    } else {
        myVideo3.volume = myVideo3.volume + 0.1;
    }
    volumeDisplay3.innerHTML = myVideo3.volume.toFixed(2);
}


function changeProgress(){
    $("#myVideo3")[0].currentTime=$("#progressBar")[0].value;
}