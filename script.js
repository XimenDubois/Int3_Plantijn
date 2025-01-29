const init = () => {
    handleMediaQuery(hambergerMediaQuery);
    hambergerMediaQuery.addEventListener('change', handleMediaQuery);
    $navButton.addEventListener("click", toggleNavigation);
    listItems[listItems.length - 1].addEventListener("blur", handleBlur);
    window.addEventListener("keyup", handleEscapeKey);
    updateHiddenState();
    window.addEventListener('resize', updateHiddenState);
    allDTs.forEach(dt => {
        dt.addEventListener('click', toggleDD);
    });
};

const $navButton = document.querySelector('.nav__button');
const $navList = document.querySelector('.nav__list');
const $navSmall = document.querySelector('.nav-small_hidden');
const $navMenu = document.querySelector('.menu');
const $iconLink = document.querySelector('#iconlink');
const listItems = $navList.querySelectorAll("li a");
const $navSmallElements = document.querySelectorAll('.nav-small_open');
const $polyglotBijbel = document.querySelector('.polyglot-bijbel_image');
const $netwerkContainer = document.querySelector('.grid-netwerkAnimatie');

console.log($polyglotBijbel);

const hambergerMediaQuery = window.matchMedia("(max-width: 60em)");

const handleMediaQuery = (event) => {
    if (event.matches) {
        $navButton.classList.remove('hidden');
        $navSmall.classList.remove('hidden');
        $navMenu.classList.add('hidden');
        $polyglotBijbel.classList.add('hidden');
    } else {
        $navButton.classList.add('hidden');
        $navMenu.classList.remove('hidden');
        $navSmall.classList.add('hidden');
        $polyglotBijbel.classList.remove('hidden');
        $netwerkContainer.classList.add('grid-netwerkAnimatie');
    }
};

const openNavigation = () => {
    $navButton.setAttribute("aria-expanded", "true");
    $iconLink.setAttribute("xlink:href", "#close");
    $navMenu.classList.remove("hidden");
    $navSmallElements.forEach(element => {
        element.classList.add("hidden");
    });
};

const closeNavigation = () => {
    $navButton.setAttribute("aria-expanded", "false");
    $iconLink.setAttribute("xlink:href", "#navicon");
    $navMenu.classList.add("hidden");
    $navSmallElements.forEach(element => {
        element.classList.remove("hidden");
    });
};

const toggleNavigation = () => {
    const open = $navButton.getAttribute("aria-expanded");
    open === "false" ? openNavigation() : closeNavigation();
};

const handleBlur = () => {
    closeNavigation();
};

const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
        $navButton.focus();
        closeNavigation();
    }
};

///////Enveloppe en Postcard
const $enveloppe = document.querySelector('.enveloppe');
const $postcard = document.querySelector('.postcard');

$enveloppe.addEventListener('click', function () {
    $enveloppe.classList.add("hidden");
    $postcard.classList.remove('hidden');
});

///////Lettertype veranderen bij PolyGlot Bijbel
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

const slider = document.getElementById("ageSlider");
const ageDisplay = document.getElementById("ageDisplay");
const sentencesPerAge = document.querySelector(".sentencesPerAge");

slider.addEventListener("input", () => {
    const age = slider.value;
    ageDisplay.textContent = age;
    sentencesPerAge.textContent = sentences[age];
});

// Functie om de hidden klasse toe te voegen aan alle <dd>'s
function updateHiddenState() {
    const allDDs = document.querySelectorAll('.footer_item');
    const isSmallScreen = window.matchMedia('(max-width: 60em)').matches;

    allDDs.forEach(dd => {
        if (isSmallScreen) {
            dd.classList.add('hidden'); // Voeg de hidden klasse toe
        } else {
            dd.classList.remove('hidden'); // Verwijder de hidden klasse als scherm groter is
        }
    });
}

// Functie om de hidden klasse te toggelen op klikken
function toggleDD(event) {
    const parentDL = event.target.closest('dl');
    const ddItems = parentDL.querySelectorAll('.footer_item');

    ddItems.forEach(dd => {
        dd.classList.toggle('hidden'); // Toggle de hidden klasse
    });
}

// Event listener voor klikken op <dt> of <h4>
const allDTs = document.querySelectorAll('.footer_list dt');

////////Lottie Animatie

gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

const pieChardAnimation = lottie.loadAnimation({
    container: document.querySelector('.pie-chard'),
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: 'src/assets/lottie/Pie_Chard.json'
});

ScrollTrigger.create({
    trigger: ".grid-container_piechard",
    markers: true,
    start: "top 50%",
    once: true,
    onEnter: () => {
        pieChardAnimation.play();
    }
});

const netwerkAnimatie = lottie.loadAnimation({
    container: document.querySelector('.lottie-container'),
    renderer: 'svg',
    autoplay: false,
    path: 'src/assets/lottie/PlantijnNetwerkFinalAnimation.json'
});

const netwerkAnimatieScrollTrigger = ScrollTrigger.create({
    trigger: ".lottie-container",
    scrub: true,
    start: "top top",
    end: "top+=2000 top",
    pin: true,
    onUpdate: function (self) {
        const progress = self.progress;
        netwerkAnimatie.goToAndStop(netwerkAnimatie.totalFrames * progress, true);
    },
});

mm.add("(max-width: 60em)", () => {
    netwerkAnimatieScrollTrigger.kill();
    netwerkAnimatie.play();
});


init();