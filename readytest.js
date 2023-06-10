$(function(){
    $("#locbtn").on("click",getloc);
    $("#daybtn").on("click",getday);
    $("#gotest").on("click",function(){
        location.href='./entest.html';
    });
    $("#backtest").on("click",function(){
        location.href='./about.html';
    });
});

function getloc(){
    if(navigator.geolocation == undefined){
        alert("Fail to get location");
        return;
    }
    let settings = {
        enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(resultloc, errorloc, settings);
}

function resultloc(position){
    let thisCoords = position.coords;
    console.log(`Location:${thisCoords.latitude},${thisCoords.longitude}`);
    window.location.href = `https://maps.google.com.tw?q=${thisCoords.latitude},${thisCoords.longitude}`;
}

function errorloc(err){
    alert(err);
}

function getday(){
    location.href='./testtime.html';
}