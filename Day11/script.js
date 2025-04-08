function processForm() {
    // Capture text field values
    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const birthdate = new Date(document.getElementById('birthdate').value);
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const legalCheckbox = document.getElementById('legalCheckbox').checked;
    const termsCheckbox = document.getElementById('termsCheckbox').checked;
  
    // Log text field labels and values
    console.log(`Full Name: ${fullName}`);
    console.log(`Username: ${username}`);
    console.log(`Age: ${age}`);
    console.log(`Birthdate: ${birthdate.toDateString()}`);
  
    // Log checkbox states
    if (legalCheckbox) {
      console.log("The user has checked the legal checkbox");
    } else {
      console.log("The user has not checked the legal checkbox");
    }
  
    if (termsCheckbox) {
      console.log("The user has checked the terms checkbox");
    } else {
      console.log("The user has not checked the terms checkbox");
    }
  
    // Check eligibility
    const allFieldsFilled = fullName && username && !isNaN(age) && birthdate && password && confirmPassword;
    const passwordsMatch = password === confirmPassword;
    const isOldEnough = age >= 13;
    const bothCheckboxesChecked = legalCheckbox && termsCheckbox;
  
    if (allFieldsFilled && passwordsMatch && isOldEnough && bothCheckboxesChecked) {
      console.log("The user is eligible");
    } else {
      console.log("The user is ineligible");
    }
  
    // Stretch Goal: Compare age and birthdate
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthdate.getFullYear();
    if (calculatedAge === age) {
      console.log("The user can figure out the user's age");
    } else {
      console.log("The user is not likely to be good at math");
    }
  }