The scrollToSection function is designed to smoothly scroll the webpage to a specific section. It uses the scrollIntoView method to find and display the designated section with a smooth animation.

function scrollToSection() {
    // Select the section to scroll to
    const section = document.querySelector('.form-container');
    
    // Scroll to the selected section smoothly
    section.scrollIntoView({ behavior: 'smooth' });
}

This function is commonly used with an event, such as clicking a button, to navigate users to a particular part of the webpage.

validateForm Function

The validateForm function is used for form validation, particularly checking if all required fields within a form are filled out before enabling a submit button. It ensures that essential information is provided by the user.

function validateForm() {
    // Retrieve form input elements by their IDs
    var nameField = document.getElementById("name");
    var staffField = document.getElementById("staff");
    var contactField = document.getElementById("contact");
    var emailField = document.getElementById("email");
    var kuliyyahField = document.getElementById("kuliyyah");
    var amountField = document.getElementById("amount");
    var loginButton = document.getElementById("loginButton");

    // Check if all required fields are filled
    var isNameFilled = nameField.value.trim() !== '';
    var isstaffFilled = staffField.value.trim() !== '';
    var iscontactFilled = contactField.value.trim() !== '';
    var isemailFilled = emailField.value.trim() !== '';
    var iskuliyyahFilled = kuliyyahField.value.trim() !== '';
    var isamountFilled = amountField.value.trim() !== '';

    // Enable or disable the SUBMIT button based on form validation
    if (isNameFilled && isstaffFilled && iscontactFilled && isemailFilled && iskuliyyahFilled && isamountFilled) {
        loginButton.removeAttribute('disabled');
    } else {
        loginButton.setAttribute('disabled', 'disabled');
    }
}

This function is commonly utilized in web forms to prevent submission until all necessary fields are properly completed by the user. It's usually linked to the input fields' oninput or onchange events to dynamically validate user input.

