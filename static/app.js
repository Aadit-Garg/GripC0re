console.log("GripC0re frontend script loaded successfully!");

// Dynamically change the text to confirm the script is active and running in the browser
document.addEventListener("DOMContentLoaded", () => {
    const statusElement = document.getElementById("js-status");
    if (statusElement) {
        statusElement.innerText = "JavaScript is active and running!";
    }
});
