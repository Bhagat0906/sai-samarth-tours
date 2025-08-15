// sendForm.js
(function() {
    emailjs.init("ahcfdBYazuTBjYgar"); // from EmailJS dashboard (Account → API Keys)
})();

window.onload = function() {
    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm("service_scf05ze", "template_1jztapt", this)
            .then(function() {
            }, function(error) {
                console.error("EmailJS Error:", error);
            });
             document.getElementById("formMessage").textContent = "Thanks for contacting us. We will contact you back shortly.";
            document.getElementById("contactForm").reset();
    });
};
