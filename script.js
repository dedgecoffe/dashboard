document.addEventListener('DOMContentLoaded', () => {
    const currentDate = new Date().toLocaleDateString();
    document.getElementById('current-date').innerText = currentDate;

    let totalOrders = 0;
    let totalRevenue = 0;

    const orderForm = document.getElementById('order-form');
    const ordersTableBody = document.getElementById('orders-table').getElementsByTagName('tbody')[0];

    orderForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah pengiriman form

        // Mengambil nilai dari form
        const customerName = document.getElementById('customer-name').value;
        const menuItem = document.getElementById('menu-item').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const totalPrice = parseFloat(document.getElementById('total-price').value);

        // Menambah pemesanan baru ke dalam tabel
        const newRow = ordersTableBody.insertRow();
        newRow.innerHTML = `
            <td>${++totalOrders}</td>
            <td>${customerName}</td>
            <td>${menuItem}</td>
            <td>${quantity}</td>
            <td>${totalPrice.toFixed(2)}</td>
            <td>Diproses</td>
        `;

        // Mengupdate total pendapatan
        totalRevenue += totalPrice;
        document.getElementById('total-revenue').innerText = totalRevenue.toFixed(2);

        // Mengupdate total pemesanan
        document.getElementById('total-orders').innerText = totalOrders;

        // Reset form
        orderForm.reset();
    });
});