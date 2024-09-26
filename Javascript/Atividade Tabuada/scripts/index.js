function gerarTabuada() {
    // Captura o valor do input
    var numero = document.getElementById("input_tabuada").value;

    // Limpa o conteúdo anterior na div de resultados
    document.getElementById("resultadoTabuada").innerHTML = "";

    // Verifica se o valor é válido
    if (numero === "" || isNaN(numero)) {
        document.getElementById("resultadoTabuada").innerHTML = "<p>Por favor, insira um número válido!</p>";
        return;
    }

    // Converte o valor para número inteiro
    numero = parseInt(numero);

    // Loop para gerar a tabuada do número
    for (var i = 1; i <= 10; i++) {
        // Adiciona cada linha da tabuada no HTML
        document.getElementById("resultadoTabuada").innerHTML += `
            <div class="elementos">
                ${numero} x ${i} = ${numero * i}
            </div>
        `;
    }
}

function ex2(){
    let numero = Number (document.getElementById("input_ex2").value)

    // contador por meio do while(){}
    // let contador = 0
    // while (contador <= 10){
    // contadpr++}
//

for(let contador = 0;contador <= 10;contador++){
    let calculo = numero * contador
    document.getElementById("respostaex1").innerHTML +=`
    <p>${numero} x ${contador} = ${calculo}</p>
    `
}
}

if(numero ==0){
    document.getElementById("respotaex1").innerHTML =``
 }else{
    for(let contador = 0; contador <= 10; contador++){
        let calculo = numero * contador
        
        document.getElementById("respotaex1").innerHTML +=`
        <p>${numero} * ${contador} = ${calculo}</p>
        `
     }
}
