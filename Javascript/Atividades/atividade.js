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


