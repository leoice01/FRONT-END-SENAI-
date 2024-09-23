 function Verificar(){
    const idadeuser = document.getElementById('idade').value;
        if(idadeuser >= 0 & idadeuser < 15){

            document.getElementById('resultado').innerText = 
                'Voce é uma criança !';
        }else if(idadeuser >= 15 & idadeuser < 30){

            document.getElementById('resultado').innerText = 
                'Voce é um jovem !';

            }else if(idadeuser >= 30 & idadeuser < 60){

                document.getElementById('resultado').innerText = 
                    'Voce é um Adulto !';

                }else if(idadeuser >= 60){

                    document.getElementById('resultado').innerText = 
                        'Voce é um idoso !';
        
        }    else {
            alert("Entrada negada!")
        }
 }

 function calculadora(){
    alert("Bem-vindo a CalculadoraJS")

    var operacao = prompt(`Escolha a operação a ser feita: + - * /`)
    var n1 = Number(prompt(`Insira o PRIMEIRO número: `))
    var n2 = Number(prompt(`Insira o SEGUNDO número: `))

    if (operacao == `+`){
        var resultado = n1 + n2
    }

    if (operacao == `-`){
        var resultado = n1 - n2
    }

    if(operacao == `*`){
        var resultado = n1 * n2
    }

    if (operacao == `/`){
        var resultado = n1 / n2
    }

    alert(`O resultado da operação é ${resultado}`)
}

 