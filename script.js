/*
    isRunning determines the state of the clock (init to false)
    
    if isRunning  
        the clock winds down 
    
    * At any point in the program, the user can click start or stop *
    if user clicks the start or submit 
       --> isRunning is set to true 
    if user clicks the stop            
       --> isRunning is set to false
*/

var isRunning         = false;
var startingMinutes   = 0;
var remainingSeconds  = startingMinutes * 60;

const countdownElement  = document.getElementById('runningTimeText');
const textBoxElement    = document.getElementById('textBox');
const submitTimeElement = document.getElementById('submitTimeButton');
const startTimeElement  = document.getElementById('startButton');
const stopTimeElement   = document.getElementById('stopButton');

submitTimeElement.onclick = function(){
    isRunning        = true;
    var minutes      = textBoxElement.value;
    startingMinutes  = minutes;
    remainingSeconds = startingMinutes * 60;
}

startTimeElement.onclick = function(){
    isRunning = true;
    updateContdown();
}

stopTimeElement.onclick = function(){
    isRunning = false;
    updateContdown();
}

setInterval(updateContdown, 1000); // call the function every second

function updateContdown(){

    if( remainingSeconds === 0 ){
        countdownElement.innerHTML = `00:00`;
        return;
    }

    const minutes  = Math.floor(remainingSeconds / 60 );
    let seconds    = remainingSeconds % 60; 
    seconds        = seconds < 10 ? '0' + seconds : seconds;

    countdownElement.innerHTML = `${minutes}:${seconds}`;

    if( isRunning ){
        remainingSeconds--;
    }
}





