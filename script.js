
///////lettertype veranderen bij PolyGlot Bijbel
const styles = [
    { font: 'Roboto, sans-serif', text: 'Hebreeuwse Typo' },
    { font: '"Playfair Display", serif', text: 'Griekse Typo' },
    { font: '"Courier Prime", monospace', text: 'Latijnse Typo' },
    { font: 'Arial, sans-serif', text: 'Aramese Typo' },
    { font: 'Georgia, serif', text: 'Syrische Typo' }
];

let currentFontIndex = 0;

const textElement = document.querySelector('.polyglotBijbel-text');
const button = document.getElementById('changeFont-Btn');

button.addEventListener('click', () => {
    currentFontIndex = (currentFontIndex + 1) % styles.length;

    textElement.style.fontFamily = styles[currentFontIndex].font;

    button.textContent = styles[currentFontIndex].text;
});
////////////Age Slider
const sentences = {
    4: "Ik",
    5: "Ik kan",
    6: "Ik kan lezen",
    7: "Ik kan goed lezen",
    8: "Ik kan goed lezen en schrijven",
    9: "Ik kan goed lezen en schrijven in twee talen",
    10: "Ik kan goed lezen en schrijven in drie talen",
    11: "Ik kan goed lezen en schrijven in vier talen",
    12: "Ik kan perfect lezen en schrijven in vier talen"
};

// Selecteer elementen
const slider = document.getElementById("ageSlider");
const ageDisplay = document.getElementById("ageDisplay");
const sentencesPerAge = document.querySelector(".sentencesPerAge");

// Event listener voor de slider
slider.addEventListener("input", () => {
    const age = slider.value;
    ageDisplay.textContent = age; // Update de leeftijdsweergave
    sentencesPerAge.textContent = sentences[age]; // Update de zin
});
