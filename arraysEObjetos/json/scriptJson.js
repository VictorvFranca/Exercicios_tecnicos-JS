//json é uma estrutura de comunicacao entre servidor e o browser
//nao aceita comentarios - só pode usar aspas duplas;
//Json é um objeto.

let carro = {
    marca: "chevro",
    marcha: "auto",
    rodas: 4,
    placa: true,
};

// converter em texto

let carrosTexto = JSON.stringify(carro);

console.log(carrosTexto);

// converter para JSON

let carroJSON = JSON.parse(carrosTexto);

console.log(carroJSON);