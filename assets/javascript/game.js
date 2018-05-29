$(document).ready(function () {


    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let randomNumber ;
    let value ;

    function gameStart() {
        // generate random number from 19-120 to start 

        randomNumber = randomNum(19, 120);

        value = 0;

        $("#randomnumber").text(randomNumber);

        // create four different crystals with hidden values until clicked on

        let crystalOne = randomNum(1, 12);

        let crystalTwo = randomNum(1, 12);

        let crystalThree = randomNum(1, 12);

        let crystalFour = randomNum(1, 12);

        // no two crystals can have the same value
        do {
            crystalTwo = randomNum(1, 12);
        } while (crystalTwo === crystalOne || crystalTwo === crystalThree || crystalTwo === crystalFour);

        do {
            crystalThree = randomNum(1, 12);
        } while (crystalThree === crystalOne || crystalThree === crystalTwo || crystalThree === crystalFour);

        do {
            crystalFour = randomNum(1, 12);
        } while (crystalFour === crystalOne || crystalFour === crystalTwo || crystalFour === crystalThree);



        //add crystals to DOM
        $("#One").text(crystalOne);
        $("#Two").text(crystalTwo);
        $("#Three").text(crystalThree);
        $("#Four").text(crystalFour);

        $("#score").text(value);
    }

    let wins = 0;
    let losses = 0;

    gameStart() ;

    //once clicked, values add 
    $(".crystal").on("click", function () {
        value = parseInt($(this).text()) + value;
        $("#score").text(value);
        $("#bleep").text("");

        //if number exactly matches random generated number, announce "you win!"

        if (value === randomNumber) {
            wins++;
            $("#trackwins").text(wins);
            $("#bleep").text("You win!");
            gameStart();
            return;
        }

        //if number goes over, announce loss
        if (value > randomNumber) {
            losses++;
            $("#tracklosses").text(losses);
            $("#bleep").text("You lose!");
            gameStart();
            return;
        }


    });
});
