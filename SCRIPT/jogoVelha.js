
class Newplayer{

    constructor(icon){  this.icon = icon;}
};

class TicTacToe{

    /* checar vencedore */
    checksWinner(){
         let allCasas = document.querySelectorAll('.casa');

        console.log(allCasas);

        /* modos de verificação */

        /* 
        
        COMPARAÇÃO GULOSA
        A = {1,4,7}     E = {4,5,6}
        B = {2,5,8}     F = {7,8,9}
        C = {3,6,9}     G = {3,5,7}
        D = {1,2,3}     H = {1,5,9}

        COMPARAÇÃO APATIR DO MEIO

               1   2   3
                \  |  /    
            4 - [  5  ] - 6
                /  |  \ 
               7   8   9
                                      
                                   
        DEPOIS USANDO AS LATERAIS 1 E 9 PARA COMPARALÃI EM L
        
                 _________   
                /1   2   3 
                 4   5   6
                 7   8   9 
                 ________/
        */

    };

    /* reverter jogada */
    reversePlay(){};

    /* add icone jogador */
    addIcon(addIcomid,player){
let imgPlayer = document.createElement('img'),
            casaClik = document.getElementById(addIcomid),
            jogador = player;

        imgPlayer.src = (`../IMGS/${jogador}.png`);
        imgPlayer.className = 'icons';
        imgPlayer.id = `${jogador}`

        casaClik.appendChild(imgPlayer);
        
        this.checksWinner();
        console.log(imgPlayer);
        
        console.log(`${addIcomid} <->  ${jogador}`);
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
