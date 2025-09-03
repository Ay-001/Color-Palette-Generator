const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateBtn.addEventListener("click", generatePalette);

paletteContainer.addEventListener("click", function (e) {
    if(e.target.classList.contains("copy-btn")){
        const hexValue = e.target.previousElementSibling.textContent

        navigator.clipboard.writeText(hexValue)
        .then(() => showCopyScuccess())
        .catch( (err) => console.log(err))
    }
});

// Generate palette on page load
generatePalette();

function generatePalette() {
    const colors = [];
    for (let i = 0; i < 5; i++) {
        colors.push(generateRandomColor());
    }
    updatePaletteDisplay(colors);
}

function generateRandomColor() {
    // Generate a random 6-digit hex code
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function updatePaletteDisplay(colors) {
    const colorBoxes = paletteContainer.querySelectorAll(".color-box");
    colorBoxes.forEach((box, index) => {
        const colorDiv = box.querySelector(".color");
        const hexValue = box.querySelector(".hex-value");
        colorDiv.style.backgroundColor = colors[index];
        hexValue.textContent = colors[index].toUpperCase();
    });
}

// Add copy-to-clipboard functionality
document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const hexValue = btn.previousElementSibling.textContent;
        navigator.clipboard.writeText(hexValue)
            .then(() => {
                alert(`Copied to clipboard: ${hexValue}`);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
                alert("Failed to copy hex code");
            });
    });
});

function updatePaletteDisplay(colors) {
    const colorBoxes = document.querySelectorAll(".color-box")

    colorBoxes.forEach((box,index) => {
        const color =colors[index]
        const colorDiv = box.querySelector(".color")
        const hexValue = box.querySelector(".hex-value")

        colorDiv.style.backgroundColor = color;
        hexValue.textContent = color;
 })
}

// function showCopySuccess() {
//     copyBtn.classList.remove("far", "fa-copy");
//     copyBtn.classList.add("fas", "fa-check");

//     copyBtn.style.color = "#48bb78"
// }