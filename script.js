//Déclaration des variables

const words = ["CLOUD","TIDUS","ZELDA","MARTH","KIRBY","SONIC","MARIO","SNAKE","ELLIE","SAMUS", "GANON","YOSHI","LUIGI","SPYRO","CRASH","DANTE", "ISAAC", "STEVE","FRISK","KIRYU","ROXAS","JOKER"];  

let tries = 6;

let grille = [];

let button = document.getElementById("motusSubmit");
let input = document.getElementById("motusInput");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let answer = words[getRandomInt(21)];

//Fonctionnalités du motus

button.addEventListener('click', () => {
    /*Fonction qui sera appelée lors de l'appui du bouton*/
    let word = input.value;
    if(wordSize(word)!=true){
        return;
    }
    word = lettersFormat(word);
    console.log(word);
}
)

function wordSize(word){
    /*Fonction qui vérifie que le mot rentré fait bien 5 lettres*/
    if(word.length < 5){
        window.alert("Le mot est trop court ! Veuillez rentrer 5 lettres.")
        return false;
    } else{
        return true;
    }
}

function answerVerif(tab){
    /*Fonction qui vérifie si le mot rentré est bon, et quelles lettres sont bonnes*/
    
}

let lettersFormat = (word) => {
    /*Fonction qui va séparer un mot en un tableau de plusieurs lettres en majuscules*/
    let arrayWord = [];
    word = word.toUpperCase();
    for(let i = 0; i < word.length; i++){
        arrayWord.push(word[i]);
    }
    return arrayWord;
}

function endWrong(){
    /*Fonction qui affiche le mot entier en cas de défaite*/

}

function reset(){
    /* Fonction pour reset entièrement le jeu */
    location.reload();
}

function motusTry(){
    /* Fonction qui gère les essais */

}


//Affichage

function color(){
    /*Fonction qui va gérer l'affichage graphique en changeant les couleurs des cases*/

}

