
class Newplayer{

    constructor(icon){  this.icon = icon;}
};

class TicTacToe{

    /* checar vencedore */
    checksWinner(){

        /* MEIO CASA 5 */
         let allCasas = document.querySelectorAll('.casa'),
         imgCasas = [],
         blocoMeio =allCasas[ ( ( allCasas.length - 1 ) / 2 ) ].tagName;

        for(let index_i = 0; index_i < allCasas.length; index_i++){
        
    
            imgCasas[index_i] = allCasas[index_i].querySelector('img');

        
        }

        console.log(imgCasas[0])


        /* modos de verificação */

        /* 
        
        COMPARAÇÃO GULOSA[varrer casa por casa e vericar um cojunto de tres casas para fazer a comparação]
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
