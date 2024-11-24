// Definição da variável de controle
let valor = 3;

// Referência ao elemento HTML
let demo = document.getElementById("demoAritimetico");

// Cálculo de soma e multiplicação
let somaEMultiplica = (100.1 + 150) * valor;
demo.innerHTML += "Resultado de soma e multiplicação: " + somaEMultiplica + "<br>";

// Cálculo de divisão
let divide = somaEMultiplica / 30;
demo.innerHTML += "Resultado da divisão é: " + divide + "<br>";

// Cálculo do resto da divisão
let restoDaDivisao = somaEMultiplica % 31;
demo.innerHTML += "Resultado do resto da divisão é: " + restoDaDivisao + "<br>";

// Incremento de somaEMultiplica
let incremente = ++somaEMultiplica;
demo.innerHTML +=
  "Resultado do incremento (somaEMultiplica) é: " + incremente + "<br>";

// Incremento de valor
let incrementeValor = ++valor;
demo.innerHTML +=
  "Resultado do incremento (valor) é: " + incrementeValor + "<br>";

// Decremento de somaEMultiplica
let decremente = --somaEMultiplica;
demo.innerHTML +=
  "Resultado do decremento (somaEMultiplica) é: " + decremente + "<br>";

// Decremento de valor
let decrementeValor = --valor;
demo.innerHTML +=
  "Resultado do decremento (valor) é: " + decrementeValor + "<br>";
