class Newplayer {
    constructor(icon) {
        this.icon = icon;
    }
}

class TicTacToe {
    /* checar vencedore */
    checksWinner() {
        /* Armazena todas as dives casa em um array assim facilitando a busca por igualdade  */
        let allCasas = document.querySelectorAll(".casa"),
            imgCasas = [],
            blocoMeio = allCasas[(allCasas.length - 1) / 2].tagName;

        /* loop para pegar as imgs dentro das casas */
        allCasas.forEach((nome, indice) => {
            imgCasas[indice] = allCasas[indice].firstElementChild;
        });
        console.log(imgCasas);

        /* VERIFICAÇÃO DE VENCEDOR */
        imgCasas.forEach((nome, indice) => {
            /* ... */
        });
    }

    /* reverter jogada */
    reversePlay() { }

    /* add icone jogador */
    addIcon(addIcomid, player) {
        let imgPlayer = document.createElement("img"),
            casaClik = document.getElementById(addIcomid),
            jogador = player;

        imgPlayer.src = `../IMGS/${jogador}.png`;
        imgPlayer.className = "icons";
        imgPlayer.id = `${jogador}`;

        casaClik.appendChild(imgPlayer);

        this.checksWinner();
        console.log(imgPlayer);

        console.log(`${addIcomid} <->  ${jogador}`);
        alert(` PALYER : ${player}  CASA_CLICADA : ${addIcomid}`);
    }

    /* novo jogo */
    newGame() {
        /* Criação dos jogadores */
        let newPlayer_1 = new Newplayer("1"),
            newPlayer_2 = new Newplayer("2"),
            icons = new TicTacToe(),
            blocoClicado,
            player,
            controleVezPlayr = 0;

        document
            .getElementById("jogo")
            .addEventListener("click", function (elento) {
                blocoClicado = elento.target.id;

                controleVezPlayr % 2 === 0
                    ? (player = newPlayer_1)
                    : (player = newPlayer_2);

                controleVezPlayr++;

                icons.addIcon(blocoClicado, player.icon);
            });

        alert("Começou o jogo");
    }
}

let New_jogo = new TicTacToe();

document.getElementById("play").addEventListener("click", function () {
    New_jogo.newGame();
});
