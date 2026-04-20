const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const loginButton = document.getElementById("login");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  emailError.textContent = "";
  passwordError.textContent = "";
  loginButton.textContent = "Processing...";

  setTimeout(() => {
    let isValidate = true;

    if (!email) {
      emailError.textContent = "Email is required";
      isValidate = false;
    } else if (!password) {
      passwordError.textContent = "Password is required";
      isValidate = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters";
      isValidate = false;
    }

    loginButton.textContent = "Login";

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(u => u.email === email && u.password === password);

    if (isValidate && validUser) {
      localStorage.setItem("loggedInUser", validUser.username);
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password")
    }
  }, 1000);
});
