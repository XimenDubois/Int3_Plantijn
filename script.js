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
    updateKwaliteitNaam();

    textElements.forEach(text => animateTextIn(text));
    animatePortrets('.motherdaughter_grid');
    animatePortrets('.grid-container_schoonzonen');
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
const textElements = document.querySelectorAll('.header-text, .moving-text, .worldText-container, .impact-text, .netwerk-container, .longRead-bug, .polyglotBijbel-text_container, .dochters-text, .opleiding-text, .schoonzonen-text, .officina-text');

let huidigeSchoonzoonIndex = 0;
const schoonZonen = [
    {
        naam: "Joannes",
        afbeelding: "public/assets/img/Joannes_Verhoeven-w_large.avif",
        iq: "65%",
        taalvaardigheid: "50%",
        zakelijkInzicht: "40%",
    },
    {
        naam: "Jan",
        afbeelding: "public/assets/img/Jan_Marryme-w_large.avif",
        iq: "85%",
        taalvaardigheid: "90%",
        zakelijkInzicht: "96%",
    },
    {
        naam: "Lisa",
        afbeelding: "public/assets/img/Mona_Lisa-w_large.avif",
        iq: "95%",
        taalvaardigheid: "50%",
        zakelijkInzicht: "15%",
    },
    {
        naam: "Adriaan",
        afbeelding: "public/assets/img/Adriaan-w_large.avif",
        iq: "55%",
        taalvaardigheid: "70%",
        zakelijkInzicht: "30%",
    }
];




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
    { font: '"David Libre", serif', text: 'Hebreeuwse Typo' },
    { font: '"GFS Neohellenic", serif', text: 'Griekse Typo' },
    { font: '"EB Garamond", serif', text: 'Latijnse Typo' },
    { font: '"Merriweather", serif', text: 'Aramese Typo' },
    { font: '"Scheherazade New", serif', text: 'Syrische Typo' }
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
    4: '"Ik"',
    5: '"Ik kan"',
    6: '"Ik kan lezen"',
    7: '"Ik kan goed lezen"',
    8: '"Ik kan goed lezen en schrijven"',
    9: '"Ik kan goed lezen en schrijven in twee talen"',
    10: '"Ik kan goed lezen en schrijven in drie talen"',
    11: '"Ik kan goed lezen en schrijven in vier talen"',
    12: '"Ik kan perfect lezen en schrijven in vier talen"'
};

const slider = document.getElementById("ageSlider");
const ageDisplay = document.getElementById("ageDisplay");
const sentencesPerAge = document.querySelector(".sentencesPerAge");

slider.addEventListener("input", () => {
    const age = slider.value;
    ageDisplay.textContent = age;
    sentencesPerAge.textContent = sentences[age];
});


const updateHiddenState = () => {
    const allDDs = document.querySelectorAll('.footer_item');
    const isSmallScreen = window.matchMedia('(max-width: 60em)').matches;

    allDDs.forEach(dd => {
        if (isSmallScreen) {
            dd.classList.add('hidden');
        } else {
            dd.classList.remove('hidden');
        }
    });
}


const toggleDD = (event) => {
    const parentDL = event.target.closest('dl');
    const ddItems = parentDL.querySelectorAll('.footer_item');

    ddItems.forEach(dd => {
        dd.classList.toggle('hidden');
    });
}

const allDTs = document.querySelectorAll('.footer_list dt');
/////////////Schoonzoon spel
document.getElementById('next-person-btn').addEventListener('click', () => {
    huidigeSchoonzoonIndex = (huidigeSchoonzoonIndex + 1) % schoonZonen.length; // Volgende persoon

    const schoonzoon = schoonZonen[huidigeSchoonzoonIndex];

    document.getElementById('person-name').textContent = schoonzoon.naam;
    document.getElementById('person-img').src = schoonzoon.afbeelding;
    document.getElementById('person-img').alt = schoonzoon.naam;

    document.getElementById('iq-bar').style.height = schoonzoon.iq;
    document.getElementById('taalvaardigheid-bar').style.height = schoonzoon.taalvaardigheid;
    document.getElementById('zakelijkinzicht-bar').style.height = schoonzoon.zakelijkInzicht;
});

