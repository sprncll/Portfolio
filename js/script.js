/* ============================================
   SEAN ESPERANCILLA PORTFOLIO
   JavaScript
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------
       AUTOMATIC COPYRIGHT YEAR
       ----------------------------------------- */

    const yearElements = document.querySelectorAll("#year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    /* -----------------------------------------
       MOBILE NAVIGATION
       ----------------------------------------- */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("show");
            menuToggle.setAttribute(
                "aria-expanded",
                navMenu.classList.contains("show")
            );

            if (navMenu.classList.contains("show")) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
            }

        });


        /* Close menu on outside click or Escape */

        const closeMenu = function () {
            navMenu.classList.remove("show");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        };

        document.addEventListener("click", function (event) {
            if (!navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)) {
                closeMenu();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

        /* Close menu after clicking a link */

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("show");
                menuToggle.textContent = "☰";

            });

        });

    }



    /* -----------------------------------------
       HEADER SHADOW ON SCROLL
       ----------------------------------------- */

    const header = document.querySelector(".header");

    if (header) {
        const onScroll = function () {
            header.classList.toggle("scrolled", window.scrollY > 10);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
    }


    /* -----------------------------------------
       SCROLL REVEAL ANIMATIONS
       ----------------------------------------- */

    const revealTargets = document.querySelectorAll(
        ".section-heading, .info-card, .skill-card, .soft-skill, " +
        ".project-card, .timeline-item, .education-item, .stat-card, " +
        ".contact-card, .quote-card, .cta-content, .about-grid > *, " +
        ".intro-grid > div"
    );

    if ("IntersectionObserver" in window) {

        document.documentElement.classList.add("js");

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

        revealTargets.forEach(function (el, i) {
            el.classList.add("reveal");
            el.style.setProperty("--delay", (i % 3) * 0.08 + "s");
            observer.observe(el);
        });

    }

    /* -----------------------------------------
       CONTACT FORM
       ----------------------------------------- */

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const fullName = document.getElementById("fullName").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const inquiryType = document.getElementById("inquiryType").value;
            const message = document.getElementById("message").value.trim();

            const contactMethod =
                document.querySelector(
                    'input[name="contactMethod"]:checked'
                );


            /* Basic validation */

            if (
                !fullName ||
                !email ||
                !phone ||
                !subject ||
                !inquiryType ||
                !message ||
                !contactMethod
            ) {

                formMessage.className = "form-message error";

                formMessage.textContent =
                    "Please complete all required fields before submitting the form.";

                return;
            }


            /* Email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                formMessage.className = "form-message error";

                formMessage.textContent =
                    "Please enter a valid email address.";

                return;
            }


            /* Success message */

            formMessage.className = "form-message success";

            formMessage.textContent =
                "Thank you, " +
                fullName +
                "! Your message has been prepared successfully. " +
                "This portfolio form is currently a demonstration and does not send messages to a server.";

            contactForm.reset();

        });


        /* -----------------------------------------
           RESET FORM MESSAGE
           ----------------------------------------- */

        contactForm.addEventListener("reset", function () {

            setTimeout(function () {

                formMessage.className = "form-message";
                formMessage.textContent = "";

            }, 0);

        });

    }

});