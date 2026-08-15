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

            if (navMenu.classList.contains("show")) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
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