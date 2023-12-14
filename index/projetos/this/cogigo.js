
class Carro{//class estrutura que define um objeto
    constructor(marca, velocidade, valor){ //método para criar e iniciar um objeto criado pela classe
        this.marcaCarro = marca; //this refere-se ao objeto que está sendo referenciado em um determinado contexto ou escopo
        this.velocidadeCarro = velocidade; //this refere-se ao objeto que está sendo referenciado em um determinado contexto ou escopo
        this.valorCarro = valor; //this refere-se ao objeto que está sendo referenciado em um determinado contexto ou escopo
    }
}
let meuCarro1 = new Carro("toyota", "250km/h", "R$150,000"); //let é uma variável e new um objeto de características
console.log(meuCarro1.marcaCarro); //imprimir no console a marca do carro1

let meuCarro2 = new Carro("ferrari", "210km/h", "R$100,000"); //let é uma variável e new um objeto de características
console.log(meuCarro2.marcaCarro); //imprimir no console a marca do carro2





var input = document.getElementById("momento").value; //o comando getElementBselenciona a tag pelo id
var imagem = document.getElementById("imagem"); //o comando getElementBselenciona a tag pelo id
let array = [1, "dois", 3, "quatro", "batata"]; //serve para armazenar vários valores
for (let index = 0; index < array.length; index++) { // for é utilizado para executar o mesmo comando para diferentes itens
    const element = array[index];
}



