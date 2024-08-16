// script.js

function calculateBill() {
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomType = document.getElementById('roomType').value;

    if (checkin && checkout && roomType) {
        const checkinDate = new Date(checkin);
        const checkoutDate = new Date(checkout);

        // Calculate the number of nights
        const diffTime = Math.abs(checkoutDate - checkinDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 0) {
            const roomRate = parseFloat(roomType);
            const totalBill = roomRate * diffDays;

            document.getElementById('bill').innerText = `Total Bill: ₱${totalBill.toFixed(2)} for ${diffDays} night(s)`;
        } else {
            document.getElementById('bill').innerText = 'Please ensure that the check-out date is after the check-in date.';
        }
    } else {
        document.getElementById('bill').innerText = 'Please complete all fields to calculate the bill.';
    }
}
