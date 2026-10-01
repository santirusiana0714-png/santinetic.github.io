/* =========================================================
   FILM ARCHIVE
   ========================================================= */

const films = [

    {
        number: "01 / 05",
        current: "01",
        title: "TITANS RUN",
        type: "ADVERTISEMENT",
        description:
            "An advertisement I was tasked to create to hype everyone up for Titans Run 2026.",
        video:
            "https://www.youtube.com/embed/TLa01YFuQ68"
    },

    {
        number: "02 / 05",
        current: "02",
        title: "FATHER'S DAY BOOTH",
        type: "ADVERTISEMENT",
        description:
            "A passion project created to help attract customers to our Father's Day booth.",
        video:
            "https://www.youtube.com/embed/VR6jy9dLznk"
    },

    {
        number: "03 / 05",
        current: "03",
        title: "HOMECOMING 2026",
        type: "EVENT RECAP",
        description:
            "A recap of the events from Springdale and Southcrest's Homecoming 2026.",
        video:
            "https://www.youtube.com/embed/bpJxtZtbGr4"
    },

    {
        number: "04 / 05",
        current: "04",
        title: "SBO 2025-2026 SAN REM",
        type: "DOCUMENTATION",
        description:
            "A documentation of Springdale's Body Organization giving away resources to the community of San Remegio.",
        video:
            "https://www.youtube.com/embed/bAeY7kMlezk"
    },

    {
        number: "05 / 05",
        current: "05",
        title: "FRIEND REQUEST",
        type: "SHORT FILM",
        description:
            "A narrative project exploring the dangers of social media while giving me an opportunity to experiment with storytelling beyond commercial work.",
        video:
            "https://www.youtube.com/embed/ZxxvP270K8o"
    }

];


let currentFilm = 0;


/* =========================================================
   FILM ELEMENTS
   ========================================================= */

const video =
    document.getElementById("film-video");

const number =
    document.getElementById("film-number");

const type =
    document.getElementById("film-type");

const title =
    document.getElementById("film-title");

const description =
    document.getElementById("film-description");

const current =
    document.getElementById("film-current");

const previousButton =
    document.getElementById("previous-button");

const nextButton =
    document.getElementById("next-button");

const filmItems =
    document.querySelectorAll(".film-item");


/* =========================================================
   UPDATE FILM — CINEMATIC TRANSITION
   ========================================================= */

function updateFilm() {

    const film =
        films[currentFilm];


    const filmViewer =
        document.querySelector(
            ".film-viewer"
        );


    /* Start transition */

    if (filmViewer) {

        filmViewer.classList.add(
            "film-changing"
        );

    }


    /*
       Small delay lets the transition begin
       before the new film information appears.
    */

    setTimeout(function() {


        /* CHANGE VIDEO */

        video.src =
            film.video;


        /* CHANGE TEXT */

        number.textContent =
            film.number;


        type.textContent =
            film.type;


        title.textContent =
            film.title;


        description.textContent =
            film.description;


        current.textContent =
            film.current;


        /* ACTIVE FILM */

        filmItems.forEach(
            function(item, index) {

                if (
                    index === currentFilm
                ) {

                    item.classList.add(
                        "active"
                    );

                } else {

                    item.classList.remove(
                        "active"
                    );

                }

            }
        );


        /* BUTTON STATES */

        previousButton.disabled =
            currentFilm === 0;


        nextButton.disabled =
            currentFilm ===
            films.length - 1;


    }, 180);


    /* End transition */

    setTimeout(function() {

        if (filmViewer) {

            filmViewer.classList.remove(
                "film-changing"
            );

        }

    }, 700);

}


/* =========================================================
   NEXT
   ========================================================= */

nextButton.addEventListener(
    "click",
    function() {

        if (
            currentFilm <
            films.length - 1
        ) {

            currentFilm++;

            updateFilm();

        }

    }
);


/* =========================================================
   PREVIOUS
   ========================================================= */

previousButton.addEventListener(
    "click",
    function() {

        if (currentFilm > 0) {

            currentFilm--;

            updateFilm();

        }

    }
);


/* =========================================================
   DIRECT FILM SELECTION
   ========================================================= */

filmItems.forEach(function(item) {

    item.addEventListener(
        "click",
        function() {

            currentFilm =
                Number(
                    item.dataset.film
                );

            updateFilm();

        }
    );

});


