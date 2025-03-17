// Display a message in the browser console
console.log("CSS + JavaScript is powerful!");

// Show an alert message when the page loads
window.onload = function () {
    alert("Welcome to Assignment 5 with JavaScript!");

    // Create a dark mode toggle button dynamically
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.style.margin = "20px";
    toggleButton.style.padding = "10px 15px";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.backgroundColor = "#333";
    toggleButton.style.color = "white";
    toggleButton.style.fontSize = "16px";

    // Append button to the body
    document.body.prepend(toggleButton);

    // Add event listener to toggle dark mode
    toggleButton.addEventListener("click", changeTheme);
};

// Function to toggle between light mode and dark mode
function changeTheme() {
    document.body.classList.toggle("dark-mode");
}
