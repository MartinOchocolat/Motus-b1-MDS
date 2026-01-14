//Déclaration des variables

const words = ["CLOUD","TIDUS","ZELDA","MARTH","KIRBY","SONIC","MARIO","SNAKE","ELLIE","SAMUS", "GANON","YOSHI","LUIGI","SPYRO","CRASH","DANTE", "ISAAC", "STEVE","FRISK","KIRYU","ROXAS","JOKER"];  

let tries = 6;

let grille = [];

const button = document.getElementById("motusSubmit");
const input = document.getElementById("motusInput");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const answer = words[getRandomInt(21)];
console.log(answer);

//Fonctionnalités du motus

button.addEventListener('click', () => {
    /*Fonction qui sera appelée lors de l'appui du bouton*/
    let word = input.value;
    if(wordSize(word)!=true){
        return;
    }
    word = lettersFormat(word);
    console.log(word);
    answerVerif(word, answer, tries);
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

function answerVerif(tab, answer, essais){
    /*Fonction qui vérifie si le mot rentré est bon, ou quelles lettres sont bonnes et qui gère l'affichage couleur*/
    answerArray = lettersFormat(answer);
    let cellule;
    for(let i = 0; i < 5; i++){
        if(answerArray[i] == tab[i]){
            console.log(i)
            cellule = document.getElementById("row" + (essais-5) + "cell" + (i + 1));
            cellule.classList.add("green");
        }
    }
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