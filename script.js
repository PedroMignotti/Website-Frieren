// script.js

function criarVentos(qtd, classe) {
  const body = document.body;
  for (let i = 0; i < qtd; i++) {
    const vento = document.createElement("div");
    vento.classList.add(classe);

    // Posição inicial aleatória
    vento.style.left = `${Math.random() * 100}vw`;
    vento.style.top = `${Math.random() * 100}vh`;

    body.appendChild(vento);
  }
}

criarVentos(10, 'vento');
criarVentos(10, 'vento2');
criarVentos(10, 'vento3');

function closeSpoiler() {
  document.getElementById("spoiler-popup").style.display = "none";
}




const fragmentos = document.querySelectorAll(".fragmento");
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const textoModal = document.getElementById("texto-modal");
const fechar = document.querySelector(".fechar");

const conteudo = {
  tempo: {
    imagem: "static/images/tempo.png",
  },
  luto: {
    imagem: "static/images/luto.png",
  },
  lacos: {
    imagem: "static/images/lacos.png",
  },
  memoria: {
    imagem: "static/images/memoria.png",
  },
  mudanca: {
    imagem: "static/images/mudanca.png",
  }
};

fragmentos.forEach(frag => {
  frag.addEventListener("click", () => {
    const tema = frag.id.replace("tema-", "");
    modalContent.style.backgroundImage = `url('${conteudo[tema].imagem}')`;
    textoModal.textContent = conteudo[tema].texto;
    modal.classList.remove("hidden");
  });
});

fechar.addEventListener("click", () => {
  modal.classList.add("hidden");
});







const carrossel = document.getElementById('carrossel');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let indexAtual = 0;

function atualizarCarrossel() {
  const cardWidth = cards[0].offsetWidth;
  const cardMargin = parseInt(window.getComputedStyle(cards[0]).marginRight);
  const containerWidth = document.querySelector('.carrossel-container').offsetWidth;

  const cardTotalWidth = cardWidth + cardMargin;

  // Calcula quantos cards cabem na tela de uma vez
  const visibleCards = Math.floor(containerWidth / cardTotalWidth);

  // Limita o índice máximo para que o último card fique totalmente visível
  const maxIndex = cards.length - visibleCards;

  indexAtual = Math.max(0, Math.min(indexAtual, maxIndex));

  const deslocamento = cardTotalWidth * indexAtual;
  carrossel.style.transform = `translateX(-${deslocamento}px)`;

  cards.forEach((card, i) => {
    card.classList.toggle('ativo', i === indexAtual);
  });
}

prevBtn.addEventListener('click', () => {
  indexAtual--;
  atualizarCarrossel();
});

nextBtn.addEventListener('click', () => {
  indexAtual++;
  atualizarCarrossel();
});

window.addEventListener('resize', atualizarCarrossel);
atualizarCarrossel();






let audio = null;

function tocarMusica(caminho) {
  if (audio) {
    audio.pause();
  }

  audio = new Audio(caminho);
  audio.volume = 0.05; // volume de 30%
  audio.play();
}
