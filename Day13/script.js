function captureSignUp() {
    const fullNameInput = document.getElementById('fullName');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const birthdateInput = document.getElementById('birthdate');
    const legalCheckbox = document.getElementById('legal');
    const termsCheckbox = document.getElementById('terms');

    // Console log each textField's label and value
    console.log(`- Full Name: ${fullNameInput.value}`);
    console.log(`- Username: ${usernameInput.value}`);

    // Console log the state of the checkboxes
    if (legalCheckbox.checked) {
        console.log("- The user has checked the legal checkbox");
    } else {
        console.log("- The user has not checked the legal checkbox");
    }

    if (termsCheckbox.checked) {
        console.log("- The user has checked the terms checkbox");
    } else {
        console.log("- The user has not checked the terms checkbox");
    }

    // Check eligibility
    const passwordsMatch = passwordInput.value === confirmPasswordInput.value;
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    const isOver13 = age >= 13;
    const bothCheckboxesChecked = legalCheckbox.checked && termsCheckbox.checked;
    const allFieldsFilled = fullNameInput.value.trim() !== '' &&
                             usernameInput.value.trim() !== '' &&
                             passwordInput.value.trim() !== '' &&
                             confirmPasswordInput.value.trim() !== '' &&
                             birthdateInput.value.trim() !== '';

    if (passwordsMatch && isOver13 && bothCheckboxesChecked && allFieldsFilled) {
        console.log("The user is eligible");
    } else {
        console.log("The user is ineligible");
    }

    // Stretch Goal: Compare age and birthdate accuracy
    const currentYear = new Date().getFullYear();
    const birthYear = birthdate.getFullYear();
    const calculatedAge = currentYear - birthYear;

    if (calculatedAge !== age) {
        console.log("The user is not likely to be good at math");
    } else {
        console.log("The user can figure out the user's age");
    }
}