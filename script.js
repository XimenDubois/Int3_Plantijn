const init = () => {

    const $navButton = document.querySelector('.nav__button');
    const $navList = document.querySelector('.nav__list');
    const $navSmall = document.querySelector('.nav-small_hidden');
    const $navMenu = document.querySelector('.menu');
    const $iconLink = document.querySelector('#iconlink');
    const listItems = $navList.querySelectorAll("li a");
    const $navSmallElements = document.querySelectorAll('.nav-small_open'); 

    console.log(listItems);

    const hambergerMediaQuery = window.matchMedia("(max-width: 60em)");
    const handleMediaQuery = (event) => {
        if (event.matches) {
            $navButton.classList.remove('hidden');
            $navSmall.classList.remove('hidden');
            $navMenu.classList.add("hidden");
        } else {
            $navButton.classList.add('hidden');
            $navMenu.classList.remove("hidden");
            $navSmall.classList.add('hidden');
        }
    };
    hambergerMediaQuery.addEventListener("change", (event) => {
        if (event.matches) {
            console.log("Mediaquery actief: scherm is kleiner dan 60em.");
        } else {
            console.log("Mediaquery inactief: scherm is groter dan 60em.");
        }
    });

    handleMediaQuery(hambergerMediaQuery);
    hambergerMediaQuery.addEventListener("change", handleMediaQuery);

    const openNavigation = () => {
        $navButton.setAttribute("aria-expanded", "true");
        $iconLink.setAttribute("xlink:href", "#close");
        $navMenu.classList.remove("hidden");
        $navSmallElements.forEach(element => {
            element.classList.add("hidden");
        });
    }

    const closeNavigation = () => {
        $navButton.setAttribute("aria-expanded", "false");
        $iconLink.setAttribute("xlink:href", "#navicon");
        $navMenu.classList.add("hidden");
        $navSmallElements.forEach(element => {
            element.classList.remove("hidden");
        });
    }

    const toggleNavigation = () => {
        const open = $navButton.getAttribute("aria-expanded");
        open === "false" ? openNavigation() : closeNavigation();
    }


    const handleBlur = () => {
        //if (!event.relatedTarget || !$navList.contains(event.relatedTarget)) {
        closeNavigation();
        //}
    }

    $navButton.addEventListener("click", toggleNavigation);

    // add event to the last item in the nav list to trigger the disclosure to close if the user tabs out of the disclosure
    listItems[listItems.length - 1].addEventListener("blur", handleBlur);

    // Close the disclosure if a user presses the escape key
    window.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
            $navButton.focus();
            closeNavigation();
        }
    });
}



init();
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

const slider = document.getElementById("ageSlider");
const ageDisplay = document.getElementById("ageDisplay");
const sentencesPerAge = document.querySelector(".sentencesPerAge");

slider.addEventListener("input", () => {
    const age = slider.value;
    ageDisplay.textContent = age;
    sentencesPerAge.textContent = sentences[age];
});
