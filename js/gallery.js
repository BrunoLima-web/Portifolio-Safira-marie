const cards = document.querySelectorAll(".card");
let indexAtivo = 0;

// função para atualizar a galeria
function atualizarGaleria() {
    cards.forEach((card, index) => {
        card.classList.remove("ativo", "left", "right");

        if (index === indexAtivo) {
            card.classList.add("ativo");
        } else if (index === indexAtivo - 1) {
            card.classList.add("left");
        } else if (index === indexAtivo + 1) {
            card.classList.add("right");
        }
    });
}

// BOTÕES
document.querySelector(".btn.prev").addEventListener("click", () => {
    mover(-1);
});

document.querySelector(".btn.next").addEventListener("click", () => {
    mover(1);
});

// função para mover imagem
function mover(direcao) {
    indexAtivo += direcao;

    if (indexAtivo < 0) indexAtivo = cards.length - 1;
    if (indexAtivo > cards.length - 1) indexAtivo = 0;

    atualizarGaleria();
    resetarAutoplay(); // impede de bugar ao clicar nos botões
}

// AUTOPLAY
let autoplayDelay = 3000; // tempo em ms → 3000 = 3 segundos
let autoplay = setInterval(() => {
    mover(1);
}, autoplayDelay);

// sempre que clicar, reinicia o autoplay
function resetarAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(() => {
        mover(1);
    }, autoplayDelay);
}

// iniciar galeria
atualizarGaleria();
