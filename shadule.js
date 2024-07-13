
        document.addEventListener('DOMContentLoaded', function () {
            let canEdit = true;

            document.getElementById('editBtn').addEventListener('click', function () {
                if (canEdit) {
                    alert('You are allowed to edit this only one time.');
                    canEdit = false;

                    // Make headings editable
                    document.getElementById('h1').contentEditable = "true";
                    document.getElementById('h2').contentEditable = "true";
                    document.getElementById('h3').contentEditable = "true";

                    // Make the cells in the last three columns editable
                    const editableCells = document.querySelectorAll('.td-edit');
                    editableCells.forEach(cell => {
                        cell.contentEditable = "true";
                        cell.style.border = "1px solid red"; // Highlight editable cells
                    });

                    document.getElementById('editBtn').style.display = 'none';
                    document.getElementById('saveBtn').style.display = 'inline-block';
                } else {
                    alert('You can edit the headings and cells only once.');
                }
            });

            document.getElementById('saveBtn').addEventListener('click', function () {
                // Disable editing
                document.getElementById('h1').contentEditable = "false";
                document.getElementById('h2').contentEditable = "false";
                document.getElementById('h3').contentEditable = "false";

                const editableCells = document.querySelectorAll('.td-edit');
                editableCells.forEach(cell => {
                    cell.contentEditable = "false";
                    cell.style.border = "none"; // Remove highlight
                });

                // Save data to local storage
                const tableData = [];
                const rows = document.querySelectorAll('#shadule tr');
                rows.forEach((row, rowIndex) => {
                    const rowData = [];
                    row.querySelectorAll('th, td').forEach((cell, cellIndex) => {
                        if (rowIndex === 0 && cellIndex > 1) { // Save headers
                            rowData.push(cell.textContent);
                        } else if (rowIndex > 0 && cellIndex > 1) { // Save cell data
                            rowData.push(cell.textContent);
                        }
                    });
                    if (rowData.length) {
                        tableData.push(rowData);
                    }
                });
                localStorage.setItem('shaduleData', JSON.stringify(tableData));

                document.getElementById('saveBtn').style.display = 'none';
            });

            // Load data from local storage
            const savedData = JSON.parse(localStorage.getItem('shaduleData'));
            if (savedData) {
                savedData.forEach((rowData, rowIndex) => {
                    rowData.forEach((cellData, cellIndex) => {
                        if (rowIndex === 0) { // Load headers
                            document.getElementById(`h${cellIndex + 1}`).textContent = cellData;
                        } else { // Load cell data
                            document.querySelectorAll('.td-edit')[(rowIndex - 1) * 3 + cellIndex].textContent = cellData;
                        }
                    });
                });
            }
        });
