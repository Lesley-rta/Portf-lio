

// pass
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // pass
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    // pass
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // pass
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    // pass
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // pass
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}