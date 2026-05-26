function applySavedTheme() {
    const isNightMode = localStorage.getItem("theme") === "night";
    
    // Toggle night mode if saved and check button
    document.body.classList.toggle("night-mode", isNightMode);
    document.getElementById("theme-toggle").checked = isNightMode;
}

function toggleTheme() {
    const isNightMode = document.body.classList.toggle("night-mode");

    // Set theme in local storage
    if (isNightMode) {
        localStorage.setItem("theme", "night");
    } else {
        localStorage.setItem("theme", "day");
    }
}

document.addEventListener("DOMContentLoaded", applySavedTheme);