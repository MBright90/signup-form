let passwordInputs = document.querySelectorAll('input[type=password]');
let choosePassword = document.querySelector('#choose-password');
let confirmPassword = document.querySelector('#confirm-password');

let passwordReq = document.querySelectorAll('li');

// ****************************************************************** //

function checkIsFocus() {
    if (choosePassword == document.activeElement || confirmPassword == document.activeElement) {
        passwordReq.forEach(listItem => {
            listItem.style.setProperty('display', 'inherit', 'important'); // Showing the password requirements when user
        });                                                                // focus is on a password field
    } else {
        passwordReq.forEach(listItem => {
            listItem.style.setProperty('display', 'none', 'important');    // Removes the password requirements when user
        });                                                                // focus is not ona  password field
    };
};

function checkPassword() {
    
};

window.addEventListener('click', checkIsFocus);

// ****************************************************************** //

choosePassword.addEventListener('keyup', () => {                       // Still working on validating each password requirement to
    passwordReq.forEach(requirement => {                               // ultimately change the color of the requirement to green when
        regexPattern = new RegExp(`${requirement.dataset.regex}`);     // successfully meeting criteria
        if (regexPattern.test(choosePassword.value == true)) {
            requirement.style.color = '#d3eee5';
        } else {
            requirement.style.color = 'inherit';
        }    
    });
});

// ****************************************************************** //

passwordInputs.forEach(passwordInput => {                             // Checks the validity of the confirmPassword input field to
    passwordInput.addEventListener('keyup', () => {                   // match the choosePassword input field
        if (choosePassword.value == confirmPassword.value) {
            confirmPassword.setCustomValidity("");
        } else {
            confirmPassword.setCustomValidity("false");
        }
    });
});
