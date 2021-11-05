//const buttonSubmit = document.querySelector('#submit');
//const textboxInfo = document.querySelector('#info');

function display() {
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var phoneNumber = document.getElementById('phone').value;
    var emailAddress = document.getElementById('email').value;

    alert(firstName + ' ' + lastName + '\nPhone: ' + phoneNumber + '\nE-mail: ' + emailAddress + "\nYour message has been sent. Thank you.");
}