var word_list = ["jacob", "jasmine", "alexios", "geralt", "kassandra", "ezio", "eivor", "connor", "edward", "layla", "desmond", "altair",
"bayek", "sigurd", "yennefer" , "lambert", "vesemir"]


var letters_in_chosen_word = [];
var chosen_Word = "";
var wrong_guesses = [];
var number_blanks = 0;
var blanks_successes = [];

var lose_count = 0;
var win_count = 0
var number_guesses = 9

function starting() {
    number_guesses = 9;

    chosen_Word = word_list[Math.floor(Math.random() * word_list.length)]

    letters_in_chosen_word = chosen_Word.split("")
    number_blanks = letters_in_chosen_word.length;
    console.log(chosen_Word)

    wrong_guesses = []
    blanks_successes = []

    for (var i = 0; i < number_blanks; i++) {
        blanks_successes.push("_")
    }

    console.log(blanks_successes)

    document.getElementById("guesses-left").innerHTML = number_guesses;

    document.getElementById("word-blanks").innerHTML = blanks_successes.join(" ")
    document.getElementById("wrong-guesses").innerHTML = wrong_guesses.join(" ")

}

function checking_letters(letter) {
    var letters_word = false

    for (var i = 0; i < number_blanks; i++) {
        if (chosen_Word[i] === letter){
             letters_word = true }
        
    }
    if(letters_word) {

        for ( a = 0; a < number_blanks; a++) {
    
            if (chosen_Word[a] === letter) {
                blanks_successes[a] = letter
            }
        }
        console.log(blanks_successes)
    }
    else {
        wrong_guesses.push(letter)
        number_guesses--;
    }
    

}

function chapter_completed() {
    console.log("Win Count : " + win_count + " | Lose Count : " + lose_count + " | Number of Guesses : " + number_guesses)

    document.getElementById("guesses-left").innerHTML = number_guesses
    document.getElementById("word-blanks").innerHTML = blanks_successes.join(" ")
    document.getElementById("wrong-guesses").innerHTML = wrong_guesses.join(" ")

    if(letters_in_chosen_word.toString() === blanks_successes.toString()){
        win_count++;
        alert("Congrulation! You win")
        document.getElementById("win").innerHTML = win_count;
        starting();
    }
    else if (number_guesses === 0) {
        lose_count++
        alert("Bad Luck")
        document.getElementById("lose").innerHTML = lose_count;
        starting();
    }

}



 
starting()




document.onkeyup = function(event) {
    var guessed__letters = String.fromCharCode(event.which).toLowerCase();
    checking_letters(guessed__letters);
    chapter_completed();
}

