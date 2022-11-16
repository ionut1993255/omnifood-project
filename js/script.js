const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");
const sectionHeroEl = document.querySelector(".section-hero");

btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
});

allLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});

const obs = new IntersectionObserver(
    function(entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionHeroEl);