var vTotal = null

function explicacao(){
    // se () senao fimSee
    if(true){
        console.log("Estou no if")
    }else{
        console.log("ESTOU NO ELSE")
    }

  
    let idade = Number(prompt("Qual é a sua idade?"))

    if(idade < 18){
        alert("Entrada não permitida!!!")
        location.href = "https://www.google.com"
    }else{
        alert("Entrada permitida!!!")
        location.reload()
    }
}

function explicacao2(){
    const emailAdm = "adm@gmail.com"
    const senhaAdm = "123"

    alert("Seja Bem vindo ao sistemaSenai!")
    let email = prompt("Digite o seu email")
    let senha = prompt("Digite a sua senha")

    //  = atribuição
    // == compração de conteudo
    // === comparação de conteudo e tipo
    // != não igual (diferente)
    // & (equivalente ao e)
    // || (equivalente ao ou)
    if(email == emailAdm & senha == senhaAdm){ 
        alert("Você é adm")
    }else{
        alert("Usuario ou senha incorretos! Tente Novamente!")

        let repete = confirm("Deseja tentar novamente?")

        if(repete){
            explicacao2()
        }
    } 
}

function explicacao3(){
    alert("Seja bem vindo a lojinha")
    let opcao = prompt(" A) Camisa B) Calça C) Sapato")
    // escolha (opcao) caso "a"
    switch(opcao){
        case "A":
            alert("Voce escolheu Camisa!")
            break
        case "B":
            alert("Voce escolheu Calça!")
            break
        case "C":
            alert("Voce escolheu Sapato!")
            break
        default:
            alert("Opcao inválida!")

            let repete = confirm ("Deseja tentar novamente ?")

            if(repete){
                explicacao3()
            }
 
    }
}