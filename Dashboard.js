// Menginisialisasi grafik pendapatan
var ctx = document.getElementById('revenueChart').getContext('2d');
var revenueChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
        datasets: [{
            label: 'Pendapatan (Rp)',
            data: [300000, 450000, 500000, 480000, 700000, 850000, 1000000],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Pendapatan (Rp)' }
            },
            x: { title: { display: true, text: 'Hari' } }
        },
        plugins: { legend: { display: true, position: 'top' }},
        animation: { duration: 1000 }
    }
});

// Simulasi data untuk dashboard, diperbarui setiap 5 detik
setInterval(() => {
    document.getElementById('total-orders').innerText = Math.floor(Math.random() * 300);
    document.getElementById('active-customers').innerText = Math.floor(Math.random() * 250);
    document.getElementById('pending-orders').innerText = Math.floor(Math.random() * 20);
    document.getElementById('total-revenue').innerText = 'Rp ' + (Math.floor(Math.random() * 5000000) + 1000000);
    document.getElementById('customer-data').innerText = Math.floor(Math.random() * 500) + ' Pelanggan';
    document.getElementById('inventory-data').innerText = Math.floor(Math.random() * 20) + ' Item';

    var newRevenueData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000000));
    revenueChart.data.datasets[0].data = newRevenueData;
    revenueChart.update();
}, 5000);

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = "https://dedgecoffe.github.io/dashboard/";
});
