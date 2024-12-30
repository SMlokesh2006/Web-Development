document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Clear previous error messages
    clearErrors();
  
    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm").value;
  
    let isValid = true;
  
    // Validate Name
    if (name === "") {
      displayError("nameError", "Name is required.");
      isValid = false;
    }
  
    // Validate Email
    if (!isValidEmail(email)) {
      displayError("emailError", "Please enter a valid email address.");
      isValid = false;
    }
  
    // Validate Password
    if (password.length < 6) {
      displayError("passwordError", "Password must be at least 6 characters long.");
      isValid = false;
    }
  
    // Validate Confirm Password
    if (password !== confirmPassword) {
      displayError("confirmPasswordError", "Passwords do not match.");
      isValid = false;
    }
  
    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
  
  // Utility functions
  function displayError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
  
  function clearErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach((error) => (error.style.display = "none"));
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  