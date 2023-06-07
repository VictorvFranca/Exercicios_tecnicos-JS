/* declação  e estrutura de arrays */

let arr = [1, 4, 5, 6]; // apenas um tipo de dados intreiros;
let nomes= ['matheus','teste','como ','vai',' você']; // apenas str;
let bool =[false,true,false,true]; // apenas bool;

let misturado = [1,'victor',true]; // arrays tbm recebem dados mistos;

//acessar valores do array - o primeiro indice é 0 array[0];
console.log(arr[1]);
console.log(nomes[0]);
console.log(bool[2]);
console.log(arr[arr.length -1]); // acessar o ultimo indice 

// percorrer todos os indices do array - laço for

for(let i = 0; i <= nomes.length -1; i++){
    console.log(nomes[i]);
};

//forEach cria uma funcao para cada indice do vetor - funcao for do  javascript

nomes.forEach(nome =>{
    console.log('o nome é: ' + nome);
});


// com laço while

let cont = 0;
while(cont <= nomes.length -1){
    console.log(nomes[cont]);
    cont+=1;
};

// inserir um novo indice no array - no final da lista
/* usamos os metodo push() para inserir e pop() para remover */

//push()

nomes.push('vai');
console.log(nomes);

//pop()

let valorRemovido = nomes.pop();
console.log(nomes);
console.log(valorRemovido);
nomes.push('vai');

/* usamos shifit() e unshifit() para remover ou inserir no inicio do array */

//shift()

let primeiroIndeceRemovido = nomes.shift();
console.log(nomes)
console.log(primeiroIndeceRemovido);

//unshift()

nomes.unshift('Rogério');
console.log(nomes);
console.log(nomes[0]);

// metodos indexOf() e lastIndexOf() são usados para encontrar o indice um elemento do array

//indexOf()

console.log(nomes.indexOf('vai'));

//lastIndexOf()

console.log(nomes.lastIndexOf('vai'));

/* usamos o metodos slice para manipular valores de qualquer indice do array e coloca em um novo array */

// passamos o  indice incial e o final -1 

let nomeEscolhido = nomes.slice(2,3); // manipula o nomes[2];
console.log(nomeEscolhido);

console.log(nomes);

//metodo includes() verifica se o array tem um determinado elemento

console.log(nomes.includes('Rogério')); //retorna true pq existe o elemento

// metodo reverse() exibe um vetor de trás pra frente

console.log(nomes.reverse());

//destructuring  array - criar variaveis com os indices do array

let desestruturado = ['minha','mae','mandou','tomar','banho'];

const [p1,p2,p3,p4] = desestruturado;

console.log(p3);