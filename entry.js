document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function () {
        // Validate required fields
        const M = document.getElementById('M');
        const N = document.getElementById('N');
        const WOT = document.getElementById('Selt');
        const WKT = document.getElementById('wkt');

        if (!M.value || !N.value || !WOT.value || !WKT.value) {
            alert('Please fill in all required fields.');
            return;
        }

        // Get current date and time
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        // Create an object to store the data
        const entry = {
            M: M.value,
            N: N.value,
            WOT: WOT.value,
            WKT: WKT.value,
            date,
            time
        };

        // Get existing entries from local storage
        let entries = JSON.parse(localStorage.getItem('entries')) || [];

        // Add the new entry to the array
        entries.push(entry);

        // Save the updated array back to local storage
        localStorage.setItem('entries', JSON.stringify(entries));

        // Update the table
        updateTable();

        // Clear input fields
        M.value = '';
        N.value = '';
        WOT.value = 'Y';
        WKT.value = '';
    });

    function updateTable() {
        const table = document.getElementById('resultTable');
        const entries = JSON.parse(localStorage.getItem('entries')) || [];

        // Clear existing rows
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        // Add rows from local storage
        entries.forEach((entry, index) => {
            const row = table.insertRow();
            row.insertCell(0).textContent = index + 1;
            row.insertCell(1).textContent = entry.date;
            row.insertCell(2).textContent = entry.time;
            row.insertCell(3).textContent = entry.M;
            row.insertCell(4).textContent = entry.N;
            row.insertCell(5).textContent = entry.WOT;
            row.insertCell(6).textContent = entry.WKT;
            alert("Data Added Sucessfuly!");
        });
    }

    // Initialize table with existing data
    updateTable();
});
