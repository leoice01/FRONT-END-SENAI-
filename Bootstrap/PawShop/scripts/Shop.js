var catalogo = []
var carrinho = []
var id = 0;

class Produto {
    constructor(id, imgSrc, titulo, desc, valor){
        this.id = id
        this.imgSrc = imgSrc
        this.titulo = titulo
        this.desc = desc
        this.valor = valor
    }
}

catalogo.push(new Produto(0, '#', 'Coleira', 'lorem',200))

function mostrarCatalogo(){
catalogo.forEach(cadaProduto => {
    document.querySelector("#catalogo").innerHTML += `
        <div class="container text-center ">
            <div class="row align-items-start gap-3 ">
                <div class="produtos col border-black border border-1 p-2">
                    <img src="${cadaProduto.imgSrc}" alt="">
                    <h1 class="produto text-warning fs-3 p-2 fw-bolder">${cadaProduto.titulo}</h1>
                    <p class="Desc fs-6 text-center">${cadaProduto.desc}</p>
                    <H1 class=" Preco text-success fs-2">${cadaProduto.valor}</H1>
                    <button class="btn btn-warning" data-bs-toggle="offcanvas" data-bs-target="#carrinho" type="button">COMPRAR</button>
                </div>    
            </div>    
        </div>    
    `
});
}

mostrarCatalogo()