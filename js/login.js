/**
 * Set the form control element to valid
 * @param {object} element - The DOM element
 */
function setValid(element) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
}

/**
 * Set the form control element to invalid with the error message
 * @param {object} element - The DOM element
 */
function setInvalid(element) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
}

/**
 * Remove validation information from the element
 * @param {object} element - The DOM element
 */
function removeValidation(element) {
    element.classList.remove('is-valid');
    element.classList.remove('is-invalid');
}

/**
 * Validate the login form and try to log the user in
 * @param {object} event - The DOM event
 */
function login(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
        document.getElementById('invalid-feedback-email').innerHTML = '';
        
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
        document.getElementById('invalid-feedback-email').innerHTML = 'Please Enter an Email';
    } else {
        setInvalid(email);
        document.getElementById('invalid-feedback-email').innerHTML = 'Email is Invalid';

        hasError = true;
    }




    var password = document.getElementById('login-password-control');
    if (password.value.trim().length == 0) {
        setInvalid(password);
        hasError = true;
        document.getElementById('invalid-feedback-password').innerHTML = 'Please Enter Your Password';

    } else {
        setValid(password);
        document.getElementById('invalid-feedback-password').innerHTML = '';

    }

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to retrieve the password
 * @param {object} event - The DOM event
 */
function forgot(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
    } else {
        setInvalid(email);
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    removeValidation(password);

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to register the new user
 * @param {object} event - The DOM event
 */
function register(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var firstName = document.getElementById('register-first-name-control');
    if (firstName.value.trim().length == 0) {
        setInvalid(firstName);
        hasError = true;
        document.getElementById("invalid-feedback-firstName").innerHTML = "Please Enter a First Name"
    } else if (firstName.value.trim().length > 30){
        setInvalid(firstName);
        hasError = true;
        document.getElementById("invalid-feedback-firstName").innerHTML = "The given name is too long"
    }    
    else if (firstName.validity.valid) {
        setValid(firstName);
    }

    var lastName = document.getElementById('register-last-name-control');
    if (lastName.value.trim().length == 0) {
        setInvalid(lastName);
        hasError = true;
        document.getElementById("invalid-feedback-lastName").innerHTML = "Please Enter a Last Name"
    } else if (lastName.value.trim().length > 30){
        setInvalid(lastName);
        hasError = true;
        document.getElementById("invalid-feedback-lastName").innerHTML = "The given name is too long"
    }
     else if (lastName.validity.valid) {
        setValid(lastName);
    }

    var email = document.getElementById('register-email-control');
    var emailValue = email.value.trim();
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
        document.getElementById("invalid-feedback-registerEmail").innerHTML = "Please Enter an Email Address"
    } else if (emailValue.match(/[@]+/) == null) {
        setInvalid(email);
        hasError = true;
        document.getElementById("invalid-feedback-registerEmail").innerHTML = "Please Enter a Valid Email Address"
    }
    else {
        setInvalid(email);
        hasError = true;
    }

    var password = document.getElementById('register-password-control');
    var passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
        setInvalid(password);
        hasError = true;
        document.getElementById("invalid-feedback-registerPassword").innerHTML = "Your Password is too Short"
    } if (passwordValue.length == 0) {
        setInvalid(password);
        hasError = true;
        document.getElementById("invalid-feedback-registerPassword").innerHTML = "Please Enter a Password"   
    }
    else if (passwordValue.length > 16) {
        setInvalid(password);
        hasError = true;
        document.getElementById("invalid-feedback-registerPassword").innerHTML = "Your Password is too Long"
    } else if (passwordValue.match(/[a-zA-Z]+/) == null) {
        setInvalid(password);
        hasError = true;
        document.getElementById("invalid-feedback-registerPassword").innerHTML = "Your Password has no Letters"
    } else if (passwordValue.match(/[0-9]+/) == null) {
        setInvalid(password);
        hasError = true;
        document.getElementById("invalid-feedback-registerPassword").innerHTML = "Your Password has no Numbers"
    } else {
        setValid(password);
    }

    var programme = document.getElementById('register-programme-control');
    if (programme.validity.valueMissing) {
        setInvalid(programme);
        hasError = true;
        document.getElementById("invalid-feedback-programme").innerHTML = "Please Select your Programme"
    } else if (!programme.validity.valid) {
        setInvalid(programme);
        hasError = true;
        document.getElementById("invalid-feedback-programme").innerHTML = "Please Select a Valid Programme"
    } else {
        setValid(programme);
    }

    if (hasError) {
        document.getElementById('register-error').classList.remove('d-none');
    } else {
        document.getElementById('register-error').classList.add('d-none');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('login-login-button')
        .addEventListener('click', login, false);

    document
        .getElementById('login-forgot-button')
        .addEventListener('click', forgot, false);

    document
        .getElementById('register-register-button')
        .addEventListener('click', register, false);
}, false);

// Toggle aria-expanded label whenever sub menu is opened / closed

$(".dropdown-toggle").click(function (e) {

    let ariaExpanded = e.target.getAttribute("aria-expanded");

    if (ariaExpanded === "true") {
        ariaExpanded = "false";
    } else {
        ariaExpanded = "true";
    }

    e.target.setAttribute("aria-expanded", ariaExpanded)
});


// Close dropdown by clicking escape button

$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        let expandedMenuItem = $('.dropdown-menu.show');
        expandedMenuItem.removeClass("show");
    }
});


// Close dropdown when navigating to next menu item with tab key

$(document).keyup(function (e) {
    if (e.keyCode === 9) {
        if (e.target.className.includes("dropdown-toggle")) {
            let expandedMenuItem = $('.dropdown-menu.show');
            expandedMenuItem.removeClass("show");
        }
    }
});