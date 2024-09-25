function gerarTabuada() {
    // Captura o valor do input
    var numero = document.getElementById("input_tabuada").value;

    // Limpa o conteúdo anterior na div de resultados
    document.getElementById("resultadoTabuada").innerHTML = "";

    // Verifica se o valor é válido
    if (numero === "" || isNaN(numero)) {
        document.getElementById("resultadoTabuada").innerHTML = "<p>Por favor, insira um número válido!</p>";
        return;
    }

    // Converte o valor para número inteiro
    numero = parseInt(numero);

    // Loop para gerar a tabuada do número
    for (var i = 1; i <= 10; i++) {
        // Adiciona cada linha da tabuada no HTML
        document.getElementById("resultadoTabuada").innerHTML += `
            <div class="elementos">
                ${numero} x ${i} = ${numero * i}
            </div>
        `;
    }
}