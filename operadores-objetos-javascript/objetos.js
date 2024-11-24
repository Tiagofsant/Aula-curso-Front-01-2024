window.onload = function () {
  // Referência ao elemento HTML
  let demo = document.getElementById("demoObjetos");

  // Declaração de objeto - Sintaxe
  const nomeObjeto = {
    propriedade1: "valor1",
    propriedade2: "valor2",
  };

  // Exemplo de Objeto - Carro
  const carro = {
    tipo: "Sedã",
    marca: "BMW",
    modelo: "Série 3 Esportiva",
    sigla: "M3 //M",
    preco: "R$ 859.950,00",
  };

  // Exibindo informações do carro no HTML
  demo.innerHTML +=
    "Este carro é do tipo: " +
    carro.tipo +
    " do modelo: " +
    carro.modelo +
    " e custa: " +
    carro.preco +
    "<br><br>";

  // Adicionando propriedades no objeto Moto
  const moto = {};

  moto.tipo = "Big Trail";
  moto.marca = "BMW";
  moto.modelo = "1250GS";
  moto.vendeEmRO = false;
  moto.preco = "R$ 129.900,00";

  // Exibindo informações da moto no HTML
  demo.innerHTML +=
    "Esta moto é do tipo: " +
    moto.tipo +
    " do modelo: " +
    moto.modelo +
    " e custa: " +
    moto.preco +
    ". Vende em RO? " +
    (moto.vendeEmRO ? "Sim" : "Não") +
    "<br>";
};
