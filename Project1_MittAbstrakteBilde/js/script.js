$(".home").hide();

$("#homeBtn").click(function () {
    $(".home").show();
    $(".documentation").hide();
});

$("#docBtn").click(function () {
    $(".documentation").show();
    $(".home").hide();
});


$(".docBoxBtn").click((event) => {
    const btn = event.target;
    const content = $("#"+btn.title)
    if(content.is(":visible")){
        content.hide()
    }
    else{
        content.show();
    }
});