/* =========================================================
   INITIALIZE FILM ARCHIVE
   ========================================================= */

updateFilm();


/* =========================================================
   PHASE 2 — PREPARE HERO
   ========================================================= */

const hero =
    document.querySelector(".hero");

const heroContent =
    document.querySelector(".hero-content");


/* =========================================================
   PHASE 2 — HERO PARALLAX
   ========================================================= */

if (
    hero &&
    heroContent &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    hero.addEventListener(
        "mousemove",
        function(event) {

            const rect =
                hero.getBoundingClientRect();


            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;


            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;


            heroContent.style.transform =
                `translate(${x * 5}px, ${y * 5}px)`;

        }
    );


    hero.addEventListener(
        "mouseleave",
        function() {

            heroContent.style.transform =
                "translate(0, 0)";

        }
    );

}


/* =========================================================
   PHASE 3 — PREPARE PHILOSOPHY
   ========================================================= */


/*
   Turns the existing:

   DON'T START WHAT<br>
   YOU WON'T SEE<br>
   FINISHED.

   into three animated lines.
*/

const philosophyTitle =
    document.querySelector(
        ".philosophy-section h2"
    );


if (
    philosophyTitle &&
    !philosophyTitle.classList.contains(
        "philosophy-title"
    )
) {

    const lines =
        philosophyTitle.innerHTML
            .split(/<br\s*\/?>/i)
            .map(function(line) {

                return line.trim();

            })
            .filter(function(line) {

                return line.length > 0;

            });


    philosophyTitle.innerHTML =
        lines.map(function(line) {

            return `<span>${line}</span>`;

        }).join("");


    philosophyTitle.classList.add(
        "philosophy-title"
    );

}


/* =========================================================
   PHASE 1 — SCROLL FADE + RISE
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".section-number, " +
    ".section-label, " +
    ".section h2, " +
    ".about-text, " +
    ".about-detail, " +
    ".accolade, " +
    ".expertise-item, " +
    ".film-viewer, " +
    ".film-selector, " +
    ".contact-text, " +
    ".contact-link"
);


/* Add animation class */

revealElements.forEach(function(element) {

    element.classList.add("scroll-reveal");

});


/* Watch elements entering the screen */

const scrollObserver = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "scroll-reveal-visible"
                );

            }

        });

    },

    {
        threshold: 0.15
    }

);


/* Start watching every element */

revealElements.forEach(function(element) {

    scrollObserver.observe(element);

});


/* =========================================================
   PHASE 3 — PHILOSOPHY ELEMENTS
   ========================================================= */

const philosophyLine =
    document.querySelector(
        ".philosophy-line"
    );

const philosophyTexts =
    document.querySelectorAll(
        ".philosophy-text"
    );

const philosophyFooter =
    document.querySelector(
        ".philosophy-footer"
    );


/* Paragraph stagger */

philosophyTexts.forEach(
    function(element, index) {

        element.style.transitionDelay =
            `${0.08 + (index * 0.13)}s`;

    }
);


/* Footer stagger */

if (philosophyFooter) {

    const footerItems =
        philosophyFooter.querySelectorAll(
            "span"
        );


    footerItems.forEach(
        function(element, index) {

            element.style.transitionDelay =
                `${0.10 + (index * 0.15)}s`;

        }
    );

}


/* Philosophy observer */

const philosophyObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        !entry.isIntersecting
                    ) {

                        return;

                    }


                    /* Main motto */

                    if (philosophyTitle) {

                        philosophyTitle.classList.add(
                            "is-visible"
                        );

                    }


                    /* Divider */

                    if (philosophyLine) {

                        philosophyLine.classList.add(
                            "is-visible"
                        );

                    }


                    /* Paragraphs */

                    philosophyTexts.forEach(
                        function(text) {

                            text.classList.add(
                                "is-visible"
                            );

                        }
                    );


                    /* Footer */

                    if (philosophyFooter) {

                        setTimeout(
                            function() {

                                philosophyFooter.classList.add(
                                    "is-visible"
                                );

                            },
                            650
                        );

                    }


                    philosophyObserver.unobserve(
                        entry.target
                    );

                }
            );

        },

        {
            threshold:
                0.20
        }

    );


const philosophySection =
    document.querySelector(
        ".philosophy-section"
    );


if (philosophySection) {

    philosophyObserver.observe(
        philosophySection
    );

}

