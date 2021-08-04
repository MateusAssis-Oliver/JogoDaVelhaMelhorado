
class player{

    constructor(icon){  this.icon = icon;}
};

class jogo{

    /* checar vencedore */
    checksWinner(){};

    /* reverter jogada */
    reversePlay(){};

    /* add icone jogador */
    addIcon(){}
    /* novo jogo */
    newGame(){

        let newPlayer_1 = new player('1'),
            newPlayer_2 = new player('2');


        document.getElementById('jogo').addEventListener('click',function(elento){
            console.log(elento.target.id)

        });
        alert( 'Começou o jogo');

        

    };
};

let New_jogo = new jogo();

document.getElementById('play').addEventListener('click',function(){ New_jogo.newGame() });
