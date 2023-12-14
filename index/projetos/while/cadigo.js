/*let contador = 0;
while(contador <= 10){
    if(contador % contador == 0 && contador % 1 == 0){
        console.log(contador + " é primo !");
    } else{
        console.log("Não é primo!");
    }
    contador ++;
}*/
function tabuada(){
    let num = parseInt(document.getElementById("num").value);
    let reposta = document.getElementById("resposta");
    let tabuada = "";
    for (let index = 0; index <= 10; index++){
        tabuada += num+ "x" + index + "=" + num*index + "<br />"
        reposta.innerHTML = tabuada;
    } 
}

    






