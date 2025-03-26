document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("teamForm");
    var teamNameInput = document.getElementById("teamName");
    var shortNameInput = document.getElementById("shortName");
    var tableBody = document.getElementById("teamTableBody");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var teamName = teamNameInput.value.trim();
        var shortName = shortNameInput.value.trim().toUpperCase();

        if (teamName === "" || shortName === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        var newRow = document.createElement("tr");
        newRow.innerHTML = "<td>" + teamName + "</td><td>" + shortName + "</td>";

        tableBody.appendChild(newRow);

        teamNameInput.value = "";
        shortNameInput.value = "";
    });
});
