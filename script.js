
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
