$(function(){
    $("[id='testdone']").on("change",updateProgress);
    $("#videocheck").on("click",function(){
        let hasChecked = 0;
        for(let x=0;x<$("[id='testdone']").length;x++){
            if ($("[id='testdone']")[x].checked){
                hasChecked += 1;
            }
        }
        if (hasChecked == 3){
            location.href='./feature.html';
        }
    });
});

function updateProgress(){
    let hasChecked = 0;
    for(let x=0;x<$("[id='testdone']").length;x++){
        if ($("[id='testdone']")[x].checked){
            hasChecked += 1;
        }
    }
    // $("meter").attr("min",0);
    $("meter").attr("max", $("[id='testdone']").length);
    $("meter").attr("value", hasChecked);
}