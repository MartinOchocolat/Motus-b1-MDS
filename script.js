//Déclaration des variables

const words = ["CLOUD","TIDUS","ZELDA","MARTH","KIRBY","SONIC","MARIO","SNAKE","ELLIE","SAMUS", "GANON","YOSHI","LUIGI","SPYRO","CRASH","DANTE", "ISAAC", "STEVE","FRISK","KIRYU","ROXAS","JOKER"];  

let tries = 0;

let grille = [];

const button = document.getElementById("motusSubmit");
const input = document.getElementById("motusInput");
const victory = document.getElementById("victory");
const defeat = document.getElementById("defeat");
const triesNumber = document.getElementById("triesNumber");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const answer = words[getRandomInt(21)];
console.log(answer);

//Fonctionnalités du motus

let wordArray = [];

document.addEventListener('keydown', () => {
    /*Fonction qui va gérer l'input*/
    
    let cellule;
    
    if(estUneLettre(event.key) && wordArray.length < 5){
        wordArray.push((event.key).toUpperCase());
    } else if (event.key === "Backspace"){
        wordArray.pop();
        cellule = document.getElementById("row"+(tries + 1)+"cell"+(wordArray.length+1));
        cellule.innerHTML="&nbsp;";
    }

    for(i=0; i < wordArray.length; i++){
        cellule = document.getElementById("row" + (tries + 1) + "cell" + (i + 1));
        cellule.innerHTML = wordArray[i];
    }
    
    console.log(wordArray);
})  

function estUneLettre(caractere) {
    /*Teste si le caractère rentré est une lettre ou non*/
    return /^[a-zA-Z]$/.test(caractere);
}

button.addEventListener('click', () => {
    /*Fonction principale qui sera appelée lors de l'appui du bouton*/
    let score;

    if(wordSize(wordArray)!=true){
        return;
    }

    triesNumber.innerHTML="Essais restants "+ (5-tries);

    if(tries < 6){
        score = answerVerif(wordArray, answer, tries);
        tries++;
        console.log(score);
        if(tries === 6){
            endScore(score);
        }
    } 

    if(score === 5){
        victoire();
    }

    wordArray =[];
}
)

function wordSize(word) {
    /*Fonction qui vérifie que le mot rentré fait bien 5 lettres*/
    if(word.length < 5){
        window.alert("Le mot est trop court ! Veuillez rentrer 5 lettres.");
        return false;
    } else {
        return true;
    }
}

function answerVerif(tab, answer, essais){
    /*Fonction qui vérifie si le mot rentré est bon, ou quelles lettres sont bonnes et qui gère l'affichage couleur*/
    answerArray = lettersFormat(answer);
    let cellule;
    let score = 0;

    for(let i = 0; i < 5; i++){

        cellule = document.getElementById("row" + (essais + 1) + "cell" + (i + 1));
        cellule.classList.add("red")

        if(answerArray[i] != tab[i]){
            for(let j = 0; j < 5; j++){
                if(answerArray[j] === tab[i]){
                    cellule.classList.remove("red")
                    cellule.classList.add("orange");
                }
            }
        } else {
            cellule.classList.remove("red")
            cellule.classList.add("green");
            score++;
        }
    }

    return score;
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

function endScore(score){
    /*Fonction qui gère la fin de jeu*/
    if(score === 5){
        victoire();
    } else {
        let defeatText = document.getElementById("defeatText");
        defeatText.innerHTML="Perdu ! Le mot était "+answer+" !";
        defeat.classList.remove("hidden");
    }
}

function victoire(){
    victory.classList.remove("hidden");
    let row;
    for(i=tries;i<6;i++){
        row = document.getElementById("row"+(i+1));
        row.classList.add("hidden");
    }
}

function reset(){
    /* Fonction pour reset entièrement le jeu */
    location.reload();
}