// script.js
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var name = document.getElementById("name").value;
    var text = document.getElementById("text").value;

    var message = "Email: " + email + "\n" +
                  "Phone: " + phone + "\n" +
                  "Name: " + name + "\n" +
                  "Message: " + text;

    alert(message);
});
