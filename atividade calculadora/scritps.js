const visor = document.getElementById("visor");

function limparVisor() {
  visor.textContent = "0"; // É A MESMA COISA QUE O INNER HTML
}

function adicionarValor(valor) {
  if (visor.textContent === "0" && valor !== ".") {
    visor.textContent = valor;
  } else {
    visor.textContent += valor;
  }
}

function deletarUltimoNumero() {
  visor.textContent = visor.textContent.slice(0, -1) || 0;
}

function calcular() {
  try {
    visor.textContent = eval(visor.textContent);
  } catch {
    visor.textContent = "Erro";
  }
}
