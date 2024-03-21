document.addEventListener('DOMContentLoaded', function() {
    const certificates = document.querySelectorAll('.card');

    certificates.forEach(function(cert) {
        cert.addEventListener('click', function() {
            const imageUrl = cert.getAttribute('data-src');
            const modal = document.getElementById("certificateModal");
            const img = document.getElementById("certificateImg");

            img.src = imageUrl;
            modal.style.display = "block";
        });
    });
});

function closeModal() {
    const modal = document.getElementById("certificateModal");
    modal.style.display = "none";
}
