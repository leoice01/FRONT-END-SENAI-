function teste(){
     // document = refere ao documento html
     // getElemnt = buscar um elemento (id,class,tag)
     // .value = buscar ao o valor dentro do input

 var input_teste = document.getElementById("input_teste").value
 // .innerHtml = colocar algo dentro do elemento
 // .innterText = colocar algo dentro do elemento apenas texto
 document.getElementById("resposta").innerHTML += `
     <div class="elementos">
         ${input_teste}
     </div>
 `
 }

function repeticao(){
     // enquanto(condicao) faca fimEnquanto
     let contador = 0
     while(contador <= 10){
         document.getElementById("resposta2").innerHTML += "*"
         contador++
     }


 for(let i = 0;i <=10;i++){
     document.getElementById("resposta2").innerHTML += i
     }   

 }

function lista(){
     // var arrayComen = Array()
     // arrayComen[0] = "info"

     var livros = [true,"string",100,[]]
     console.log(livros[2])

     var listaProdutos = [`Manga`,`Livros`, `Revistas`,`Apostila`]
     console.log(listaProdutos)

     listaProdutos.forEach(produto => {
         document.getElementById("resposta3").innerHTML += `
             <div class="elementos">
              <h2>${produto}</h2>
             </div>
     `
 })
}
 