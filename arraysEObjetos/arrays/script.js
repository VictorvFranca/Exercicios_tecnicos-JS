let arr = [1, 4, 5, 6, 6];
let nomes= ['matheus','teste','como vai você'];
let bool =[false,true,false,true];

let misturado = [1,'victor',true];

console.log(misturado);

function findMaxNumber(...arr){
    return Math.max(arr);
};

console.log(findMaxNumber());
/*
function sumUniqueNumbers(nums){
    let soma = 0;
    for(let i =0; i<= nums.length; i++){
      if(nums[i+1] !== nums[i]){
        soma+=nums[i];
      };
      return soma;
};


sumUniqueNumbers(arr);
*/

function removeDuplicates(...nums){
    for(let i =0; i<= nums.length -1; i++){
        if(nums[i+1]===nums[i]){
            nums.pop(nums[i]);
        };
    };
};

removeDuplicates(...arr);