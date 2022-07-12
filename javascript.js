let passwordInputs = document.querySelectorAll('input[type=password]');
let passwordReq = document.querySelectorAll('li');

console.log(passwordReq);

function checkIsFocus(e) {
    if (passwordInputs[0] == document.activeElement || passwordInputs[1] == document.activeElement) {
        passwordReq.forEach(listItem => {
            listItem.style.setProperty('display', 'inherit', 'important'); // Showing the password requirements when user
        });                                                                // focus is on a password field
    } else if (passwordInputs[0] != document.activeElement || passwordInputs[1] != document.activeElement) {
        passwordReq.forEach(listItem => {
            listItem.style.setProperty('display', 'none', 'important');    // Removes the password requirements when user
        });                                                                // focus is not ona  password field
    };
};

window.addEventListener('click', checkIsFocus);
