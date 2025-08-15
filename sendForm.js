// sendForm.js
(function() {
    emailjs.init("G750oD2AeBjXtF_jI"); // from EmailJS dashboard (Account → API Keys)
})();

window.onload = function() {
    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm("service_1hijtbb", "template_vdxo3vf", this)
            .then(function() {
            }, function(error) {
                console.error("EmailJS Error:", error);
            });
             document.getElementById("formMessage").textContent = "Thanks for contacting us. We will contact you back shortly.";
            document.getElementById("contactForm").reset();
    });
};
