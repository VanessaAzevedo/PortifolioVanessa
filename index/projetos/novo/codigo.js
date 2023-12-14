
    let digite = prompt("Digite o nome de uma fruta:");
    let frutas = [ "banana", "uva", "maçã", "morango"];
    for (let index = 0; index < frutas.length; index++){
         if(digite == frutas[index]){
            frutas.splice(index, 1,"Deletado")
         }else{
            frutas.push(index)
         }
    }
    console.log(frutas)
    




//frutas.push("limão");
//frutas.pop(1);uva
//frutas.splice(1,2);
//frutas.unshift("tomate");
//console.log(frutas);