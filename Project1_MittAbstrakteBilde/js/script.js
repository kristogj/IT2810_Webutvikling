
// Event on when pressing documentation button
$("#docButton").click( () => {
    $("#myPopup").css("display","block");
});

// Event when closeing the modal
$(".close").click(() => {
    $("#myPopup").css("display","none");
});

