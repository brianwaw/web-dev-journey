let message = '';
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