/* =========================================================
   PHASE 5 — ACCOLADES TIMELINE
   ========================================================= */

const accoladesSection =
    document.querySelector(
        ".accolades-section"
    );


if (accoladesSection) {

    const accoladesObserver =
        new IntersectionObserver(

            function(entries) {

                entries.forEach(
                    function(entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            accoladesSection.classList.add(
                                "timeline-active"
                            );


                            accoladesObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold:
                    0.2
            }

        );


    accoladesObserver.observe(
        accoladesSection
    );

}

/* =========================================================
   PHASE 8 — CONTACT FINAL SCREEN
   ========================================================= */

const contactSection =
    document.querySelector(
        ".contact-section"
    );


if (contactSection) {

    const contactObserver =
        new IntersectionObserver(

            function(entries) {

                entries.forEach(
                    function(entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            contactSection.classList.add(
                                "contact-active"
                            );


                            contactObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold:
                    0.25
            }

        );


    contactObserver.observe(
        contactSection
    );

}

/* =========================================================
   PHASE 9 — FINAL POLISH
   ========================================================= */


/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

const scrollProgress =
    document.createElement("div");

scrollProgress.id =
    "scroll-progress";

document.body.appendChild(
    scrollProgress
);


function updateScrollProgress() {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;


    scrollProgress.style.width =
        `${progress}%`;

}


window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
);


updateScrollProgress();


/* =========================================================
   NAVIGATION SCROLL STATE
   ========================================================= */

const navigation =
    document.querySelector("nav");


function updateNavigation() {

    if (!navigation) {
        return;
    }


    if (window.scrollY > 80) {

        navigation.classList.add(
            "nav-scrolled"
        );

    } else {

        navigation.classList.remove(
            "nav-scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateNavigation,
    { passive: true }
);


updateNavigation();


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


const trackedSections = [
    "about",
    "philosophy",
    "accolades",
    "films",
    "contact"
];


const sections =
    trackedSections
        .map(function(id) {

            return document.getElementById(id);

        })
        .filter(function(section) {

            return section !== null;

        });


const sectionObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        navLinks.forEach(
                            function(link) {

                                link.classList.remove(
                                    "active"
                                );

                            }
                        );


                        const activeLink =
                            document.querySelector(
                                `.nav-links a[href="#${entry.target.id}"]`
                            );


                        if (activeLink) {

                            activeLink.classList.add(
                                "active"
                            );

                        }

                    }

                }
            );

        },

        {
            threshold: 0.25,

            rootMargin:
                "-20% 0px -55% 0px"
        }

    );


sections.forEach(
    function(section) {

        sectionObserver.observe(
            section
        );

    }
);


/* =========================================================
   MOBILE MENU
   ========================================================= */

if (navigation) {

    const menuButton =
        document.createElement(
            "button"
        );


    menuButton.className =
        "mobile-menu-button";

    menuButton.textContent =
        "MENU";

    menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );


    navigation.appendChild(
        menuButton
    );


    menuButton.addEventListener(
        "click",
        function() {

            navigation.classList.toggle(
                "mobile-menu-open"
            );


            const isOpen =
                navigation.classList.contains(
                    "mobile-menu-open"
                );


            menuButton.textContent =
                isOpen
                    ? "CLOSE"
                    : "MENU";


            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

        }
    );


    navLinks.forEach(
        function(link) {

            link.addEventListener(
                "click",
                function() {

                    navigation.classList.remove(
                        "mobile-menu-open"
                    );


                    menuButton.textContent =
                        "MENU";


                    menuButton.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );

                }
            );

        }
    );

}


/* =========================================================
   BACK TO TOP
   ========================================================= */

const backToTop =
    document.createElement(
        "button"
    );


backToTop.id =
    "back-to-top";

backToTop.innerHTML =
    "↑";

backToTop.setAttribute(
    "aria-label",
    "Back to top"
);

document.body.appendChild(
    backToTop
);


function updateBackToTop() {

    if (
        window.scrollY > 600
    ) {

        backToTop.classList.add(
            "visible"
        );

    } else {

        backToTop.classList.remove(
            "visible"
        );

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
);


backToTop.addEventListener(
    "click",
    function() {

        window.scrollTo({

            top: 0,

            behavior:
                "smooth"

        });

    }
);


updateBackToTop();