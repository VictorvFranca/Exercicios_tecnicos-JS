//rest operator - atribui qtd indefinida de argumentos
// o operador rest transforma os argumentos em um array

let nome = 'victor';
let idade = '27';
let pet = true;

function imprimirInfos(...args){
    for(let i=0;i <= args.length -1; i++){
        console.log(args[i]);
    };
};

imprimirInfos(nome, idade);
imprimirInfos(idade, nome, pet);


