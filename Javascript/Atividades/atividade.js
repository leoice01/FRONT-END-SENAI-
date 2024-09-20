function calcularConta() {
    const numeroClientes = document.getElementById('clientes').value;
    const valorConta = document.getElementById('valorConta').value;
    
    if (numeroClientes > 0 && valorConta > 0) {
       
        const valorPorCliente = valorConta / numeroClientes;
        
      
        document.getElementById('resultado').innerText = 
            `Cada cliente deve pagar: R$${valorPorCliente.toFixed(2)}`;
    } else {
        
        document.getElementById('resultado').innerText = 
            'Por favor, insira valores válidos para número de clientes e valor da conta.';
    }
}
// 1 Calcule conta, faça uma aplicação js que pegue o número 
// input = nClientes, vTotal
// output = resultadoDaConta

function calcular1(){
    let nClientes = Number(prompt("Numero de clientes:"))
    let vTotal = Number(prompt("Valor total da mesa R$:"))

    let resultadoDaConta = vTotal / nClientes

    alert(`O valor para cada cliente é de : ${resultadoDaConta}`)
}

// input = numero
// output = sucessor, antecessor, numero

function calcular2(){
    let numero = Number(prompt("Digite um numero"))

    alert(`O antecessor é ${numero - 1}, o próprio numero é ${numero} e o sucessor é ${numero + 1}`)
}