const updateKwaliteitNaam = () => {
    const kwaliteitElement_taal = document.querySelector('.kwaliteiten_display-taal');
    const kwaliteitElement_inzichten = document.querySelector('.kwaliteiten_display-inzichten');

    if (window.innerWidth < 960) {
        kwaliteitElement_taal.textContent = 'Taal';
        kwaliteitElement_inzichten.textContent = 'Inzichten';
    } else {
        kwaliteitElement_taal.textContent = 'Taalvaardigheid';
        kwaliteitElement_inzichten.textContent = 'Zakelijke Inzichten';
    }
}

window.addEventListener('resize', updateKwaliteitNaam);

document.querySelector('.trouwen-Btn .grey-Btn').addEventListener('click', () => {
    const schoonzoon = schoonZonen[huidigeSchoonzoonIndex];

    document.querySelector('.schoonzoonKiezen-container').classList.add('hidden');

    const gekozenSchoonzoonSection = document.querySelector('.gekozen-schoonzoon');
    const gekozenSchoonzoonText = document.querySelector('.gekozen-schoonzoon-text');
    const gekozenSchoonzoonImg = document.querySelector('.gekozen-schoonzoon-img');

    if (schoonzoon.naam === 'Jan') {
        gekozenSchoonzoonText.innerHTML = `Gefeliciteerd! Je hebt gekozen voor ${schoonzoon.naam} net zoals Christoffel Plantijn`;
    } else {
        gekozenSchoonzoonText.innerHTML = `Je hebt gekozen voor ${schoonzoon.naam}. Christoffel Plantijn koos helaas niet de zelfde, hij koos Jan!`;
    }

    gekozenSchoonzoonImg.src = schoonzoon.afbeelding;
    gekozenSchoonzoonImg.alt = schoonzoon.naam;

    gekozenSchoonzoonSection.classList.remove('hidden');
});


////////Animaties

gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();



const netwerkAnimatie = lottie.loadAnimation({
    container: document.querySelector('.lottie-container'),
    renderer: 'svg',
    autoplay: false,
    path: '/lottie/PlantijnNetwerkFinalAnimation.json'
});

const netwerkAnimatieScrollTrigger = ScrollTrigger.create({
    trigger: ".lottie-container",
    scrub: true,
    start: "top top",
    pin: true,
    onUpdate: function (self) {
        const progress = self.progress * 0.99;
        netwerkAnimatie.goToAndStop(netwerkAnimatie.totalFrames * progress, true);
    },
});
const pieChardAnimation = lottie.loadAnimation({
    container: document.querySelector('.pie-chard'),
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: '/lottie/Pie_Chard.json'
});

ScrollTrigger.create({
    trigger: ".grid-container_piechard",
    start: "top 50%",
    once: true,
    onEnter: () => {
        pieChardAnimation.play();
    }
});
gsap.utils.toArray('.bar').forEach(bar => {
    let targetHeight = bar.style.height;
    bar.style.height = "0%";

    gsap.to(bar, {
        height: targetHeight,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".bar",
            start: "top 80%",
            toggleActions: "play none none none",
        }
    });
});
mm.add("(max-width: 60em)", () => {
    netwerkAnimatieScrollTrigger.kill();
    netwerkAnimatie.play();
});

// 
gsap.fromTo('.worldOnAString-img', {
    x: '10vw',
}, {
    x: '0',
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.worldOnAString-img',
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        markers: false
    }
});


const animateTextIn = (text) => {
    gsap.fromTo(text, {
        x: '-2vw',
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "bottom 20%",
        }
    });
}
const animatePortrets = (containerSelector) => {
    gsap.fromTo(`${containerSelector} .portretAnimation`, {
        y: '3vw',
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,
        scrollTrigger: {
            trigger: containerSelector,
            start: "top 80%",
            end: "bottom 20%",
        }
    });
};

gsap.from(".polyglotFadeIn", {
    scrollTrigger: {
        trigger: ".polyglotBijbel-container",
        start: "top 50%",
        ease: 'power3.out',
    },
    opacity: 0
})
gsap.from(".enveloppe", {
    scrollTrigger: {
        trigger: ".enveloppe",
        start: "top 50%",
    },
    ease: 'power3.out',
    opacity: 0,
    duration: 1.5,
    x: "50vw",
    rotate: "120",
})



let tlHeader = gsap.timeline({});

tlHeader.from(".header-image", {
    x: "7vw",
    opacity: 0,
    duration: 1,
    scale: 0.9,
    rotate: "5",
})
    .from(".readmore-btn_container", {
        scale: 0,
        duration: 1.5,
        ease: "elastic.out(0.9, 0.5)"
    })

init();