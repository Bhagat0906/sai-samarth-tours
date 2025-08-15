(function(){
    emailjs.init("ahcfdBYazuTBjYgar"); // Replace with your EmailJS public key
})();

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_scf05ze', 'template_2irbsyc', this)
        .then(function() {
            document.getElementById('feedbackForm').reset();
        }, function(error) {
        });
        document.getElementById("formMessage").textContent = "Thanks for submitting your valuable feedback.";
    document.getElementById("feedbackForm").reset();
});
