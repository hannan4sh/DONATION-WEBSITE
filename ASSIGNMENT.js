function scrollToSection() {
    const section = document.querySelector('.form-container');
    section.scrollIntoView({ behavior: 'smooth' });
}
function validateForm() {
// Get elements by their IDs
var nameField = document.getElementById("name");
var staffField = document.getElementById("staff");
var contactField = document.getElementById("contact");
var emailField = document.getElementById("email");
var kuliyyahField = document.getElementById("kuliyyah");
var amountField = document.getElementById("amount");
var loginButton = document.getElementById("loginButton");

// Check if all fields are filled
var isNameFilled = nameField.value.trim() !== '';
var isstaffFilled = staffField.value.trim() !== '';
var iscontactFilled = contactField.value.trim() !== '';
var isemailFilled = emailField.value.trim() !== '';
var iskuliyyahFilled = kuliyyahField.value.trim() !== '';
var isamountFilled = amountField.value.trim() !== '';

if (isNameFilled && isstaffFilled && iscontactFilled && isemailFilled && iskuliyyahFilled && isamountFilled) {
// If both fields are filled, clear the error message and enable the "Login" button
loginButton.removeAttribute('disabled');
} else {
// If any field is empty, display an error message and disable the "Login" button
loginButton.setAttribute('disabled', 'disabled');
}
}