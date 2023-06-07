// metodo trim() - remove os espaços da str

let nome = 'victor Hugo';

let nomeSemEspeco = nome.trim();

console.log(nome);
console.log(nomeSemEspeco);

// metodo padStart() - add carac antes do lim do texto

let idBD = '67';

console.log(idBD.padStart(6,'0')); // implemenst 0 ate o total de 6 caracs

// metodo split() - separa uma string em array;

let texto = "plantei uma reoseira no alto daquele cume";

console.log(texto.split(" "));
let arrayTexto = texto.split(" ");

//metodo join()- junta um array numa str

console.log(arrayTexto.join('<->'));

// metodo repeat() - repete uma string 

let palavra = 'repete';
console.log(palavra.repeat(10));

