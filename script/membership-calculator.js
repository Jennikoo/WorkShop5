function calculateCost() {
    let type = parseFloat(document.getElementById('type').value);
    let years = parseInt(document.getElementById('years').value);
    let totalCost = type * years;
    let discountMessage = '';

    // Apply discounts
    if (years > 2) {
        totalCost *= 0.8; // 20% discount
        discountMessage = 'You received a 20% discount!';
    }
    if (years >= 5) {
        totalCost -= 5; // Extra €5 discount
        discountMessage = 'You received a 20% discount and an extra €5 off!';
    }

    document.getElementById('totalCost').innerText = `${totalCost.toFixed(2)}€`;
    document.getElementById('discountMessage').innerText = discountMessage;
}
