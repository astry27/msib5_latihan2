document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("gradeForm");
    const resultTableBody = document.querySelector("#resultTable tbody");
    const hitungButton = document.getElementById("hitungButton");

    hitungButton.addEventListener("click", function() {
        const nama = form.nama.value;
        const matkul = form.matkul.value;
        const grade = form.grade.value;

        const gradeToValue = { "A": 4, "B": 3, "C": 2, "D": 1, "E": 0 };
        const nilai = gradeToValue[grade];

        const newRow = resultTableBody.insertRow();
        const namaCell = newRow.insertCell(0);
        const matkulCell = newRow.insertCell(1);
        const gradeCell = newRow.insertCell(2);
        const nilaiCell = newRow.insertCell(3);

        namaCell.textContent = nama;
        matkulCell.textContent = matkul;
        gradeCell.textContent = grade;
        nilaiCell.textContent = nilai.toFixed(2);

        form.reset();
    });
});