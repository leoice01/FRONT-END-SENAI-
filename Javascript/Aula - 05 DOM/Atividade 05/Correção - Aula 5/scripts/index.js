function ex1(){
    var filmes = ['Senhor do aneis ','Star Wars','Marix']

    filmes.forEach(cadafilme => {
        document.querySelector("#respostaEx1").innerHTML += `
        <p>${cadafilme}</p>
        `
    })
}