/* construção do objeto */

let pessoa = {
    nome:'victor' ,
    idade: 27,
    profissao:'programador', 
};

// acessar uma propriedade

console.log(pessoa.nome);

// deletar uma propriedade 

delete pessoa.nome;

console.log(pessoa.nome);
// incluir uma propriedade

pessoa.estadoCivil = 'casado';

console.log(pessoa.estadoCivil);

// metódo assign - incrementar propriedasdes entre objetos

let pets = {
    pet:true,
    petqtd:3,
}

Object.assign(pessoa,pets);

console.log(pessoa);

// metódo Keys - acessa as propriedades de um objeto

console.log(Object.keys(pessoa));

// mutação (mutability) do objeto- quando um objeto é criado recebendo outro objeto;

let cidadao = pessoa;

cidadao.nome = 'victor';

console.log(pessoa);
console.log(cidadao);

// Destructuring - desestruturar um objeto - cria variaveis atraves de um objeto
const {nome: nome, idade:idade, profissao:profissao} = cidadao;

console.log(nome);
console.log(idade);
console.log(profissao);

//

