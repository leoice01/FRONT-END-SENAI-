// 1 passo = entrada de dados
        // primeiroN, segundoN, operador

// 2 passo calculo
// Qual operador foi escolhido
// fazer o cálculo
// Salvar em resultado
// - Se resetar : zera variaveis


// 3 passo = saida de dados

var num1;
var num2;
var operador;
var resultado;


function btnNumero(botao){
    if(num1 != undefined){
        num2 = Number(botao)
        console.log("Salvei no numero 2")

    }else{
        num1 = Number(botao)
        console.log("Salvei no numero 1")
    }
        
}

function btnOperador(botao){
    operador = botao


}

function calcular(){
    switch(operador){
        case "+":
            resultado = num1 + num2
            alert (`${num1} ${operador} ${num2} = ${resultado}`)
        break
    }

    switch(operador){
        case "-":
            resultado = num1 - num2
            alert (`${num1} ${operador} ${num2} = ${resultado}`)
        break
    }

    switch(operador){
        case "*":
            resultado = num1 * num2
            alert (`${num1} ${operador} ${num2} = ${resultado}`)
        break
    }

    switch(operador){
        case "/":
            resultado = num1 / num2
            alert (`${num1} ${operador} ${num2} = ${resultado}`)
            break
            default:
                alert("Selecione uma operação!")
            break
    }
}

function resetar(){
    num1 = undefined
    num2 = undefined
    operador = undefined
}

