function validateForm() {
    let email = document.getElementById('email').value;
    let comment = document.getElementById('comment').value.trim();
    let isValid = true;

    // Clear previous error messages
    document.getElementById('emailError').innerText = '';
    document.getElementById('commentError').innerText = '';

    // Email validation
    if (email.length < 6 || email.length > 15 || !email.includes('@')) {
        document.getElementById('emailError').innerText = 'Email must be between 6 and 15 characters and contain "@"';
        isValid = false;
    }

    // Comment validation
    if (comment.length === 0) {
        document.getElementById('commentError').innerText = 'Comment cannot be empty';
        isValid = false;
    } else if (comment.length > 50) {
        document.getElementById('commentError').innerText = 'Comment must be less than 50 characters';
        isValid = false;
    }

    // If form is invalid, prevent submission
    if (!isValid) {
        return false;
    }

    // If valid, display alert
    alert(`Email: ${email}\nComment: ${comment}`);
    return true;
}
