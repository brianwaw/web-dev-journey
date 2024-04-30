function costCalculator(){
    let amount = Number(document.querySelector('.amount').value)
    if (amount <= 40){
        amount=amount + 10;
        document.querySelector('.displayAmount').innerHTML=`$${amount}`;
    }else{
        document.querySelector('.displayAmount').innerHTML=`$${amount}`;    }
}