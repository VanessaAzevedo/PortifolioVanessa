/*function notas(){
let notas = [10 , 9 , 8 , 7];
let alunos = ["Vanessa","Valéria","Luana","Karen"];

for(let index = 0; index < notas.length; index++){
    console.log(alunos[index], notas[index])
    }
}*/


/*console.log(alunos[0] , notas[0]);
console.log(alunos[1] , notas[1]);
console.log(alunos[2] , notas[2]);
console.log(alunos[3] , notas[3]);*/



//divível por 3 = fizz 
//divisível por 5 = buzz
//divisível por 3 e 5 = fizzbuzz
for(let index = 0 ; index <= 100; index++){
    if(index % 3 == 0 && index % 5 == 0){
        console.log("fizzbuzz");
    }else if(index % 5 == 0){
        console.log("buzz")
    }else{
        console.log("fizz")
    }
}






