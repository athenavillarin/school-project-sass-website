document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
  
    if (signInForm) {
      const signInInputs = signInForm.querySelectorAll('input');
      const signInButton = signInForm.querySelector('button');
      const signInIcon = signInButton.querySelector('i');
  
      signInButton.disabled = true;
  
      signInInputs.forEach(input => {
        input.addEventListener('input', () => checkInputs(signInInputs, signInButton, signInIcon));
      });
    }
  
    if (signUpForm) {
      const signUpInputs = signUpForm.querySelectorAll('input');
      const signUpButton = signUpForm.querySelector('button');
      const signUpIcon = signUpButton.querySelector('i');
  
      signUpButton.disabled = true;
  
      signUpInputs.forEach(input => {
        input.addEventListener('input', () => checkInputs(signUpInputs, signUpButton, signUpIcon));
      });
    }
  });
  
  function checkInputs(inputs, button, icon) {
    let allFilled = true;
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        allFilled = false;
      }
    });
  
    if (allFilled) {
      button.style.backgroundColor = 'rgba(255, 0, 0, 0.748)';
      button.disabled = false;
      icon.style.color = 'white';
    } else {
      button.style.backgroundColor = 'white';
      button.disabled = true;
      icon.style.color = '#333';
    }
  }
  
  function validateForm(form) {
    const username = form.elements["username"] ? form.elements["username"].value : form.elements["name"].value;
    const password = form.elements["password"].value;
    const email = form.elements["email"] ? form.elements["email"].value : null;
    const confirmPassword = form.elements["confirm-password"] ? form.elements["confirm-password"].value : null;

    // Helper function to validate email format
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Check for empty fields
    if (
      username.trim() === "" ||
      password.trim() === "" ||
      (form.id === 'signUpForm' && (email === null || email.trim() === "" || confirmPassword === null || confirmPassword.trim() === ""))
    ) {
      alert("Please fill out all required fields.");
      return false;
    }

    // Email format validation for both forms
    if (email && !isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (form.id === 'signInForm') {
      window.location.href = "home.html";
    } else if (form.id === 'signUpForm') {
      if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return false;
      } else {
        alert("Sign Up successful!");
        window.location.href = "home.html";
      }
    }
  }
  