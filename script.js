document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
    
    document.addEventListener("DOMContentLoaded", function () {
        const botaoContraste = document.getElementById("alterna-contraste");
    
        botaoContraste.addEventListener("click", function () {
            document.body.classList.toggle("alto-contraste");
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        const botaoContraste = document.getElementById("alterna-contraste");
        const footer = document.querySelector("footer");
    
        botaoContraste.addEventListener("click", function () {
            document.body.classList.toggle("alto-contraste");
    
            // Verifica a cor de fundo do footer e ajusta a classe
            const bgColor = window.getComputedStyle(footer).backgroundColor;
            if (bgColor === "rgb(0, 0, 0)") { // Branco
                footer.classList.add("fundo-branco");
            } else {
                footer.classList.remove("fundo-branco");
            }
        });
    });
    
    botaoDeAcessibilidade.addEventListener('click', function (){
     botaoDeAcessibilidade.classList.toggle('rotacao-botao');
     opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
    
     const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
     botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
   
    })
 
     const aumentaFonteBotao = document.getElementById('aumentar-fonte');
     const diminuiFonteBotao = document.getElementById('diminuir-fonte');
     
     const alternaContraste = document.getElementById('alterna-contraste')
 
     let tamanhoAtualFonte = 1;
 
     aumentaFonteBotao.addEventListener('click', function(){
         tamanhoAtualFonte += 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
     })
 
     diminuiFonteBotao.addEventListener('click', function(){
         tamanhoAtualFonte -= 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
     })
 
     alternaContraste.addEventListener('click', function(){
         document.body.classList.toggle('alto-contraste')
     })
 
 
 })
 
 ScrollReveal().reveal('#inicio', { delay: 500 });
 ScrollReveal().reveal('#tropicalia', { delay: 500 });
 ScrollReveal().reveal('#galeria', { delay: 500 });
 ScrollReveal().reveal('#contato', { delay: 500 });