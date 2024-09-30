class Carro{
    constructor(marca,modelo,ano,cor,vel_max){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.vel_max = vel_max;
        this.cor = cor;
        this.velMin = 0;

    }
    acelerar(){
        let acelerarInput = Number(document.querySelector("#acelerarInput").value)


        if(acelerarInput <= carro.vel_max){
            carro.velMin = acelerarInput
            alert ("O carro acelerou!")
            mostrarCarro()
    }else{
        alert("Velocidade maxima ultrapassada!")
        carro.velMin = carro.vel_max
        mostrarCarro()
        }
    }
 }

var carro = null
document.querySelector("#botao_cadastro").addEventListener ('click', casdastrar)

function mostrarCarro(){
    document.querySelector("#resultado").innerHTML = ` 
    <div class="container">
        <p> ${carro.marca}</p>
        <p> ${carro.cor}</p>
        <p> ${carro.modelo}</p>
        <p> ${carro.ano}</p>
        <p> ${carro.vel_max}</p>
        <p> ${carro.velMin}</p>
        <input id="acelerarInput" type"number">
        <button id="acelerarBtn"
        type="button">ACELERAR</button>
</div>
`
document.querySelector("#acelerarBtn").addEventListener("click",carro.acelerar)
}

function casdastrar(){
    let marca = document.querySelector("#marca").value
    let modelo = document.querySelector("#modelo").value
    let ano = Number(document.querySelector("#ano").value)
    let cor = document.querySelector("#cor").value
    let vel_max = Number(document.querySelector("#vel_max").value)

    carro = new Carro(marca, modelo, ano, cor, vel_max)

    mostrarCarro()
}
