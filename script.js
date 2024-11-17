const carrosel = document.querySelector(".carrosel");
const carrosel_botoes = document.querySelectorAll('.botao-carrosel');
const tamanho_card = document.querySelector(".card.tratamentos").offsetWidth;

// Pegando as propriedades css do carrossel
var estilo_carrosel = window.getComputedStyle(carrosel);

// Tratamento da propriedade de um valor que chega em forma string
var gap = parseFloat(estilo_carrosel.columnGap.replace("px", ""));

// Calculando o quanto tem que rolar no carrossel
var tamanho_rolagem = gap + tamanho_card;

// Configurando a rolagem nos botões
var estaRolando = false;

carrosel_botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.id === "anterior"){ 
            carrosel.scrollLeft += -(tamanho_rolagem);
        } 
        else { 
            carrosel.scrollLeft += (tamanho_rolagem); 
        }
    })
});