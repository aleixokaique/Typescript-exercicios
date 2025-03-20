"use strict";
var formPartida = document.getElementById("formPartida");
var tabelaPartida = document.getElementById("tbPartidas");
var campeonatos = JSON.parse(localStorage.getItem("campeonatos") || "[]");
var partidas = JSON.parse(localStorage.getItem("partidas") || "[]");
function atualizarTabelaPartidas() {
    tabelaPartida.innerHTML = "";
    partidas.forEach((p) => {
        const campeonato = campeonatos.find((c) => c.id === p.campeonatoId);
        tabelaPartida.innerHTML += `
      <tr>
           <td>${p.mandante}</td>
           <td>${p.visitante}</td>
           <td>${campeonato ? campeonato.nome : 'N/A'}</td>
           <td>${p.data}</td>
           
           
  
           <td>
            <button onclick="editarCampeonato(${p.id})"> Editar </button>
            <button onclick="removerCampeonato(${p.id})"> Remover </button>
  
           </td>
      </tr>
    `;
    });
}
var campeonatos = JSON.parse(localStorage.getItem("campeonatos") || "[]");
function carregarCampeonatosNoSelect() {
    const selectCampeonato = document.getElementById("campeonatoId");
    selectCampeonato.innerHTML = "<option value= ''>Selecione</option>";
    campeonatos.forEach((c) => {
        const option = document.createElement("option");
        option.value = c.id.toString();
        option.text = c.nome;
        selectCampeonato.appendChild(option);
    });
}
function salvarLocalStorageMatch() {
    localStorage.setItem("partidas", JSON.stringify(partidas));
}
function salvarPartida(event) {
    event.preventDefault();
    const novaPartida = {
        id: Date.now(),
        mandante: document.getElementById("mandante").value,
        visitante: document.getElementById("visitante").value,
        campeonatoId: parseInt(document.getElementById("campeonatoId").value),
        data: document.getElementById("data").value
    };
    partidas.push(novaPartida);
    atualizarTabelaPartidas();
    salvarLocalStorageMatch();
    formPartida.reset();
    alert('Cadastro feito com sucesso!');
}

formPartida.addEventListener("submit", salvarPartida);
atualizarTabelaPartidas();
