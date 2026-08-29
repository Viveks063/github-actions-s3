const button = document.getElementById("deployBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    message.textContent = "🚀 CI/CD deployment is working!";
});