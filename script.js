document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const comments = document.getElementById("comments");

    const fnameError = document.getElementById("fnameError");
    const lnameError = document.getElementById("lnameError");
    const emailError = document.getElementById("emailError");
    const commentsError = document.getElementById("commentsError");

    // function to validate fields based on requirements 
    function validateField(field, errorElement, customMessage) {
        field.setCustomValidity("");
        if(!field.checkValidity()) {
            field.setCustomValidity(customMessage);
            errorElement.textContent = customMessage;
        } 
        else {
            field.setCustomValidity("");
            errorElement.textContent = "";
        }
        field.reportValidity();
    }

    fname.addEventListener("input", () => validateField(fname, fnameError, "First name must be between 2 and 30 characters."));
    lname.addEventListener("input", () => validateField(lname, lnameError, "Last name must be between 2 and 30 characters."));
    email.addEventListener("input", () => validateField(email, emailError, "Please enter a valid email address."));
    comments.addEventListener("input", () => validateField(comments, commentsError, "Comments should be between 1 and 200 characters."));


    // checking when the form is submitted 
    form.addEventListener("submit", function (event) {
        let isValid = true;

        validateField(fname, fnameError, "First name is required.");
        validateField(lname, lnameError, "Last name is required.");
        validateField(email, emailError, "Please enter a valid email address.");
        validateField(comments, commentsError, "Comments cannot be empty.");

        if (!fname.checkValidity() || !lname.checkValidity() || !email.checkValidity() || !comments.checkValidity()) {
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); 
        }
    });

});