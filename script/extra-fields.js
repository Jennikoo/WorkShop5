function showContactDetail() {
    let method = document.getElementById('contactMethod').value;
    let contactDetailDiv = document.getElementById('contactDetail');

    if (method !== 'none') {
        contactDetailDiv.style.display = 'block';
    } else {
        contactDetailDiv.style.display = 'none';
    }
}
