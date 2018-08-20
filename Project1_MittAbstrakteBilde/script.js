
// Event on when pressing documentation button
$(".docButton").click( () => {
    // Should open documentation
    let modal = document.getElementById('myPopup');
    modal.style.display = "block";

});

// Event when closeing the modal
$(".close").click(() => {
    let modal = document.getElementById('myPopup');
    modal.style.display = "none";
});

