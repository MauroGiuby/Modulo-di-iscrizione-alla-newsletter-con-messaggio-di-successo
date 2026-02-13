const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-message");
const mainContent = document.getElementById("main-content");
const successScreen = document.getElementById("success-screen");
const userEmail = document.getElementById("user-email");
const dismissBtn = document.getElementById("dismiss-btn");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    emailInput.classList.add("error");
    errorMsg.classList.add("active");
    return;
  }

  // Reset error state
  emailInput.classList.remove("error");
  errorMsg.classList.remove("active");

  // Show success screen
  userEmail.textContent = email;
  mainContent.style.display = "none";
  successScreen.classList.add("visible");
});

dismissBtn.addEventListener("click", () => {
  successScreen.classList.remove("visible");
  mainContent.style.display = "flex";
  form.reset();
});
