const APIKEY = '9a6a9354'
const formPesquisa = document.querySelector('form');

formPesquisa.onsubmit = (param) => {
    param.preventDefault()
   

    var pesquisa = document.querySelector('#inputPesquisa').value
    if(pesquisa == ""){
        alert("Preencha o campo!")
    }else{
        fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${pesquisa}`)
        .then (result => result.json())
        .then(dados => {
            var listarFilmes = dados.Search

            listarFilmes.forEach(filmes => {
            document.querySelector('#lista').innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${filmes.Poster}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${filmes.Title}</h5>
    <p class="card-text">${filmes.Year}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


                <img src=${filmes.Poster}>
                <h1> ${filmes.Title}</h1>
                <p> ${filmes.Year}</p>`
            });
        })
    }
}
