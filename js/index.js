//  personagens = contanier
//  personagem = topicos
 
 const botoes = document.querySelectorAll(".botao");
 const contanier = document.querySelectorAll(".topicos")

 botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarTopicos();

        botao.classList.add("selecionado");
        contanier[indice].classList.add("selecionado");
    });
 });

 function desselecionarTopicos() {
    const topicosSelecionado = document.querySelector(".topicos.selecionado");
    topicosSelecionado.classList.remove("selecionado");
 }

 function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
 }
