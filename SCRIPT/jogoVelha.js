
class Newplayer{

    constructor(icon){  this.icon = icon;}
};

class TicTacToe{

    /* checar vencedore */
    checksWinner(){};

    /* reverter jogada */
    reversePlay(){};

    /* add icone jogador */
    addIcon(addIcomid,player){

        let imgPlayer = document.createElement('img');
        imgPlayer.src = ('ok')
        document.getElementById(addIcomid).appendChild(imgPlayer);
        console.log(imgPlayer)

        let jogador = player;
        console.log(`${addIcomid} -  ${player}`);
        alert(` PALYER : ${player}  CASA_CLICADA : ${addIcomid}`);
    };

    /* novo jogo */
    newGame(){

            /* Criação dos jogadores */
        let newPlayer_1 = new Newplayer('1'),
            newPlayer_2 = new Newplayer('2'),
            icons = new TicTacToe(),
            blocoClicado,
            player,
            controleVezPlayr = 0;

        document.getElementById('jogo').addEventListener('click',function(elento){

                blocoClicado = elento.target.id;

                controleVezPlayr % 2 === 0 ? player = newPlayer_1 : player = newPlayer_2;
                controleVezPlayr++;

            icons.addIcon(blocoClicado,player.icon);
            
        });

         alert( 'Começou o jogo'); 

    };
};

let New_jogo = new TicTacToe();

document.getElementById('play').addEventListener('click',function(){ New_jogo.newGame() });
