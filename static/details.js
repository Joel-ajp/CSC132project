// Script to open the detail of a plant

function openModal(plantName) {
    console.log(plantName)
    //Gets the modal element
    let modal = document.getElementById(plantName);

    //Gets the btn class
    let btn = document.getElementsByClassName("btn")[0];

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    function closeModal() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
    closeModal();
    }}}

// Function to close the detail modal
function closeModal(plantName) {

    //Gets the modal element
    let modal = document.getElementById(plantName);

    // Sets the display to none when the user clicks on the "x"
    modal.style.display = "none";
}