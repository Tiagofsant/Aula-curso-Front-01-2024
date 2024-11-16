const visor = document.getElementById("display");

function limparVisor() {
  visor.textContent = "0";
}

function adicionarValor(value) {
  // Substituir o zero inicial, exceto ao adicionar um ponto
  if (visor.textContent === "0" && value !== ".") {
    visor.textContent = value;
  } else {
    visor.textContent += value;
  }
}

function deletarUltimo() {
  // Remove o último caractere ou volta para '0' se estiver vazio
  visor.textContent = visor.textContent.slice(0, -1) || "0";
}

function calcular() {
  try {
    // Avalia a expressão e atualiza o visor
    visor.textContent = eval(visor.textContent);
  } catch {
    visor.textContent = "Erro"; // Mostra "Erro" em caso de expressão inválida
  }
}
