// Definição das variáveis iniciais
let valor1 = 10;
let valor2 = 20;

// Referência ao elemento HTML
let batata = document.getElementById("demoAtribuicao");

// Forma convencional usando variáveis
let soma = valor1 + valor2;
batata.innerHTML = `Resultado da soma (forma convencional): ${soma} <br>`;

// Usando operadores de atribuição
batata.innerHTML += `Resultado de soma (+=): ${(valor1 += valor2)} <br>`;

batata.innerHTML += `Resultado de subtração (-=): ${(valor1 -= valor2)} <br>`;

batata.innerHTML += `Resultado de multiplicação (*=): ${(valor1 *= valor2)} <br>`;

batata.innerHTML += `Resultado de divisão (/=): ${(valor1 /= valor2)} <br>`;

batata.innerHTML += `Resultado de resto da divisão (%=): ${(valor1 %= valor2)} <br>`;

batata.innerHTML += `Resultado de exponenciação (**=): ${(valor1 **= valor2)} <br>`;

// Template strings - chamando variáveis dentro do texto
const nomeEmpresa = "Full Code Software";

console.log(
  `A ${nomeEmpresa} é uma empresa de tecnologia e ensino. A ${nomeEmpresa} nasceu com o objetivo de simplificar a vida de quem quer entrar na área de dev.`
);