document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("teamForm") as HTMLFormElement;
    const teamNameInput = document.getElementById("teamName") as HTMLInputElement;
    const shortNameInput = document.getElementById("shortName") as HTMLInputElement;
    const tableBody = document.getElementById("teamTableBody") as HTMLTableSectionElement;

    form.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        const teamName = teamNameInput.value.trim();
        const shortName = shortNameInput.value.trim().toUpperCase();

        if (teamName === "" || shortName === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${teamName}</td><td>${shortName}</td>`;

        tableBody.appendChild(newRow);

        teamNameInput.value = "";
        shortNameInput.value = "";
    });
});
