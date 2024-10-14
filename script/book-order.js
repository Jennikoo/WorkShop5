document.getElementById('bookOrderForm').oninput = function () {
    let quantity = parseInt(document.getElementById('quantity').value) || 0;
    let price = parseFloat(document.getElementById('price').value) || 0;
    let vat = parseFloat(document.getElementById('vat').value) || 0;
    let discount = parseFloat(document.getElementById('discount').value) || 0;
    let shipping = parseFloat(document.getElementById('shipping').value) || 0;

    // Apply double discount if quantity > 100
    if (quantity > 100) {
        discount *= 2;
    }

    let total = (quantity * price) * (1 + vat / 100) - discount + shipping;
    document.getElementById('total').innerText = total.toFixed(2);
}
