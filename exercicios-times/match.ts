var formPartida = document.getElementById("formPartida") as HTMLFormElement;
var tabelaPartida = document.getElementById("tbPartidas") as HTMLElement;
var campeonatos = JSON.parse(localStorage.getItem("campeonatos") || "[]");
var partidas = JSON.parse(localStorage.getItem("partidas") || "[]");


interface Partida{
    id:number
    mandante:string
    visitante:string
    campeonatoId:number
    data:string
}

function atualizarTabelaPartidas() {
    tabelaPartida.innerHTML = "";
    partidas.forEach((p: Partida) => {
        const campeonato = campeonatos.find((c:Campeonato) => c.id === p.campeonatoId)
      tabelaPartida.innerHTML += `
      <tr>
           <td>${p.mandante}</td>
           <td>${p.visitante}</td>
           <td>${campeonato ? campeonato.nome: 'N/A'}</td>
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
function carregarCampeonatosNoSelect(){
    const selectCampeonato = document.getElementById("campeonatoId") as HTMLSelectElement;
    selectCampeonato.innerHTML = "<option value= ''>Selecione</option>";
    campeonatos.forEach((c:Campeonato) =>{
        const option = document.createElement("option");
        option.value = c.id.toString();
        option.text = c.nome;
        selectCampeonato.appendChild(option);
    })

}

function salvarLocalStorageMatch(){
    localStorage.setItem("partidas", JSON.stringify(partidas));
}

function salvarPartida(event: Event){
    event.preventDefault();
    const novaPartida: Partida = {

        id: Date.now(),
        mandante: (document.getElementById("mandante")as HTMLInputElement).value,
        visitante: (document.getElementById("visitante")as HTMLInputElement).value,
        campeonatoId: parseInt((document.getElementById("campeonatoId")as HTMLSelectElement).value),
        data: (document.getElementById("data")as HTMLInputElement).value
    }
    partidas.push(novaPartida);
    atualizarTabelaPartidas();
    salvarLocalStorageMatch();
    formPartida.reset();
    alert('Cadastro feito com sucesso!');
    
}

formPartida.addEventListener("submit", salvarPartida);
atualizarTabelaPartidas();







