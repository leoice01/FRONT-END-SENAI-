var btnTema = document.querySelector("#btnTema");

btnTema.addEventListener('click',trocarTema);

function trocarTema(){
    let body = document.querySelector('body');
    let btnTemaImg = document.querySelector("#btnTemaImg")
    btnTema.classList.replace("btn-outlone-light","btn-outline-dark")

    // hasAtributes = verificar se tem atributo
    // getAtributes = recebe o valor do atributo
    // setAtributes = seta um novo atributo ou substitui

    if(body.getAttribute("data-bs-theme") == "dark"){
        body.setAttribute("data-bs-theme", "light");
        btnTemaImg.setAttribute("src","img/icons/moon-stars-fill.svg")
    }else{
        body.setAttribute("data-bs-theme","dark");
        btnTemaImg.setAttribute("src","img/icons/sun-fill.svg")
    }
}
