(function(){
    emailjs.init("G750oD2AeBjXtF_jI"); // Replace with your EmailJS public key
})();

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_1hijtbb', 'template_eta9w6j', this)
        .then(function() {
            document.getElementById('feedbackForm').reset();
        }, function(error) {
        });
        document.getElementById("formMessage").textContent = "Thanks for submitting your valuable feedback.";
    document.getElementById("feedbackForm").reset();
});
