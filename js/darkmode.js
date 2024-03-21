
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    // Save dark mode preference to localStorage
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

// Function to set dark mode based on user preference
function setDarkMode() {
    const body = document.body;
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    if (isDarkMode) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
}

// Call setDarkMode when the page loads
window.addEventListener("load", setDarkMode);
