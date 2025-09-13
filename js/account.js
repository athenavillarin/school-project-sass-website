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
  
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill out all required fields.");
    } else {
      if (form.id === 'signInForm') {
        window.location.href = "home.html";
      } else if (form.id === 'signUpForm') {
        const email = form.elements["email"].value;
        const confirmPassword = form.elements["confirm-password"].value;
  
        if (email.trim() === "" || confirmPassword.trim() === "") {
          alert("Please fill out all required fields.");
        } else if (password !== confirmPassword) {
          alert("Password and Confirm Password do not match.");
        } else {
          alert("Sign Up successful!");
          window.location.href = "home.html";
        }
      }
    }
  }
  