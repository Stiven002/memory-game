//variable initialization
let cardOpen = 0;
let card = null;
let card1 = null;
let firstResult = null;
let secondResult = null;
let movement = 0;
let success = 0;
let timer = false;
let time = 40;
let timerInitial = 40;
let countdownTime = null;

//show movements
const showMovements = document.getElementById('movimientos');
//increment success
const incrementSuccess = document.getElementById('aciertos');
// show timer
const ShowTimer = document.getElementById('tiempo');

// function coint timer
function countTime(){
    countdownTime = setInterval(()=>{
        time--;
        ShowTimer.innerHTML = `Tiempo: ${time} segundos`;
        if(time == 0){
            clearInterval(countdownTime);
            blockCard();
        }
    }, 1000);
}

function blockCard(){
    for(let i = 0; i<=15; i++){
        let cardblock = document.getElementById(i);
        cardblock.innerHTML = `<img src="assets/img/${numbers[i]}.png" class="img__game">`;
        cardblock.disabled = true;
    }
}


//aleatori numbers
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers.sort(()=>{return Math.random()-0.5});
console.log(numbers);
//pincipal function
function destapar(id){

    if(timer == false){
        countTime();
        timer = true;
    }

    cardOpen++;
    console.log(cardOpen)
    // show firts number
    if(cardOpen == 1){
        card = document.getElementById(id);
        firstResult = numbers[id];
        card.innerHTML = `<img src="assets/img/${firstResult}.png" class="img__game">`;
        card.disabled = true;
    }
    // show second number
    else if(cardOpen == 2){
        card1 = document.getElementById(id);
        secondResult = numbers[id];
        card1.innerHTML = `<img src="assets/img/${secondResult}.png" class="img__game">`;
        card1.disabled = true;
        // increment movement
        movement++;
        showMovements.innerHTML = `Movimientos: ${movement}`;

        if(firstResult == secondResult){
            cardOpen = 0;
            // show increment success
            success++
            incrementSuccess.innerHTML = `Aciertos: ${success}`;

            if(success == 8){
                clearInterval(countdownTime);
                showMovements.innerHTML = `Movimientos: ${movement} 👍`;
                ShowTimer.innerHTML = `Felicidades, solo demoraste ${timerInitial - time} segundos`
                incrementSuccess.innerHTML = `Aciertos: ${success} 🔥`;
            }
        }
        else{
            setTimeout(()=>{
                card.innerHTML = ' ';
                card1.innerHTML = ' ';
                card.disabled = false;
                card1.disabled = false;
                cardOpen = 0;
            }, 800);
        }
    }


}