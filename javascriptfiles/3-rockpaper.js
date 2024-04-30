let message = '';
let result = '';
function determine(){
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber <1 / 3){
        message = 'the computer picked Rock';
        console.log(`${message}`);
    }
    if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        message = 'the computer picked Scissors';
        console.log(`${message}`);
    }
    if (randomNumber >= 2 / 3 && randomNumber < 1){
        message = 'the computer picked Paper';
        console.log(`${message}`);
        
    } 
   
}
let stats = JSON.parse(localStorage.getItem('stats'));

function endstats() {
    
   
    if (result === 'you win'){
        stats.wins++;
    }else if (result === 'you lose'){
        stats.losses++;
    }else if (result === 'its a tie'){
        stats.ties++;
    }
    console.log(`wins: ${stats.wins}`);
    console.log(`losses: ${stats.losses}`);
    console.log(`ties: ${stats.ties}`);
    localStorage.setItem('stats', JSON.stringify(stats));
}