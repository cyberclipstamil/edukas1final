// Function to calculate cutoff
function Calculatecutoff() {
    var maths = parseFloat(document.getElementById("maths").value);
    var chemistry = parseFloat(document.getElementById("chemistry").value);
    var physics = parseFloat(document.getElementById("physics").value);

    // Perform your cutoff calculation
    var cutoff = (maths / 2) + ((chemistry + physics) / 4);

    // Get the <p> element where you want to display the cutoff value
    var cutoffDisplay = document.getElementById("cutoffDisplay");

    // Update the content of the <p> element with the cutoff value
    cutoffDisplay.textContent = "Cutoff Value: " + cutoff;

    // Change the color of the cutoff value to red and adjust font weight and style
    cutoffDisplay.style.color = "red";
    cutoffDisplay.style.fontWeight = "bold"; // Adjusted to fontWeight
    //cutoffDisplay.style.fontStyle = "italic"; // Adjusted to fontStyle
    cutoffDisplay.style.backgroundColor = "sandle";
   
    cutoffDisplay.style.fontSize ="30px";
}




