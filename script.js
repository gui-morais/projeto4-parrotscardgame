let quant_cartas;
let primeiraCarta;
let contadorJogadas;
let paresEncontrados;
let idRelogio;
const relogio = document.querySelector(".segundos");

inicioDeJogo();

function inicioDeJogo() {
    primeiraCarta = null;
    contadorJogadas = 0;
    paresEncontrados = 0;
    idRelogio = null;
    relogio.innerHTML = "0";

  quant_cartas = prompt("Com quantas cartas deseja jogar?");

  while (!(quant_cartas % 2 === 0 && quant_cartas >= 4 && quant_cartas <= 14)) {
    alert("Quantidade de cartas inválida");
    quant_cartas = prompt("Com quantas cartas deseja jogar?");
  }

  const ordenacao = [];
  for (let i = 1; i <= quant_cartas / 2; i++) {
    ordenacao[2 * (i - 1)] = i;
    ordenacao[2 * (i - 1) + 1] = i;
  }

  ordenacao.sort(comparador);

  const conteudo = document.querySelector(".conteudo");
  conteudo.innerHTML = "";
  for (let i = 1; i <= quant_cartas; i++) {
    let texto = "";

    switch (ordenacao[i - 1]) {
      case 1:
        texto = `<div class="cartas numero1" onclick="viraCarta(this)">
            <img src="./Images/front.png" alt="Não foi possível carregar a imagem" />
            <img src="./Images/bobrossparrot.gif" alt="Não foi possível carregar a imagem" />
            </div>`;
        break;

      case 2:
        texto = `<div class="cartas numero2" onclick="viraCarta(this)">
            <img src="./Images/front.png" alt="Não foi possível carregar a imagem" />
            <img src="./Images/explodyparrot.gif" alt="Não foi possível carregar a imagem" />
            </div>`;
        break;

      case 3:
        texto = `<div class="cartas numero3" onclick="viraCarta(this)">
            <img src="./Images/front.png" alt="Não foi possível carregar a imagem" />
            <img src="./Images/fiestaparrot.gif" alt="Não foi possível carregar a imagem" />
            </div>`;
        break;

      case 4:
        texto = `<div class="cartas numero4" onclick="viraCarta(this)">
            <img src="./Images/front.png" alt="Não foi possível carregar a imagem" />
            <img src="./Images/metalparrot.gif" alt="Não foi possível carregar a imagem" />
            </div>`;
        break;

      case 5:
        texto = `<div class="cartas numero5" onclick="viraCarta(this)">
            <img src="./Images/front.png" alt="Não foi possível carregar a imagem" />
            <img src="./Images/revertitparrot.gif" alt="Não foi possível carregar a imagem" />
            </div>`;
        break;

      case 6:
        texto = `<div class="cartas numero6 " onclick="viraCarta(this)">
            <img src="./Images/front.png" alt="Não foi possível carregar a imagem" />
            <img src="./Images/tripletsparrot.gif" alt="Não foi possível carregar a imagem" />
            </div>`;
        break;

      case 7:
        texto = `<div class="cartas numero7 " onclick="viraCarta(this)">
            <img src="./Images/front.png" alt="Não foi possível carregar a imagem" />
            <img src="./Images/unicornparrot.gif" alt="Não foi possível carregar a imagem" />
            </div>`;
        break;
    }
    conteudo.innerHTML += texto;
  }
}

function viraCarta(carta) {
  carta.classList.add("escolhida");
  contadorJogadas += 1;
  if (idRelogio === null) {
    idRelogio = setInterval(incremetaRelogio, 1000);
  }

  if (primeiraCarta === null) {
    primeiraCarta = carta;
  } else {
    if (carta.className !== primeiraCarta.className) {
      setTimeout(retornaCarta, 1000, primeiraCarta, carta);
    } else {
      paresEncontrados += 1;
    }
    primeiraCarta = null;
  }

  if (paresEncontrados === quant_cartas / 2) {
    setTimeout(fimDeJogo, 1000);
  }
}

function retornaCarta(carta1, carta2) {
  carta1.classList.remove("escolhida");
  carta2.classList.remove("escolhida");
}

function incremetaRelogio() {
  let segundos = Number(relogio.innerHTML);
  segundos += 1;
  relogio.innerHTML = segundos;
}

function fimDeJogo() {
  clearInterval(idRelogio);
  const texto = `Parabéns! Você finalizou o jogo em ${relogio.innerHTML} segundos utilizando ${contadorJogadas} jogadas.`;
  alert(texto);
  const reinicioDoJogo = prompt("Deseja jogar novamente? Escreva APENAS 'sim' ou 'não'.");
  if(reinicioDoJogo === 'sim') {
    inicioDeJogo();
  } else {
    alert("Fim de jogo! Até a próxima");
  }
}

function comparador() {
  return Math.random() - 0.5;
}
