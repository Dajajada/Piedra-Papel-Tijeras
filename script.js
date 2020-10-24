
//Funcion donde se elige la jugada del pc.

function computerPlay(){
    let r=Math.trunc((Math.random()*3+1));

    if(r==1) return "PIEDRA";
    else if(r==2) return "PAPEL";
    else return "TIJERAS";
   
}


//Funcion donde esta la logica para saber quien gana la ronda.

function playRound(playerSelection,computerSelection){
    let selection=playerSelection.toLowerCase();                
    let pcSelection=computerSelection.toLowerCase();

    if(selection== pcSelection){
        return [0,"EMPATE"];

    }else if(selection=="tijeras" && pcSelection == "piedra"){
        return [2,"You Lose!, Tijeras pierden contra piedra"];
    }else if(selection=="piedra" && pcSelection== "tijeras"){
        return [1,"You Win!, Piedra gana contras tijeras."];
    }else if(selection== "papel" && pcSelection == "tijeras"){
        return [2,"You Lose! Papel pierde contra tijeras."];

    }else if(selection== "tijeras" && pcSelection == "papel"){
        return [1,"You Win! Tijeras ganan contra el papel."];
    }else if(selection == "piedra" && pcSelection == "papel"){
        return [2,"You Lose! La piedra pierde contra el papel"];

    }else if(selection == "papel" && pcSelection == "piedra"){
        return [1,"You Win! El papel gana a la piedra"];

    }else{return "Error"};


};

//Funcion que controla la partida y la entrada de datos del usuario.
function game(){
    let pointPc=0;
    let pointUser=0;
    let round=0;
    
    while(round<5){
        let playerSelection=prompt("Que eliges? Piedra, papel o tijeras");
        playerSelection=playerSelection.toLowerCase();
        if(playerSelection== "tijeras" || playerSelection=="papel" || playerSelection== "piedra"){

        let a=playRound(playerSelection,computerPlay());
        console.log(a[1]);

        if(a[0]==1){pointUser+=1}else if(a[0]==2){pointPc+=1}
        else{

        }

        round++;
        }else{
            console.log("Has introducido algo mal");
            
        }
    }

    //Esto te da el resultado de la partida.
    if(pointPc>pointUser){
        console.log(`Has perdido la partida ${pointPc} a ${pointUser}.Vuelvelo a intentar`);

    }else if(pointPc<pointUser){
        console.log(`Has ganado la partida ${pointUser} a ${pointPc}. Bien jugado`);

    }else{
        console.log("La partida ha finalizado en empate");
    }

}

//Se inicia el juego.
game();


//hola