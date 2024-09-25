function filmes18(){
    var filmes = [`Deadpool & Wolverine`,`Super Onze`,`Batman`,`Meu Malvado Favorito 6`,`Não fale o mal`,`Silvio`]
    console.log(filmes)

    filmes.forEach(categoria => {
        document.getElementById("teste1").innerHTML += `<div class="categoria1">${categoria}</div>`
    });
}
